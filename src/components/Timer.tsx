import Countdown from 'react-countdown'
import { motion } from 'framer-motion'

type RenderType = {
    days: number
    hours: number
    minutes: number
    seconds: number
}
const renderer = ({ days, hours, minutes, seconds }: RenderType) => {
    return (
        <div id="counter">
            <motion.div
                initial={{ opacity: 0, transform: 'translateY(-50px)' }}
                animate={{ opacity: 1, transform: 'translateY(50px)' }}
            >
                <span>{days} days</span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, transform: 'translateY(-50px)' }}
                animate={{ opacity: 1, transform: 'translateY(50px)' }}
            >
                <span>{hours} hours</span>
            </motion.div>
            <motion.div
                key={`${minutes}-minutes`}
                initial={{ opacity: 0, transform: 'translateY(-50px)' }}
                animate={{ opacity: 1, transform: 'translateY(50px)' }}
            >
                <span>{minutes} minutes</span>
            </motion.div>
            <motion.div
                key={`${seconds}-seconds`}
                initial={{ opacity: 0, transform: 'translateY(-50px)' }}
                animate={{ opacity: 1, transform: 'translateY(50px)' }}
            >
                <span>{seconds} seconds</span>
            </motion.div>
        </div>
    )
}

const date = import.meta.env.VITE_DATE

function Timer() {
    return (
        <>
            <h1>New site ready in</h1>
            <Countdown
                date={new Date(date)}
                renderer={renderer}
                zeroPadTime={2}
                daysInHours={true}
            />
        </>
    )
}

export default Timer
