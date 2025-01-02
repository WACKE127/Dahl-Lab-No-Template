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
                    BIOL 3502 – General Microbiology
                  </p>
                  <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Spring 2025 Syllabus Overview
                  </h1>
                  <p className="mt-6 text-xl/8 text-gray-700">
                    Welcome to General Microbiology! Below you’ll find essential
                    information about lectures, labs, grading, policies, and
                    objectives for this course. Please review thoroughly.
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
                      OpenStax Microbiology (Required)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.amazon.com/Microbe-Hunters-Paul-Kruif/dp/0156027771"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 underline"
                    >
                      Microbe Hunters by Paul de Kruif (Required)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.amazon.com/Mountains-Beyond-Tracy-Kidder/dp/0812980557"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 underline"
                    >
                      Mountains Beyond Mountains by Tracy Kidder (Required)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pearson.com/us/higher-education/program/Johnson-Laboratory-Experiments-in-Microbiology-12th-Edition/PGM1226228.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 underline"
                    >
                      Laboratory Experiments in Microbiology (12th Edition)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.google.com/document/d/1fg_VbLA4Mr7wj044nn7g8egxvL031g9S/edit?usp=sharing&ouid=108310580263416976199&rtpof=true&sd=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 underline"
                    >
                      Lecture and Lab Syllabus
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
                    Building 152A, 726-6614, Email:{" "}
                    <a
                      href="mailto:jldahl@d.umn.edu"
                      className="text-indigo-600 underline"
                    >
                      jldahl@d.umn.edu
                    </a>
                    )<br />
                    <strong>Office Hours:</strong> Evenings via Zoom (TBD)
                  </p>
                  <p className="mt-4">
                    <strong>Lectures:</strong> Mondays & Wednesdays, 3:00 – 3:50
                    pm, Alworth Hall 195 (recordings posted on Canvas)
                    <br />
                    <strong>Lab:</strong> Tuesdays & Thursdays (in-person),
                    Swenson Science Building 208
                  </p>
                  <p className="mt-4">
                    Attendance in laboratory is <em>mandatory</em>. Five or more
                    absences (excused or unexcused) result in a non-passing final
                    grade. Missed labs must be made up in consultation with your
                    TA.
                  </p>
  
                  {/* Grading Section */}
                  <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                    Grading Overview
                  </h2>
                  <p className="mt-4">
                    <strong>Course Grade Breakdown:</strong>
                  </p>
                  <ul role="list" className="mt-4 space-y-3 text-gray-600 list-disc list-inside">
                    <li>
                      40% – Four lecture exams (includes the final, 100 pts each)
                    </li>
                    <li>10% – Online quizzes (Microbe Hunters)</li>
                    <li>10% – Online quizzes (Mountains Beyond Mountains)</li>
                    <li>35% – Laboratory activities</li>
                    <li>5% – Professionalism</li>
                  </ul>
                  <p className="mt-4">
                    <strong>Final Exam Date:</strong> Friday, May 6th, 2:00–3:50
                    p.m. Plan travel accordingly—no early finals given.
                  </p>
  
                  {/* Course Objectives */}
                  <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                    Course Objectives
                  </h2>
                  <p className="mt-4">
                    This course provides fundamental training in Microbiology and
                    fosters a lifelong thirst for more information on the topic.
                    Learning goals include:
                  </p>
                  <ul role="list" className="mt-4 space-y-3 text-gray-600 list-disc list-inside">
                    <li>
                      Understanding bacterial cell structure and metabolic
                      capabilities
                    </li>
                    <li>
                      Mastering laboratory techniques (sterile technique,
                      bacterial identification, microscopy)
                    </li>
                    <li>
                      Learning methods for controlling bacterial growth
                    </li>
                    <li>
                      Differentiating between commensal (“good”) and pathogenic
                      (“bad”) microbes
                    </li>
                    <li>
                      Gaining insight into the immune system’s constant protective
                      mechanisms
                    </li>
                    <li>
                      Recognizing microbial roles in symbiotic relationships and
                      nutrient cycling
                    </li>
                  </ul>
  
                  {/* Important Policies */}
                  <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                    Important Policies & Info
                  </h2>
                  <p className="mt-4">
                    <strong>Attendance:</strong> Lecture attendance is highly
                    encouraged; lab attendance is mandatory.
                  </p>
                  <p className="mt-4">
                    <strong>Email Policy:</strong> Use “BIOL 3502–YourName–Purpose”
                    in the subject line.
                  </p>
                  <p className="mt-4">
                    <strong>Academic Integrity:</strong> Cheating results in an
                    automatic zero for the exam or assignment. All incidents are
                    reported to the academic integrity officer.
                  </p>
                  <p className="mt-4">
                    <strong>Students with Disabilities:</strong> Accommodations
                    are available—please inform the instructor early.
                  </p>
                  <p className="mt-4">
                    <strong>Equal Opportunity:</strong> The University of
                    Minnesota prohibits discrimination. Concerns can be raised
                    confidentially with the Department Head.
                  </p>
                  <p className="mt-4">
                    <strong>Student Conduct:</strong> Follow the Student Conduct
                    Code. Disruptive behavior or misuse of technology may result
                    in removal from class.
                  </p>
  
                  {/* Closing Statement */}
                  <h2 className="mt-8 text-xl font-bold tracking-tight text-gray-900">
                    Let’s Have a Great Semester!
                  </h2>
                  <p className="mt-4 mb-8">
                    Our goal is to cultivate your understanding of the microbial
                    world. Be proactive in labs, stay curious, and don’t hesitate
                    to reach out with any questions. Welcome to BIOL 3502!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  