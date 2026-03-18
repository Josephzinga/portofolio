import { getRequestConfig, GetRequestConfigParams } from "next-intl/server";

export default getRequestConfig(async (params: GetRequestConfigParams) => {
  const locale =
    params.locale && ["en", "fr"].includes(params.locale)
      ? (params.locale as "en" | "fr")
      : "en";
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
