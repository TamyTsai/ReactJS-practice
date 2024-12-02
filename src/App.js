import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'; // 引入React 的 Component 類別

// function App(props) { // 在函式參數中加入props。給App函式加入props參數來接受props
//   return (
    // <button onClick={props.handleClick}> {props.name} </button> /*修改button標籤中間的內容，注意這裡要使用JSX的{}才能使用js資料*/
    // React把我們自製的component當中 所有的attribute（屬性） 和 其他用來控制元件的參數(像是button中的文字)整合成一個物件，稱為props
    // name是自定的屬性名稱
    // React component設計的方式為，在下列兩個狀況發生時，reactDOM會進入re-render該component的update程序，更新畫面:
      // 1. props的值改變時
      // 2. state的值改變時
    // props是唯讀變數，所以在元件中這樣的寫法是錯誤的: this.props.名稱=值;
    // onClick={props.handleClick}：在父（index.js）寫了一個printMessage函式，將其放到handleClick屬性中，再將HandleClick屬性綁定到子元件（App.js）上
    // <button>  {props.children}  </button>
    // 在App.js函式中button標籤內使用children。因為children是props之一，所以使用方法為props.children。
    // 因為index.js：<App> 在index.js中設定文字 </App> ，所以 {props.children} 會是「在index.js中設定文字」
  // );
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
// }

class App extends Component{  // App類別 繼承 Component類別
  // React component的特性是，會用render()函式去 收集 要渲染到 畫面上 的 東西(放在return值)，再去改變DOM。
  // render()只是渲染前 最後一個階段，元件還沒有真的 渲染到DOM上。所以不要在render()中操作有關return元素的DOM。
  render(){
    return(
      // <button onClick={this.props.handleClick}>{this.props.name}</button>
      // 使用時 和 使用js 的class的 member data 一樣，需要加上this
      <button onClick={this.changeName}>{this.name} </button>
    );
  }
  constructor(props) { // 加入建構子以及props參數
    super(props);
    // 這邊的 props 是 使用 在 繼承的 Component 類別 中 所定義好 的 變數結構。
    // 在js中，透過super()就能取得 所繼承 的 類別中 的 變數結構。
    this.name = "舊的名字";
    this.changeName = this.changeName.bind(this); // 在constructor中綁定changeName （綁定至自己）
    // 在ES6的class中，當使用同class scope的其他member function時，必須要使用this.函式名稱 = this.函式名稱.bind(this)綁定此物件。
    // 這是因為javascript的this在class的 member function中是指向undefined。
  }

  changeName(newName) { // 定義changeName函式
    this.name = newName;
    console.log("hey")
  }
  
}

export default App; // 將函式輸出 給其他檔案（模組）引入
// 把輸出的東西包成一個「物件」讓別人存取，輸入檔就能不用{}去取單一的東西，方法是加上default關鍵字、包成一個物件後，把要一起export的東西都丟進去這個物件