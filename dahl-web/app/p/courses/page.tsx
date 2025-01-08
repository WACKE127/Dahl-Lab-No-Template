// import Image from "next/image";
// import cv from "../../lib/importCV";

export default function Home() {
  return (
  <div className="grid grid-rows-1 justify-items-center content-center w-full h-auto max-h-[90vh] p-8 pb-8 gap-8 font-[family-name:var(--font-geist-sans) overflow-hidden] text-wrap flex flex-wrap object-fill">
    <div className="mx-auto w-full p-6 lg:p-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Spring 2025 Courses</h2>
        <p className="mt-2 text-lg/8 text-gray-600">Complete with syllabi, assignments, and contact information.</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">

        {/* CLASS ITEM */}
        <article className="flex max-w-xl flex-col items-center justify-between text-center">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime="2025-01-01" className="text-gray-500">December 2025</time>
            <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Online</a>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
              <a href="/p/courses/BIOL3512">
                <span className="absolute inset-0"></span>
                BIOL 3512: The Biology of HIV and AIDS
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">Explore the cellular mechanisms, epidemiology, and immunological aspects of HIV/AIDS. Study viral replication, immune evasion, and therapeutic strategies. Analyze global health impacts and prevention methods.</p>
          </div>
        </article>

        {/* CLASS ITEM */}
        <article className="flex max-w-xl flex-col items-center justify-between text-center">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime="2025-01-01" className="text-gray-500">December 2025</time>
            <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">In-Person</a>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
              <a href="/p/courses/BIOL3502">
                <span className="absolute inset-0"></span>
                BIOL 3502: General Microbiology
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">Examine the structure, physiology, and genetics of microorganisms. Investigate microbial roles in health, disease, and ecosystems. Emphasize laboratory techniques and applications.</p>
          </div>
        </article>

        {/* CLASS ITEM */}
        <article className="flex max-w-xl flex-col items-center justify-between text-center">
          <div className="flex items-center gap-x-4 text-xs">
          <time dateTime="2025-01-01" className="text-gray-500">December 2025</time>
            <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">In-Person</a>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
              <a href="/p/courses/BIOL4511">
                <span className="absolute inset-0"></span>
                BIOL 4511: Medical Microbiology
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">Class focusing on microbes causing human disease, their pathogenesis, and host interactions. Study diagnostic methods, treatment, and prevention. Emphasis placed upon clinical case studies.</p>
          </div>
        </article>

        
      </div>
    </div>
  </div>
  );
}
