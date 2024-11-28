import { DragItem } from "./type";

export const dragItems: DragItem[] = [
  {
    id: 1,
    type: "INPUT",
    content: (
      <input
        id="Name"
        placeholder="...Name"
        type="text"
        className="h-10 text-black px-4 text-sm border border-gray-300 rounded-md shadow-sm transition-all duration-300 w-full placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
      />
    ),
  },

  {
    id: 2,
    type: "SELECT",
    content: (
      <select className="h-10 text-black px-4 text-sm border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    ),
  },
  {
    id: 6,
    type: "TEXTAREA",
    content: (
      <>
        <label className="block mb-2 text-sm font-medium text-white dark:text-white">
          Your message
        </label>
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-white bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </>
    ),
  },
  {
    id: 5,
    type: "RADIO",
    content: (
      <div className="flex items-center space-x-2">
        <input type="radio" id="radio1" className="h-4 w-4" />
        <label htmlFor="radio1" className="text-sm">
          Radio Button
        </label>
      </div>
    ),
  },
];
