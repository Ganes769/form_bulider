// PreviewMode.tsx
import { DragItem } from "./type";

interface PreviewModeProps {
  item: DragItem;
}

const PreviewMode = ({ item }: PreviewModeProps) => {
  switch (item.type) {
    case "INPUT":
      return (
        <div className="flex items-center space-x-2">
          <div className="flex-grow">
            <div className="h-10 text-black px-4 text-sm border border-gray-300 rounded-md shadow-sm w-full placeholder:text-stone-400"></div>
          </div>
        </div>
      );
    case "RADIO":
      return (
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <label htmlFor={`radio-${item.id}`} className="text-sm">
              Radio Button
            </label>
          </div>
        </div>
      );
    case "SELECT":
      return (
        <div className="flex items-center space-x-2">
          <div className="flex-grow"></div>
        </div>
      );
    case "TEXTAREA":
      return (
        <div className="flex flex-col space-y-2">
          <div>
            <div className="block mb-2 text-sm font-medium text-black dark:text-black">
              Your message
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default PreviewMode;
