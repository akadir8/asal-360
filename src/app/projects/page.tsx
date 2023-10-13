import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

export const revalidate = 60;
export default async function ProjectsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projeler
          </h2>
          <p className="mt-4 text-zinc-400">
            Projelerimin tamamı yaptığım işleri içermektedir..
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects`}>
              <iframe
                src="https://mls.kuu.la/share/collection/7FCcS?fs=1&vr=1&zoom=1&autorotate=0.04&autop=100&autopalt=1&thumbs=3&alpha=0.82"
                width="100%"
                height="400" // İframe yüksekliğini istediğiniz gibi ayarlayabilirsiniz
                frameBorder="0"
                allowFullScreen
              ></iframe>
              
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 "></div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4"></div>
          <div className="grid grid-cols-1 gap-4"></div>
          <div className="grid grid-cols-1 gap-4"></div>
        </div>
      </div>
    </div>
  );
}
