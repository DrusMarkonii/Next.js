import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import style from "../styles/Navbar.module.scss";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Games", path: "/games" },
  { id: 3, title: "News", path: "/news" },
  { id: 4, title: "Contacts", path: "/contacts" },
];

const Navbar: FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <Image src="/logo-game.png" width={80} height={60} alt="logo-light" />
      </div>
      <div className={style.link}>
        {navigation.map(({ path, id, title }) => (
          <Link href={path} key={id}>
            <a className={pathname === path ? style.active : ""}>{title}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
