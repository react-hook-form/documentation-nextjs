import Link from "next/link"
import useTranslation from "next-translate/useTranslation"

const Homepage = () => {
  const { t } = useTranslation("common")

  return (
    <>
      <main>
        <div>
          <h3>{t("title")}</h3>
          <Link locale="es" href="/">
            {t("variable-example", { count: 42 })}
          </Link>
          <Link locale="ru" href="/">
            {t("variable-example", { count: 42 })}
          </Link>
        </div>
      </main>
    </>
  )
}

export default Homepage
