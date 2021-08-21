import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/appRouter";
import NavBar from "./components/navBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
