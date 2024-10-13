import Image from "next/image";
import Link from "next/link";
import cv from "../app/lib/importCV";

export default function Home() {
  return (
    <div className="grid grid-rows-[10px-1fr_10px] justify-items-center content-center w-full p-8 pb-8 gap-8 font-[family-name:var(--font-geist-sans) overflow-hidden] text-wrap">
      <div className="object-contain row-start-1 row-end-2 items-start w-full h-auto max-w-[1344px] min-w-[854px]">
        <div className="object-contain flex w-auto h-auto min-w-[200px]">
          <Link href={'/p/research'}>
            <Image
              src="/imgs/Forest.webp"
              alt="Big Bog"
              width={1344}
              height={756}
              quality={100}
              priority
              />
          </Link>
        </div>
      </div>
      
      <div className="flex flex-col row-start-1 w-auto h-auto max-w-[400px] gap-8 items-center">
        <div className = "text-center">
          <h1 className = "font-semibold">
            Welcome to Professor John L. Dahl’s lab at the University of Minnesota Duluth!
          </h1>
          Our research delves deep into microbiology, focusing on groundbreaking studies
          like the discovery of new Mycobacterium species and innovative methods for biofilm disruption.
        </div>
        <div>
            <Image 
            src="/imgs/S10_P2.jpg"
            alt="Small Image"
            width={400}
            height={700}
            priority
            />
        </div>
        
      </div>

    </div>
  );
}
