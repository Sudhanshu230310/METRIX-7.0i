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
      className={`px-4 py-2 rounded-md font-semibold transition-all ${
        isActive
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

  const scheduleDay4 = [
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
        "Dr. Prashant N. Kumta (University of Pittsburgh), Prof. Roger Jagdish Narayan (NC State University), Prof. Ashutosh Khandha (University of Delaware)",
      venue: "Senate Hall",
    },
    {
      time: "10:00 - 10:20",
      title: "High-Tea",
      venue: "Rose Garden",
    },
    {
      time: "10:20 - 11:30",
      title: "Parallel Session I - Biomaterials & 3D Bioprinting",
      theme: "Theme 1",
      speakers:
        "Dr. Jayanta Bhattacharyya (IIT Delhi), Dr. Arnab Chanda (IIT Delhi)",
      venue: "LHC-M3",
    },
    {
      time: "10:20 - 11:30",
      title: "Parallel Session II - Cell Biology & Tissue Engineering",
      theme: "Theme 2",
      venue: "LHC-M4",
    },
    {
      time: "10:20 - 11:30",
      title: "Parallel Session III - Biomedical Implants & Biomechanics",
      theme: "Theme 3",
      speakers: "Prof. Vishal Kumar (PGIMER Chandigarh)",
      venue: "LHC-M5",
    },
    {
      time: "10:20 - 11:30",
      title:
        "Parallel Session IV - Pharmaceuticals, Therapeutics & AI-Healthcare",
      theme: "Theme 4",
      speakers:
        "Dr. J. Satya Eswari (NIT Raipur), Dr. Sharan Mallya P (AIIMS Guwahati)",
      venue: "LHC-M6",
    },
    {
      time: "11:30 - 13:00",
      title: "Oral Presentations (4 Sessions)",
      venue: "Multiple Venues",
    },
    {
      time: "12:00 - 13:00",
      title:
        "Oral Presentation for MAHE Young Scientist & Bajpai-Saha Student Awards",
      venue: "Multiple Venues",
    },
    {
      time: "13:00 - 14:00",
      title: "Lunch",
      venue: "Rose Garden",
    },
    {
      time: "14:00 - Onwards",
      title: "Valedictory Session - Thanksgiving, Awards Distribution",
      venue: "Auditorium",
    },
  ];

  const scheduleDetailDay1 = [
    {
      time: "01:45 - 01:50 PM",
      title: "Arrival & Seating of Dignitaries",
      duration: "5 min",
      venue: "Auditorium",
    },
    {
      time: "01:50 - 01:55 PM",
      title: "Ceremonial Lamp Lighting",
      duration: "5 min",
      venue: "Auditorium",
    },
    {
      time: "01:55 - 01:58 PM",
      title: "Conference Video",
      duration: "3 min",
      venue: "Auditorium",
    },
    {
      time: "01:58 - 02:03 PM",
      title: "Opening Remarks and Report by Convenor - Prof. Navin Kumar",
      duration: "5 min",
      venue: "Auditorium",
    },
    {
      time: "02:03 - 02:08 PM",
      title: "Address by Founder, SBAOI & STERMI - Prof. C.P. Sharma",
      duration: "5 min",
      venue: "Auditorium",
    },
    {
      time: "02:08 - 02:15 PM",
      title: "Address by SBAOI President - Prof. Ashok Kumar",
      duration: "7 min",
      venue: "Auditorium",
    },
    {
      time: "02:15 - 02:20 PM",
      title: "Address by STERMI President - Prof. Dhirendra S. Katti",
      duration: "5 min",
      venue: "Auditorium",
    },
    {
      time: "02:20 - 02:35 PM",
      title: "Address by Director - Prof. Rajeev Ahuja (Director, IIT Ropar)",
      duration: "15 min",
      venue: "Auditorium",
    },
    {
      time: "02:35 - 02:50 PM",
      title: "Address by Guest of Honour - Prof. Meenu Singh",
      duration: "15 min",
      venue: "Auditorium",
    },
    {
      time: "02:50 - 03:10 PM",
      title: "Inaugural Address by Chief Guest - Prof. Vinod K. Paul",
      duration: "20 min",
      venue: "Auditorium",
    },
    {
      time: "03:10 - 03:20 PM",
      title: "Award Felicitation Ceremony",
      duration: "10 min",
      venue: "Auditorium",
    },
    {
      time: "03:20 - 03:25 PM",
      title: "Vote of Thanks - Prof. Sanjay K. Bhadada (Co-Convener)",
      duration: "5 min",
      venue: "Auditorium",
    },
    {
      time: "03:25 - 04:05 PM",
      title:
        "C.P. Sharma Distinguished Awardee: Prof. Joachim Kohn (Rutgers University, USA)",
      duration: "40 min",
      venue: "Auditorium",
    },
    {
      time: "04:05 - 04:20 PM",
      title: "High-Tea",
      duration: "15 min",
      venue: "Auditorium Foyer",
    },
    {
      time: "04:20 - 05:20 PM",
      title: "Plenary Sessions (3 Sessions)",
      duration: "60 min",
      venue: "Auditorium",
    },
    {
      time: "05:20 - 06:20 PM",
      title: "Panel Discussion Sessions",
      duration: "60 min",
      venue: "Auditorium",
    },
    {
      time: "06:20 - 08:30 PM",
      title: "Cultural Events - Sadho Band Live Performance",
      duration: "130 min",
      venue: "Auditorium",
    },
    {
      time: "08:30 - 10:00 PM",
      title: "Dinner",
      duration: "90 min",
      venue: "Rose Garden",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className=" text-black py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-red-500">Bio</span>-मंथन 2025
          </h1>
          <p className="text-gray-700">
            40th International Conference on Biomaterials, Biomechanics, Medical
            Device & Healthcare
          </p>
          <p className="text-gray-700 mt-2">
            📍 IIT Ropar • December 4-7, 2025
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <TabsList>
          <TabsTrigger value="schedule" isActive={activeTab === "schedule"}>
            Schedule D1
          </TabsTrigger>
          <TabsTrigger value="day1" isActive={activeTab === "day1"}>
            Day 1
          </TabsTrigger>
          <TabsTrigger value="day2" isActive={activeTab === "day2"}>
            Day 2
          </TabsTrigger>
          <TabsTrigger value="day3" isActive={activeTab === "day3"}>
            Day 3
          </TabsTrigger>
          <TabsTrigger value="day4" isActive={activeTab === "day4"}>
            Day 4
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
                <a target="_blank" className="text-blue-600 text-sm underline" href="https://drive.google.com/file/d/1nTeT4l2Bi7ZjroE_l6wio1ntCSBvBEZm/view">Schedule-Day 1</a>
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
                <a target="_blank" className="text-blue-600 text-sm underline" href="https://drive.google.com/file/d/1vhtqHnmvF_NlfUritTsxJUqfHNNF4qXp/view">Schedule-Day 2</a>
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
                <a target="_blank" className="text-blue-600 text-sm underline" href="https://drive.google.com/file/d/13FrQ1RRA1V86rxajH1eTA8Fe4dOy5hkT/view">Schedule-Day 3</a>
              </CardHeader>
              <CardContent className="max-h-[600px] overflow-y-auto">
                {scheduleDay3.map((session, idx) =>
                  renderSession(session, idx)
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Day 4 Tab */}
          <TabsContent value="day4">
            <Card>
              <CardHeader>
                <CardTitle>Conference Day 4</CardTitle>
                <CardDescription>Sunday, December 7, 2025</CardDescription>
                <a target="_blank" className="text-blue-600 text-sm underline" href="https://drive.google.com/file/d/1lgV1S3gaTqK4xKxvQM1cXyJIq-NLxNQT/view">Schedule-Day 4</a>
              </CardHeader>
              <CardContent className="max-h-[600px] overflow-y-auto">
                {scheduleDay4.map((session, idx) =>
                  renderSession(session, idx)
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Detailed Schedule Day 1 Tab */}
          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>
                  Minute-to-Minute Inaugural Ceremony Schedule
                </CardTitle>
                <CardDescription>
                  Thursday, December 4, 2025 | 1:45 PM - 10:00 PM
                </CardDescription>
                <a target="_blank" className="text-blue-600 text-sm underline" href="https://drive.google.com/file/d/17BHS7pcbEeip38OyvBq47MBJVtwiKGRF/view">Open Full Schedule Day's Wise</a>
              </CardHeader>
              <CardContent className="max-h-[600px] overflow-y-auto">
                <div className="space-y-3">
                  {scheduleDetailDay1.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-bold text-red-600">
                            {item.time}
                          </p>
                          <h4 className="font-semibold text-gray-900 mt-1">
                            {item.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            Duration: {item.duration}
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            Location: {item.venue}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
              <p className="text-gray-700">December 4-7, 2025</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Theme</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Biomaterials & AI-Healthcare Innovation
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
