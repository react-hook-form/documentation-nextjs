import _ from "lodash/fp"
import NextI18Next from "next-i18next"
import getNextConfig from "next/config"
import path from "path"

const nextConfig = getNextConfig()

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["de"],
  localeSubpaths: _.get("publicRuntimeConfig.localeSubpaths", nextConfig),
  localePath: path.resolve("./public/static/locales"),
})

export const { i18n, withTranslation, appWithTranslation } = NextI18NextInstance

export default NextI18NextInstance
