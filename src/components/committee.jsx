import rajeev from "../committeeImages/rajeev.png";
import navin from "../committeeImages/Navin.png";
import ashok from "../committeeImages/Ashok.png";
import prabir from "../committeeImages/Prabir.png";
import naveen from "../committeeImages/naveen.png";
import vijay from "../committeeImages/Vijay.png";
import ramesh from "../committeeImages/Ramesh.png";
import sanjay from "../committeeImages/Sanjay.png";
import anupam from "../committeeImages/Anupam.png";
import durba from "../committeeImages/Durba.png";
import bodhisatwa from "../committeeImages/Bodhisatwa.png";
import srivatsava from "../committeeImages/Srivatsava.png";
import suryasnata from "../committeeImages/Suryasnata.png";
import dheeraj from "../committeeImages/DhirajK.png";

function CommitteeMember({ name, title, subtitle, highlight, image }) {
  return (
    <div
      className={`group relative rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer min-h-96 ${highlight
        ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg"
        : "bg-card text-card-foreground border border-border hover:border-primary/50"
        }`}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/0 via-accent/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="h-96 flex justify-center">
          <img
            className="rounded-full w-72 h-72 mb-4 object-contain overflow-hidden"
            src={image}
            alt=""
          />
        </div>

        <h3 className="text-lg font-semibold leading-tight mb-1">{name}</h3>

        <p
          className={`text-sm font-medium mb-2 ${highlight ? "text-primary-foreground/90" : "text-primary"
            }`}
        >
          {title}
        </p>

        {subtitle && (
          <p
            className={`text-xs ${highlight ? "text-primary-foreground/70" : "text-muted-foreground"
              }`}
          >
            {subtitle}
          </p>
        )}
      </div>

      <div className="absolute inset-0 rounded-xl pointer-events-none group-hover:animate-pulse">
        <div
          className={`absolute inset-0 rounded-xl ${highlight
            ? "bg-gradient-to-r from-accent/20 to-transparent"
            : "bg-gradient-to-r from-primary/10 to-transparent"
            } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        />
      </div>
    </div>
  );
}

function CommitteeHeader() {
  return (
    <div className="relative overflow-hidden py-10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block mb-6">
          <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full animate-fade-in-up text-red-600">
            METRIX 7.0i
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl font-serif text-balance mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-red-600">Com</span>mittee Members
        </h1>

        <p
          className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Meet the distinguished leaders and experts guiding METRIX 7.0i.
        </p>
      </div>
    </div>
  );
}

const patrons = [
  // { name: "Prof. Rajeev Ahuja", title: "Director, IIT Ropar", image: rajeev },
  { name: "Prof. Navin Kumar", title: "HOD ME Department", image: navin },
  {
    name: "Prof. Dhiraj Kumar Mahajan",
    title: "ME Department",
    subtitle: "IIT Ropar",
    image: dheeraj,
  },
  {
    name: "Prof. Prabir Sarkar",
    title: "ME Department",
    subtitle: "IIT Ropar ",
    image: prabir,
  },
];

function PatronsSection() {
  return (
    <section className="px-4 border sm:mx-10 bg-gray-200 mx-4 py-10 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 animate-fade-in-up">
          <h2 className="text-4xl font-serif text-foreground mb-2">
            <span className="text-red-600">Pat</span>rons
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>


        <div
          className={`group relative rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer min-h-96 ${"bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg border mb-10"
            }`}
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/0 via-accent/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 " />

          <div className="relative z-10">
            <div className="h-96 flex justify-center">
              <img
                className="rounded-full w-72 h-72 mb-4 object-contain overflow-hidden"
                src={rajeev}
                alt=""
              />
            </div>

            <h3 className="text-lg font-semibold leading-tight mb-1">Prof. Rajeev Ahuja</h3>

            <p
              className={`text-sm font-medium mb-2 ${"text-primary-foreground/90"
                }`}
            >
              Director, IIT Ropar
            </p>
          </div>

          {/* <div className="absolute inset-0 rounded-xl pointer-events-none group-hover:animate-pulse">
            <div
              className={`absolute inset-0 rounded-xl ${
                highlight
                  ? "bg-gradient-to-r from-accent/20 to-transparent"
                  : "bg-gradient-to-r from-primary/10 to-transparent"
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
          </div> */}
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patrons.map((patron, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${idx * 0.1}s` }}
              className="animate-fade-in-up"
            >
              <CommitteeMember
                name={patron.name}
                title={patron.title}
                subtitle={patron.subtitle}
                image={patron.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const organizingCommittee = [
  // {
  //   name: "Prof. Navin Kumar",
  //   title: "Convener",
  //   subtitle: "IIT Ropar",
  //   highlight: true,
  //   image: naveen,
  // },
  {
    name: "Prof. (Dr.) Vijay G Goni",
    title: "Co-Convener",
    subtitle: "Head, Orthopaedics | PGIMER Chandigarh",
    image: vijay,
  },
  {
    name: "Prof. (Dr.) Ramesh K Sen",
    title: "Co-Convener",
    subtitle: "Head, Orthopaedics | Max Hospital Mohali",
    image: ramesh,
  },
  {
    name: "Prof. (Dr.) Sanjay K Bhadada",
    title: "Co-Convener",
    subtitle: "Head, Endocrinology | PGIMER Chandigarh",
    image: sanjay,
  },
  {
    name: "Prof. Anupam Agrawal",
    title: "Co-Convener",
    subtitle: "IIT Ropar",
    image: anupam,
  },
  {
    name: "Prof. Durba Pal",
    title: "Co-Convener",
    subtitle: "IIT Ropar",
    image: durba,
  },
  {
    name: "Prof. Bodhisatwa Das",
    title: "Co-Convener",
    subtitle: "IIT Ropar",
    image: bodhisatwa,
  },
  {
    name: "Prof. Srivatsava Naidu",
    title: "Co-Convener",
    subtitle: "IIT Ropar",
    image: srivatsava,
  },
  {
    name: "Prof. Suryasnata Tripathy",
    title: "Co-Convener",
    subtitle: "IIT Ropar",
    image: suryasnata,
  },
];

function OrganizingCommitteeSection() {
  return (
    <section className="py-16 px-4 bg-secondary/5 border my-10 sm:mx-10 mx-4 rounded-2xl bg-gray-200 border-gray-400">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-serif text-foreground mb-2">
            <span className="text-red-600">Org</span>anizing Committee
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />


        </div>
        <div
          className={`group relative rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer min-h-96 ${"bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg border mb-10"
            }`}
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/0 via-accent/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 " />

          <div className="relative z-10">
            <div className="h-96 flex justify-center">
              <img
                className="rounded-full w-72 h-72 mb-4 object-contain overflow-hidden"
                src={naveen}
                alt=""
              />
            </div>

            <h3 className="text-lg font-semibold leading-tight mb-1">Prof. Navin Kumar</h3>

            <p
              className={`text-sm font-medium mb-2 ${"text-primary-foreground/90"
                }`}
            >
              Convener, IIT Ropar
            </p>
          </div>

          {/* <div className="absolute inset-0 rounded-xl pointer-events-none group-hover:animate-pulse">
            <div
              className={`absolute inset-0 rounded-xl ${
                highlight
                  ? "bg-gradient-to-r from-accent/20 to-transparent"
                  : "bg-gradient-to-r from-primary/10 to-transparent"
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
          </div> */}
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {organizingCommittee.map((member, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${idx * 0.08}s` }}
              className="animate-fade-in-up"
            >
              <CommitteeMember
                name={member.name}
                title={member.title}
                subtitle={member.subtitle}
                highlight={member.highlight}
                image={member.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Committee() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/10 pb-20">
      <CommitteeHeader />
      <PatronsSection />
      {/* <OrganizingCommitteeSection /> */}
    </main>
  );
}
