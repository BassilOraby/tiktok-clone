import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video url = "/Videos/v1.mp4"/>
        <Video url = "/Videos/v1.mp4"/>
      </div>
    </div>
  );
}

export default App;
