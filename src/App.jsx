import CanvasComponet from "./components/CanvasComponet"

const App = () => {
  return (
    <>
    <div className="w-full h-screen bg-zinc-900 text-white flex flex-wrap">
      <CanvasComponet startIndex={0}/>
      <CanvasComponet startIndex={150} />
      <CanvasComponet startIndex={300} />
      <CanvasComponet startIndex={450} />
      <CanvasComponet startIndex={600} />
      <CanvasComponet startIndex={750} />
      <CanvasComponet startIndex={900} />
      <CanvasComponet startIndex={1050} />
    </div>
    </>
  )
}

export default App