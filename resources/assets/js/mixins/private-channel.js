module.exports = {
    mounted () {
        var self = this
        self.$echo.private(`App.User.${self.user.id}`).listen('GetAuthUser', (payload) => {
            Bus.$emit('getAuthUser', payload)
        })
        // Add Here More Private Events That will be Broadcast
    }
}
