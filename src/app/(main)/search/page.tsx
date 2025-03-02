import { getSearchByString } from "@/api/book-search/apis";
import BookList from "@/components/common/book-list";
import Pagination from "@/components/common/pagination";

type SearchPageProps = {
  searchParams: {
    query?: string;
    page?: string;
    sort?: "accuracy" | "latest";
    target?: string;
  };
};

const page = async ({ searchParams }: SearchPageProps) => {
  const params = await searchParams;
  const query = params.query ?? "";

  const pageNum = params.page ? parseInt(params.page, 10) : 1;
  const sort = (params.sort as "accuracy" | "latest") ?? "latest";
  const target = params.target ?? "title";
  const size = 10;

  if (!query) {
    return <div className="text-center mt-10">검색 결과가 없습니다.</div>;
  }

  const results = await getSearchByString({
    query,
    sort,
    page: pageNum,
    size,
    target,
  });

  // 검색 결과가 없는 경우
  if (results.documents.length === 0) {
    return <div className="text-center mt-10">검색 결과가 없습니다.</div>;
  }
  const totalPages = Math.ceil(results.meta.pageable_count / size);

  return (
    <>
      <BookList data={results} />
      <Pagination
        currentPage={pageNum}
        totalPages={totalPages}
        query={query}
        sort={sort}
        target={target}
      />
    </>
  );
};

export default page;
