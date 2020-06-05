// Add action to fire side effects

const {Machine} = require('xstate')


const lightBulbMachine = Machine({
    id: 'lightBulb',
    initial: 'unlit',
    states: {
        lit: {
            on: {
                BREAK: 'broken',
                TOGGLE: 'unlit'
            }
        },
        unlit: {
            on: {
                BREAK: {
                    target: 'broken',
                    actions: ['logBroken']
                },
                TOGGLE: 'lit'
            }
        },
        broken: {type: 'final'}
    },
}, {
    actions: {
        logBroken: (context, event) => {
            console.log(`Yo I am broke in the ${event.location}`)
        }
    }
})