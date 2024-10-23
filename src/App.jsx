import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from '../src/Components/Footer/Footer.jsx';


function App() {
  return (
    
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4">
          <Outlet />
        </main>
        <Footer />
      </div>
  );
}

export default App;
