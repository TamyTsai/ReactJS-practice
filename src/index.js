import React from 'react'; // 引入用npm載下來的React
import ReactDOM from 'react-dom/client'; // 引入用npm載下來的ReactDOM
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 而React特別的地方在，當我們寫React時，是對React自己的DOM操作
// React DOM函式`ReactDOM.render()`是React的程式進入點，正確的說法是React的 virtual DOM 。
// React不是像過去我們操作DOM時一樣「一個指令一個動作」，而是先用js做出一個模擬的DOM，當畫面產生改變，React會把更改的地方放入virtual DOM，和原本的DOM比較後，再去更改DOM上「必須更改的地方」。
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // 呼叫一個物件「ReactDOM」的render函式
// 此函式接收兩個參數:
// 第一個參數`<h1> Hello world!</h1>`是我們所渲染到畫面上的內容。
// 第二個參數`document.getElementById('root')`是React所綁定的原始div元素。
  <h1>Hello world!</h1>,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// 因為render函式通常有很多參數，到最後會變很長，所以排版上習慣換行

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
