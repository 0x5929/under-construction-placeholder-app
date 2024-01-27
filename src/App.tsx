import './App.css'
import Countdown from 'react-countdown'
import { motion } from 'framer-motion'

type RenderType = {
    hours: number
    minutes: number
    seconds: number
}
const renderer = ({ hours, minutes, seconds }: RenderType) => {
    return (
        <div id="counter">
            <motion.div
                key={hours}
                initial={{ opacity: 0, transform: 'translateY(-50px)' }}
                animate={{ opacity: 1, transform: 'translateY(50px)' }}
            >
                <span>{hours}</span>
            </motion.div>
            <motion.div
                key={minutes}
                initial={{ opacity: 0, transform: 'translateY(-50px)' }}
                animate={{ opacity: 1, transform: 'translateY(50px)' }}
            >
                <span>{minutes}</span>
            </motion.div>
            <motion.div
                key={seconds}
                initial={{ opacity: 0, transform: 'translateY(-50px)' }}
                animate={{ opacity: 1, transform: 'translateY(50px)' }}
            >
                <span>{seconds}</span>
            </motion.div>
        </div>
    )
}
function App() {
    return (
        <>
            <Countdown
                date={Date.now() + 10000}
                renderer={renderer}
                zeroPadTime={2}
                zeroPadDays={2}
            />
        </>
    )
}

export default App
