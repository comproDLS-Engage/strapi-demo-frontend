import { RedirectType, redirect } from "next/navigation";

import { getPostBySlug } from "../../[lang]/utils/api-helpers";
import { getPageBySlug } from "../../[lang]/utils/get-page-by-slug";
import { draftMode } from "next/headers";

export async function GET(req: any, res: any) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  const type = searchParams.get("type");
  const locale = searchParams.get("locale");

  // If slug is not provided, send a 400-Bad Request response
  if (!slug) {
    return res
      .status(400)
      .json({ message: "Parameter `slug` is not provided" });
  }

  let response;
  if (type == "page") {
    response = await getPageBySlug([slug], locale as string, true);
  } else {
    response = await getPostBySlug(slug as string);
  }

  if (response === null) {
    return res.status(404).json({ message: "Page not found" });
  }

  draftMode().enable();
  return redirect(`/${locale}/${slug}`, RedirectType.replace);
}
