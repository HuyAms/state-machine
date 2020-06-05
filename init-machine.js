const {Machine, interpret} = require('xstate')

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
                BREAK: 'broken',
                TOGGLE: 'unlit'
            }
        },
        broken: {type: 'final'}
    }
})

// console.log(
//     lightBulbMachine.transition('lit', 'FOO').value
// )

const service = interpret(lightBulbMachine).start()

service.onTransition(state => {
    if (state.changed) {

        if (state.matches('broken')) {
            console.log(state.value)
            console.log('YO!')
        }
    }
})

service.send('TOGGLE')
service.send('TOGGLE')
service.send('BREAK')
