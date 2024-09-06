import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";

const localizer = dayjsLocalizer(dayjs);

const events = [
  {
    id: 1,
    title: "Long Event",
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
  },
];

export default function Planner() {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        defaultDate={new Date()}
        defaultView="month"
        style={{ height: "100vh" }}
      />
    </div>
  );
}
