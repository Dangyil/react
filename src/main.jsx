import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import ValidationForm from './App.jsx'
import SuccessPage from './succcespage.jsx'
import './index.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<ValidationForm />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);