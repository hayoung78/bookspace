import { SearchInput } from "@/components/common/input";
import { LogoBox } from "@/components/layout/logo-box";

const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[var(--yellow0)]">
      <div className="flex flex-col items-center gap-7">
        <LogoBox />
        <SearchInput />
      </div>
    </div>
  );
};

export default Page;
