// Use internal transitions in Xstate to avoid state exit and re-entry

const {Machine} = require('xstate')


const idleMachine = Machine({
    id: 'idle',
    initial: 'idle',
    states: {
        idle: {
            entry: 'logEntry',
            exit: 'logExit'
        }
    },
    on: {
        DO_NOTHING: '.idle' // make an internal transition by adding .
    }
}, {
    actions: {
        logEntry: () => {
            console.log(`Entry`)
        },
        logExit: () => {
            console.log(`Exit`)
        }
    }
})