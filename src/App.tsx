import './app-style.css'
import { FidebeWidget } from 'fidebe-widget'

function App () {
  return (
    <div className='App'>
      <FidebeWidget endpoint='/api/feedback' />
    </div>
  )
}

export default App
