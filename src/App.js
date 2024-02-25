import './App.css';
import Banner from './components/Banner';
import Causial from './components/Causial';
import Digital from './components/Digital';
import Footer from './components/Footer';
import Header from './components/Header';
import Run from './components/Run';
import Testmol from './components/Testmol';
import Watch from './components/Watch';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Digital />
      <Causial />
      <Testmol />
      <Watch />
      <Footer />
      <Run />
    </div>
  );
}

export default App;
