import { sectionRenderer } from "@/app/[lang]/utils/section-renderer";
import { Metadata } from "next";
import { getPageBySlug } from "@/app/[lang]/utils/get-page-by-slug";
import { FALLBACK_SEO } from "@/app/[lang]/utils/constants";
import { draftMode } from "next/headers";

type Props = {
  params: {
    lang: string;
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // const page = await getPageBySlug(params.slug, params.lang);

  // if (!page.data[0].attributes?.seo) return FALLBACK_SEO;
  // const metadata = page.data[0].attributes.seo

  return {
    title: "",
    description: "",
  };
}

export default async function PageRoute({ params }: Props) {
  try {
    const { isEnabled } = draftMode();
    const page = await getPageBySlug(params.slug, params.lang, isEnabled);
    if (page.data.length === 0) return null;
    const contentSections = page.data[0].attributes.contentSections;
    return contentSections.map((section: any, index: number) =>
      sectionRenderer(section, index)
    );
  } catch (error) {
    console.log("Somethin went wrong in PageRoute", error);
  }
}
