import { getNotFound } from "@/sanity/sanity.query";
import { NotFoundTypes } from "@/types";
import Link from "next/link";

export default async function NotFound() {
  const notFoundData: NotFoundTypes[] = await getNotFound();
  const data = notFoundData[0];

  return (
    <div className="min-h-[70dvh] flex flex-col items-center justify-center bg-black text-white text-center container">
      <h1 className="text-6xl font-bold mb-4">{data.notFound}</h1>
      <p className="text-lg mb-8 text-gray-400">{data.sorryThePage}</p>

      <Link
        href="/"
        className="relative px-6 py-3 text-lg font-medium text-white border-2 border-tertiary rounded-md overflow-hidden transition-all duration-300 group"
      >
        <span className="absolute inset-0 w-0 bg-tertiary group-hover:w-full transition-all duration-300"></span>
        <span className="relative z-10">{data.goBack}</span>
      </Link>
    </div>
  );
}
