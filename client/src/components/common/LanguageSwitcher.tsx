import { useI18n, type Locale } from "../../i18n/I18nContext";

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const { locale, setLocale, t } = useI18n();
  const select = (next: Locale) => () => setLocale(next);

  return (
    <div
      className={className ? `lang-switch ${className}` : "lang-switch"}
      role="group"
      aria-label={t("nav.language")}
    >
      <button
        type="button"
        aria-pressed={locale === "en"}
        aria-label="English"
        onClick={select("en")}
      >
        EN
      </button>
      <span className="lang-switch-sep" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        aria-pressed={locale === "ro"}
        aria-label="Română"
        onClick={select("ro")}
      >
        RO
      </button>
    </div>
  );
}
