import Image from "next/image";
import cv from "../app/lib/importCV";

export default function Home() {
  return (
    <main className="flex flex-col grid grid-rows-[10px-1fr_10px] justify-items-center content-center w-full p-8 pb-8 gap-8 font-[family-name:var(--font-geist-sans) overflow-hidden] object-contain text-wrap">
      <div className="row-start-1 row-end-2 items-start w-auto h-auto max-w-[1344px]">
        <Image
          src="/imgs/Big_Bog.png"
          alt="Big Bog"
          width={1344}
          height={756}
          priority
        />
        </div>
      
      <div className="row-start-1 w-auto h-auto max-w-[400px] gap-8">
        <Image
          src="/imgs/S10_P2.jpg"
          alt="Small Image"
          width={196}
          height={344}
          priority
        />
        <h2>
          Welcome to Professor John L. Dahl’s lab at the University of Minnesota Duluth!
          <p>
          Our research delves deep into microbiology, focusing on groundbreaking studies
          like the discovery of new Mycobacterium species and innovative methods for biofilm disruption.
          </p>
        </h2>
      </div>

    </main>
  );
}
