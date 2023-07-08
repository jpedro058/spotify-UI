import { repeatComponent } from "repeat-component";
import { SideBar } from "./components/Sidebar";
import "./index.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { MusicCard } from "./components/MusicCard";
import { PlayList } from "./components/PlayList";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-zinc-800 flex min-h-full flex-col">
      <div className=" min-h-[90vh] flex ">
        <SideBar />

        <div className="flex-1 flex flex-col bg-zinc-800">
          <div className="mt-8 ps-8 flex gap-6">
            <div className="bg-zinc-900 w-fit p-1 rounded-full text-white text-3xl flex items-center justify-center">
              <a href="#">
                <MdKeyboardArrowLeft />
              </a>
            </div>
            <div className="bg-zinc-900 w-fit p-1 rounded-full text-white text-3xl flex items-center justify-center">
              <a href="#">
                <MdKeyboardArrowRight />
              </a>
            </div>
          </div>

          <div className="flex flex-col w-full mt-14 ps-8">
            <h3 className="text-white text-4xl font-semibold">
              Good afternoon
            </h3>
            <div className="flex pt-6 w-full gap-6 h-fit flex-wrap">
              {repeatComponent(MusicCard, 6)}
            </div>
          </div>

          <div className="flex flex-col w-full mt-8 ps-8">
            <h3 className="text-white text-4xl font-semibold">Made for João</h3>
            <div className="flex pt-6 w-full gap-7 h-fit flex-wrap">
              {repeatComponent(PlayList, 6)}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
