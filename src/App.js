import React from 'react'
import Home from './components/Home'
import store from './redux/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <div>
      <Provider store={store} >
        <Home/>
      </Provider>
    </div>
  )
}

export default App

