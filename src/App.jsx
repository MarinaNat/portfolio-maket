import './App.scss';
import Header from './components/elements/Header/Header';
import Hello from './components/elements/Hello/Hello';
import Posts from './components/elements/Posts/Posts';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='main'>
        <Hello />
        <Posts />
      </div>
    </div>
  );
}

export default App;
