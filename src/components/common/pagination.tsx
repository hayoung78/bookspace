"use client";

import { useRouter, useSearchParams } from "next/navigation";
import PaginationButton from "./pagination-button";

const Pagination = ({
  currentPage,
  totalPages,
  query,
  sort = "accuracy",
  target,
}: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("query", query);
    params.set("page", page.toString());
    params.set("sort", sort);
    if (target) params.set("target", target);

    router.push(`/search?${params.toString()}`);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPages = Math.min(totalPages, 5);
    let startPage = Math.max(1, currentPage - 2);

    if (currentPage > totalPages - 2) {
      startPage = Math.max(1, totalPages - 4);
    }

    const endPage = Math.min(startPage + maxPages - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center my-8 gap-2">
      {/* 이전 페이지 버튼 */}
      <PaginationButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        이전
      </PaginationButton>

      {/* 페이지 번호 버튼 */}
      {getPageNumbers().map((page) => (
        <PaginationButton
          key={page}
          onClick={() => handlePageChange(page)}
          isActive={currentPage === page}
        >
          {page}
        </PaginationButton>
      ))}

      {/* 다음 페이지 버튼 */}
      <PaginationButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        다음
      </PaginationButton>
    </div>
  );
};

export default Pagination;
