import { Outlet } from "@tanstack/react-router"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App