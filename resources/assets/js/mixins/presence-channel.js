export default {
    mounted () {
        var self = this
        /* Listen Only If There is A User In the State */
        if (self.user) {
            this.$echo.join('chat').here(users => {
                Bus.$emit('UsersInChatRoom', users)
            }).joining(user => {
                Bus.$emit('UserJoinChatRoom', user)
            }).leaving(user => {
                Bus.$emit('UserLeaveChatRoom', user)
            }).listen('NewMessage', (payload) => {
                Bus.$emit('NewMessage', payload)
            }) // Chain More Events to Listen...

            // Add More Rooms For Presence Channels
        }
    }
}
