module.exports = {
    created () {
        Bus.$on('getAuthUser', (payload) => {
            console.log('Auth User Fetched!', payload)
        })
        Bus.$on('UserCreated', (payload) => {
            console.log('User Was Created!', payload)
        })
        Bus.$on('NewMessage', (payload) => {
            console.log('New Chat Room Message', payload)
        })
        Bus.$on('UsersInChatRoom', (users) => {
            console.log('All Users in Chat Room 1', users)
        })
        Bus.$on('UserJoinChatRoom', (user) => {
            console.log('A New User Join the Chat Room', user)
        })
        Bus.$on('UserLeaveChatRoom', (user) => {
            console.log('User Leave the Chat Room', user)
        })
        // Add Here All Listener for all Events Here...
    }
}
