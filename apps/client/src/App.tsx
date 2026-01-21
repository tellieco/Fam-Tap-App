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
import { formatDistanceToNow } from "date-fns";

const iconMap = {
  MoonIcon: MoonIcon,
  SunIcon: SunIcon,
  MilkIcon: MilkIcon,
  UtensilsIcon: UtensilsIcon,
  DropletsIcon: DropletsIcon,
  ToiletIcon: ToiletIcon,
};

function App() {
  const [activities, setActivities] = useState([]);
  const [latestLogs, setLatestLogs] = useState<Logs | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchActivities = await api.getAllActivities();
      setActivities(fetchActivities.activities);
      console.log(fetchActivities.activities);

      const fetchLatestLogs = await api.getLatestLogs();
      setLatestLogs(fetchLatestLogs.logs);
      console.log(fetchLatestLogs.logs);
    };
    fetchData();
  }, []);

  const onClick = async (activityId: number) => {
    try {
      const babyId = 2; //ps. hardcode babyId
      await api.createLog({ babyId, activityId });
      const updatedLatestLogs = await api.getLatestLogs();
      setLatestLogs(updatedLatestLogs.logs);
    } catch (error) {
      console.error("Error creating log.");
    }
  };
  const latestActivity = activities.find(
    (a) => a.id === latestLogs?.activityId,
  );
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
          <div className="flex flex-col items-center ">
            <span> Last {latestActivity?.name} </span>
            <span>
              {latestLogs?.timeStamp &&
                formatDistanceToNow(new Date(latestLogs.timeStamp), {
                  addSuffix: true,
                })}
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto gap-4 flex justify-center">
        <div className="grid grid-cols-2 place-items-center">
          {activities.map((activity) => {
            const IconComponent = iconMap[activity.icon];
            return (
              <div key={activity.id} className="w-[150px] h-[150px]">
                <button
                  className="flex flex-col w-full h-full"
                  onClick={() => onClick(activity.id)}
                >
                  {IconComponent && <IconComponent className="w-full h-full" />}
                  <span className="text-3xl">{activity.name}</span>
                </button>
              </div>
            );
          })}
        </div>
      </main>
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

export default App;
