import Image from "next/image";
import cv from "../app/lib/importCV";

export default function Home() {
  return (
    <main className="grid grid-rows-[10px-1fr_10px] justify-items-center w-full p-8 pb-8 gap-x-8 font-[family-name:var(--font-geist-sans) overflow-hidden]">
      <div className="flex flex-col gap-x-8 row-start-1 row-end-2 items-start w-auto h-auto max-h-[500px]">
        <Image
          src="/imgs/Big_Bog.png"
          alt="Big Bog"
          width={1344}
          height={756}
          priority
        />
        </div>
      
      <div className="flex flex-col gap-x-8 row-start-1 w-auto h-auto max-h-[500px]">
        <Image
          src="/imgs/S10_P2.jpg"
          alt="Small Image"
          width={196}
          height={344}
          priority
        />
        {cv.education.postDoc && (
          <section className="mt-8 row-start-2">
            <h2 className="text-base font-bold">Postdoctoral Education</h2>
            <p>
              <strong>Degree:</strong> {cv.education.postDoc.degree}
            </p>
            <p>
              <strong>Field:</strong> {cv.education.postDoc.field}
            </p>
            <p>
              <strong>University:</strong> {cv.education.postDoc.university}
            </p>
            <p>
              <strong>Location:</strong> {cv.education.postDoc.location}
            </p>
            <p>
              <strong>Years:</strong> {cv.education.postDoc.startYear} - {cv.education.postDoc.endYear}
            </p>
          </section>
        )}
      </div>

    </main>
  );
}
