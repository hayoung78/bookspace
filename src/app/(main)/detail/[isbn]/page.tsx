import { getBookDetail } from "@/api/book-search/apis";
import { BookDetail } from "@/components/detail/book-detail";

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ isbn: string }>;
}) {
  const { isbn } = await params;
  let book: Book | null = null;
  book = await getBookDetail(isbn);

  if (!book) {
    return <div className="text-center mt-10">검색 결과가 없습니다.</div>;
  }

  return <BookDetail book={book} />;
}
