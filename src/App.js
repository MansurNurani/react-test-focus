import './App.css';
import MyInput from './Components/MyInput';

function App() {
  return (
    <div style={{ width: "650px", margin: "50px auto 0 auto",display:"flex" }}>
      <div className="AppDiv">
        <MyInput Content="Content1" />
      </div>
      <div className="AppDiv">
        <MyInput Content="Content2" />
      </div>
      <div className="AppDiv">
        <MyInput Content="Content3" />
      </div>
    </div>
  );
}

export default App;
