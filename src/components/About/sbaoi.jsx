import { ExternalLink } from "lucide-react";
import SBAOI from "../../logos/SBAOI.png"
export default function Sbaoi() {

  return (
    <>
      <div className="min-h-screen pt-20">
        <div className="flex flex-col justify-center md:grid md:grid-cols-3 px-4 md:pr-10">
          <div className="w-60 h-60 mx-auto my-auto border border-gray-500 rounded-3xl">
            <img src={SBAOI} alt="" />
          </div>
          <div className="flex flex-col col-span-2 pt-10 md:pt-0">
            <div className="text-4xl font-serif lg:text-5xl gap-2">
              <span>
                <span className="text-red-600">Abo</span>ut
              </span>{" "}
              <span> the SBAOI</span>
            </div>
            <div className="pt-2 text-lg">
              Established in 1986 and registered under the Travancore-Cochin Act
              XII of 1955, with the name Society for Biomaterials and Artificial
              Organs-India (SBAOI) to promote Biomedical Technology in India.
              SBAOI stands for cultivating a research atmosphere nationwide for
              the growth of basic studies as well as advanced technology
              development related to Biomaterials and Artificial Organs. Also,
              the Society strives to bring professionals from various faculties
              together to improve the quality of their approach and modalities
              in research. Internationally, SBAOI is a constituent society of
              the International Union of Societies of Biomaterials Science and
              Engineering (IUS-BSE) who coordinate international activities,
              including World Biomaterials Congress. SBAOI have till now
              conducted 33 National Conferences hosted at different National
              Institutes like IITs, IISc and national and state Universities.
              The national conference was also held at the College of Biomedical
              Engineering and Applied Sciences at Kathmandu, Nepal twice. SBAOI
              has been representing the World Biomaterials Congresses since 1996
              at Toronto. SBAOI has various regional chapters namely the Chennai
              Chapter, North American Chapter, European Chapter, Student Chapter
              and Delhi Chapter. The Society was a partner in several
              international conferences attended by delegates from various
              countries like USA, UK, Korea, Germany, Netherlands, Turkey,
              Japan, Australia, China, Nepal, Singapore, Malaysia, South Africa,
              New Zealand, France, Italy, Poland, Russia and Portugal. SBAOI
              completed its 36 years of existence which is being celebrated as
              three-and-a-half decades of Biomaterials India. The Society will
              be holding its 34th National Conference as TransMedTech24 in
              Trivandrum.
              <div className="py-2">
                <a href="http://www.biomaterials.org.in" target="_blank" ><ExternalLink /></a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
