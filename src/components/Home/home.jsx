import { EventGrid } from "./collageImagesHome";
import Hero from "./heroHome";
import HomeSpeakers from "./homePageSpeakers";
import SponsorsPage from "./homeSponsorship";
import ImportantUp from "./importantHome";
import Updates from "./updates";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Updates />
      <div className="">
        <HomeSpeakers />
      </div>
      <div className="min-h-screen">
        <div className="flex flex-col border-b border-gray-400 pt-20 pb-20 lg:flex-row min-h-screen">
          <div className="w-full lg:w-1/2 bg-card">
            <EventGrid />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center py-2 px-8 lg:px-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-serif text-foreground leading-tight">
                  <span className="text-red-600"> METRIX</span> 7th Edition
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  METRIX (Mechanical Engineering Tech Research Inovation & Exchange) is an annual event of the Department of Mechanical Engineering at IIT Ropar. The department launched the event in 2018 and has successfully organized five editions till now. The aim of the event is to enhance knowledge by facilitating the exchange of ideas among research scholars, faculty members, and invitees (from industry and academia). The key events include lab poster presentations, research talks, expert talks (from industry and academia), and panel discussions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10">
          <ImportantUp />
        </div>
        <div>
          <SponsorsPage />
        </div>
      </div>
    </>
  );
}
