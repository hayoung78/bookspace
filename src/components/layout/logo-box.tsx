"use client";
import Image from "next/image";
import book from "@/assets/images/book.png";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export const LogoBox = ({
  imageWidth = 100,
  imageHeight = 74,
  fontSize = "text-4xl",
}: LogoBoxProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div
      className="flex items-center justify-start gap-3 cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src={book}
        alt="book_logo"
        width={imageWidth}
        height={imageHeight}
        priority
      />
      <div className={clsx("font-bold", fontSize)}>Bookspace</div>
    </div>
  );
};
