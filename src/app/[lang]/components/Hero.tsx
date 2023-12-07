import Link from "next/link";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface HeroProps {
  data: {
    id: string;
    title: string;
    description: string;
    picture: Picture;
    buttons: Button[];
  };
}

export default function Hero({ data }: HeroProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  return (
    <section className="dark:bg-black dark:text-gray-100">
      <div
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "550px",
          paddingTop: '150px'
        }}
        className="flex align-center justify-center p-6"
      >
        <div style={{width: '70%'}}>
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: "rgb(255, 255, 255)",
              padding: "48px 20px",
              maxWidth: "45%",
            }}
            className="flex flex-col justify-center p-6 text-center lg:text-left"
          >
            <HighlightedText
              text={data.title}
              tag="h1"
              className="text-3xl font-bold leading-none sm:text-4xl"
              color="dark:text-violet-400"
            />

            {/* <HighlightedText
            text={data.description}
            tag="p"
            className="tmt-6 mb-8 text-lg sm:mb-12"
            color="dark:text-violet-400"
          /> */}
            {/* <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            {data.buttons.map((button: Button, index: number) => (
              <Link
                key={index}
                href={button.url}
                target={button.newTab ? "_blank" : "_self"}
                className={renderButtonStyle(button.type)}
              >
                {button.text}
              </Link>
            ))}
          </div> */}
          </div>
          {/* <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            src={imgUrl || ""}
            alt={
              data.picture.data.attributes.alternativeText || "none provided"
            }
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 "
            width={600}
            height={600}
          />
        </div> */}
        </div>
      </div>
    </section>
  );
}
