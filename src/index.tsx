import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import IranCardBank from './IranCardBank'
import reportWebVitals from './reportWebVitals'

// Asset image to testing backgroundImage prop
// import ForestImage from './assets/forest-patrol.jpg'

// Customize card bank theme props
const theme = {
  // backgroundColor: 'blue',
  // backgroundImage: ForestImage,
  // gradient: 'to right, #dc2430, #7b4397',
}

ReactDOM.render(
  <React.StrictMode>
    <IranCardBank cardNumber={6274_1215_2541_8445} theme={theme} />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
