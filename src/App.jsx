import { useState } from "react"


function App() {
  const [color, changeColor] = useState("lightblue")

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-end gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
            onClick={() => changeColor("red")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "red"}}>
              Red
            </button>
            <button
           onClick={() => changeColor("green")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "green"}}>
              Green
            </button>
            <button
            onClick={() => changeColor("blue")} 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "blue"}}>
              Blue
            </button>
            <button
            onClick={() => changeColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{background: "pink"}}>
              Pink
            </button>
            <button
            onClick={() => changeColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{background: "purple"}}>
              Purple
            </button>
            <button
            onClick={() => changeColor("gray")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{background: "gray"}}>
              Gray
            </button>
            <button
            onClick={() => changeColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "black"}}>
              Black
            </button>
            <button
            onClick={() => changeColor("brown")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "brown"}}>
              Brown
            </button>
            <button
            onClick={() => changeColor("white")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{background: "white"}}>
              White
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
