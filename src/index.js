import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/main.scss'
import App from './App'
import { Provider } from 'react-redux/es/exports'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
