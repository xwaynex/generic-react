import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <BrowserRouter>
      {/* Add Navbar */}
      <Navbar />

      {/* Main Application Routing */}
      <main className="flex-grow">
        <Router />
      </main>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  </div>
  );
};

export default App;
