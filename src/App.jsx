import CanvasComponet from "./CanvasComponet";
import Data from "./Data";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-wrap">
      {Data.map((item, index) => {
        return (
          <div key={index}>
            {Data.map((canvasDets, index) => {
              return <CanvasComponet key={index} details={canvasDets} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default App;
