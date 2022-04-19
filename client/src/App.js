
import PhotosByExhibition from "./components/photosByExhibition/PhotosByExhibition";
import PhotosByCountry from "./components/photosByCountry/PhotosByCountry";
import Form from "./components/form/Form";
import { useState } from "react";
import './App.css';

function App() {
  const [dataLoaded, setDataLoaded] = useState(false)

  return (
    <div className="App" style={{backgroundImage: `url(frameImage.jpg)` }}>
      <Form
      setDataLoaded={setDataLoaded}
      />
      <div className="buttons-wrapper">
        <PhotosByExhibition
        dataLoaded={dataLoaded}
        />
        <PhotosByCountry
        dataLoaded={dataLoaded}
        />
      </div>
    </div>
  );
}

export default App;
