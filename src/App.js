import logo from './logo.svg';
import './App.css';

function App(props) { // 在函式參數中加入props。給App函式加入props參數來接受props
  return (
    <button> {props.name} </button> /*修改button標籤中間的內容，注意這裡要使用JSX的{}才能使用js資料*/
    // React把我們自製的component當中 所有的attribute（屬性） 和 其他用來控制元件的參數(像是button中的文字)整合成一個物件，稱為props
    // name是自定的屬性名稱
    // React component設計的方式為，在下列兩個狀況發生時，reactDOM會進入re-render該component的update程序，更新畫面:
      // 1. props的值改變時
      // 2. state的值改變時
    // props是唯讀變數，所以在元件中這樣的寫法是錯誤的: this.props.名稱=值;
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
