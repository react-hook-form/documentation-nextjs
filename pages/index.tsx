import { i18n, withTranslation } from "~i18n"
import { getTranslatedText } from "../utils/homeTranslation"

const namespaces = { common: "common" }

const Homepage = ({ t }) => {
  return (
    <>
      <main>
        <div>
          <button
            type="button"
            onClick={() =>
              i18n.changeLanguage(i18n.language === "en" ? "de" : "en")
            }
          >
            {t("hello")}
          </button>
          <span>{getTranslatedText(i18n.language, "tree")}</span>
        </div>
      </main>
    </>
  )
}

Homepage.getInitialProps = async () => ({
  namespacesRequired: [Object.values(namespaces)],
})

export default withTranslation()(Homepage)
