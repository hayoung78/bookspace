import Image from "next/image";

const BookList = ({ data }: BookListProps) => {
  return (
    <div className="max-w-3xl mx-auto p-4 cursor-pointer">
      {data.documents.map((book) => (
        <div
          key={book.isbn}
          className="flex gap-4 items-center p-4 border-b border-[var(--gray1)] hover:bg-[var(--gray0)] transition-colors"
        >
          <div className="relative w-[100px] h-[140px]">
            <Image
              src={book.thumbnail}
              alt={book.title}
              sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 200px"
              className="rounded-lg object-cover"
              fill
              priority
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[var(--black0)]">
              {book.title}
            </h3>
            <p className="text-sm text-[var(--gray3)] mt-1">
              <span className="font-medium">출판사:</span> {book.publisher}
            </p>
            <p className="text-sm text-[var(--gray3)]">
              <span className="font-medium">ISBN:</span> {book.isbn}
            </p>
            <div className="mt-2 flex gap-3">
              <span className="inline-block px-3 py-1 text-xs bg-[var(--blue0)] text-[var(--blue1)] rounded-full">
                정가: {book.price.toLocaleString()}원
              </span>
              {book.sale_price > 0 && (
                <span className="inline-block px-3 py-1 text-xs bg-[var(--green0)] text-[var(--green1)] rounded-full">
                  판매가: {book.sale_price.toLocaleString()}원
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
