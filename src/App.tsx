import LoginPage from "./components/login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./components/main";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/game" element={<Main/>} />
            </Routes>
        </Router>
    );
}

export default App;
