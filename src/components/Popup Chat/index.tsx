import clsx from "clsx";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const PopupChat = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={clsx(
        "transition-all w-[300px] overflow-hidden h-full rounded-tl-md rounded-tr-md  z-30 bg-white absolute right-[4.5rem] bottom-0 border border-[#eee]",
        isOpen ? "h-[500px]" : "h-0 hidden"
      )}
    >
      <div className="w-full h-full relative">
        <div className="absolute flex p-2 top-0 w-full h-[52px] border-b border-b-[#eee] bg-white">
          <Button
            onClick={onClose}
            className="ml-auto"
            variant="outline"
            size="sm"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="w-full h-full bg-blue-50"></div>
        <div className="p-2 w-full absolute bottom-0 h-[52px] border-t border-t-[#eee] bg-white">
          <Input
            className="h-fit p-2 border-none focus-visible:outline-none focus-visible:ring-transparent"
            placeholder="Say something..."
          />
        </div>
      </div>
    </div>
  );
};

export default PopupChat;
