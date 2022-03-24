import { NextPage } from "next"
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from "next/link"
import style from "../styles/Navbar.module.scss"

const navigation = [
    { id: 1, title: 'Home', path:'/' },
    { id: 2, title: 'Posts', path:'/posts'} ,
    { id: 3, title: 'Contacts', path:'/contacts' },
]

const Navbar: NextPage = () => {
    const {pathname} = useRouter();
    return (
        <nav className={style.nav}>
            <div className={style.logo}>
                <Image src='/logo-light.png' width={60} height={60} alt="logo-light" />
            </div>
            <div className={style.link}>
                {navigation.map(item => (
                    <Link href={item.path} key={item.id}>
                        <a className = { pathname === item.path ? style.active : '' }>{item.title}</a>
                    </Link>
                ))}
            </div>  
        </nav>
    )
}
  
  export default Navbar