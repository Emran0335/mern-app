import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboad";
import Login from "./pages/Login";
import Register from "./pages/Register";
import store from "./app/store";
import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <div className="container">
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </Router>
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
