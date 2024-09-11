import './App.css';
import Header from './components/Header';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<EmployeeList/>}/>
                <Route index element={<EmployeeList/>}/>
                <Route path="/employee-list" element={<EmployeeList/>}/>
                <Route path="/add-employee" element={<AddEmployee/>}/>
            </Routes>
        </Router>
    );
}

export default App;
