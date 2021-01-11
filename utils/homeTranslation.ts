import _ from "lodash/fp"
import de from "../public/static/locales/de/home"
import en from "../public/static/locales/en/home"

const translations = {
  de,
  en,
}

// TODO: only allow 7 languages
export const getTranslatedText = (language, key, ...rest) => {
  const translation = _.get(`${language}.${key}`, translations)
  if (_.isFunction(translation)) {
    return translation(...rest)
  }
  return translation
}
