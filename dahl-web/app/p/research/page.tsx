import Image from "next/image";
import cv from "../../lib/importCV";

export default function Home() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
          <div className="md:col-span-3">
            <img
              src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded"
              alt="Lab research image"
            />
          </div>

          <div className="md:col-span-1">
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Dahl Lab at the University of Minnesota Duluth
              </h2>

              <p className="mt-4 text-gray-700">
                The Dahl Lab investigates microbial pathogenesis and host-pathogen interactions, 
                with particular focus on Mycobacterium species and the mechanisms that enable 
                bacterial persistence and antibiotic resistance. Ongoing projects include 
                discovering novel species in peat bog ecosystems, examining the role of the 
                stringent response in bacterial survival, and applying molecular and microscopy 
                techniques to uncover strategies for combating infectious diseases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
