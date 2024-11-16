// App.jsx
import CanvasComponet from "./CanvasComponet";
import Data from "./Data";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-wrap">
      {Data.map((canvasDets, index) => (
        <CanvasComponet key={index} details={canvasDets} />
      ))}
    </div>
  );
};

export default App;
