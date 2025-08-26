import { Button } from "./components/ui/button"

function App() {

  const handleMagic = ()=> {
    console.log("magic is clicked...");
    
  }

  return (
    <>
    <h2 className=" text-2xl text-red-500 text-center">WellCome to ride booking.</h2>
    <Button onClick={handleMagic} variant={"outline"}>See Magic</Button>
    </>
  )
}

export default App
