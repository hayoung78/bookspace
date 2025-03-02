import { SearchInput } from "../common/input";
import { LogoBox } from "./logo-box";

const Header = () => {
  return (
    <>
      <div className="flex justify-start pl-4 bg-[var(--yellow1)] text-black w-full h-[100px]">
        <LogoBox imageHeight={80} imageWidth={80} fontSize="text-2xl" />
        <SearchInput />
      </div>
    </>
  );
};
export default Header;
