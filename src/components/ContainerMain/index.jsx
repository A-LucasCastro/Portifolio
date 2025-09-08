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
            <p>Olá, eu sou Lucas Castro,</p>
            <span className={style.destaque}>Desenvolvedor Front-end</span>
            <p className={style.nivelDev}>Junior</p>
          </div>

          <div className={style.botoesContatos}>
            <div className={style.botaoCurriculo}>
              <Link className={style.links} to="/">
                <FaDownload />
                <p>Download CV</p>
              </Link>
            </div>

            <div className={style.redesSociais}>
              <Link>
                <FaGithub />
              </Link>
              <Link>
                <FaLinkedin />
              </Link>
              <Link>
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
