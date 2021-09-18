import './App.css';
import MyInput from './Components/MyInput';

function App() {
  return (
    <div style={{ width: "660px", margin: "50px auto 0 auto" }}>
      <div className="AppDiv">
        <MyInput Content="Content1" />
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="AppDiv">
        <MyInput Content="Content2" />
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="AppDiv">
        <MyInput Content="Content3" />
      </div>
    </div>
  );
}

export default App;
