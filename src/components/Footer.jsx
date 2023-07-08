import { PiMonitorBold } from "react-icons/pi";
import { BiVolume } from "react-icons/bi";
import { LuMic2, LuLayoutDashboard } from "react-icons/lu";
import { CgArrowsExpandRight } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";
import { LiaRandomSolid } from "react-icons/lia";
import {
  AiFillStepBackward,
  AiFillStepForward,
  AiOutlinePlayCircle,
} from "react-icons/ai";

export function Footer() {
  return (
    <div className="flex bg-zinc-950 h-[15vh] w-full border-t border-zinc-700 items-center justify-between">
      <div className="ps-10 flex">
        <img
          src="https://gatornews.org/wp-content/uploads/2018/05/30858767_1992256170785252_195662287_n-e1525283283142.png"
          alt="image thats playing"
          height={80}
          width={80}
        />

        <div className="ps-4 flex flex-col pt-2">
          <h3 className="text-white font-semibold">rockstart</h3>
          <p className="text-zinc-400 ">Post Malone, 21 Savage</p>
        </div>
      </div>

      <div className="flex items-center flex-col gap-4">
        <div className="text-white text-4xl gap-5 flex">
          <LiaRandomSolid />
          <AiFillStepBackward />
          <AiOutlinePlayCircle />
          <AiFillStepForward />
          <FiRepeat />
        </div>
        <div className="flex gap-3 items-center">
          <span className="text-white">0.58</span>
          <div className="h-1 rounded-sm bg-zinc-500 w-[25rem]">
            <div className="h-1 rounded-sm bg-white w-[15rem]"></div>
          </div>
          <span className="text-white">3.21</span>
        </div>
      </div>

      <div className="flex items-center text-white gap-3 text-2xl w-fit pe-3">
        <LuMic2 />
        <LuLayoutDashboard />
        <PiMonitorBold />
        <div className="flex items-center">
          <BiVolume />
          <div className="h-1 rounded-sm bg-zinc-500 w-32">
            <div className="h-1 rounded-sm bg-white w-14"></div>
          </div>
        </div>
        <CgArrowsExpandRight />
      </div>
    </div>
  );
}
