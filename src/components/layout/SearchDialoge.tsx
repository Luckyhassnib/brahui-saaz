import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Input } from "../ui/input";
import { RiCloseCircleFill } from "react-icons/ri";
import { useState, ChangeEvent } from "react";
import { motion } from "motion/react";
import { albums } from "@/constant/albums";

const SearchDialoge = ({ showSearchModel, setShowSearchModel }: any) => {
  let [value, setValue] = useState("");

  function onValue(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <Dialog
      open={showSearchModel}
      modal={showSearchModel}
      onOpenChange={setShowSearchModel}
    >
      <DialogContent
        forceMount={true}
        className="[&>button:last-child]:hidden bg-black    border-0 p-0"
      >
        <div>
          <Input
            onChange={(e) => onValue(e)}
            placeholder="Search by artists,songs or albums"
            className="py-3 px-6 rounded-full"
          />
        </div>
        {value.length > 0 && value !== "" && (
          <motion.div
            className="p-4 rounded-full flex flex-col"
          >
            {albums
              .filter((album) =>
                album.title
                  .trim()
                  .toLowerCase()
                  .includes(value.trim().toLowerCase())
              )
              .map((album) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  
                  exit={{ opacity: 0, x: -10 }}
                  
                >
                  {album.title}
                </motion.div>
              ))}
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialoge;
