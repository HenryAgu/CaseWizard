const Home = () => {
  return (
    <div className="flex justify-center items-center bg-white h-screen w-screen">
      <div className="shadow-sm w-[90%] lg:w-[32%]">
        <p className="font-bold text-black text-2xl">Case Wizard</p>
        <textarea className="resize-none w-full h-[300px] border-2 text-sm border-[#969696] outline-[#88B4AB] p-2 overflow-y-auto rounded-lg"></textarea>
        <div className="flex items-center justify-between mt-1.5">
          <div className="flex gap-x-2">
            <button className="bg-[#969696] px-3.5 py-1.5 text-white font-medium rounded-lg hover:bg-[#88B4AB] ease-in duration-200">
              Aa
            </button>
            <button className="bg-[#969696] px-3.5 py-1.5 text-white font-medium rounded-lg hover:bg-[#88B4AB] ease-in duration-200">
              AA
            </button>
          </div>
          <div>
            <button className="bg-[#969696] px-5 py-1.5 text-white font-medium rounded-lg hover:bg-[#88B4AB] ease-in duration-200">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
