import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
// Grid 1
    <div className="grid grid-rows-1 justify-items-center content-center w-full h-auto max-h-[90vh] p-8 pb-8 gap-8 overflow-hidden] text-wrap flex flex-wrap object-fill">
{/* Main Image */} 
        <Link href={'/p/research'} className="row-start-1 items-start">
          <Image
            className="object-cover object-left h-full w-auto"
            src="/imgs/Forest.webp"
            alt="Big Bog"
            width={1344}
            height={756}
            quality={100}
            priority
            />
        </Link>
{/* Right Image */}
      <div className="col-start-2 row-end-2 grid w-auto h-auto max-w-[400px] min-w-[100px] gap-8 items-center overflow-y-auto text-xs">
        <div className = "text-center">
          <h1 className = "font-semibold text-lg line-height[1.5rem] font-[family-name:var(--font-geist-sans)">
            Welcome to Professor John L. Dahl’s lab at the University of Minnesota Duluth!
          </h1>
          <br></br>
          Our research delves deep into microbiology, focusing on groundbreaking studies
          like the discovery of new Mycobacterium species and innovative methods for biofilm disruption.
        </div>
        <div className="row-start-2">
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
