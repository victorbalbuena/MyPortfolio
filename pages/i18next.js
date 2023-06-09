import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                "Resume":"Resume",
                "Web Developer":"Web Developer",
                "Systems Engineer":"Systems Engineer",
                "Portfolio":"Portfolio",
                "Angular":"Angular",
                "Javascript":"Javascript",
                "Typescript": "Typescript",
                "CSS": "CSS",
                "SASS": "SASS",
                "Bootsrap": "Bootsrap",
            }
        },
        es: {
            translation: {
                "Resume":"Sobre mi",
                "Web Developer":"Desarrollador Web",
                "Systems Engineer":"Ingeniero en sistemas",
                "Portfolio":"Portafolio",
                "Angular":"Angular",
                "Javascript":"Javascript",
                "Typescript": "Typescript",
                "CSS": "CSS",
                "SASS": "SASS",
                "Bootsrap": "Bootsrap",
            }
        },
    },
    lng: 'en',
});

export default i18next;