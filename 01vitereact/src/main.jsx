// import React from 'react' //core react is import to make react object
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// 1. using react object. no other object is acceptable for rendering.

// generating variables
// const anotherUser = "This is evaluated expression" 

// const reactElement = React.createElement(
//   'a', //tag or type
//   {href:'https://google.com',target:'_blank'}, //properties
//   'click me to visit', //children
//   anotherUser //evaluated expression
// )

// ReactDOM.createRoot(document.getElementById('root')).render(

//   reactElement
 
// )

//making and using evaluated expression in App

// 2. representing component as function
// ReactDOM.createRoot(document.getElementById('root')).render(
//   App()
// )


// 3. using as component
ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)

//4. own element without predefined types
// const anotherEle = (
//   <a href="https://google.com" target='_blank'>click to visit anotherEle</a>
// )
// ReactDOM.createRoot(document.getElementById('root')).render(
//   anotherEle
// )
