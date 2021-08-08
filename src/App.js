import Listing from './components/listing/Listing';
import data from './data/etsy.json';
import './App.css';

function App() {
  return (
    <Listing items={data} />
  );
}

export default App;