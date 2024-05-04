import MobileSidebar from "./mobile-sidebar";
import SearchBar from "./search-bar";
import UserNav from "./user-nav";

function Header() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <MobileSidebar />

      <div className="w-full flex-1">
        <SearchBar />
      </div>

      <UserNav />
    </header>
  );
}

export default Header;