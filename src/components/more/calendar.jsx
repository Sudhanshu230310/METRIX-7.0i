import { useState } from "react"
import Calendar from "react-calendar"
import { Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react"

const categoryColors = {
  work: {
    bg: "rgba(59, 130, 246, 0.05)",
    text: "#1E40AF",
    dot: "#3B82F6",
    border: "#BFDBFE",
    badge: "#DBEAFE",
  },
  personal: {
    bg: "rgba(16, 185, 129, 0.05)",
    text: "#15803D",
    dot: "#10B981",
    border: "#A7F3D0",
    badge: "#D1FAE5",
  },
  meeting: {
    bg: "rgba(139, 92, 246, 0.05)",
    text: "#6D28D9",
    dot: "#8B5CF6",
    border: "#DDD6FE",
    badge: "#EDE9FE",
  },
  deadline: {
    bg: "rgba(239, 68, 68, 0.05)",
    text: "#991B1B",
    dot: "#EF4444",
    border: "#FECACA",
    badge: "#FEE2E2",
  },
  conference: {
    bg: "rgba(249, 115, 22, 0.05)",
    text: "#92400E",
    dot: "#F97316",
    border: "#FED7AA",
    badge: "#FFEDD5",
  },
}

const HARDCODED_EVENTS = [
  // December 4, 2025 - Day 1
  {
    id: "conf-1",
    title: "Registration & Wellness Activity",
    date: new Date(2025, 11, 4),
    time: "06:45",
    category: "conference",
    description: "Yoga Practice & Motivational Address",
    location: "Auditorium Foyer Area",
  },
  {
    id: "conf-2",
    title: "Inaugural Ceremony",
    date: new Date(2025, 11, 4),
    time: "13:45",
    category: "meeting",
    description: "Opening ceremony with Chief Guest Prof. Vinod K. Paul",
    location: "Auditorium",
  },
  {
    id: "conf-3",
    title: "Plenary Sessions - Keynote Lectures",
    date: new Date(2025, 11, 4),
    time: "16:20",
    category: "conference",
    description: "Distinguished speakers presenting on biomaterials and bioengineering",
    location: "Auditorium",
  },
  {
    id: "conf-4",
    title: "Cultural Events & Dinner",
    date: new Date(2025, 11, 4),
    time: "18:20",
    category: "conference",
    description: "Sadho Band Live Performance followed by dinner",
    location: "Auditorium & Rose Garden",
  },

  // December 5, 2025 - Day 2
  {
    id: "conf-5",
    title: "Wellness Activity - Yoga",
    date: new Date(2025, 11, 5),
    time: "06:45",
    category: "conference",
    description: "Yoga Practice & Motivational Address",
    location: "Auditorium Foyer Area",
  },
  {
    id: "conf-6",
    title: "Parallel Sessions I-IV",
    date: new Date(2025, 11, 5),
    time: "11:00",
    category: "conference",
    description: "Keynote speakers on Biomaterials, Cell Biology, Implants, and Pharmaceuticals",
    location: "LHC-M3, LHC-M4, LHC-M5, LHC-M6",
  },
  {
    id: "conf-7",
    title: "Plenary Sessions",
    date: new Date(2025, 11, 5),
    time: "14:00",
    category: "meeting",
    description: "Distinguished speakers presenting research highlights",
    location: "Senate Hall",
  },
  {
    id: "conf-8",
    title: "Panel Discussion & Cultural Events",
    date: new Date(2025, 11, 5),
    time: "16:30",
    category: "conference",
    description: "Industry delegates talk and cultural performances",
    location: "Senate Hall & Auditorium",
  },
  {
    id: "conf-9",
    title: "Gala Dinner",
    date: new Date(2025, 11, 5),
    time: "20:00",
    category: "conference",
    description: "Shankar School of Music Performance (Sitar & Tabla Jugalbandi)",
    location: "Rose Garden",
  },

  // December 6, 2025 - Day 3
  {
    id: "conf-10",
    title: "Wellness Activity - Yoga",
    date: new Date(2025, 11, 6),
    time: "06:45",
    category: "conference",
    description: "Yoga Practice & Motivational Address",
    location: "Auditorium Foyer Area",
  },
  {
    id: "conf-11",
    title: "Plenary Sessions - Morning",
    date: new Date(2025, 11, 6),
    time: "09:00",
    category: "meeting",
    description: "Prof. Gilson Khang, Prof. Abhay Pandit, Prof. Amit Bandyopadhyay presenting",
    location: "Senate Hall",
  },
  {
    id: "conf-12",
    title: "Parallel Sessions - Keynote Speakers",
    date: new Date(2025, 11, 6),
    time: "10:30",
    category: "conference",
    description: "Four theme-based parallel sessions with keynote presentations",
    location: "LHC-M3, LHC-M4, LHC-M5, LHC-M6",
  },
  {
    id: "conf-13",
    title: "Afternoon Plenary & Sessions",
    date: new Date(2025, 11, 6),
    time: "14:00",
    category: "meeting",
    description: "Plenary sessions followed by parallel sessions on wellness and tissue engineering",
    location: "Senate Hall & LHC Complex",
  },
  {
    id: "conf-14",
    title: "Panel Discussion & Cultural Events",
    date: new Date(2025, 11, 6),
    time: "17:30",
    category: "conference",
    description: "Industry delegate talks and cultural performances",
    location: "Senate Hall & Auditorium",
  },
  {
    id: "conf-15",
    title: "Dinner",
    date: new Date(2025, 11, 6),
    time: "20:00",
    category: "conference",
    description: "Conference dinner",
    location: "Rose Garden",
  },

  // December 7, 2025 - Day 4
  {
    id: "conf-16",
    title: "Wellness Activity - Yoga",
    date: new Date(2025, 11, 7),
    time: "06:45",
    category: "conference",
    description: "Yoga Practice & Motivational Address",
    location: "Auditorium Foyer Area",
  },
  {
    id: "conf-17",
    title: "Final Plenary Sessions",
    date: new Date(2025, 11, 7),
    time: "09:00",
    category: "meeting",
    description: "Dr. Prashant N. Kumta, Prof. Roger Jagdish Narayan, Prof. Ashutosh Khandha",
    location: "Senate Hall",
  },
  {
    id: "conf-18",
    title: "Parallel Sessions - Final Day",
    date: new Date(2025, 11, 7),
    time: "10:20",
    category: "conference",
    description: "Last set of keynote presentations and invited lectures",
    location: "LHC-M3, LHC-M4, LHC-M5, LHC-M6",
  },
  {
    id: "conf-19",
    title: "Valedictory Session",
    date: new Date(2025, 11, 7),
    time: "14:00",
    category: "meeting",
    description: "Thanksgiving, Awards Distribution & Ceremony",
    location: "Auditorium",
  },
]

export function EventCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 11, 4))
  const [events] = useState(HARDCODED_EVENTS)

  const selectedDateEvents = events.filter(
    (event) =>
      event.date.getDate() === selectedDate.getDate() &&
      event.date.getMonth() === selectedDate.getMonth() &&
      event.date.getFullYear() === selectedDate.getFullYear(),
  )

  const getEventsForDate = (date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear(),
    )
  }

  const tileContent = ({ date }) => {
    const dateEvents = getEventsForDate(date)
    if (dateEvents.length === 0) return null
    return (
      <div style={{ display: "flex", gap: "4px", justifyContent: "center", marginTop: "8px", flexWrap: "wrap" }}>
        {dateEvents.slice(0, 3).map((event, idx) => (
          <div
            key={idx}
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: categoryColors[event.category].dot,
              opacity: 0.8,
            }}
          />
        ))}
        {dateEvents.length > 3 && (
          <span style={{ fontSize: "10px", color: "#9CA3AF", fontWeight: "600" }}>+{dateEvents.length - 3}</span>
        )}
      </div>
    )
  }

  return (
    <div
      className="bg-gray-100"
      style={{ display: "flex", flexDirection: "column", gap: "48px", padding: "48px 100px" }}
    >
      <div className="text-5xl flex justify-center font-serif">
        <span className="text-orange-600">Bio</span>-<span className="text-black">मंथन</span>{" "}
        <span className="text-black">2025</span>
      </div>
      <div
        className="bg-gradient-to-br from-white to-blue-300"
        style={{
          padding: "100px 140px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)",
          border: "0.5px solid black",
          borderRadius: "16px",
          backgroundColor: "",
          transition: "all 0.3s ease",
        }}
      >
        <style>{`
          .react-calendar {
            width: 100%;
            border: none;
            font-family: inherit;
          }
          .react-calendar__month-view__weekdays {
            text-align: center;
            font-weight: 600;
            font-size: 14px;
            color: #6B7280;
            margin-bottom: 28px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
          }
          .react-calendar__month-view__weekdays__weekday {
            padding: 16px 12px;
            text-decoration: none;
          }
          .react-calendar__month-view__days {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 14px;
          }
          .react-calendar__tile {
            aspect-ratio: 1;
            padding: 12px 8px;
            background: #FAFBFC;
            border: 1.5px solid #E5E7EB;
            border-radius: 12px;
            cursor: pointer;
            font-size: 18px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            font-weight: 500;
            color: #1F2937;
          }
          .react-calendar__tile:hover {
            background: #F3F4F6;
            border-color: #D1D5DB;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          }
          .react-calendar__tile--active {
            background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
            color: #FFFFFF;
            border-color: #2563EB;
            font-weight: 700;
            box-shadow: 0 4px 16px rgba(59, 130, 246, 0.25);
          }
          .react-calendar__tile--active:hover {
            transform: translateY(-3px);
            color:#000000;
            background:#D1D5DB;
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.35);
          }
          .react-calendar__tile--now {
            background: #FEF3C7;
            border-color: #FCD34D;
            color: #92400E;
          }
          .react-calendar__navigation {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 32px;
            gap: 12px;
          }
          .react-calendar__navigation button {
            background: #F9FAFB;
            border: 1.5px solid #E5E7EB;
            border-radius: 10px;
            padding: 14px 16px;
            cursor: pointer;
            color: #1F2937;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            font-weight: 600;
          }
          .react-calendar__navigation button:hover {
            background: #F3F4F6;
            border-color: #3B82F6;
            color: #3B82F6;
          }
          .react-calendar__navigation__label {
            font-weight: 700;
            font-size: 22px;
            color: #1F2937;
            flex: 1;
            text-align: center;
            letter-spacing: -0.02em;
          }
          .react-calendar__month-view__days__day--weekend {
            color: #6B7280;
          }
          .react-calendar__month-view__days__day--neighboringMonth {
            color: #D1D5DB;
            opacity: 0.5;
          }
        `}</style>
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          tileContent={tileContent}
          prevLabel={<ChevronLeft size={20} />}
          nextLabel={<ChevronRight size={20} />}
        />
      </div>

      <div
        style={{
          padding: "48px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)",
          border: "0.5px solid gray",
          borderRadius: "16px",
          backgroundColor: "#FFFFFF",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#1F2937",
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            {selectedDate.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#6B7280",
              marginTop: "8px",
              fontWeight: "500",
              margin: "12px 0 0 0",
            }}
          >
            {selectedDate.toLocaleDateString("en-US", { weekday: "long" })}
          </p>
        </div>
        {selectedDateEvents.length === 0 ? (
          <div style={{ textAlign: "center", paddingTop: "64px", paddingBottom: "64px" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#F3F4F6",
                margin: "0 auto 32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Clock style={{ width: "40px", height: "40px", color: "#9CA3AF" }} />
            </div>
            <p style={{ color: "#6B7280", fontWeight: "600", fontSize: "18px", margin: 0 }}>No events scheduled</p>
            <p style={{ fontSize: "16px", color: "#9CA3AF", marginTop: "8px", margin: "12px 0 0 0" }}>
              Select another date to view events
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {selectedDateEvents.map((event, index) => (
              <div
                key={event.id}
                style={{
                  padding: "28px",
                  borderRadius: "12px",
                  border: `1.5px solid ${categoryColors[event.category].border}`,
                  backgroundColor: categoryColors[event.category].bg,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  animation: `slideIn 0.4s ease-out ${index * 0.05}s both`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12)"
                  e.currentTarget.style.transform = "translateY(-4px)"
                  e.currentTarget.style.borderColor = categoryColors[event.category].dot
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none"
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.borderColor = categoryColors[event.category].border
                }}
              >
                <style>{`
                  @keyframes slideIn {
                    from {
                      opacity: 0;
                      transform: translateY(8px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}</style>
                <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      backgroundColor: categoryColors[event.category].dot,
                      marginTop: "8px",
                      flexShrink: 0,
                      boxShadow: `0 0 8px ${categoryColors[event.category].dot}40`,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: "12px",
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontWeight: "700",
                            fontSize: "20px",
                            color: categoryColors[event.category].text,
                            margin: 0,
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {event.title}
                        </h3>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            marginTop: "12px",
                            fontSize: "16px",
                            color: "#6B7280",
                          }}
                        >
                          <Clock style={{ width: "18px", height: "18px", opacity: 0.7 }} />
                          <span style={{ fontWeight: "500" }}>{event.time}</span>
                        </div>
                        {event.location && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              marginTop: "10px",
                              fontSize: "16px",
                              color: "#6B7280",
                            }}
                          >
                            <MapPin style={{ width: "18px", height: "18px", opacity: 0.7 }} />
                            <span>{event.location}</span>
                          </div>
                        )}
                      </div>
                      <span
                        style={{
                          padding: "8px 16px",
                          backgroundColor: categoryColors[event.category].badge,
                          color: categoryColors[event.category].text,
                          borderRadius: "8px",
                          fontSize: "14px",
                          fontWeight: "700",
                          textTransform: "capitalize",
                          flexShrink: 0,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {event.category}
                      </span>
                    </div>
                    {event.description && (
                      <p
                        style={{
                          fontSize: "16px",
                          color: "#6B7280",
                          marginTop: "12px",
                          lineHeight: "1.6",
                          margin: "16px 0 0 0",
                        }}
                      >
                        {event.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
