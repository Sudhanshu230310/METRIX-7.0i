// import { ArrowRight } from "lucide-react";
// import IIT from "../../images/IIT.png";

// export function Button({
//   variant = "default",
//   size = "md",
//   className = "",
//   ...props
// }) {
//   const baseStyles =
//     "font-medium rounded-lg transition-colors duration-200 inline-flex items-center justify-center";

//   const variantStyles = {
//     default: "bg-accent hover:bg-accent/90 text-accent-foreground",
//     outline: "border border-border bg-transparent text-foreground hover:bg-muted",
//   };

//   const sizeStyles = {
//     sm: "px-3 py-1.5 text-sm",
//     md: "px-4 py-2 text-base",
//     lg: "px-6 py-3 text-lg",
//   };

//   const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

//   return <button className={combinedClassName} {...props} />;
// }

// export function Hero() {
//   return (
//     <section className="relative w-screen h-[48rem] flex items-center lg:px-20 px-10 overflow-hidden">
//       {/* Background Image */}
// <img
//   src={IIT}
//   alt="IIT Ropar"
//   className="absolute inset-0 w-full h-full object-cover "
// />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* Glow Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 ">
//         <div className="grid gap-12 items-center">
//           {/* Left Content */}
//           <div className="space-y-6 text-white">
//             <div className="space-y-4">
//               <h2 className="text-xl font-mono uppercase tracking-wider">
//                 40th International Conference
//               </h2>
//               <h1 className="text-5xl font-serif md:text-6xl font-bold">
//                 BioMANTHAN 2025
//               </h1>
//               <p className="text-lg text-white/80 leading-relaxed">
//                 Join industry leaders, innovators, and visionaries for five
//                 days of inspiring talks, hands-on workshops, and networking
//                 opportunities.
//               </p>
//             </div>

//             {/* <div className="flex flex-col sm:flex-row  gap-4 pt-4">
//               <Button size="lg" className="gap-2">
//                 Register Now <ArrowRight size={20} />
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-white text-white hover:bg-white/10 bg-transparent"
//               >
//                 Register
//               </Button>
//             </div> */}

//             {/* Event Details */}
//             <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/20">
//               <div className="text-2xl">
//                 <p className=" text-white/60">Date</p>
//                 <p className="font-semibold ">Dec' 4–7, 2025</p>
//               </div>
//               <div className="text-2xl">
//                 <p className=" text-white/60">Location</p>
//                 <p className="font-semibold">IIT Ropar</p>
//               </div>
//             </div>
//             <div className="text-2xl ">
//               <p className="text-white/60">Workshop/Hands-on Training</p>
//               <p>Dec' 3-4, 2025</p>
//             </div>
//           </div>

//           {/* Right Visual Placeholder (optional) */}
//           {/* <div className="hidden md:flex items-center justify-center">
//             <div className="w-72 h-72 bg-red-500/10 rounded-full flex items-center justify-center border border-white/20">
//               <p className="text-white/70">Conference Highlights</p>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }

// const metadata = {
//   title: "BioMANTHAN 2025 - 40th International Conference",
//   description:
//     "Join industry leaders for five days of inspiring talks, workshops, and networking at IIT Ropar.",
// };

import { ArrowRight, Calendar, MapPin, Zap } from "lucide-react";
import { useState } from "react";
import IIT from "../../images/IIT.png";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col justify-center">
      {/* Animated background elements */}
      <img
        src={IIT}
        alt="IIT Ropar"
        className="absolute inset-0 w-full h-full object-cover "
      />

      {/* Grid pattern overlay */}
      <div className="absolute bg-black/60 inset-0  bg-[length:50px_50px] opacity-70"></div>

      {/* Main Content */}
      <div className="relative z-10 px-6 lg:px-20 py-20 mx-auto w-full">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
          <Zap size={16} className="text-red-600" />
          <span className="text-sm text-white/70 font-medium">
            40th International Conference
          </span>
        </div>

        {/* Main Title Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-4xl font-serif font-bold text-white leading-tight">
                Mechanical Engineering Tech Research Innovation & Exchange
                <span className="block ">
                  2026
                </span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed font-light">
                Join industry leaders, innovators, and visionaries for five days
                of inspiring talks, hands-on workshops, and unparalleled
                networking opportunities.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a target="_blank" href="">
                <button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="group relative px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
                >
                  <span>Register Now</span>
                  <ArrowRight
                    size={20}
                    className={`transition-transform ${isHovered ? "translate-x-1" : ""
                      }`}
                  />
                </button>
              </a>

              <button className="px-8 py-4 border border-white/20 hover:border-white/40 text-white font-medium rounded-lg transition-all duration-300 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Visual - Event Stats */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-red-500/30 transition-all">
              <div className="text-4xl font-bold text-white mb-2">40+</div>
              <p className="text-white/70 text-sm">Speakers</p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-red-500/30 transition-all">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <p className="text-white/70 text-sm">Expected Attendees</p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-red-500/30 transition-all">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <p className="text-white/70 text-sm">Sessions & Workshops</p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-red-500/30 transition-all">
              <div className="text-4xl font-bold text-white mb-2">3</div>
              <p className="text-white/70 text-sm">Days of Innovation</p>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid md:grid-cols-3 gap-6 border-t border-white/10 pt-8">
          <div className="flex gap-4 items-start">
            <Calendar size={24} className="text-red-300 mt-1 flex-shrink-0" />
            <div>
              <p className="text-white/50 text-sm font-medium uppercase tracking-wider">
                Main Event
              </p>
              <p className="text-white font-light text-lg">
                December 3–4, 2026
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <MapPin size={24} className="text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <p className="text-white/50 text-sm font-medium uppercase tracking-wider">
                Location
              </p>
              <p className="text-white font-light text-lg">IIT Ropar, India</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <Zap size={24} className="text-white mt-1 flex-shrink-0" />
            <div>
              <p className="text-white/50 text-sm font-medium uppercase tracking-wider">
                Pre-Conference
              </p>
              <p className="text-white font-light text-lg">
                December 3–4, 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="text-white/50 text-sm font-light tracking-widest mb-3 text-center">
          SCROLL TO EXPLORE
        </div>
        <div className="w-6 h-10 border border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div> */}
    </div>
  );
}
