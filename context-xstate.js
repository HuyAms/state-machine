// Track infinite states with XSTATE Context

const {Machine} = require('xstate')


const multiColoredBulbMachine = Machine({
    id: 'multiColoredBulb',
    context: {
      color: '#fff'
    },
    initial: 'unlit',
    states: {
        lit: {
            on: {
                BREAK: 'broken',
                TOGGLE: 'unlit',
                CHANGE_COLOR: {
                    // actions: assign({
                    //     // color: '#f00' // update context via assign,
                    //     color: (context, event) => event.color
                    // })

                    // actions: assign((context, event) => ({
                    //     color: event.color
                    // }))

                    actions: 'changeColor'
                }
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
        },
        changeColor: assign((context, event) => ({
            color: event.color
        }))
    }
})