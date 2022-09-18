import './App.scss';
import Footer from './components/elements/Footer/Footer';
import Header from './components/elements/Header/Header';
import Hello from './components/elements/Hello/Hello';
import Posts from './components/elements/Posts/Posts';
import Works from './components/elements/Works/Works';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='main'>
        <Hello />
        <Posts />
        <Works />
      </div>
      <Footer />
    </div>
  );
}

export default App;
