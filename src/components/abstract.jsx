import { motion } from "framer-motion";

export default function Abstract() {
  return (
    <>
      <div className="pb-10">
        <div className="flex justify-center text-4xl lg:text-5xl font-serif pt-12">
          <span className="text-red-600">A</span>bstract
        </div>

        {/* 3 Cards Section */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 pt-16 gap-8 xl:px-20 px-10">
          
          {/* Awards Card */}
          <div className="hover:scale-105 cursor-pointer hover:-translate-y-2 transition-all duration-200 border border-gray-400 rounded-2xl bg-white min-h-96 px-8 pb-8">
            <div className="flex justify-center text-3xl py-4">
              <span className="text-red-600">A</span>wards
            </div>
            <div className="py-2 text-lg">
              (Best 18 posters and Best 18 oral presentations worth Rs. 2 Lakhs)
            </div>
            <div className="flex flex-col gap-1">
              <div>* Chandra P. Sharama Award</div>
              <div>* Life Time Achievement Award</div>
              <div>* Outstanding Biomaterial Scientist</div>
              <div>* MAHE "Young Scientist Award"</div>
              <div>* Bajpai-Saha "Student Award"</div>
              <div>* Best Thesis Award (UG/PG)</div>
              <div>* Oral/Poster Award</div>
              <div>* Technology Award</div>
            </div>
          </div>

          {/* Call for Abstracts Card */}
          <div className="hover:scale-105 cursor-pointer hover:-translate-y-2 transition-all duration-200 border border-gray-400 rounded-2xl bg-white min-h-96 px-8 pb-8">
            <div className="flex justify-center text-3xl py-4">
              <span className="text-red-600 pr-2">Call</span> for Abstracts
            </div>
            <div className="py-2 text-lg">
              Extended Deadline: Nov' 05 2025
            </div>
            <div className="flex flex-col gap-1">
              <div>* 15 Aug' 25 - Abstract <span className="text-green-800 font-semibold">Open</span></div>
              <div>* 05 Nov' 25 - Abstract <span className="text-red-800 font-semibold">Close</span></div>
              <div>* 25 Sept' 25 - Early Bird Registration <span className="text-green-800 font-semibold">Open</span></div>
              <div>* 25 Oct' 25 - Early Bird Registration <span className="text-red-800 font-semibold">Close</span></div>
              <div>* 26 Oct' 25 - Regular Registration <span className="text-green-800 font-semibold">Open</span></div>
              <div>* 15 Nov' 25 - Regular Registration <span className="text-red-800 font-semibold">Close</span></div>
            </div>
            <div className="text-xl flex justify-center pt-2">Abstract Submission Online</div>
            <div className="text-sm flex justify-center text-blue-700 underline">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSf7ovkrs4-uP8cbwDxvo0jKvDjMw0AUdWMA9gOEqW_azohy3w/viewform" target="_blank">
                Click here to Submit Abstract
              </a>
            </div>
          </div>

          {/* Apply Now Card */}
          <div className="hover:scale-105 cursor-pointer hover:-translate-y-2 transition-all duration-200 border border-gray-400 rounded-2xl bg-white min-h-96 px-8 pb-8">
            <div className="flex justify-center text-3xl py-4">
              <span className="text-red-600">App</span>ly Now!
            </div>
            <div className="py-2 text-lg">
              Call for Abstracts - Bio MANTHAN-2025 (Join us offline at the conference venue)
            </div>
            <div className="flex flex-col gap-1">
              <div>* Abstract Submission Open on <span className="font-bold">15th August, 2025</span></div>
              <div>* Deadline to submit <span className="font-bold">05th November, 2025</span></div>
              <div>* <span className="pr-2 text-blue-600">
                <a href="https://sites.google.com/iitrpr.ac.in/biomanthan/registration" target="_blank">Registrations</a>
              </span>Open</div>
              <div>* Venue: IIT Ropar</div>
            </div>
          </div>

        </div>

        {/* ========================= */}
        {/* TABLE SECTION ADDED HERE */}
        {/* ========================= */}

        <div className="mt-20 px-10 xl:px-20">
          <h2 className="text-4xl font-serif text-center mb-10">
            <span className="text-red-600">Conference</span> Themes & Workshops
          </h2>

          <div className="overflow-x-auto rounded-2xl">
            <table className="min-w-full border border-gray-300 bg-white shadow-lg rounded-lg">
              <thead className="bg-red-500 text-white">
                <tr>
                  <th className="py-4 px-6 text-left text-lg font-semibold border-r border-white">
                    Conference Themes
                  </th>
                  <th className="py-4 px-6 text-left text-lg font-semibold">
                    Workshop & Hands-on Training
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="align-top p-6 border-r border-gray-300">
                    <ul className="space-y-2 list-disc pl-5 text-gray-800 text-md leading-relaxed">
                      <li>Advances in 3D Bioprinting</li>
                      <li>Biomaterials and Biosensors</li>
                      <li>Orthopaedic Implants & Bioimplants</li>
                      <li>Biomechanics & Orthopaedic Biomechanics</li>
                      <li>Bioimaging, Radiology & Spectroscopy</li>
                      <li>Tissue Engineering and Regeneration</li>
                      <li>Pharmaceuticals: Materials, Devices</li>
                      <li>Veterinary: Materials and Devices</li>
                      <li>Cell Engineering, Synthetic Biology</li>
                      <li>Ayurveda, Naturopathy, Yoga and Nutrition</li>
                      <li>Orthotics, Orthodontics and Dentistry</li>
                      <li>Prognostic and Diagnostic Devices</li>
                      <li>AI & ML in Biomedical Engineering</li>
                      <li>Cancer Diagnostics and Therapeutics</li>
                      <li>Drug Design, Screening and Delivery</li>
                      <li>Computational Bioengineering</li>
                      <li>Artificial Limbs and Wearable Devices</li>
                      <li>Translational Healthcare</li>
                      <li>Bionics, Bioinspired and Biomimetics</li>
                      <li>Nanomaterials in Bioengineering</li>
                      <li>Organs on a Chip (OOC)</li>
                      <li>Regulatory and Quality Management</li>
                      <li>Virtual and Augmented Tools</li>
                    </ul>
                  </td>

                  <td className="align-top p-6">
                    <ul className="space-y-2 list-disc pl-5 text-gray-800 text-md leading-relaxed">
                      <li>3D Printing & Bioprinting</li>
                      <li>Biomedical Imaging</li>
                      <li>Medical Implants & Devices</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  );
}
