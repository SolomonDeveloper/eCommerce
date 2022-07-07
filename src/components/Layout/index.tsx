import { ReactNode } from "react";
import { Header } from "../Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps, { products }: any) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
