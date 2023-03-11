import './App.css';
import Story from './components/story.js';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1>test 01</h1>
        <h2>test 01</h2>
        <p>container width: fit-content;</p>
        <p>container margin: 20px auto;</p>
      </header>
      <Story 
          name='Akira'
          nickname='La Loca'
          imageid='akira' />
      <Story 
          name='Sara'
          nickname='The Baby'
          imageid='sara' />
      <div className='cont'>
      <div className='inner-div div-1'>
      <p>container width is not set, it takes 100% of parent </p>
        </div>
        <div className='inner-div div-2'>
          <p>container width: fit-content</p>
        </div>
        <div className='inner-div div-3'>
          <p>container width: fit-content</p>
          <p>+</p>
          <p>container margin-left: auto</p>
          <p>container margin-right: auto</p>
        </div>
      </div>
    </div>
  );
}

export default App;
