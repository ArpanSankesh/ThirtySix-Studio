import CanvasComponet from "./components/CanvasComponet"

const App = () => {
  return (
    <>
    <div className="w-full h-screen bg-zinc-900 text-white flex flex-wrap">
      <CanvasComponet startIndex={0}/>
    </div>
    </>
  )
}

export default App