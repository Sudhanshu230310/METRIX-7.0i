import { MapPin, Mountain, Building2, Leaf, Star } from "lucide-react"
import goldentemple from "../geoPhotos/golden-temple-amritsar-punjab.png"
import goldentemple2 from "../geoPhotos/golden-temple.png"
import historical_rupnagar from "../geoPhotos/historical-rupnagar-excavation-site.png"
import anandpur_sahib from "../geoPhotos/anandpur-sahib.png"
import patiala_qila_mubarak from "../geoPhotos/patiala-qila-mubarak.png"
import bathinda_fort from "../geoPhotos/bathinda-fort.png"
import himalayas_himachal_pradesh_mountains from "../geoPhotos//himalayas-himachal-pradesh-mountains.png"
import shimla from "../geoPhotos/shimla.png"
import manali_snow from "../geoPhotos/manali-snow.png"
import dharamshala from "../geoPhotos/dharamshala.png"
import kullu_valley from "../geoPhotos/kullu-valley.png"
import kasol_backpacker from "../geoPhotos/kasol-backpacker.png"
import spiti_valley from "../geoPhotos/spiti-valley.png"
import rose_garden from "../geoPhotos/rock-garden-chandigarh.png"
import sukhna_lake from "../geoPhotos/sukhna-lake.png"
import rose_garden2 from "../geoPhotos/rose-garden-asia.png"
import capital_complex from "../geoPhotos/capitalcomplex.png"


export default function Geographicalview() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-4">
            <h1 className="text-4xl sm:text-5xl font-serif text-primary tracking-tight"><span className="text-red-600">Geo</span>graphical Views</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore the rich cultural heritage, natural beauty, and historic landmarks across Punjab, Himachal
              Pradesh, and Chandigarh
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-20">

          <RegionCard
            title="Rupnagar"
            subtitle="Historical City"
            icon={<Building2 className="w-8 h-8" />}
            image={historical_rupnagar}
            reverse
          >
            <div className="space-y-4">
              <p className="text-foreground/90 leading-relaxed">
                Rupnagar is Punjab's only known excavation site, standing as a testament to ancient Indian civilization.
                This remarkable location reveals layers of history from the Harappa-Mohenjo-Daro civilization era.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground/80">Wetland and Bird Sanctuary with diverse avian species</p>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground/80">Excavations reveal earthenware, statues, and ancient coins</p>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground/80">
                    Artifacts spanning Chandra Gupta, Kushan, Hoon, and Mughal periods
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground/80">Located east of the sacred Sutlej River</p>
                </div>
              </div>
            </div>
          </RegionCard>

          <RegionCard
            title="Punjab"
            subtitle="Land of Five Rivers"
            icon={<MapPin className="w-8 h-8" />}
            image={goldentemple}
          >
            <div className="space-y-4">
              <p className="text-foreground/90 leading-relaxed">
                Named after its five sacred rivers—Jhelum, Chenab, Ravi, Beas, and Sutlej—Punjab is the birthplace of
                the ancient Indus Valley Civilization. This region pulses with vibrant culture and pioneering spirit.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <AttractionCard
                  title="Amritsar"
                  highlights={["Golden Temple", "Jallianwala Bagh", "Wagah Border Ceremony"]}
                  image={goldentemple2}
                />
                <AttractionCard
                  title="Anandpur Sahib"
                  highlights={["Major Sikh Pilgrimage Site", "Hola Mohalla Festival", "Sacred Architecture"]}
                  image={anandpur_sahib}
                />
                <AttractionCard
                  title="Patiala"
                  highlights={["Qila Mubarak", "Sheesh Mahal", "Royal Heritage"]}
                  image={patiala_qila_mubarak}
                />
                <AttractionCard
                  title="Bathinda"
                  highlights={["Historic Bathinda Fort", "Thermal Plant Lake", "Ancient Fortress"]}
                  image={bathinda_fort}
                />
              </div>
            </div>
          </RegionCard>

          <RegionCard
            title="Himachal Pradesh"
            subtitle="Paradise in the Mountains"
            icon={<Mountain className="w-8 h-8" />}
            image={himalayas_himachal_pradesh_mountains}
            reverse
          >
            <div className="space-y-4">
              <p className="text-foreground/90 leading-relaxed">
                Nestled in the western Himalayas, Himachal Pradesh is a sanctuary of natural beauty offering everything
                from colonial charm to adventure. Each destination carries its own unique character and allure.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <AttractionCard
                  title="Shimla"
                  highlights={["Colonial-era Capital", "Mall Road", "Toy Train Ride"]}
                  image={shimla}
                />
                <AttractionCard
                  title="Manali"
                  highlights={["Snow Lover's Paradise", "Adventure Sports", "Honeymoon Destination"]}
                  image={manali_snow}
                />
                <AttractionCard
                  title="Dharamshala & McLeod Ganj"
                  highlights={["Tibetan Culture", "Dalai Lama's Residence", "Peaceful Monasteries"]}
                  image={dharamshala}
                />
                <AttractionCard
                  title="Kullu"
                  highlights={["Scenic Valley", "Rafting Adventures", "Dussehra Festival"]}
                  image={kullu_valley}
                />
                <AttractionCard
                  title="Kasol"
                  highlights={["Backpacker Hub", "Mini Israel Vibes", "Trendy Cafes"]}
                  image={kasol_backpacker}
                />
                <AttractionCard
                  title="Spiti Valley"
                  highlights={["Cold Desert Region", "Ancient Monasteries", "Rugged Beauty"]}
                  image={spiti_valley}
                />
              </div>
            </div>
          </RegionCard>

          <RegionCard
            title="Chandigarh"
            subtitle="The City Beautiful"
            icon={<Building2 className="w-8 h-8" />}
            image={rose_garden}
          >
            <div className="space-y-4">
              <p className="text-foreground/90 leading-relaxed">
                A meticulously planned city known for its harmonious blend of modern urban design and natural beauty.
                Chandigarh showcases architectural excellence and thoughtful city planning.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <AttractionCard
                  title="Rock Garden"
                  highlights={["Massive Sculpture Garden", "Industrial Art", "By Nek Chand"]}
                  image={rose_garden}
                />
                <AttractionCard
                  title="Sukhna Lake"
                  highlights={["Man-made Lake", "Boating & Walking", "Peaceful Relaxation"]}
                  image={sukhna_lake}
                />
                <AttractionCard
                  title="Rose Garden"
                  highlights={["Asia's Largest", "1600+ Rose Species", "Seasonal Blooms"]}
                  image={rose_garden2}
                />
                <AttractionCard
                  title="Capitol Complex"
                  highlights={["UNESCO World Heritage", "Architectural Masterpiece", "High Court & Secretariat"]}
                  image={capital_complex}
                />
              </div>
            </div>
          </RegionCard>

        </div>
      </section>
    </div>
  );
}


function AttractionCard({ title, highlights, image }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative h-48 rounded-xl overflow-hidden mb-4 shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        <ul className="space-y-2">
          {highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="w-3.5 h-3.5 text-accent fill-accent" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}



function RegionCard({ title, subtitle, icon, image, children, reverse = false }) {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? "md:grid-cols-2 md:flex-row-reverse" : ""}`}>
      <div className={`space-y-6 ${reverse ? "md:order-2" : ""}`}>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-accent/10 rounded-lg text-accent">
              {icon}
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{subtitle}</p>
              <h2 className="text-4xl font-bold text-primary">{title}</h2>
            </div>
          </div>
        </div>

        <div className="h-1 w-16 bg-accent rounded-full"></div>

        {children}
      </div>

      <div className={`relative ${reverse ? "md:order-1" : ""}`}>
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
