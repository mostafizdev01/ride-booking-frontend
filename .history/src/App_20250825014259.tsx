import { toast } from "react-toastify"
import { Button } from "./components/ui/button"

function App() {

  const handleMagic = ()=> {
    // toast.success("Registration Successfull")
    // toast.info("You are not authorize")
    toast.warning("You are not authorize in this route !")
    // toast.error("Payment faild")
    
  }

  return (
    <>
    <h2 className=" text-2xl text-red-500 text-center">WellCome to ride booking.</h2>
    <Button onClick={handleMagic} variant={"outline"}>See Magic</Button>
    </>
  )
}

export default App
