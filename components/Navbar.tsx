import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from "next/link"
import { FC } from 'react'

import style from "../styles/Navbar.module.scss"

const navigation = [
    { id: 1, title: 'Home', path:'/' },
    { id: 2, title: 'Posts', path:'/posts'} ,
    { id: 3, title: 'Contacts', path:'/contacts' },
    { id: 4, title: 'Games', path:'/games' },
]

const Navbar:FC = () => {
    const {pathname} = useRouter();

    return (
        <nav className={style.nav}>
            <div className={style.logo}>
                <Image src='/logo-light.png' width={60} height={60} alt="logo-light" />
            </div>
            <div className={style.link}>
                {navigation.map(({path, id, title}) => (
                    <Link href={path} key={id}>
                        <a className = { pathname === path ? style.active : '' }>{title}</a>
                    </Link>
                ))}
            </div>  
        </nav>
    )
}
  
  export default Navbar