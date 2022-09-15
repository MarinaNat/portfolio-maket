import './App.scss';
import Header from './components/elements/Header/Header';
import Main from './components/elements/Main/Main';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='main'>
        <Main />
      </div>
    </div>
  );
}

export default App;
