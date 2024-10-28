import cv from "../../lib/importCV";

export default function Research() {
  return (
    <div className="mt-8 px-8 mb-8">
      <h2 className="text-2xl font-bold">Publications</h2>
      <ul className="list-disc list-inside">
        {cv.publications.map((pub, index) => (
          <li key={index} className="mt-4">
            <strong>{pub.authors}.</strong> ({pub.year}).{" "}
            <em>{pub.title}</em>. {pub.journal}.{" "}
            {pub.doi && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                DOI: {pub.doi}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
