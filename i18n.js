/* eslint-disable @typescript-eslint/no-var-requires */
const NextI18Next = require("next-i18next").default
const { localeSubpaths } = require("next/config").default().publicRuntimeConfig
const path = require("path")

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["de"],
  localeSubpaths,
  localePath: path.resolve("./public/static/locales"),
})

export const { i18n, withTranslation, appWithTranslation } = NextI18NextInstance

export default NextI18NextInstance
