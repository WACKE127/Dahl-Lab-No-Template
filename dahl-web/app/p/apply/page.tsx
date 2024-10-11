import Image from "next/image";
import cv from "../../lib/importCV";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/imgs/Big_Bog.png"
          alt="Big Bog"
          width={180}
          height={38}
          priority
        />
        <Image
          className="dark:invert"
          src="/imgs/S10_P2.jpg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        {cv.education.postDoc && (
          <section className="mt-8">
            <h2 className="text-2xl font-bold">Postdoctoral Education</h2>
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
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
