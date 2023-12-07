import { fetchAPI } from "@/app/[lang]/utils/fetch-api";

export async function getPageBySlug(
  slug: any,
  lang: string,
  isDraftMode = false
) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const path = `/pages`;
  const urlParamsObject = { filters: { slug }, locale: lang };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options, isDraftMode);
}
