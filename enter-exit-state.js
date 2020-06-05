// Add action to enter and exiting state

const {Machine} = require('xstate')


const lightBulbMachine = Machine({
    id: 'lightBulb',
    initial: 'unlit',
    states: {
        lit: {
            on: {
                BREAK: 'broken',
                TOGGLE: 'unlit'
            },
            exit: () => {
                console.log('it is so dark and cold!')
            }
        },
        unlit: {
            on: {
                BREAK: 'broken',
                TOGGLE: 'lit'
            }
        },
        broken: {
            entry: ['logBroken']
        }
    },
}, {
    actions: {
        logBroken: (context, event) => {
            console.log(`Yo I am broke in the ${event.location}`)
        }
    }
})