import { GrCirclePlay } from "react-icons/gr";

export function MusicCard() {
  return (
    <div className="flex h-fit min-w-[38rem] bg-white/5 rounded-md relative hover:bg-slate-600 group ">
      <div className="h-fit rounded-full flex justify-center">
        <img
          src="https://gatornews.org/wp-content/uploads/2018/05/30858767_1992256170785252_195662287_n-e1525283283142.png"
          alt="Music"
          height={140}
          width={135}
          className="rounded-s-md "
        />
      </div>
      <div className="flex flex-col justify-center ps-6">
        <h3 className="text-white font-bold text-xl">beerbongs & bentleys</h3>
      </div>

      <div className="absolute right-8 top-7 text-green-400 text-6xl hidden group-hover:block duration-100">
        <a href="#" className="text-green-400">
          <GrCirclePlay />
        </a>
      </div>
    </div>
  );
}
