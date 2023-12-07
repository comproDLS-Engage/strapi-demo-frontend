import Link from "next/link";
import { getStrapiMedia } from "../utils/api-helpers";

interface FeaturesProps {
  data: {
    heading: string;
    description: string;
    feature: Feature[];
  };
}

interface Feature {
  id: string;
  title: string;
  description: string;
  showLink: boolean;
  newTab: boolean;
  url: string;
  text: string;
  media: any;
}

function Feature({ title, description, showLink, newTab, url, text, media }: Feature) {
  const mediaUrl = getStrapiMedia(
    media.data.attributes.url
  );
  return (
    <div className="items-center p-4 flex flex-col" style={{maxWidth: '25%'}}>
      <img className="h-8 w-auto" src={mediaUrl as string} alt="" />
      {/* <h3 className="my-0 text-3xl font-semibold">{title}</h3> */}
      <div className="space-y-1 leading-tight my-6">
        <p>{description}</p>
      </div>
      {showLink && url && text && (
        <div>
          <Link
            href={url}
            target={newTab ? "_blank" : "_self"}
            className="inline-block px-4 py-2 mt-4 text-sm font-semibold text-white transition duration-200 ease-in-out bg-violet-500 rounded-lg hover:bg-violet-600"
          >
            {text}
          </Link>
        </div>
      )}
    </div>
  );
}

export default function Features({ data }: FeaturesProps) {
  return (
    <section style={{background: '#eee'}} className="dark:bg-black dark:text-gray-100 py-6">
      {/* <div className="container mx-auto py-4 space-y-2 text-center">
        <h2 className="text-5xl font-bold">{data.heading}</h2>
        <p className="dark:text-gray-400">{data.description}</p>
      </div> */}
      <div className="container mx-auto flex justify-center align-center">
        {data.feature.map((feature: Feature, index: number) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
