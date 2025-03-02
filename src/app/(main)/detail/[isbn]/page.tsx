import { getBookDetail } from "@/api/book-search/apis";
import { BookDetail } from "@/components/detail/book-detail";
import { notFound } from "next/navigation";

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ isbn: string }>;
}) {
  const { isbn } = await params;
  let book: Book | null = null;

  try {
    book = await getBookDetail(isbn);

    if (!book) {
      notFound();
    }
  } catch (error) {
    console.error("Error fetching book details:", error);
    notFound();
  }

  return <BookDetail book={book} />;
}
