import React from 'react'; // 引入用npm載下來的React
import ReactDOM from 'react-dom/client'; // 引入用npm載下來的ReactDOM
import './index.css';
import App from './App'; // 從App.js檔案（模組） 引入App()函式
// 引入的函式（被包成物件，所以不需要{}）要被作為React component使用，所以還是要以import React from 'react';引入React
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Hello(){
  return(
    <button>大家好</button>
  );
};

function Progress(){
  const barWidth="50%";
  return(
    <div>
      <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
        <div className="progress-bar" style={{backgroundColor:"#fe5196",width:barWidth,height:"100%",borderRadius:"10px"}}></div>
      </div>
    </div>
  );
}

const printMessage = ()=>{
  document.getElementById('show-area').innerHTML="我被按到了";
}

// const changeName = (newName)=>{
//   name = newName;
//   console.log("hey")
// }

// var name="舊的名字";
// index.js的name並不是一個state，所以實際DOM上的App並沒有被重新渲染，也就是其propsname沒有改變。


// React特別的地方在，當我們寫React時，是對React自己的DOM操作
// React DOM函式`ReactDOM.render()`是React的程式進入點，正確的說法是React的 virtual DOM 。
// React不是像過去我們操作DOM時一樣「一個指令一個動作」，而是先用js做出一個模擬的DOM，當畫面產生改變，React會把更改的地方放入virtual DOM，和原本的DOM比較後，再去更改DOM上「必須更改的地方」。
root.render( // 呼叫一個物件「ReactDOM」的render函式
// 此函式接收兩個參數:
// 第一個參數`<h1> Hello world!</h1>`是我們所渲染到畫面上的內容。
// 第二個參數`document.getElementById('root')`是React所綁定的原始div元素。
  <div>
    <Hello/>
    <Hello/>
    <Hello/>
    <Progress/>
    <App name="我的名字" handleClick={printMessage}/>
    {/* 給自製的App元件一個屬性name，用這個name屬性來指定我們按鍵的名稱 */}
    {/* 屬性的值沒加{}的話，接到的值都會是字串，並不是整數或布林值等資料型態 */}
    {/* 綁定printMessage函式到App元件上 */}
    {/* 等等在子元素使用時要用綁定的名稱是handleClick，而不是我們在index.js的原函式名稱 */}
    <div id="show-area"></div>
    <App> 在index.js中設定文字 </App>
    {/* 夾在元組中間的東西叫做children，也是props的一種 */}
    {/* 將「在index.js中設定文字」此段文字作為children props傳給App.js中的函式，該函式再傳回來 */}
    {/* <App name = {name} handleClick = {changeName}/> */}
    
  </div>, 
  // Hello 函式 成為了 component
  // 一般JSX 寫成 {函式名稱}
  // JSX當中的React component語法 寫成 <函式名稱/>
  // App函式是從其他檔案（模組）引入的
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
