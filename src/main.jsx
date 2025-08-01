import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18n from './locales/i18n/i18n.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
)
