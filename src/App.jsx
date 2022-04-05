import Header from "./views/Header";
import { Footer } from "./views/Footer";
import "./assets/styles/global.css";
import AppRoutes from "./Routes";

function App() {
  return (
    <>
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
