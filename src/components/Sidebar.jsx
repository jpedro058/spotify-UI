import { RiHome3Line, RiSearchLine } from "react-icons/ri";
import { BiLibrary } from "react-icons/bi";
import { repeatComponent } from "repeat-component";

export function SideBar() {
  return (
    <div className="min-h-[90vh] bg-zinc-950 min-w-[21rem] ps-8 pe-8">
      <h2 className="mt-6 text-2xl text-gray-300">SideBar</h2>

      <ul className="flex flex-col gap-4 mt-8 text-3xl gap pb-8">
        <li>
          <a href="#" className="flex text-white items-center">
            <RiHome3Line />{" "}
            <span className="ps-4 text-base font-bold">Home</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex text-white items-center">
            <RiSearchLine />{" "}
            <span className="ps-4 text-base font-bold">Search</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex text-white items-center">
            <BiLibrary />{" "}
            <span className="ps-4 text-base font-bold">Library</span>
          </a>
        </li>
      </ul>

      <div className="border-t border-gray-400 pt-8 gap-4 flex flex-col">
        {repeatComponent(
          () => (
            <a
              href="#"
              className="flex text-gray-500 items-center hover:text-gray-400 font-semibold text-base"
            >
              My Playlist
            </a>
          ),
          15
        )}
      </div>
    </div>
  );
}
