import { motion } from "framer-motion";
import {
  Diamond,
  Trophy,
  Star,
  Medal,
  Building,
  Users,
  Sparkles,
  Briefcase,
  HeartHandshake,
} from "lucide-react";

const tiers = [
  {
    title: "Diamond",
    price: "₹5,00,000",
    icon: Diamond,
    color: "from-pink-500/20 via-pink-400/10 to-transparent",
    bullets: [
      "Prime branding across all materials",
      "A prime large exhibition booth at the venue",
      "Keynote session",
      "05 Complimentary registrations",
      "Your company logo prominently featured on all event materials and the website main page",
      "Social media spotlight, brochure insert",
      "Special acknowledgments during the opening and closing ceremonies",
      "Opportunity to include your promotional materials or gifts in the delegate kits",
    ],
  },
  {
    title: "Platinum",
    price: "₹3,00,000",
    icon: Trophy,
    color: "from-indigo-500/20 via-indigo-400/10 to-transparent",
    bullets: [
      "Prominent branding",
      "A medium exhibition booth at the venue",
      "03 complimentary registrations",
      "Keynote talk",
      "Your company logo prominently featured on the  website and banners",
      "Special acknowledgments during the opening and closing ceremonies",
      "Opportunity to include your promotional materials or gifts in the delegate kits",
    ],
  },
  {
    title: "Gold",
    price: "₹2,00,000",
    icon: Star,
    color: "from-yellow-500/20 via-yellow-400/10 to-transparent",
    bullets: [
      "Standard branding",
      "02 complimentary registrations",
      "Shared exhibition space",
      "Visibility to Logo on the website",
      "Recognition during both the opening and closing ceremonies",
      "Opportunity to include your promotional materials or gifts in the delegate kits",
    ],
  },
  {
    title: "Silver",
    price: "₹1,00,000",
    icon: Medal,
    color: "from-gray-400/20 via-gray-300/10 to-transparent",
    bullets: [
      "01 Complimentary registration",
      "Tailored benefits based on your branding",
      "Product display, or collaboration interests",
      "Recognition during the opening and closing ceremonies",
    ],
  },
];

export default function Sponsorship() {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex justify-center text-4xl font-serif pt-10 lg:text-5xl">
          <span className="text-red-600">Spo</span>nsorship
        </div>
        <div className="flex flex-col gap-3 pt-10 px-10">
          <div className="pb-3 text-2xl lg:text-3xl font-semibold">
            <span className="text-red-600">Ben</span>efits for Sponsors
          </div>
          <div>
            <span className="font-bold">Brand Visibility :</span> Reach an
            elite, focused audience in Biomaterials, Orthopaedics, AI in
            healthcare and Ayurveda
          </div>
          <div>
            <span className="font-bold">Networking & Talent Access :</span>{" "}
            Engage with potential clients, partners, and top students from
            premier institutions
          </div>
          <div>
            <span className="font-bold">Market Positioning :</span> Demonstrate
            your leadership and vision by supporting cutting-edge science and
            technology
          </div>
          <div>
            <span className="font-bold">Networking Access :</span> Connect with
            industry professionals, influencers, and decision-makers
          </div>
          <div>
            <span className="font-bold">
              Corporate Social Responsibility (CSR) :
            </span>{" "}
            Show support for education, innovation, or community goals
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mx-10"
        >
          <h2 className="lg:text-4xl text-3xl font-serif pt-10  text-black">
            <p className="text-red-600 inline-block">Spo</p>nsorship{" "}
            Opportunities
          </h2>
          <p className="py-8 text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            Choose from our diverse sponsorship options crafted to suit organizations big and small. Partner with us and play a key role in this innovative event.
          </p>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid cursor-pointer gap-8 mx-10 pb-10 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: -0.5 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <TierCard {...tier} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center pb-10 px-4 text-2xl font-serif "> <div className="text-red-600 pr-2 font-semibold"> Note</div>: Exhibition booth(s) can be booked by sponsors/ non-sponsors by paying Rs. 50,000 only </div>
    </>
  );
}

function TierCard({ title, price, bullets, icon: Icon, color }) {
  return (
    <div
      className={`rounded-2xl min-h-96 border bg-gradient-to-br ${color} p-6 shadow-sm hover:shadow-md transition-all duration-500 backdrop-blur-md`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-white/70 shadow-sm">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-base">{title} Sponsor</h3>
        </div>
        <span className="text-sm font-medium text-muted-foreground">
          {price}
        </span>
      </div>
      <ul className="text-sm text-muted-foreground space-y-1">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-primary mt-0.5" /> {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
