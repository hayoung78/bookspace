const KAKAO_BASE_URL = process.env.NEXT_PUBLIC_KAKAO_OPEN_URL;
const KAKAO_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

type ExtendedBookSearchResponse = BookSearchResponse & {
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    isEnd: boolean;
  };
};
// 검색결과 api
export const getSearchByString = async ({
  query,
  sort = "accuracy",
  page = 1,
  size = 10,
  target,
}: SearchParams): Promise<ExtendedBookSearchResponse> => {
  try {
    const params = new URLSearchParams();
    params.append("query", query);
    params.append("sort", sort);
    params.append("page", page.toString());
    params.append("size", size.toString());

    if (target) {
      params.append("target", target);
    }

    const response = await fetch(`${KAKAO_BASE_URL}?${params.toString()}`, {
      method: "GET",
      headers: {
        Authorization: `KakaoAK ${KAKAO_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status}`);
    }

    const data: BookSearchResponse = await response.json();

    return {
      ...data,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(data.meta.pageable_count / size),
        totalItems: data.meta.pageable_count,
        itemsPerPage: size,
        isEnd: data.meta.is_end,
      },
    };
  } catch (error) {
    console.error("검색 중 오류 발생:", error);
    throw error;
  }
};

// 책의 상세 정보를 가져오는 api
export const getBookDetail = async (isbn: string): Promise<Book | null> => {
  try {
    const searchParams: SearchParams = {
      query: isbn,
      target: "isbn",
      size: 1,
    };

    const result = await getSearchByString(searchParams);

    if (result.documents && result.documents.length > 0) {
      return result.documents[0];
    }

    return null;
  } catch (error) {
    console.error("책 상세 정보 가져오기 오류:", error);
    throw error;
  }
};
