import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Resume: "Resume",
        "Web Developer": "Web Developer",
        "Systems Engineer": "Systems Engineer",
        Portfolio: "Portfolio",
        Angular: "Angular",
        Javascript: "Javascript",
        Typescript: "Typescript",
        CSS: "CSS",
        SASS: "SASS",
        Bootsrap: "Bootsrap",
        Profile: "Profile",
        Projects: "Projects",
        Project: "Project",
        Code: "Source code",
        DownloadCV: "Download CV",
        AboutMe:
          "Web developer with more than 2 years of experience developing with frontend and backend technologies with extensive experience in quality software development.",
        ProfileDesc:
          "Graduated in Computer Systems Engineering from the Technological Institute of Zacatepec with a specialty in WEB and Mobile Development in 2021. I have worked on web projects for companies and institutions, developing activities mainly in the frontend area using technologies such as Angular and React.",
        Skills: "Skills",
        ChatSQLText:
          "Using the Openai SQLChat library, it is capable of creating SQL queries from a text string.",
        MinimaStoreText:
          "Online store project, add to cart functions, product listing and paging.",
        MovInfoText:
          "Movie application for movie details queries and creation of lists of favorite shows.",
        AiReviewsText:
          "Create restaurant reviews from a comment using artificial intelligence.",
        languageMsg: "The language was changed.",
        ShortlyText:
          "The Shortly app is a web project which connects to an api to shorten links.",
      },
    },
    es: {
      translation: {
        Resume: "Sobre mi",
        "Web Developer": "Desarrollador Web",
        "Systems Engineer": "Ingeniero en sistemas",
        Portfolio: "Portafolio",
        Angular: "Angular",
        Javascript: "Javascript",
        Typescript: "Typescript",
        CSS: "CSS",
        SASS: "SASS",
        Bootsrap: "Bootsrap",
        Profile: "Perfil",
        Projects: "Proyectos",
        Project: "Proyecto",
        Code: "Código",
        DownloadCV: "Descargar CV",
        AboutMe:
          "Desarrollador web con más de 2 años de experiencia desarrollando con tecnologías frontend y backend con amplia experiencia en desarrollo de software de calidad.",
        ProfileDesc:
          "Graduado de Ingeniería en Sistemas Computacionales del Instituto Tecnológico de Zacatepec con especialidad en el Desarrollo WEB y Móvil en el 2021. He trabajado en proyectos web de empresas e instituciones, desarrollando actividades principalmente en el área del frontend usando tecnologías como Angular y React.",
        Skills: "Habilidades",
        ChatSQLText:
          "Usando la librería de Openai SQLChat es capaz de crear consultas SQL a partir de una cadena de texto.",
        MinimaStoreText:
          "Tienda en línea, funciones de agregar al carrito, listado y páginado de productos.",
        MovInfoText:
          "Aplicaión de peliculas para consultas de detalles del filme y creación de listas de programas de favoritos.",
        AiReviewsText:
          "Crea reseñas de restaurantes a partir de un comentario usando inteligencia artificial.",
        languageMsg: "El idioma fue actualizado.",
        ShortlyText:
          "Shortly es un proyecto web el cual se conecta a una api para acortar enlaces.",
      },
    },
  },
  lng: "en",
});

export default i18next;
