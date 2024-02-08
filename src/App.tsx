import './App.css'
import Timer from './components/Timer.tsx'
import Message from './components/Message.tsx'

function App() {
    return (
        <>
            <img
                style={{ width: '250px', height: '250px' }}
                src="/logo.png"
                alt="logo"
            />
            <Timer />
            <Message />
        </>
    )
}

export default App
