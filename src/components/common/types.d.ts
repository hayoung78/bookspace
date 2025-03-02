type Book = {
  authors: string[]; // 저자 목록
  contents: string; // 책 내용 요약
  datetime: string;
  isbn: string; // ISBN 번호
  price: number;
  publisher: string; // 출판사
  sale_price: number; // 판매가
  status: string; // 판매 상태
  thumbnail: string;
  title: string; // 책 제목
  translators: string[];
  url: string;
};

// 메타데이터 타입
type Meta = {
  is_end: boolean; // 마지막 페이지 여부
  pageable_count: number; // 검색 가능한 문서 수
  total_count: number; // 전체 문서 수
};

type BookSearchResponse = {
  documents: Book[];
  meta: Meta;
};

// 전체 데이터 타입
type BookSearchResponse = {
  documents: Book[];
  meta: {
    is_end: boolean;
    pageable_count: number;
    total_count: number;
  };
};

// props 타입 정의
type BookListProps = {
  data: {
    documents: Array<{
      isbn: string;
      title: string;
      publisher: string;
      thumbnail: string;
      price: number;
      sale_price: number;
    }>;
  };
};
type PaginationProps = {
  currentPage: number;
  totalPages: number;
  query: string;
  sort?: string;
  target?: string;
};
type PaginationButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  isActive?: boolean;
  children: React.ReactNode;
};
