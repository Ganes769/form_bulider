import { useDrop } from "react-dnd";
import { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { DragItem, FormValueTypes, Item } from "./type";
import { zodResolver } from "@hookform/resolvers/zod";
import Error from "./Error";
import { schema } from "./utils/schema";

const Editor = () => {
  const [isPreviewMode, setIsPreviewMode] = useState(false); // State for preview mode
  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      namefield: "",
      message: "",
      select: "",
      radio: "",
    },
  });
  const { errors } = formState;
  const [items, setItems] = useState<DragItem[]>([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ["INPUT", "RADIO", "SELECT", "TEXTAREA"],
    drop: (item: { type: Item }) => {
      setItems((prevItems) => [
        ...prevItems,
        { id: prevItems.length + 1, type: item.type },
      ]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const onSubmit = (data: FormValueTypes) => {
    console.log("Form Data:", data);
    alert(JSON.stringify(data, null, 2));
  };

  const onRemove = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const renderDroppedItem = useMemo(
    () => (item: DragItem) => {
      switch (item.type) {
        case "INPUT":
          return (
            <div className="flex items-center space-x-2">
              <div className="flex-grow">
                {isPreviewMode ? (
                  <div className="h-10 text-black px-4 text-sm border border-gray-300 rounded-md shadow-sm w-full placeholder:text-stone-400">
                    {control._formValues.namefield}
                  </div>
                ) : (
                  <Controller
                    control={control}
                    name="namefield"
                    render={({ field }) => (
                      <input
                        {...field}
                        placeholder="...Name"
                        type="text"
                        className="h-10 text-black px-4 text-sm border border-gray-300 rounded-md shadow-sm w-full placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    )}
                  />
                )}
                {errors.namefield && <Error message="This Field is Required" />}
              </div>
              <button
                type="button"
                onClick={() => onRemove(item.id)}
                className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          );
        case "RADIO":
          return (
            <div className="flex items-center justify-between space-x-2">
              <div className="flex items-center space-x-2">
                <label htmlFor={`radio-${item.id}`} className="text-sm">
                  Radio Button
                </label>
                {isPreviewMode ? (
                  <div>{control._formValues.radio || "Not selected"}</div>
                ) : (
                  <Controller
                    control={control}
                    name={`radio`}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="radio"
                        id={`radio-${item.id}`}
                        className="h-4 w-4"
                      />
                    )}
                  />
                )}
              </div>
              <button
                type="button"
                onClick={() => onRemove(item.id)}
                className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          );
        case "SELECT":
          return (
            <div className="flex items-center space-x-2">
              <div className="flex-grow">
                {isPreviewMode ? (
                  <div>{control._formValues.select || "Not selected"}</div>
                ) : (
                  <Controller
                    control={control}
                    name={`select`}
                    render={({ field }) => (
                      <select
                        {...field}
                        className="h-10 text-black px-4 text-sm border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                        <option value="">Select an option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    )}
                  />
                )}
              </div>
              <button
                type="button"
                onClick={() => onRemove(item.id)}
                className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          );
        case "TEXTAREA":
          return (
            <div className="flex flex-col space-y-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-black dark:text-black">
                  Your message
                </label>
                {isPreviewMode ? (
                  <div>{control._formValues.message || "No message"}</div>
                ) : (
                  <Controller
                    control={control}
                    name={`message`}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        id="message"
                        rows={4}
                        className="block p-2.5 w-full text-sm text- bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write your thoughts here..."
                      />
                    )}
                  />
                )}
              </div>
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        default:
          return null;
      }
    },
    [isPreviewMode, control, errors] // Memoize based on relevant dependencies
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4 mr-4"
    >
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 rounded-t-md shadow-md">
        <h1 className="text-2xl font-semibold">Drag-and-Drop Form Builder</h1>
        <p className="text-sm">
          setValue Drag components into the canvas to build your form.
        </p>
      </header>

      {items.length > 0 && (
        <button
          type="button"
          onClick={() => setIsPreviewMode(!isPreviewMode)}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
        >
          {isPreviewMode ? "Switch to Edit Mode" : "Switch to Preview Mode"}
        </button>
      )}
      {/* Drag-and-Drop Canvas */}
      <div
        ref={drop}
        className={`min-h-screen min-w-[100vh] bg-gray-100 border border-gray-300 p-4 rounded-b-md shadow-md transition-colors duration-200 ${
          isOver ? "bg-blue-100 border-blue-500" : ""
        }`}
      >
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="my-2 flex flex-col gap-4">
              {renderDroppedItem(item)}
            </div>
          ))
        ) : (
          <div className="text-gray-500 text-center py-10">
            Drag components here to start building your form.
          </div>
        )}

        {/* Submit Button */}
        {items.length > 0 && !isPreviewMode && (
          <div className="mt-4 text-right">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Submit Form
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default Editor;
