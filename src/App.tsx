// App.tsx
import Toolbox from "./components/Toolbox";
import Editor from "./components/Editor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex   p-4 justify-center">
        <Editor />
        <Toolbox />
      </div>
    </DndProvider>
  );
}

export default App;
