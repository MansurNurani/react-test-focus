import './App.css';
import MyInput from './Components/MyInput';

function App() {
  return (
    <div style={{width:"410px",margin:"0 auto"}}>
      <div className="AppDiv">
        <MyInput />
      </div>
      &nbsp;
      <div className="AppDiv">
        <MyInput />
      </div>
    </div>
  );
}

export default App;
