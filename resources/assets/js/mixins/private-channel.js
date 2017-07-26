module.exports = {
    mounted () {
        this.$echo.private('App.User.479432920088453').listen('GetAuthUser', (payload) => {
            Bus.$emit('getAuthUser', payload)
        })
        // Add Here More Private Events That will be Broadcast
    }
}
