import david from "../../plenaryspeakersImages/David.png"
import ralph from "../../plenaryspeakersImages/Ralph.png"
import amit from "../../plenaryspeakersImages/Amit.png"
import huinan from "../../plenaryspeakersImages/Huinan.png"
import roger from "../../plenaryspeakersImages/Roger.png"
import sanjeev from "../../plenaryspeakersImages/Sanjeev.png"
import ashok from "../../plenaryspeakersImages/Ashok.png"
import dhirendra from "../../plenaryspeakersImages/Dhirendra.png"
import jitendra from "../../plenaryspeakersImages/Jitendra.png"
import ketul from "../../plenaryspeakersImages/Ketul.png"
import ashutosh from "../../plenaryspeakersImages/Ashutosh.png"
import bikramjit from "../../plenaryspeakersImages/Bikramjit.png"
import chandan from "../../plenaryspeakersImages/Chandan.png"
import prashant from "../../plenaryspeakersImages/Prashant.png"
import gilson from "../../plenaryspeakersImages/Gilson.png"
import savyasachi from "../../plenaryspeakersImages/Savyasachi.png"
import vinoy from "../../plenaryspeakersImages/Vinoy.png"
import { useEffect, useRef, useState } from "react";
import { Megaphone, BookOpen } from "lucide-react";

export default function HomeSpeakers() {
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const people = [
    { id: 1, name: "Prof. David B. Burr", image: david },
    { id: 2, name: "Prof. (Dr.) Ralph Müller", image: ralph },
    { id: 3, name: "Prof. Amit Bandyopadhyay", image: amit },
    { id: 4, name: "Prof. Huinan Hannah Liu", image: huinan },
    { id: 5, name: "Prof. Roger Jagdish Narayan", image: roger },
    { id: 6, name: "Prof. Sanjeev Shroff", image: sanjeev },
    { id: 7, name: "Prof. Ashok Kumar ", image: ashok },
    { id: 8, name: "Prof. Dhirendra S Katti", image: dhirendra },
    { id: 9, name: "Dr. Jitendra Sharma", image: jitendra },
    { id: 10, name: "Prof. Ketul C. Popat", image: ketul },
    { id: 11, name: "Prof. Ashutosh Khandha", image: ashutosh },
    { id: 12, name: "Prof. Bikramjit Basu", image: bikramjit },
    { id: 13, name: "Prof. Chandan K. Sen", image: chandan },
    { id: 14, name: "Dr. Prashant N. Kumta", image: prashant },
    { id: 15, name: "Prof. Gilson Khang", image: gilson },
    { id: 16, name: "Prof. Savyasachi C. Thakkar", image: savyasachi },
    { id: 17, name: "Prof. Vinoy Thomas", image: vinoy },
  ];

  const publications = [
    { id: 1, name: "Biomaterials and Biosystems", color: "bg-emerald-500" },
    { id: 2, name: "Journal of Orthopaedics", color: "bg-sky-500" },
    { id: 3, name: "Journal of Prosthetics & Orthotics", color: "bg-red-500" },
    { id: 4, name: "Trends in Biomaterials & Artificial Organs", color: "bg-amber-400" },
    { id: 5, name: "Journal of Applied Biology & Biotechnology", color: "bg-slate-400" },
    { id: 6, name: "Critical Reviews in Biomedical Engineering", color: "bg-blue-400" },
  ];

  // Auto-scroll speakers carousel
  useEffect(() => {
    if (!isAutoScrolling || !scrollContainerRef.current) return;
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const autoScroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount > maxScroll) scrollAmount = 0;
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(autoScroll, 30);
    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  return (
    <div className="w-full border-b border-gray-400 text-foreground ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 ">

        {/* ---------------- Speakers Section ---------------- */}
        <section className="text-center space-y-8">
          <div>
            <h2 className="text-4xl sm:text-5xl font-serif text-slate-900"><span className="text-red-500">Pro</span>minent Speakers</h2>
          </div>

          {/* Carousel */}
          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-6 px-2 mt-4
              [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {[...people].map((person, i) => (
              <div
                key={`${person.id}-${i}`}
                className="group flex-shrink-0 flex flex-col items-center justify-center rounded-xl 
                border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 
                hover:shadow-lg hover:border-blue-400 hover:-translate-y-2"
                style={{ minWidth: "200px" }}
              >
                <div className="relative mb-4 h-44 w-44 overflow-hidden rounded-full bg-gradient-to-br from-blue-100 to-indigo-100">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-base font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                  {person.name}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- Publications Section ---------------- */}
        <section className="text-center py-10 space-y-12">
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-2">
              {/* <Megaphone className="h-10 w-10 text-blue-600" /> */}
              <h2 className="text-4xl font-serif text-slate-900 "><span className="text-red-500">Pub</span>lications</h2>
            </div>
            
            <p className="max-w-2xl mx-auto text-lg text-slate-600">
              📣 Get Published! Explore selected papers in peer-reviewed journals:
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {publications.map((pub, index) => (
              <div
                key={pub.id}
                className={`group ${pub.color} flex items-center gap-4 rounded-xl border border-slate-200
                 px-6 py-2 transition-all text-white duration-500 hover:shadow-lg hover:border-blue-400 hover:translate-y-[-4px]`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                
                <div className="flex-1 text-left">
                  <h3 className="font-semibold  transition-colors duration-300">
                    {pub.name}
                  </h3>
                </div>
                <BookOpen className="h-5 w-5 transition-all duration-300  group-hover:translate-x-1" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
