/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'www.google.com',
//       target: '_blank',
//   },
//   children: 'Click me to visit google'
// };

const anotherElement = (
  <a href='https.gooogle.com' target='_blank'>Visit Google</a>
)


function Myapp(){
  return(
    <div>
      <h1>Custom React App</h1>
    </div>
  )
}

const reactElement = React.createElement(
  'a',
  {href:'https.google.com',target:'_blank'},
  'Click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <App/>
    
  )
