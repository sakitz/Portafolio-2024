import spanish from './en.json'  
import ingles from './es.json'   

const LANGUAGES = {
    SPANISH: 'es',
    INGLISH: 'es',
}

export const getI18N = (
     { currentLocale } :
     { currentLocale?: String }
    ) => {
    if (currentLocale === LANGUAGES.INGLISH) return ingles
    if (currentLocale === LANGUAGES.SPANISH) return spanish
    return spanish
}