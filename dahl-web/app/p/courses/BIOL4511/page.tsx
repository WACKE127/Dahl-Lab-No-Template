export default function Home() {
    return (
      <div className="grid grid-rows-1 justify-items-center content-center w-full h-auto max-h-screen p-8 pb-8 gap-8 font-[family-name:var(--font-geist-sans)] overflow-visible text-wrap flex flex-wrap object-fill">
        <div className="relative isolate overflow-auto bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            
            {/* Left Column: Course Information */}
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  {/* Course Title and Intro */}
                  <p className="text-base/7 font-semibold text-indigo-600">
                    BIOL 4511 Medical Microbiology
                  </p>
                  <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Fall 2024 Syllabus Overview
                  </h1>
                  <p className="mt-6 text-xl/8 text-gray-700">
                    Welcome to Medical Microbiology (BIOL 4511). Below you’ll find
                    the essential information about lectures, materials, grades,
                    and important course policies. Please review thoroughly.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Right Column: Sidebar (Replaces Image) */}
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <div className="w-[48rem] max-w-none rounded-xl bg-gray-100 shadow-xl ring-1 ring-gray-400/10 sm:w-[35rem] p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Related Materials
                </h2>
                <ul className="space-y-3 list-disc list-inside text-gray-700">
                  <li>
                    <a
                      href="https://openstax.org/details/books/microbiology/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 underline"
                    >
                      Microbiology (OpenStax)
                    </a>{" "}
                  </li>
                  <li>
                    <strong>Texts:</strong> <br />
                    <em>The Last Town on Earth</em> by Thomas Mullen
                    <br />
                    <em>Flu</em> by Gina Kolata
                  </li>
                  <li>
                    <a
                      href="https://docs.google.com/document/d/1uv90yU01diFYzORosHeXGhgVwBR-Rbwf/edit?usp=sharing&ouid=108310580263416976199&rtpof=true&sd=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 underline"
                    >
                      Online Syllabus
                    </a>
                  </li>
                </ul>
              </div>
            </div>
  
            {/* Main Course Details */}
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                  
                  {/* Instructor & Logistics */}
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                    Instructor & Logistics
                  </h2>
                  <p>
                    <strong>Instructor:</strong> Dr. John Dahl (Swenson Science
                    Building 153C)
                    <br />
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:jldahl@d.umn.edu"
                      className="text-indigo-600 underline"
                    >
                      jldahl@d.umn.edu
                    </a>
                    , <strong>Phone:</strong> 726-6614
                    <br />
                    <strong>Office Hours:</strong> Wed 11 am – 1 pm
                  </p>
                  <p className="mt-4">
                    <strong>Classroom:</strong> MW Alworth Hall 191 <br />
                    <strong>Class Times:</strong> Tu &amp; Th, 3:30 – 4:45 pm
                  </p>
                  <p className="mt-4">
                    <strong>Prerequisites:</strong> BIOL 2571 or BIOL 3502
                    (completed prior to this course). 
                    <br />
                    Course materials will be posted on Canvas.
                  </p>
  
                  {/* Course Schedule (Short Overview) */}
                  <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                    Course Schedule Overview
                  </h2>
                  <p className="mt-4">
                    We will begin with immunology fundamentals (innate and adaptive),
                    move into Koch’s molecular postulates, antibiotic discovery, and
                    a range of pathogens (bacterial, viral, fungal, and parasitic).
                    Highlights include:
                  </p>
                  <ul
                    role="list"
                    className="mt-4 space-y-3 text-gray-600 list-disc list-inside"
                  >
                    <li>Innate & Adaptive Immunity (Weeks 1–3)</li>
                    <li>Immunological Disorders (Week 4)</li>
                    <li>Koch’s Postulates & Antibiotics (Week 5)</li>
                    <li>Vaccines & Midterms (Weeks 6–7)</li>
                    <li>Pathogens: Influenza, E. coli, Salmonella, TB, HIV, etc.</li>
                    <li>Final Exam: Dec 12, 2 – 3:50 pm</li>
                  </ul>
                  <p className="mt-4">
                    Please refer to the linked Google Doc or Canvas for the **full
                    schedule** with exact lecture dates, topics, and readings.
                  </p>
  
                  {/* Student Learning Outcomes */}
                  <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                    Student Learning Outcomes
                  </h2>
                  <ul
                    role="list"
                    className="mt-4 space-y-3 text-gray-600 list-disc list-inside"
                  >
                    <li>
                      SLO 1: Explain immune system roles in fighting infections and
                      in causing disease.
                    </li>
                    <li>
                      SLO 2: Define Koch’s molecular postulates using the eis gene
                      as an example.
                    </li>
                    <li>
                      SLO 3: Describe the actions of antibiotics and vaccines in
                      treating and preventing infectious diseases.
                    </li>
                    <li>
                      SLO 4: Evaluate various diagnostic tools for infectious
                      diseases.
                    </li>
                    <li>
                      SLO 5: Describe pathogenesis, epidemiology, and virulence
                      factors of various infectious diseases.
                    </li>
                    <li>
                      SLO 6: Compare modern concerns for influenza to historical
                      outbreaks in the 20th century.
                    </li>
                  </ul>
  
                  {/* Grading Overview */}
                  <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                    Grading Overview
                  </h2>
                  <p className="mt-4">
                    <strong>Grade Breakdown:</strong>
                  </p>
                  <ul
                    role="list"
                    className="mt-4 space-y-3 text-gray-600 list-disc list-inside"
                  >
                    <li>20% – Midterm #1</li>
                    <li>30% – Midterm #2</li>
                    <li>30% – Final Exam (Dec 12, 2 – 3:50 pm)</li>
                    <li>5% – Book review: <em>Flu</em></li>
                    <li>5% – Book review: <em>The Last Town on Earth</em></li>
                    <li>5% – “What is your why?”</li>
                    <li>5% – Your COVID-19 story</li>
                  </ul>
                  <p className="mt-4">
                    Final letter grades use standard cutoffs (94%+ = A, etc.). A
                    curve may apply if the distribution is non-uniform and it
                    improves your letter grade.
                  </p>
  
                  {/* Important Policies */}
                  <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                    Important Policies
                  </h2>
                  <p className="mt-4">
                    <strong>Disability Accommodations:</strong> Please inform the
                    instructor early if you need accommodations. UMN policy ensures
                    equal opportunity for all students.
                  </p>
                  <p className="mt-4">
                    <strong>Academic Integrity:</strong> Cheating or plagiarism
                    results in an automatic zero. All incidents are reported to the
                    academic integrity officer. We adhere to UMD’s Student Academic
                    Integrity Policy.
                  </p>
                  <p className="mt-4">
                    <strong>Student Conduct:</strong> Follow the University’s
                    Student Conduct Code. Disruptive behavior or misuse of
                    technology is prohibited.
                  </p>
                  <p className="mt-4">
                    <strong>Attendance & Tardiness:</strong> Attendance is mandatory
                    and part of professionalism. If you must arrive late or leave
                    early, do so quietly and let the instructor know in advance
                    where possible.
                  </p>
  
                  {/* Closing Statement */}
                  <h2 className="mt-8 text-xl font-bold tracking-tight text-gray-900">
                    Let’s Explore Medical Microbiology Together
                  </h2>
                  <p className="mt-4 mb-8">
                    Our goal is to deepen your understanding of immune mechanisms,
                    pathogens, and the strategies used to fight them. Stay engaged,
                    ask questions, and make the most of this journey through
                    Medical Microbiology!
                  </p>
  
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
  }
  