import { dragItems } from "./constant";
import DraggableItem from "./DraggableItems";

const Toolbox = () => {
  return (
    <div className="p-6 w-3/12  flex flex-col space-y-3">
      <header className="bg-blue-500 text-white p-4 rounded-t-md shadow-md">
        <h1 className="text-2xl font-semibold">Toolbox</h1>
      </header>
      {dragItems.map((item) => (
        <DraggableItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Toolbox;
