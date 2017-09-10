module.exports = {
    mounted () {
        var self = this
        /* Listen Only If There is A User In the State */
        if (self.user) {
            self.$echo.private(`App.User.${self.user.id}`).listen('GetAuthUser', (payload) => {
                Bus.$emit('getAuthUser', payload)
            })
        }
        // Add Here More Private Events That will be Broadcast
    }
}
