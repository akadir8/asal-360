import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import data from "../components/data.json";
import { Data } from "@/util/dataTypes"

export const revalidate = 60;

export default async function ProjectsPage() {
	const projects: Data = data; // data nesnesini Data tipine atayın
  
  
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

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3 ">
		{Object.keys(projects).map((key, index) => {
            const project = projects[key];
            return (
              <div key={index} className="grid grid-cols-1 gap-4">
                <Card>
                  <Link href={`/projects`}>
                    <iframe
                      src={project.link}
                      width={project.width}
                      height={project.height}
                      frameBorder="0"
                      allowFullScreen={project.fullscreen}
					  
                    ></iframe>
                  </Link>
                </Card>
              </div>
            );
          })}

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 "></div>
        </div>
      </div>
    </div>
  );
}
