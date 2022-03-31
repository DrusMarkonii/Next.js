import { ReactNode } from "react";
import { NextPage } from "next";

import Header from "./Header";
import Footer from "./Footer";

type layoutProps = {
  children: ReactNode;
};

const Layout: NextPage<layoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
