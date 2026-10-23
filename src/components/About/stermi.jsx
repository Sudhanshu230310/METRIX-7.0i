import { ExternalLink } from "lucide-react";
import STERMI from "../../logos/stermi.png"
export default function Stermi() {
  return (
    <>
      <div className="min-h-screen pt-20">
        <div className="flex flex-col justify-center md:grid md:grid-cols-3 px-4 md:pr-10">
          <div className="w-60 h-60 mx-auto my-auto border border-gray-500 rounded-3xl overflow-hidden">
            <img src={STERMI} alt="" />
          </div>
          <div className="flex flex-col col-span-2 pt-10 md:pt-0">
            <div className="text-4xl font-serif lg:text-5xl gap-2">
              <span>
                <span className="text-red-600">Abo</span>ut
              </span>{" "}
              <span> the STERMI</span>
            </div>
            <div className="pt-2 text-lg">
              The Society for Tissue Engineering and Regenerative Medicine India
              (STERMI) was formally established on April 25, 2007, as a
              charitable organization under the Travancore Cochin Literary,
              Scientific and Charitable Societies Registration Act of 1955. Its
              primary mission is to advance tissue engineering and regenerative
              medicine by fostering interdisciplinary collaboration among
              scientists, with the broader goal of improving healthcare outcomes
              in India. The inspiration for forming STERMI emerged during the
              World Congress on Tissue Engineering and Regenerative Medicine
              held in Pittsburgh in 2006. During this event—specifically at the
              Executive Council meeting of the Tissue Engineering and
              Regenerative Medicine International Society (TERMIS) on April 26,
              2006—Dr. Chandra P. Sharma participated in discussions that led to
              strong encouragement for establishing a similar society in India.
              Motivated by this support, Dr. Sharma reached out to researchers
              across disciplines. With widespread positive response from the
              scientific community, STERMI was officially founded to serve as a
              platform for accelerating research, innovation, and collaboration
              in the field across India.
              <div className="py-2">
                <a href="http://www.stermi.org.in" target="_blank">
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
