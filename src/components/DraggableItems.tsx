import { useDrag } from "react-dnd";
import { DragItem } from "./type";

type DraggableItemProps = {
  item: DragItem;
};

const DraggableItem = ({ item }: DraggableItemProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: item.type,
    item: { id: item.id, type: item.type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`bg-white p-6 border rounded-md shadow-sm ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {item.content}
    </div>
  );
};

export default DraggableItem;
