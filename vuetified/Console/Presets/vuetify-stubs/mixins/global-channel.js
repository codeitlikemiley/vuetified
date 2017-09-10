export default {
    channel: 'global',
    echo: {
        'UserCreated': (payload) => {
            Bus.$emit('UserCreated', payload)
        }
        // Add All Your Global Event Below
    },
    mounted () {
        console.log('Listening to Global Channel')
    }
}
