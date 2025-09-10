import React from "react";
import style from "./ContainerMain.module.css";
import avatar from "./images/Minhafoto.jpg";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContainerMain = () => {
  return (
    <>
      <main>
        <section className={style.sectionFoto}>
          <img src={avatar} alt="Minha foto" className={style.fotoPrincipal} />
        </section>

        <section className={style.sectionDados}>
          <div className={style.textos}>
            <p className={style.paragrafoAnimado}>
              Olá, eu sou Lucas Castro, <br />{" "}
            </p>
            <span className={`${style.destaque} ${style.paragrafoAnimadoSpan}`}>Desenvolvedor Front-end</span>
          </div>
          <p className={style.nivelDev}>Junior</p>

          <div className={style.botoesContatos}>
            <div>
              <Link className={style.linkCurriculo} to="/">
                <FaDownload />
                <p>Download CV</p>
              </Link>
            </div>

            <div className={style.redesSociais}>
              <Link className={style.linksRedesSociais} to="/">
                <FaGithub />
              </Link>
              <Link className={style.linksRedesSociais} to="/">
                <FaLinkedin />
              </Link>
              <Link className={style.linksRedesSociais} to="/">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContainerMain;
