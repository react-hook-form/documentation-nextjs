/* eslint-disable @typescript-eslint/no-var-requires */
const nextTranslate = require("next-translate")

module.exports = nextTranslate({
  i18n: {
    locales: ["en", "es", "jp", "kr", "pt", "ru", "zh"],
    defaultLocale: "en",
  },
})
