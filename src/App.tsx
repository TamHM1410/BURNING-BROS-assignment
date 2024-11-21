    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


    ///@components
    import NotFoundPage from "./pages/protected/Notfound";
    import Header from "./components/Header";
    import HomeView from "./pages/Home/Home-view";

    //@style
    import "./App.css";


    function App() {
      return (
        <>
          <Router>
            <Header/>
            <Routes>
              <Route path="/" element={<HomeView/>}/>
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </Router>
        </>
      );
    }

    export default App;
