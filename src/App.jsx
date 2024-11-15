import CanvasComponet from "./CanvasComponet";
import Data from "./Data";

const App = () => {
  return (
    <>
      <div className="w-full bg-black h-screen flex flex-wrap">
        {Data.map((item, index) => {
          <div key={index}>
            {Data.map((canvasDets, index) => {
              <CanvasComponet key={index} details={canvasDets} />;
            })}
          </div>;
        })}
      </div>
    </>
  );
};

export default App;
