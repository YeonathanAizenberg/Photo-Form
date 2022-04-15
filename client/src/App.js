
import PhotosByExhibition from "./components/photosByExhibition/PhotosByExhibition";
import PhotosByCountry from "./components/photosByCountry/PhotosByCountry";
import Form from "./components/form/Form";
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(frameImage.jpg)` }}>
      <Form/>
      <div className="buttons-wrapper">
        <PhotosByExhibition/>
        <PhotosByCountry/>
      </div>
    </div>
  );
}

export default App;
