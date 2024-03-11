import { Box } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./navbar/NavBar";
import MainRouter from "./routers/MainRouter";
function App() {
  return (
    <div className=" h-full bg-blue-300 maincss">
    
      <MainRouter />
    </div>
  );
}

export default App;
