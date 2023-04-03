import { MobileNav } from "../mobile-nav/mobile-nav.component";
import { Navbar } from "../navbar/navbar.component";
import { Sidebar } from "../sidebar/sidebar.component";
import { LayoutContainer } from "./layout.styles";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      {/* navbar */}
      <Navbar />
      {/* sidebar */}
      <div className="main-layout">
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <main className="main-content">{children}</main>
      </div>
      {/* hidden for desktop */}
      {/* <MobileNav /> */}
      {/* mobile-nav */}
    </LayoutContainer>
  );
};
