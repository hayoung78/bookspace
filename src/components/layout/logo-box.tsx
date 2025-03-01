import Image from "next/image";
import book from "@/assets/images/book.png";

export const LogoBox = () => {
  return (
    <>
      <div className="flex items-center justify-start gap-3">
        <Image src={book} alt="book_logo" width={100} height={100} />
        <div className=" font-bold text-4xl">Bookspace</div>
      </div>
    </>
  );
};
