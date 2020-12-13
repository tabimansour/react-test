import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';


import HomePage from "./pages/HomePage";
import PortfoliosPage from "./pages/PortfoliosPage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
            <header className="App-header">
                <HomePage />
            </header>
            <div id="page-body">
                <Route path="/" component={HomePage} exact />
                <Route path="/about" component={AboutPage} />
                <Route path="/portfolios" component={PortfoliosPage} />
                <Route path="/portfolio" component={PortfolioPage} />
                <Route path="/contact" component={ContactPage} />
            </div>
        </div>
    </Router>
  );
}

export default App;