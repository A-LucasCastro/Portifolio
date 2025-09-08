import React from 'react'
import { Link } from "react-router-dom";
import { IoCodeSharp } from "react-icons/io5";
import style from './Header.module.css'


const Header = () => {
  return (
    <>
        <header className={style.container}>
          <div>
            <Link className={style.links} to="/">
              <IoCodeSharp className={style.icone} />
            </Link>
          </div>

          <div className={style.nome}>
            <Link className={style.links} to="/">
              <span>Lucas Castro</span>
            </Link>
          </div>

          <div>
            <nav className={style.navegacao}>
              <Link className={`${style.links} ${style.linksNav}`} to="/">Início</Link>
              <Link className={`${style.links} ${style.linksNav}`} to="#sobre">Sobre</Link>
              <Link className={`${style.links} ${style.linksNav}`} to="#carreira">Carreira</Link>
              <Link className={`${style.links} ${style.linksNav}`} to="#projetos">Projetos</Link>
              <Link className={`${style.links} ${style.linksNav}`} to="#contato">Contato</Link>
            </nav>
          </div>
        </header>

    </>
  )
}

export default Header