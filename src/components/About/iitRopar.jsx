import i2 from "../../images/1.png";
import i1 from "../../images/2.png";

export default function IITRPR() {
  const photos = [
    { title: "SAB", image: i2 },
    { title: "Ocean Sunset", image: i1 },
    { title: "Forest Nature", image: i2 },
    { title: "Night Sky", image: i2 },
  ];

  return (
    <div className="lg:px-16 px-4">
      <div className="w-full text-3xl md:text-4xl lg:text-5xl font-serif pt-12 md:flex md:justify-center">
        <span className="text-red-600">Ind</span>ian Institute of Technology Ropar
      </div>
      <div className="w-full py-12 mx-auto  flex flex-col lg:flex-row gap-8 items-start lg:items-center">
        {/* Photo Grid */}

        <div className="w-full lg:w-1/2">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br ${
                  photo.color
                } hover:scale-105 transition-transform duration-300 flex items-center justify-center group cursor-pointer ${
                  index === 0 ? "" : "hidden md:flex"
                }`}
              >
                <img className="h-full object-cover" src={photo.image} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:px-10 lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-3xl font-serif text-foreground"><span className="text-red-600">About</span> IIT Ropar</h2>
          <p className="text-xl leading-relaxed">
            The Indian Institute of Technology Ropar, located in Rupnagar, Punjab, is a prestigious engineering university, established in the year 2008 by the Ministry of Education, Government of India. Characterized by its focus on research and innovation, IIT Ropar offers undergraduate, postgraduate, and doctoral programs in various engineering and technology disciplines. The campus is equipped with modern facilities and laboratories with an aim to provide broader research centers to cater to both academic and extra-curricular activities. The institute promotes an active social life of students with many clubs, societies, and events, which give opportunities for a holistic learning environment. Renowned for its academic rigor, research contributions, and commitment to innovation, IIT Ropar continues to nurture future leaders in engineering and technology while contributing significantly to the advancement of science and industry.
          </p>
          
          
        </div>
      </div>
    </div>
  );
}
