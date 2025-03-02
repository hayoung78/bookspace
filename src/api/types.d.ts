type SearchParams = {
  query: string;
  sort?: "accuracy" | "latest"; // 정확도 또는 최신순
  page?: number;
  size?: number;
  target?: string; // 검색 필드 제한
};
