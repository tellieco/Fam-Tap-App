import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { ButtonGroup } from "./components/ui/button-group";
import { ClockIcon } from "@radix-ui/react-icons";
import { HomeIcon, LucideBaby } from "lucide-react";
import api from "./api";
import { NavLink } from "react-router-dom";

function Today() {
  const [todayLogs, setTodayLogs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchTodayLogs = await api.getTodayLogs();
      setTodayLogs(fetchTodayLogs.logs);
      console.log(fetchTodayLogs.logs);
    };
    fetchData();
  }, []);

  //   const dateString = new Date({});
  //   const time = dateString.toLocaleTimeString();
  //   const date = dateString.toDateString();

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
        <div className="grid grid-cols-2 place-items-center">
          <span className="text-3xl">TODAY</span>
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

export default Today;
