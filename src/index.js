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
// render函式把html語法當作參數傳遞，這實際上是React所使用的一種特殊Javascript語法: JSX。
// JSX語法多了這些特別的規定:
  // 1. html語法可以當作參數傳遞
  // 2. 只能傳遞一個元素（有很多html標籤要傳的話，就把他們包成一個return他們回來的函式，用函式當參數即可）
  // 3. 可以在 html 標籤中利用「{}」寫javascript 表示式
  // 4. style變為一物件，屬性名稱規則改用駝峰法(用大寫區隔)、屬性的值變成字串
  // 5. 「class」屬性變成「className」。
  // 6. 在元素上傳遞屬性時若省略要指定的值，該資料會獲得true布林值
  // 7. 點擊(button)和輸入(input/textarea ...)事件：onclick屬性要改用駝峰命名為onClick
  // 8. 函式綁定：直接寫函式名稱 或用 箭頭函式
  // 9. 若直接用屬性="綁上去的東西" 等同於在傳字串，所以 在JSX綁定js資料、函式時，一定要加上{} 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
