import { LayoutContainer } from "./layout.styles";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      {/* navbar */}
      {/* sidebar */}

      {children}
      {/* mobile-nav */}
    </LayoutContainer>
  );
};
