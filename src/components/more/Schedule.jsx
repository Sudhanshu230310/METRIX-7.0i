"use client";

import { useState } from "react";

export default function ConferenceSchedule() {
  const [activeTab, setActiveTab] = useState("day1");

  const Badge = ({ children, className }) => (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${className}`}
    >
      {children}
    </span>
  );

  const Card = ({ children, className }) => (
    <div
      className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}
    >
      {children}
    </div>
  );

  const CardHeader = ({ children }) => (
    <div className="border-b border-gray-200 px-6 py-4">{children}</div>
  );

  const CardTitle = ({ children }) => (
    <h2 className="text-2xl font-bold text-gray-900">{children}</h2>
  );

  const CardDescription = ({ children }) => (
    <p className="text-sm text-gray-600 mt-1">{children}</p>
  );

  const CardContent = ({ children, className }) => (
    <div className={`px-6 py-4 ${className}`}>{children}</div>
  );

  const Tabs = ({ children }) => <div>{children}</div>;

  const TabsList = ({ children }) => (
    <div className="flex flex-wrap justify-evenly gap-2 mb-8 p-2 bg-white border border-gray-200 rounded-lg">
      {children}
    </div>
  );

  const TabsTrigger = ({ value, children, isActive }) => (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-4 py-2 rounded-md font-semibold transition-all ${isActive
        ? "bg-red-500 text-white"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
    >
      {children}
    </button>
  );

  const TabsContent = ({ value, children }) =>
    activeTab === value ? <div className="space-y-4">{children}</div> : null;

  const renderSession = (session, index) => (
    <div
      key={index}
      className="border-l-4 border-red-500 pl-4 py-3 mb-4 bg-gray-50 rounded-r-lg p-4"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm font-semibold text-red-600">{session.time}</p>
          <h4 className="font-bold text-lg text-gray-900 mt-1">
            {session.title}
          </h4>
          {session.speakers && (
            <p className="text-sm text-gray-700 mt-2">
              <span className="font-semibold">Speakers:</span>{" "}
              {session.speakers}
            </p>
          )}
          {session.venue && (
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-semibold">Venue:</span> {session.venue}
            </p>
          )}
          {session.theme && (
            <Badge className="mt-2 bg-blue-100 text-blue-800">
              {session.theme}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );

  const scheduleDay1 = [
    {
      time: "09:00 - Onwards",
      title: "Registration",
      venue: "Auditorium Foyer Area",
    },
    {
      time: "11:00 - 12:00",
      title: "Parallel Session I - Biomaterials & 3D Bio-printing",
      theme: "Theme 1",
      speakers:
        "Dr. Vikash Jain (CEO & Founder AAROGYAM 3D), Dr. Anil Kumar P.R. (SCTIMST)",
      venue: "LHC-M3",
    },
    {
      time: "11:00 - 12:00",
      title: "Parallel Session II - Cell Biology & Tissue Engineering",
      theme: "Theme 2",
      speakers: "Prof. Shalmoli Bhattacharyya (PGIMER Chandigarh)",
      venue: "LHC-M4",
    },
    {
      time: "11:00 - 12:00",
      title: "Parallel Session III - Biomedical Implants & Biomechanics",
      theme: "Theme 3",
      speakers:
        "Dr. Vijay G. Goni (PGIMER, Chandigarh), Dr. R. S. Jayasree (SCTIMST)",
      venue: "LHC-M5",
    },
    {
      time: "11:00 - 12:00",
      title:
        "Parallel Session IV - Pharmaceuticals, Therapeutics & AI in Health",
      theme: "Theme 4",
      speakers: "Dr. Finosh Thankam (Western University of Health Science)",
      venue: "LHC-M6",
    },
    {
      time: "12:40 - 13:45",
      title: "Lunch",
      venue: "Rose Garden",
    },
    {
      time: "13:45 - 15:25",
      title: "Inaugural Ceremony",
      speakers:
        "Prof. Vinod K. Paul (Chief Guest), Prof. Meenu Singh (Guest of Honor)",
      venue: "Auditorium",
    },
    {
      time: "15:25 - 16:05",
      title:
        "C.P. Sharma Distinguished Awardee: Prof. Joachim Kohn (Rutgers University, USA)",
      venue: "Auditorium",
    },
    {
      time: "16:05 - 16:20",
      title: "High-Tea",
      venue: "Auditorium Foyer Area",
    },
    {
      time: "16:20 - 17:20",
      title: "Plenary Sessions",
      speakers: "Dr. Jitendra Sharma, Prof. Vijay G. Goni, Mr. Manish Deshmukh",
      venue: "Auditorium",
    },
    {
      time: "17:20 - 18:20",
      title: "Panel Discussion Session",
      speakers:
        "Prof. Ralph Müller (Moderator), Dr. Jitendra Sharma, Dr. (Lt Col.) Manish Prasad",
      venue: "Auditorium",
    },
    {
      time: "18:20 - 20:30",
      title: "Cultural Events - Sadho Band Live Performance",
      venue: "Auditorium",
    },
    {
      time: "20:30 - 22:00",
      title: "Dinner",
      venue: "Rose Garden",
    },
  ];

  const scheduleDay2 = [
    {
      time: "06:45 - 07:30",
      title: "Wellness Activity: Yoga Practice & Motivational Address",
      venue: "Auditorium Foyer Area",
    },
    {
      time: "08:30 - Onwards",
      title: "Registration & Help Desk",
      venue: "S. Radhakrishnan Complex (LHC) Foyer Area",
    },
    {
      time: "08:30 - 09:30",
      title: "General Body Meeting (GBM) of Societies",
      venue: "Senate Hall",
    },
    {
      time: "09:30 - 10:30",
      title: "Plenary Sessions",
      speakers:
        "Prof. Chandan K. Sen, Prof. Bikramjit Basu, Prof. Ralph Müller",
      venue: "Senate Hall",
    },
    {
      time: "10:30 - 11:00",
      title: "High-Tea",
      venue: "Rose Garden",
    },
    {
      time: "11:00 - 12:00",
      title: "Parallel Session I - Biomaterials & 3D Bio-printing",
      theme: "Theme 1",
      speakers:
        "Prof. Abhijit Majumder (IIT Bombay), Prof. Namrata Gundiah (IISc)",
      venue: "LHC-M3",
    },
    {
      time: "11:00 - 12:00",
      title: "Parallel Session II - Cell Biology & Tissue Engineering",
      theme: "Theme 2",
      speakers: "Prof. Anjali Aggarwal (PGIMER), Prof. Naresh Kasoju (SCTIMST)",
      venue: "LHC-M4",
    },
    {
      time: "11:00 - 12:00",
      title: "Parallel Session III - Biomedical Implants & Biomechanics",
      theme: "Theme 3",
      speakers: "Prof. Debrupa Lahiri (IIT Roorkee)",
      venue: "LHC-M5",
    },
    {
      time: "11:00 - 12:00",
      title:
        "Parallel Session IV - Pharmaceuticals, Therapeutics & AI in Health",
      theme: "Theme 4",
      speakers: "Prof. (Dr.) Bhanu Duggal (AIIMS Rishikesh)",
      venue: "LHC-M6",
    },
    {
      time: "12:40 - 13:00",
      title: "Oral Presentations (4 Sessions)",
      venue: "Multiple Venues",
    },
    {
      time: "13:00 - 14:00",
      title: "Lunch & Poster Presentation",
      venue: "Rose Garden & LHC Foyer Area",
    },
    {
      time: "14:00 - 15:00",
      title: "Plenary Sessions",
      speakers:
        "Prof. Dhirendra S. Katti, Prof. Sanjeev Shroff, Prof. Ketul C. Popat",
      venue: "Senate Hall",
    },
    {
      time: "15:00 - 16:00",
      title: "Parallel Sessions (Evening)",
      theme: "Multiple Themes",
      venue: "Multiple Venues",
    },
    {
      time: "16:00 - 16:30",
      title: "High-Tea",
      venue: "Rose Garden",
    },
    {
      time: "16:30 - 17:15",
      title: "Panel Discussion and Industry Delegates Talk",
      venue: "Senate Hall",
    },
    {
      time: "17:30 - 19:30",
      title: "Cultural Events",
      venue: "Auditorium",
    },
    {
      time: "20:00 - 22:00",
      title: "Gala Dinner - Shankar School of Music Performance",
      venue: "Rose Garden",
    },
  ];

  const scheduleDay3 = [
    {
      time: "06:45 - 07:30",
      title: "Wellness Activity: Yoga Practice & Motivational Address",
      venue: "Auditorium Foyer Area",
    },
    {
      time: "08:30 - Onwards",
      title: "Registration & Help Desk",
      venue: "S. Radhakrishnan Complex (LHC) Foyer Area",
    },
    {
      time: "09:00 - 10:00",
      title: "Plenary Sessions",
      speakers:
        "Prof. Gilson Khang (JNU, Korea), Prof. Abhay Pandit (University of Galway), Prof. Amit Bandyopadhyay (Washington State University)",
      venue: "Senate Hall",
    },
    {
      time: "10:00 - 10:30",
      title: "High-Tea",
      venue: "Rose Garden",
    },
    {
      time: "10:30 - 11:30",
      title: "Parallel Session I - Biomaterials & 3D Bioprinting",
      theme: "Theme 1",
      speakers: "Dr. Vikas Jain, Dr. Syed Asif SA, Prof. Naveen Kumar Singh",
      venue: "LHC-M3",
    },
    {
      time: "10:30 - 11:30",
      title: "Parallel Session II - Cell Biology & Tissue Engineering",
      theme: "Theme 2",
      speakers:
        "Prof. Manishekhar Kumar, Prof. P.R. Umashankar, Prof. Balakumar Subramanian",
      venue: "LHC-M4",
    },
    {
      time: "10:30 - 11:30",
      title: "Parallel Session III - Biomedical Implant & Biomechanics",
      theme: "Theme 3",
      speakers:
        "Dr. R. S. Jayasree (SCTIMST), Prof. Sujeet Kumar Sinha (IIT Delhi)",
      venue: "LHC-M5",
    },
    {
      time: "10:30 - 11:30",
      title:
        "Parallel Session IV - Pharmaceuticals, Therapeutics & AI-Healthcare",
      theme: "Theme 4",
      speakers:
        "Prof. Ambarish Kunwar (IIT Bombay), Prof. Mrinal Kanti Musib (NUS)",
      venue: "LHC-M6",
    },
    {
      time: "11:30 - 12:10",
      title: "Invited Lectures (4 Sessions)",
      venue: "Multiple Venues",
    },
    {
      time: "12:10 - 13:00",
      title: "Oral Presentations (4 Sessions)",
      venue: "Multiple Venues",
    },
    {
      time: "13:00 - 14:00",
      title: "Lunch",
      venue: "Rose Garden",
    },
    {
      time: "14:00 - 15:00",
      title: "Plenary Sessions",
      speakers:
        "Prof. Ashok Kumar (SBAOI), Prof. Sanjay Kumar Bhadada, Prof. Daniel E Heath",
      venue: "Senate Hall",
    },
    {
      time: "15:00 - 15:45",
      title: "Parallel Sessions - Evening",
      theme: "Multiple Themes",
      venue: "Multiple Venues",
    },
    {
      time: "15:45 - 16:15",
      title: "High-Tea",
      venue: "Rose Garden",
    },
    {
      time: "16:15 - 16:55",
      title: "Invited Lectures - Evening Session",
      venue: "Multiple Venues",
    },
    {
      time: "17:00 - 17:30",
      title: "Oral Presentations - Evening",
      venue: "Multiple Venues",
    },
    {
      time: "17:30 - 18:30",
      title: "Panel Discussion and Industry Delegates Talk",
      venue: "Senate Hall",
    },
    {
      time: "18:30 - 20:00",
      title: "Cultural Events - The 3rd Law Drama",
      venue: "Auditorium",
    },
    {
      time: "20:00 - 22:00",
      title: "Dinner",
      venue: "Rose Garden",
    },
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className=" text-black py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-red-500">METRIX</span> 7.0i
          </h1>
          <p className="text-gray-700">
            Annual Conference
          </p>
          <p className="text-gray-700 mt-2">
            📍 IIT Ropar • December 3-5, 2026
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <TabsList>
          <TabsTrigger value="day1" isActive={activeTab === "day1"}>
            Day 1
          </TabsTrigger>
          <TabsTrigger value="day2" isActive={activeTab === "day2"}>
            Day 2
          </TabsTrigger>
          <TabsTrigger value="day3" isActive={activeTab === "day3"}>
            Day 3
          </TabsTrigger>
        </TabsList>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Day 1 Tab */}
          <TabsContent value="day1">
            <Card>
              <CardHeader>
                <CardTitle>Conference Day 1</CardTitle>
                <CardDescription>Thursday, December 4, 2025</CardDescription>
                <a target="_blank" className="text-blue-600 text-sm underline" href="">Schedule-Day 1</a>
              </CardHeader>
              <CardContent className="max-h-[600px] overflow-y-auto">
                {scheduleDay1.map((session, idx) =>
                  renderSession(session, idx)
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Day 2 Tab */}
          <TabsContent value="day2">
            <Card>
              <CardHeader>
                <CardTitle>Conference Day 2</CardTitle>
                <CardDescription>Friday, December 5, 2025</CardDescription>
                <a target="_blank" className="text-blue-600 text-sm underline" href="">Schedule-Day 2</a>
              </CardHeader>
              <CardContent className="max-h-[600px] overflow-y-auto">
                {scheduleDay2.map((session, idx) =>
                  renderSession(session, idx)
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Day 3 Tab */}
          <TabsContent value="day3">
            <Card>
              <CardHeader>
                <CardTitle>Conference Day 3</CardTitle>
                <CardDescription>Saturday, December 6, 2025</CardDescription>
                <a target="_blank" className="text-blue-600 text-sm underline" href="">Schedule-Day 3</a>
              </CardHeader>
              <CardContent className="max-h-[600px] overflow-y-auto">
                {scheduleDay3.map((session, idx) =>
                  renderSession(session, idx)
                )}
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>

        {/* Conference Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Venue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">IIT Ropar, Punjab, India</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Dates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">December 3-5, 2026</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Theme</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                ????????????????
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
