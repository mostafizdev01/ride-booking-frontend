import { toast } from "react-toastify"
import { Button } from "./components/ui/button"
import Hero from "./components/hero"

function App() {

  const handleMagic = ()=> {
    // toast.success("Registration Successfull")
    toast.info("You are already driver")
    // toast.warning("You are not authorize")
    // toast.error("Payment faild")
    
  }

  return (
    <>
    <Hero />
    <Button onClick={handleMagic} variant={"outline"}>See Magic</Button>
    </>
  )
}

export default App
