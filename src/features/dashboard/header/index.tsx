import Search from "../../../components/header/search";
import Wrapper from "../../../components/header/wrapper";
import User from "../../../components/header/user";
import Menu from "../../../components/header/menu";
export default function Header() {
  return (
    <>
      <Wrapper>
        <Search />
        <div className="flex items-center gap-2 ">
          <User />
          <Menu />
        </div>
      </Wrapper>
    </>
  );
}
