export const SearchInput = () => {
  return (
    <div className="w-[2000px] px-2 flex items-center justify-center ">
      <input
        type="text"
        placeholder="책을 검색하세요."
        className="w-full max-w-[450px] md:max-w-[650px] lg:max-w-[900px] px-4 py-3 rounded-full border-2 border-[var(--yellow3)] focus:outline-none focus:ring-2 focus:ring-[var(--yellow4)] shadow-md text-lg bg-[var(--gray0)] placeholder-[var(--gray3)] transition-all duration-200 ease-in-out"
      />
    </div>
  );
};
