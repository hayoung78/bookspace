"use client";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import searchIcon from "@/assets/icons/search.svg";
import Image from "next/image";

export const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full px-2 flex items-center justify-center"
    >
      <div className="relative w-full max-w-[450px] md:max-w-[650px] lg:max-w-[900px]">
        <input
          type="text"
          placeholder="책을 검색하세요."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-[450px] md:max-w-[650px] lg:max-w-[900px] px-4 py-3 pr-12 rounded-full border-2 border-[var(--yellow3)] focus:outline-none focus:ring-2 focus:ring-[var(--yellow4)] shadow-md text-lg bg-[var(--gray0)] placeholder-[var(--gray3)] transition-all duration-200 ease-in-out"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-[var(--yellow3)] hover:bg-[var(--yellow4)] transition-colors"
        >
          <Image src={searchIcon} alt="searchIcon" width={24} height={24} />
        </button>
      </div>
    </form>
  );
};
