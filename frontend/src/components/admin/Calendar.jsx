import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Calendar() {
  return (
    <div className="">
        
      <div className="bg-cyan-700 m-4 p-6 w-200 h-100 rounded-xl shadow-md">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          height={"100%"}
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "",
          }}
        />
      </div>
    </div>
  );
}
