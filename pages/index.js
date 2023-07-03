import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faBootstrap,
  faCss3,
  faGit,
  faGithub,
  faHtml5,
  faJs,
  faLinkedin,
  faReact,
  faSass,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import me from "../public/photo.png";
import { useState } from "react";
import project1 from "../public/imgmovies.png";
import project2 from "../public/imgchat.png";
import project3 from "../public/imgrevs.png";
import project4 from "../public/imgshop.png";
import "animate.css";
import "../lib/i18next";
import { useTranslation } from "react-i18next";
import { SiTailwindcss } from "react-icons/si";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(true);

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
  };

  const enlaceProyecto1 = () => {
    window.open("https://mov-info.netlify.app/movie", "_blank");
  };

  const enlaceCodigoProyecto1 = () => {
    window.open("https://github.com/victorbalbuena/movie-info", "_blank");
  };

  const enlaceProyecto2 = () => {
    window.open("https://chat-sql.netlify.app", "_blank");
  };

  const enlaceCodigoProyecto2 = () => {
    window.open("https://github.com/victorbalbuena/ChatSQL", "_blank");
  };

  const enlaceProyecto3 = () => {
    window.open("https://ai-reviews.netlify.app/create", "_blank");
  };

  const enlaceCodigoProyecto3 = () => {
    window.open("https://github.com/victorbalbuena/IAReviews", "_blank");
  };

  const enlaceProyecto4 = () => {
    window.open("https://minima-store.netlify.app/", "_blank");
  };

  const enlaceCodigoProyecto4 = () => {
    window.open("https://github.com/victorbalbuena/reactCartShop", "_blank");
  };

  const onButtoClick = () => {
    fetch("Portfolio.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV - Victor Balbuena - ISC - Frontend.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title className="animate__animated animate__bounce">
          Victor Balbuena | Portafolio
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Geologica:wght@400;700&family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 scroll-smooth hover:scroll-auto transition-colors duration-700">
        <section
          className="mb-16
        "
        >
          <nav className="py-4 pt-5 mb-12 flex justify-between">
            <div className="flex gap-5"></div>
            {/* <h1 className="text-xl font-mono dark:text-white">
              Victor Balbuena
            </h1> */}
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              {/* <li>
                <button
                  onClick={() => handleChangeLng("en")}
                  className="bg-gradient-to-r from-cyan-600 to-teal-500 text-white px-3 py-2 rounded-md ml-8"
                >
                  <div className="flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faGlobeAmericas}
                      width={15}
                      className="mr-2"
                    ></FontAwesomeIcon>
                    EN
                  </div>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleChangeLng("es")}
                  className="bg-gradient-to-r from-cyan-600 to-teal-500 text-white px-3 py-2 rounded-md ml-2"
                >
                  <div className="flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faGlobeAmericas}
                      width={15}
                      className="mr-2"
                    ></FontAwesomeIcon>
                    ES
                  </div>
                </button>
              </li> */}
            </ul>
          </nav>
          <div className="text-center p-1 md:pt-8 md:pb-1">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl mb-4 second-font">
              Victor Balbuena
            </h2>

            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-300 main-font">
              Soy un Ingeniero en Sistemas Computacionales Méxicano con más de 2
              años de experiencia en el desarrollo frontend.
            </p>
            <div className="flex items-center justify-center gap-10 mt-6 mb-3">
              <a
                href="https://www.linkedin.com/in/victor-balbuena-32107824b/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="text-black dark:text-white hover:scale-125 transition-all"
                  icon={faLinkedin}
                  width={27}
                ></FontAwesomeIcon>
              </a>

              <a
                href="https://twitter.com/VictorBalbue"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="text-black dark:text-white hover:scale-125 transition-all"
                  icon={faTwitter}
                  width={27}
                ></FontAwesomeIcon>
              </a>

              <a
                href="https://github.com/victorbalbuena"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="text-black dark:text-white hover:scale-125 transition-all"
                  icon={faGithub}
                  width={27}
                ></FontAwesomeIcon>
              </a>
            </div>
            <button
              onClick={onButtoClick}
              className="flex-1 relative inline-flex items-center justify-center px-0.5 py-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 mt-10 mb-5"
            >
              <span className="flex-1 relative px-4 py-2 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <div className="flex items-center justify-center second-font">
                  <FontAwesomeIcon
                    icon={faFileDownload}
                    className=" mr-4"
                    width={15}
                  ></FontAwesomeIcon>
                  Descargar CV
                </div>
              </span>
            </button>
            {/* <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <div className="text-5xl flex justify-center gap-16 py-1 text-gray-600">
                    <a href="https://twitter.com/VictorBalbue" target="_blank">
                      <AiFillTwitterCircle className="text-black dark:text-white" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/victor-balbuena-32107824b/"
                      target="_blank"
                      className="ml-0"
                    >
                      <AiFillLinkedin className="text-black dark:text-white" />
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility> */}

            {/* <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              <Typewriter
                options={{
                  strings: [
                    `${t("Angular")}`,
                    `${t("Javascript")}`,
                    `${t("Typescript")}`,
                    `${t("CSS")}`,
                    `${t("SASS")}`,
                    `${t("Bootstrap")}`,
                  ],

                  autoStart: true,
                  loop: true,
                }}
              />
            </h3> */}
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-800 rounded-full w-80 h-80 mt-8 overflow-hidden md:h-96 md:w-96">
            <Image
              src={me}
              className="scale-110"
              alt="Profile picture"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={true}
              quality={60}
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl main-font">
          <div className="mb-10">
            <h3 className="text-center text-3xl pt-5 pb-1 dark:text-white second-font">
              PERFIL
            </h3>
            <p className="text-md md:text-xl text-center pt-8 pb-3 leading-8 text-gray-80 dark:text-gray-300">
              Graduado de Ingeniería en Sistemas Computacionales del Instituto
              Tecnológico de Zacatepec con especialidad en el Desarrollo WEB y
              Móvil en el 2021. He trabajado en proyectos web de empresas e
              instituciones, desarrollando actividades principalmente en el área
              del frontend usando tecnologías como Angular y React.
            </p>

            <div className="grid grid-rows-2 gap-10 grid-cols-5 text-black dark:text-white my-14">
              <div className="flex flex-col items-center gap-2">
                <FontAwesomeIcon
                  icon={faAngular}
                  width={20}
                  className="text-black dark:text-white"
                ></FontAwesomeIcon>
                <p>Angular</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <FontAwesomeIcon
                  icon={faJs}
                  width={20}
                  className="text-black dark:text-white"
                ></FontAwesomeIcon>
                <p>Javascript</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <FontAwesomeIcon
                  icon={faDatabase}
                  width={17}
                  className="text-black dark:text-white"
                ></FontAwesomeIcon>
                <p>SQL</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <FontAwesomeIcon
                  icon={faGit}
                  width={28}
                  className="text-black dark:text-white"
                ></FontAwesomeIcon>
                <p>GIT</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <FontAwesomeIcon
                  icon={faHtml5}
                  width={17}
                  className="text-black dark:text-white"
                ></FontAwesomeIcon>
                <p>HTML</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <FontAwesomeIcon
                  icon={faReact}
                  width={20}
                  className="text-black dark:text-white"
                ></FontAwesomeIcon>
                <p>React</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <FontAwesomeIcon
                  icon={faCss3}
                  width={20}
                  className="text-black dark:text-white"
                ></FontAwesomeIcon>
                <p>CSS</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <FontAwesomeIcon
                  icon={faSass}
                  width={24}
                  className="text-black dark:text-white"
                ></FontAwesomeIcon>
                <p>SASS</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                {/* <FontAwesomeIcon
                  icon={tailwindIcon}
                  width={20}
                  className="text-black dark:text-white"
                ></FontAwesomeIcon> */}
                <SiTailwindcss className="text-2xl text-black dark:text-white" />
                <p>Tailwind</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <FontAwesomeIcon
                  icon={faBootstrap}
                  width={24}
                  className="text-black dark:text-white"
                ></FontAwesomeIcon>
                <p>Bootstrap</p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="mx-auto max-w-6xl pb-10">
        <div>
            <h3 className="text-center mb-5 text-3xl pt-5 pb-1 dark:text-white second-font">
              EXPERIENCIA
            </h3>
          </div>
          <div className="text-black dark:text-white text-md md:text-xl pt-5">
            <div className="mb-6">
              <p className="flex flex-wrap justify-between"><span className="font-bold text-2xl">Centro de Ciencias Genómicas UNAM</span> <span className="float-right">Cuernavaca, Morelos (Remoto)</span></p>
              <p className="pt-1"><span className="font-bold">Becario</span> — Febrero, 2021 / Junio, 2021</p>
              <p className="my-4 text-gray-80 dark:text-gray-300">
              Realicé mi proyecto de residencia profesional desarrollando una aplicación web con React
consumiendo datos de importancia proporcionada por el Centro de Ciencias Genómicas
para crear un banco de información facilitando el acceso a la misma.
              </p>
            </div>

            <div className="w-full flex items-center justify-center text-gray-80 dark:text-gray-300">_____</div>

            <div className="mt-6">
              <p className="flex flex-wrap justify-between"><span className="font-bold text-2xl">Process Ecology Inc.</span><span className="float-right">Calgary, Canadá (Remoto)</span></p>
              <p className="mt-1"><span className="font-bold">Frontend Web Developer</span> — Agosto 2021 / Abril 2023</p>
              <p className="my-4 text-gray-80 dark:text-gray-300">
              Participé en el desarrollo de proyectos que involucraban la creación de aplicaciones
dinámicas y escalables así como el mantenimiento de proyectos existentes.
Impementé, mejoré y propuse ideas y funcionalidades a los proyectos en los que participé,
así como también realicé el consumo y despliegue de información de forma dinámica
siempre buscando el mejor rendimiento.
Algunas de las tecnologías utilizadas a lo largo de mi estancia fueron Angular, Typescript,
Net Core, RxJS, Bootstrap, entre otras.
              </p>
            </div>
          </div>
        </section> */}
        <section className="mx-auto max-w-6xl pb-1">
          <div>
            <h3 className="text-center mb-5 text-3xl pt-5 pb-1 dark:text-white second-font">
              PROYECTOS
            </h3>
            <p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-300"></p>
          </div>
          <div className="flex flex-col gap-14 lg:flex-row lg:flex-wrap main-font">
            <div className="basis-1/3 flex-1">
              <Image
                src={project2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt="Proyect image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={60}
              />
              <div className="flex flex-col mt-4 items-center justify-center">
                <p className="text-xl font-bold text-black dark:text-white mb-2">
                  SQL Chat Bot
                </p>
                <p className="text-black dark:text-white text-center">
                  Usando la librería de Openai SQLChat es capaz de crear
                  consultas SQL a partir de un texto.
                </p>
                <p className="text-black dark:text-white mt-4 border-dashed border-black dark:border-blue-100 rounded-lg border-2 py-2 px-5">
                  Angular - Node - Express
                </p>
              </div>
              <div className="flex mt-4">
                <button
                  onClick={enlaceProyecto2}
                  className="flex-1 relative inline-flex items-center justify-center px-0.5 py-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                >
                  <span className="flex-1 relative px-4 py-2 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <div className="flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        width={15}
                        className="mr-3"
                      ></FontAwesomeIcon>
                      Proyecto
                    </div>
                  </span>
                </button>

                <button
                  onClick={enlaceCodigoProyecto2}
                  className="flex-1 ml-4 relative inline-flex items-center justify-center px-0.5 py-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                >
                  <span className="flex-1 relative px-4 py-2 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <div className="flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faGithub}
                        width={15}
                        className="mr-3"
                      />
                      Código
                    </div>
                  </span>
                </button>
              </div>
            </div>

            <div className="basis-1/3 flex-1 main-font mb-10">
              <Image
                src={project4}
                className="rounded-lg object-cover border-[2px] border-[#e4e3e3] dark:border-none"
                width={"100%"}
                height={"100%"}
                alt="Proyect image"
                quality={75}
              />
              <div className="flex flex-col mt-4 items-center justify-center">
                <p className="text-xl font-bold text-black dark:text-white mb-2">
                  MINIMASTORE
                </p>
                <p className="text-black dark:text-white text-center">
                  Tienda en línea, funciones de agregar al carrito, listado y
                  páginado de productos.
                </p>
                <p className="text-black dark:text-white mt-4 border-dashed border-black dark:border-blue-100 rounded-lg border-2 py-2 px-5">
                  React - Tailwindcss
                </p>
              </div>
              <div className="flex mt-4">
                <button
                  onClick={enlaceProyecto4}
                  className="flex-1 relative inline-flex items-center justify-center px-0.5 py-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                >
                  <span className="flex-1 relative px-4 py-2 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <div className="flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        width={15}
                        className="mr-3"
                      ></FontAwesomeIcon>
                      Proyecto
                    </div>
                  </span>
                </button>

                <button
                  onClick={enlaceCodigoProyecto4}
                  className="flex-1 ml-4 relative inline-flex items-center justify-center px-0.5 py-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                >
                  <span className="flex-1 relative px-4 py-2 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <div className="flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faGithub}
                        width={15}
                        className="mr-3"
                      />
                      Código
                    </div>
                  </span>
                </button>
              </div>
            </div>

            <div className="basis-1/3 flex-1 main-font">
              <Image
                src={project1}
                className="rounded-lg object-cover border-[2px] border-[#e4e3e3] dark:border-none"
                width={"100%"}
                height={"100%"}
                alt="Proyect image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={50}
              />
              <div className="flex flex-col mt-4 items-center justify-center">
                <p className="text-xl font-bold text-black dark:text-white mb-2">
                  MOVInfo
                </p>
                <p className="text-black text-center dark:text-white">
                  Aplicaión sobre peliculas para consultar detalles del filme y
                  crear lista de programas de favoritos.
                </p>
                <p className="text-black dark:text-white mt-4 border-dashed border-black dark:border-blue-100 rounded-lg border-2 py-2 px-5 text-center">
                  Angular - CSS - Local Storage
                </p>
              </div>

              <div className="flex mt-4">
                <button
                  onClick={enlaceProyecto1}
                  className="flex-1 relative inline-flex items-center justify-center px-0.5 py-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                >
                  <span className="flex-1 relative px-4 py-2 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <div className="flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        width={15}
                        className="mr-3"
                      ></FontAwesomeIcon>
                      Proyecto
                    </div>
                  </span>
                </button>

                <button
                  onClick={enlaceCodigoProyecto1}
                  className="flex-1 ml-4 relative inline-flex items-center justify-center px-0.5 py-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                >
                  <span className="flex-1 relative px-4 py-2 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <div className="flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faGithub}
                        width={15}
                        className="mr-3"
                      />
                      Código
                    </div>
                  </span>
                </button>
              </div>
            </div>
            <div className="basis-1/3 flex-1 main-font mb-10">
              <Image
                src={project3}
                className="rounded-lg object-cover dark:border-cyan-300 dark:border-2"
                width={"100%"}
                height={"100%"}
                alt="Proyect image"
                quality={75}
              />
              <div className="flex flex-col mt-4 items-center justify-center">
                <p className="text-xl font-bold text-black dark:text-white mb-2">
                  AI Reviews
                </p>
                <p className="text-black dark:text-white text-center">
                  Crea reseñas de restaurantes a partir de un comentario usando
                  inteligencia artificial.
                </p>
                <p className="text-black dark:text-white mt-4 border-dashed border-black dark:border-blue-100 rounded-lg border-2 py-2 px-5">
                  Angular - Node - Express
                </p>
              </div>
              <div className="flex mt-4">
                <button
                  onClick={enlaceProyecto3}
                  className="flex-1 relative inline-flex items-center justify-center px-0.5 py-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                >
                  <span className="flex-1 relative px-4 py-2 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <div className="flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        width={15}
                        className="mr-3"
                      ></FontAwesomeIcon>
                      Proyecto
                    </div>
                  </span>
                </button>

                <button
                  onClick={enlaceCodigoProyecto3}
                  className="flex-1 ml-4 relative inline-flex items-center justify-center px-0.5 py-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                >
                  <span className="flex-1 relative px-4 py-2 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <div className="flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faGithub}
                        width={15}
                        className="mr-3"
                      />
                      Código
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-200 dark:bg-gray-700">
        <div className="mx-auto max-w-6xl px-10 py-20 md:py-30 flex justify-between">
          <p className="text-black dark:text-white text-xl md:text-2xl font-bold">
            Victor Balbuena
          </p>

          <div className="text-black dark:text-white flex gap-5 md:gap-10">
            <a
              href="https://www.linkedin.com/in/victor-balbuena-32107824b/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="text-black dark:text-white hover:scale-125 transition-all"
                icon={faLinkedin}
                width={27}
              ></FontAwesomeIcon>
            </a>

            <a
              href="https://twitter.com/VictorBalbue"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="text-black dark:text-white hover:scale-125 transition-all"
                icon={faTwitter}
                width={27}
              ></FontAwesomeIcon>
            </a>

            <a
              href="https://github.com/victorbalbuena"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="text-black dark:text-white hover:scale-125 transition-all"
                icon={faGithub}
                width={27}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
