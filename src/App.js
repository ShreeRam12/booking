import './App.css';
import Bookingpage from './components/Bookingpage';
import Filter from './components/Filter';
import Footer from './components/Footer';
import Navbar from './components/Navabar';
import Trip from './components/Trip';

function App() {
  const handleTripTypeChange = (tripType) => {
    console.log("Selected Trip Type:", tripType);
  };
  return (
    <div>
      <Navbar />
      <Bookingpage onTripTypeChange={handleTripTypeChange} />
      <Footer />
    </div>
  );
}

export default App;
