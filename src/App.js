import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <button>修改後App函式</button>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App; // 將函式輸出 給其他檔案（模組）引入
// 把輸出的東西包成一個「物件」讓別人存取，輸入檔就能不用{}去取單一的東西，方法是加上default關鍵字、包成一個物件後，把要一起export的東西都丟進去這個物件
