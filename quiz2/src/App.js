import logo from './logo.svg';
import './App.scss';
import image1 from './image/1.png';
import image2 from './image/2.png';
import image3 from './image/3.png';


function App() {
  return (
    <div className="App">
      <div className="item">
        <img src={image1} alt="야자수와 보름달" />
        <div className="boxColor red">야자수와 보름달</div>
      </div>
      <div className="item">
        <img src={image2} alt="까마귀와 보름달" />
        <div className="boxColor blue">까마귀와 보름달</div>
      </div>
      <div className="item">
        <img src={image3} alt="초승달" />
        <div className="boxColor yellow">초승달</div>
      </div>
    </div>
  );
}

export default App;
