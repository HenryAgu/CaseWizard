import { ChangeEvent, useState } from "react";
import copy from "copy-text-to-clipboard";
import { Toaster, toast } from "sonner";

const Home = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isLowerCaseClicked, setIsLowerCaseClicked] = useState<boolean>(false);
  const [isUpperCaseClicked, setIsUpperCaseClicked] = useState<boolean>(false);
  const [isCapitalizedClicked, setIsCapitalizedCaseClicked] = useState<boolean>(false);
  const handleInputChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const toUppercase = (str:string) => {
    return str.toUpperCase();
  };

  const toLowercase = (str:string) => {
    return str.toLowerCase();
  };

  const toCapitalize = (str:string) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const handleUppercase = () => {
    setInputValue(toUppercase(inputValue));
    setIsUpperCaseClicked(true);
    setIsLowerCaseClicked(false);
    setIsCapitalizedCaseClicked(false);
  };

  const handleLowercase = () => {
    setInputValue(toLowercase(inputValue));
    setIsLowerCaseClicked(true);
    setIsUpperCaseClicked(false);
    setIsCapitalizedCaseClicked(false);
  };
  const handleCapitalize = () => {
    setInputValue(toCapitalize(inputValue));
    setIsCapitalizedCaseClicked(true);
    setIsUpperCaseClicked(false);
    setIsLowerCaseClicked(false);
  };
  const handleCopyToClipboard = () => {
    if (inputValue === "") {
      toast.error("Text area is empty!",{
        className: "text-red-600"
      });
    } else if (inputValue !== "") {
      copy(inputValue);
      toast.success("Copied to clipboard!",{
        className: "text-green-600"
      });
    }
  };
  return (
    <div className="flex justify-center items-center bg-white mt-10 lg:mt-20 w-screen ">
      <Toaster />
      <div className="w-[90%] lg:w-[38%]">
        <p className="text-center lg:text-left font-bold text-black text-2xl lg:text-4xl leading-10 mb-2 font-open-sans">
          Case Wizard
        </p>
        <textarea
          className="resize-none w-full h-[300px] lg:h-[450px] bg-[#F6F6F6] border border-[#E2E2E2] outline-[#E2E2E2] p-3 font-normal text-sm lg:text-xl lg:pt-5 overflow-y-auto rounded-lg"
          placeholder="Enter text here"
          value={inputValue}
          onChange={handleInputChange}
        ></textarea>
        <div className="flex items-center justify-between mt-1.5">
          <div className="flex items-center gap-x-3 border bg-[#F6F6F6] border-[#E2E2E2] py-2.5 px-8 rounded-lg">
            <button
              className={`font-semibold ${
                isUpperCaseClicked ? "text-black" : "text-[#AEAEAE]"
              } text-sm lg:text-base hover:text-black transition duration-400 ease-in-out `}
              onClick={handleUppercase}
            >
              AA
            </button>
            <button
              className={`font-semibold ${
                isLowerCaseClicked ? "text-black" : "text-[#AEAEAE]"
              } text-sm lg:text-base hover:text-black transition duration-400 ease-in-out `}
              onClick={handleLowercase}
            >
              aa
            </button>
            <button
              className={`font-semibold ${
                isCapitalizedClicked ? "text-black" : "text-[#AEAEAE]"
              } text-sm lg:text-base hover:text-black transition duration-400 ease-in-out `}
              onClick={handleCapitalize}
            >
              Aa
            </button>
          </div>
          <div>
            <button
              className="px-6 py-2.5 bg-[#F6F6F6] text-black border border-[#E2E2E2] font-medium rounded-lg text-sm lg:text-base"
              onClick={handleCopyToClipboard}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
