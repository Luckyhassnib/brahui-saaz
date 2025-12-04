import React, { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { AnimatePresence, motion } from "motion/react";
import Avatar from "boring-avatars";
import {
  RiArrowDropLeftFill,
  RiArrowDropLeftLine,
  RiArrowDropRightLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiFileSearchFill,
  RiPulseAiFill,
  RiSearchLine,
} from "react-icons/ri";
import SearchDialoge from "./SearchDialoge";

const Header = () => {
  let input = useRef<HTMLInputElement>(null);

  const [showSearchModel, setShowSearchModel] = useState(false);

  function focusMe() {
    setShowSearchModel(!showSearchModel);
    input.current?.disabled;
  }

  return (
<>
    <div className="flex sticky  p-4 gap-x-2 items-center justify-between w-full">
      <div className="text-stone-600 flex">
        <RiArrowLeftSLine size={30} />
        <RiArrowRightSLine size={30} />
        <h1>Hello</h1>
      </div>
      <div
        onClick={() => focusMe()}
        className="w-[60%] hover:cursor-text hover:bg-black/5   transition-all ease duration-200  py-2 px-4 shadow shadow-stone-900/90 flex bg-stone-800/20 rounded-full items-center"
      >
        <div className="text-stone-400 in-focus-within:text-stone-700">
          <RiSearchLine size={20} />
        </div>
        <Input
          ref={input}
          disabled={showSearchModel}
          placeholder="Search by artists,songs or albums"
          className="placeholder:text-stone-600 text-lg   placeholder:text-lg bg-transparent outline-0  py-2 border-0 "
        />
      </div>
      <div className="flex items-center w-[40%] relative flex-row-reverse">
        <Avatar className="absolute z-20" name="Siraj" variant="beam" />
        <div className="p-3 absolute overflow-hidden  right-8 rounded-full">
          <div className="blur-lg absolute bg-gray-600 w-full h-full"></div>
          <div className="text-white animate-pulse">
            <RiPulseAiFill size={20} />
          </div>
        </div>
      </div>
    </div>
    
    {showSearchModel && (
        <AnimatePresence>
          <motion.div
            className="absolute"
            key={"model"}
            initial={{opacity:0}}
            exit={{opacity:0}}
          >
            <SearchDialoge
              setShowSearchModel={setShowSearchModel}
              showSearchModel={showSearchModel}
            />
            
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Header;
