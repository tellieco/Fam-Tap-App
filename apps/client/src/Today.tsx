import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { ButtonGroup } from "./components/ui/button-group";
import { SunIcon, MoonIcon, ClockIcon } from "@radix-ui/react-icons";
import {
  DropletsIcon,
  HomeIcon,
  LucideBaby,
  MilkIcon,
  ToiletIcon,
  UtensilsIcon,
} from "lucide-react";
import api from "./api";
import { NavLink } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";

const iconMap = {
  MoonIcon: MoonIcon,
  SunIcon: SunIcon,
  MilkIcon: MilkIcon,
  UtensilsIcon: UtensilsIcon,
  DropletsIcon: DropletsIcon,
  ToiletIcon: ToiletIcon,
};

function Today() {
  const [activities, setActivities] = useState([]);
  const [todayLogs, setTodayLogs] = useState<Logs | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchActivities = await api.getAllActivities();
      setActivities(fetchActivities.activities);
      console.log(fetchActivities.activities);

      const fetchTodayLogs = await api.getTodayLogs();
      setTodayLogs(fetchTodayLogs.logs);
      console.log(fetchTodayLogs.logs);
    };
    fetchData();
  }, []);

  let dateTop = new Date().toDateString();
  if (todayLogs && todayLogs.length > 0) {
    dateTop = new Date(todayLogs[0].timeStamp).toDateString();
  }

  return (
    <div
      className="min-h-screen flex flex-col overflow-hidden box-border"
      style={{
        background: " linear-gradient(130deg,#F5D3ED, #C5E0A8)",
      }}
    >
      <header className="border-b p-3">
        <div className="flex justify-between items-center">
          <span className="flex items-center text-2xl">
            <LucideBaby /> Esla
          </span>
          <div className="flex flex-start">
            <span> Today Timeline </span>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-auto gap-4 flex justify-center">
        <div className="place-items-center">
          <Table>
            {/* <TableCaption>Today TimeLine</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead className="text-xl"> {dateTop} </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {todayLogs?.map((log) => {
                const activity = activities.find(
                  (a) => a.id === log.activityId,
                );

                const time = new Date(log.timeStamp).toLocaleTimeString();

                const IconComponent = activity ? iconMap[activity.icon] : null;

                return (
                  <TableRow key={log.id}>
                    <TableCell>
                      {<IconComponent />}
                      {activity?.name}
                    </TableCell>
                    <TableCell>{time}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </main>
      ;
      <footer className="border-t p-3">
        <nav className="flex justify-center">
          <ButtonGroup>
            <NavLink to="/">
              <Button variant="ghost" size="lg" className="flex flex-col">
                <HomeIcon className="h-5 w-5" />
                Fam Tap
              </Button>
            </NavLink>
          </ButtonGroup>
          <ButtonGroup>
            <NavLink to="/today">
              <Button variant="ghost" size="lg" className="flex flex-col">
                <ClockIcon className="h-5 w-5" />
                Today
              </Button>
            </NavLink>
          </ButtonGroup>
        </nav>
      </footer>
    </div>
  );
}

export default Today;
