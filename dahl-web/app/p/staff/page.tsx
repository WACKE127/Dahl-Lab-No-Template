import Image from "next/image";
import cv from "../../lib/importCV";

export default function Home() {
  return (
    <div className="grid grid-rows-1 justify-items-center content-center w-full h-auto max-h-[90vh] p-8 pb-8 gap-8 font-[family-name:var(--font-geist-sans) overflow-hidden] text-wrap flex flex-wrap object-fill">
    <div className="mx-auto w-full p-6 lg:p-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Staff</h2>
        <p className="mt-2 text-lg/8 text-gray-600"></p>
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <ul>
          {/* PERSON 1 */}
          <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>
            
            <div
              className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
            >
              <div
                className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 sm:size-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
            
                <h2 className="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h2>
              </div>
            
              <div
                className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
              >
                <h3 className="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h3>
            
                <p className="mt-4 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
                  omnis atque culpa repellendus.
                </p>
            
                <p className="mt-8 font-bold">Read more</p>
              </div>
            </div>
          </a>

          {/* PERSON 2 */}
          <a href="#" className="group relative block h-64 sm:h-80 lg:h-96">
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>
            
            <div
              className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
            >
              <div
                className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 sm:size-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
            
                <h2 className="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h2>
              </div>
            
              <div
                className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
              >
                <h3 className="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h3>
            
                <p className="mt-4 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem
                  omnis atque culpa repellendus.
                </p>
            
                <p className="mt-8 font-bold">Read more</p>
              </div>
            </div>
          </a>

        </ul>
      </div>
    </div>
  </div>
  );
}
