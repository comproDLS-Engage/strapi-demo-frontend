import Link from "next/link";
import Image from "next/image";

export default function Logo({
  src,
  logoText,
}: {
  src: string | null;
  logoText: string | 'Logo';
}) {
  return (
    <Link
      href="/"
      aria-label="Back to homepage"
      className="flex items-center p-2"
    >
      {src && <Image src={src} alt={logoText} width={275} height={30} />}
    </Link>
  );
}
