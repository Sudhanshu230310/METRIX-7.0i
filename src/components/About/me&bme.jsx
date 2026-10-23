import { motion } from "framer-motion"
import meclogo from "../../logos/meclogo.png"
import bmelogo from "../../logos/bme.png"
import { ExternalLink } from "lucide-react"

export default function MEBME() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden">

      {/* Departments Section */}
      <section className="relative pt-16 pb-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-5xl font-serif text-foreground mb-4"><span className="text-red-600">Our</span> Departments</h3>
        </motion.div>

        <div className="grid gap-12">
          {/* Mechanical Engineering Card */}
          <DepartmentCard
            id="mechanical"
            title="Mechanical Engineering"
            subtitle="Satish Dhawan Block"
            logo={meclogo}
            description="The Department of Mechanical Engineering is one of the founding departments of the Institute. It is also one of the largest departments, housing 25 faculty members with varied expertise and hundreds of undergraduate, postgraduate, and research scholars."
            highlights={[
              "B. Tech. in Mechanical with multiple minors",
              "Master's degrees in 4 disciplines",
              "Faculty in Design, Manufacturing, and Thermal",
              "Specialized research in Additive Manufacturing",
            ]}
            areas={[
              "Additive Manufacturing",
              "Bio-Mechanical Engineering",
              "Energy Efficiency",
              "Intelligent Systems",
              "Micro/Nano Systems",
            ]}
            link="https://mech.iitrp.ac.in"
            color="teal"
          />

          {/* Biomedical Engineering Card */}
          {/* <DepartmentCard
            id="biomedical"
            title="Biomedical Engineering"
            subtitle="Dr. Hargobind Khorana Block"
            logo={bmelogo}
            description="The Department of Biomedical Engineering (DBME) was established in February 2021, superseding the Center for Biomedical Engineering (CBME) program. The department meets healthcare challenges through interdisciplinary research spanning engineering, medical sciences, and natural sciences."
            highlights={[
              "MTech and PhD programs in Biomedical Engineering",
              "Research in Medical Devices and Diagnostics",
              "Biomaterials and Tissue Engineering focus",
              "Strong interdisciplinary approach",
            ]}
            areas={[
              "Biomedical Imaging",
              "Medical Devices",
              "Cancer Diagnostics",
              "Biomaterials",
              "Tissue Engineering",
            ]}
            link="https://www.iitrp.ac.in/cbme/"
            color="cyan"
          /> */}
        </div>
      </section>


    </div>
  )
}

function DepartmentCard({ id, title, subtitle, logo, description, highlights, areas, link, color }) {
  const colorClass = color === "teal" ? "teal" : "cyan"

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div
        className={`bg-gray-100 border border-${colorClass}-200/20 rounded-2xl p-8 md:p-10 backdrop-blur-sm hover:border-${colorClass}-300/40 transition-all duration-300`}
      >
        {/* Logo and Title */}
        <div className="flex items-start gap-6 mb-6">
          <motion.div

            transition={{ duration: 0.6 }}
            className={`w-24 h-24 rounded-xl bg-gradient-to-br from-${colorClass}-100 to-${colorClass}-50 flex items-center justify-center flex-shrink-0`}
          >
            <img src={logo || "/placeholder.svg"} alt={title} className="w-24 -translate-y-4 h-24" />
          </motion.div>
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-1">{title}</h4>
            <p className={`text-${colorClass}-600 font-semibold`}>{subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-foreground/70 text-lg leading-relaxed mb-8">{description}</p>

        {/* Highlights */}
        <div className="mb-8">
          <h5 className="font-semibold text-foreground mb-4">Key Highlights</h5>
          <div className="space-y-3">
            {highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <div className={`w-2 h-2 rounded-full bg-${colorClass}-600 mt-2 flex-shrink-0`} />
                <span className="text-foreground/70">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div className="mb-8">
          <h5 className="font-semibold text-foreground mb-4">Research Areas</h5>
          <div className="flex flex-wrap gap-2">
            {areas.map((area, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2 rounded-full text-sm font-medium bg-${colorClass}-50 text-${colorClass}-700 border border-${colorClass}-200`}
              >
                {area}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Link */}
        <motion.a
          href={"https://iitrpr.ac.in/mechanical/"}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 4 }}
          className={`inline-flex items-center gap-2 text-${colorClass}-600 hover:text-${colorClass}-700 font-semibold transition`}
        >
          Visit Department Website
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  )
}
