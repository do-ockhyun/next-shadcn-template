import MobileSidebar from "./mobile-sidebar";
import UserNav from "./user-nav";

function Header() {
  return (
    <>
      <MobileSidebar />
      <h1>Header</h1>
      <UserNav />
    </>);
}

export default Header;