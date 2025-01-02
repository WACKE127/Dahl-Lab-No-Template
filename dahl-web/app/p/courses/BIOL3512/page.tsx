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
                    Biology 3512: The Biology of HIV and AIDS
                  </p>
                  <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Spring 2025 Session
                  </h1>
                  <p className="mt-6 text-xl/8 text-gray-700">
                    Meets M–Th, June 6 – July 29, 2022, from 9 – 10 AM, online. 
                    Below you’ll find essential information about this course, including 
                    texts, instructor details, student outcomes, and grading policies. 
                    Please review thoroughly.
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
                      href="https://www.amazon.com/Chimp-River-Searching-Source-Epidemics/dp/0393066800"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 underline"
                    >
                      The Chimp and the River by David Quammen
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.amazon.com/Wisdom-Whores-Bureaucrats-Brothels-Business/dp/0393336652"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 underline"
                    >
                      The Wisdom of Whores by Elizabeth Pisani
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.google.com/document/d/1X5SSyugX8-EQNjzfdgoLP3wPoLBy5qQt/edit?usp=sharing&ouid=108310580263416976199&rtpof=true&sd=true"
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
                    <strong>Instructor:</strong> John Dahl (Office: SSB 153C)
                    <br />
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:jldahl@d.umn.edu"
                      className="text-indigo-600 underline"
                    >
                      jldahl@d.umn.edu
                    </a>, <strong>Phone:</strong> 218-726-6614
                    <br />
                    <strong>Office hours:</strong> By appointment.
                  </p>
                  <p className="mt-4">
                    <strong>Class Format:</strong> Online via Zoom, Monday–Thursday,
                    9–10 AM.
                    <br />
                    Attendance and engagement are key to exploring one of the
                    greatest medical stories of our age.
                  </p>
  
                  {/* Student Outcomes */}
                  <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                    Student Outcomes
                  </h2>
                  <p className="mt-4">
                    Upon completion of the course, students will be able to:
                  </p>
                  <ul
                    role="list"
                    className="mt-4 space-y-3 text-gray-600 list-disc list-inside"
                  >
                    <li>
                      Explain the molecular structure of HIV, how it replicates, and
                      how each viral gene is important for the life cycle.
                    </li>
                    <li>
                      Understand basic human immunology and how HIV leads to immune
                      system failure.
                    </li>
                    <li>
                      Appreciate the historical context, origins, activism, and
                      political nature of AIDS.
                    </li>
                    <li>
                      Describe clinical manifestations of AIDS, including
                      opportunistic infections.
                    </li>
                    <li>
                      Critique prevention and treatment methods (condoms, needle
                      exchange, antiretrovirals, etc.).
                    </li>
                    <li>
                      Evaluate stigma of the disease and social justice issues
                      regarding HIV/AIDS.
                    </li>
                    <li>
                      Research and present a topic related to HIV/AIDS (ignite
                      talk).
                    </li>
                  </ul>
  
                  {/* Course Grades */}
                  <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                    Course Grades
                  </h2>
                  <p className="mt-4">
                    Grades will be based on participation, writing assignments,
                    molecular/immune system understanding, quizzes, a final exam,
                    and an individual HIV/AIDS project presented on the last day of
                    class.  
                    <br/>
                    Engage fully—be “present in mind and heart”—to grasp HIV/AIDS
                    beyond abstraction.
                  </p>
                  <p className="mt-4">
                    <strong>Letter Grades:</strong> Standard cutoffs apply 
                    (94%+ = A, 90–93.9% = A-, etc.). If distribution is significantly
                    non-uniform, a curve may be applied (only if it improves your
                    grade).
                  </p>
  
                  {/* Weekly Topics */}
                  <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                    Weekly Topics & Activities
                  </h2>
                  <p className="mt-4">
                    This class covers a wide variety of topics: from HIV origins
                    and patient zero to immunology, antiretroviral treatments,
                    political aspects, and more. You will watch documentaries,
                    engage in quizzes, and participate in discussions.
                  </p>
                  <p className="mt-4">
                    Refer to the linked syllabus (“Biology 3512 Google Doc”) for the
                    full schedule, readings, documentaries, and weekly tasks.
                  </p>
  
                  {/* Important Policies (The Fine Print) */}
                  <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                    The Fine Print & Important Policies
                  </h2>
                  <p className="mt-4">
                    <strong>Teaching & Learning:</strong> UMD is committed to a
                    respectful, inclusive environment for all. Instructors and
                    students share responsibility for a positive learning space.
                  </p>
                  <p className="mt-4">
                    <strong>Bias-Free Instruction:</strong> The University of
                    Minnesota prohibits discrimination. Concerns can be shared
                    confidentially with the Biology Department Head or Associate
                    Dean.
                  </p>
                  <p className="mt-4">
                    <strong>Academic Dishonesty:</strong> Cheating results in an
                    automatic zero. All incidents are reported to the academic
                    integrity officer. We adhere to UMD’s Student Academic Integrity
                    Policy.
                  </p>
                  <p className="mt-4">
                    <strong>Student Conduct:</strong> Follow the Student Conduct
                    Code. Disruptive behavior or misuse of technology is
                    prohibited.
                  </p>
                  <p className="mt-4">
                    <strong>Students with Disabilities:</strong> We strive for an
                    inclusive environment. If you need accommodations or
                    adjustments, contact the Office of Disability Resources or the
                    instructor as soon as possible.
                  </p>
  
                  {/* Closing Statement */}
                  <h2 className="mt-8 text-xl font-bold tracking-tight text-gray-900">
                    Let’s Have a Great Summer Course!
                  </h2>
                  <p className="mt-4 mb-8">
                    By digging into the science, history, and societal impact of
                    HIV/AIDS, we hope to deepen your appreciation and understanding
                    of this unique virus. Stay engaged, ask questions, and let’s
                    learn together.
                  </p>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  