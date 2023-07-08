export function PlayList() {
  return (
    <div className="flex flex-col h-[25rem] w-[18rem] bg-white/5 rounded-md relative hover:bg-slate-600 group ">
      <div className="h-fit w-full flex justify-center rounded-full pt-3">
        <img
          src="https://i.scdn.co/image/ab6761610000e5ebb894ef9fa437b0389c5567cc"
          alt="Music"
          width={255}
          className=" h-[16rem]"
        />
      </div>
      <div className="flex flex-col justify-center ps-4 pt-4">
        <h3 className="text-white font-bold text-xl">Release Radar</h3>

        <p className="text-zinc-400 pt-4">
          Catch all the latest music from artits you follow
        </p>
      </div>
    </div>
  );
}
