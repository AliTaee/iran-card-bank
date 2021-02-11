import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import IranCardBank from './IranCardBank'
import reportWebVitals from './reportWebVitals'

// Asset image to testing backgroundImage prop
// import ForestImage from './assets/forest-patrol.jpg'

ReactDOM.render(
  <React.StrictMode>
    <IranCardBank cardNumber={6274_1215_2541_8445} />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
