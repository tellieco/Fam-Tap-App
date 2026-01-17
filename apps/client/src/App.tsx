import { useState } from "react";
import { Button } from "./components/ui/button";
import { ButtonGroup } from "./components/ui/button-group";
import { SunIcon, MoonIcon, ClockIcon } from "@radix-ui/react-icons";
import { HoverCard, HoverCardTrigger } from "@radix-ui/react-hover-card";
import {
  DropletsIcon,
  HomeIcon,
  LucideBaby,
  MilkIcon,
  SettingsIcon,
  ToiletIcon,
  UtensilsIcon,
} from "lucide-react";
// import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div
      className="min-h-screen flex flex-col overflow-hidden box-border"
      style={{
        background: " linear-gradient(130deg,#F5D3ED, #C5E0A8)",
      }}
    >
      <header className="border-b p-3">
        <div className="flex justify-between items-center">
          <span className="flex items-center">
            <LucideBaby />
            "Baby Name"
          </span>
          <div className="flex flex-col items-center ">
            <span>Last "ACTIVITY"</span>
            <span>"TIME"</span>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto gap-4">
        <div className="flex items-center justify-center">
          <ButtonGroup>
            <Button
              variant="ghost"
              size="lg"
              className="flex flex-col w-36 h-36"
            >
              <MoonIcon className="w-12 h-12" />
              <span className="text-xl">Sleep</span>
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button
              variant="ghost"
              size="lg"
              className="flex flex-col w-36 h-36"
            >
              <SunIcon className="w-12 h-12" />
              <span className="text-xl">Wake</span>
            </Button>
          </ButtonGroup>
        </div>

        <div className="flex items-center justify-center ">
          <ButtonGroup>
            <Button
              variant="ghost"
              size="lg"
              className="flex flex-col w-36 h-36"
            >
              <MilkIcon className="w-12 h-12" />
              <span className="text-xl">Milk</span>
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button
              variant="ghost"
              size="lg"
              className="flex flex-col w-36 h-36"
            >
              <UtensilsIcon className="w-12 h-12" />
              <span className="text-xl">Food</span>
            </Button>
          </ButtonGroup>
        </div>
        <div className="flex items-center justify-center">
          <ButtonGroup>
            <Button
              variant="ghost"
              size="lg"
              className="flex flex-col w-36 h-36"
            >
              <DropletsIcon className="w-12 h-12" />
              <span className="text-xl">Pee</span>
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button
              variant="ghost"
              size="lg"
              className="flex flex-col w-36 h-36"
            >
              <ToiletIcon className="w-12 h-12" />
              <span className="text-xl">Poo </span>
            </Button>
          </ButtonGroup>
        </div>
      </main>
      <footer className="border-t p-3">
        <div className="flex justify-center">
          <ButtonGroup>
            <Button variant="ghost" size="lg" className="flex flex-col">
              <HomeIcon className="h-5 w-5" /> Fam Tap
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="ghost" size="lg" className="flex flex-col">
              <ClockIcon className="h-5 w-5" />
              Today
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="ghost" size="lg" className="flex flex-col">
              <SettingsIcon className="h-5 w-5" />
              Settings
            </Button>
          </ButtonGroup>
        </div>
      </footer>
    </div>
  );
}

export default App;
// {
//   /* <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a> */
// }
// {
//   /* <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a> */
// }
