// 검색 결과의 책 정보 타입
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

// 전체 검색 응답 타입
type BookSearchResponse = {
  documents: Book[]; // 검색된 책 목록
  meta: Meta; // 검색 메타데이터
};

// 전체 데이터 타입
type BookSearchResponse = {
  documents: Book[]; // 검색된 책 목록
  meta: {
    is_end: boolean;
    pageable_count: number;
    total_count: number;
  };
};

// props 타입 정의
type BookListProps = {
  data: BookSearchResponse;
};
