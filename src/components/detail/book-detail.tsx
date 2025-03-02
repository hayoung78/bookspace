import Image from "next/image";

type BookDetailProps = {
  book: Book;
};

export const BookDetail = ({ book }: BookDetailProps) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <Image
            src={book.thumbnail}
            alt={book.title}
            className="w-full rounded-lg shadow-lg"
            width={300}
            height={400}
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-2 text-[var(--black0)]">
            {book.title}
          </h1>
          <p className="text-xl text-[var(--gray3)] mb-4">
            저자: {book.authors.join(", ")}
          </p>
          <p className="mb-2 text-[var(--gray3)]">출판사: {book.publisher}</p>
          <p className="mb-2 text-[var(--gray3)]">
            출판일: {book.datetime.substring(0, 10)}
          </p>
          <p className="mb-2 text-[var(--gray3)]">ISBN: {book.isbn}</p>
          <p className="mb-2 text-[var(--gray3)]">
            가격: {book.price.toLocaleString()}원
          </p>
          <p className="mb-2 text-[var(--gray3)]">
            판매가: {book.sale_price.toLocaleString()}원
          </p>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-[var(--black0)]">
              책 소개
            </h2>
            <p className="text-[var(--gray3)]">{book.contents}...</p>
          </div>
          <div className="mt-6">
            <a
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--blue1)] hover:bg-[var(--blue1)]/80 text-white px-4 py-2 rounded"
            >
              판매처에서 보기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
