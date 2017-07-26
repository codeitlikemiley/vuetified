/**
 * Export the root Spark application.
 */
module.exports = {
    /**
     * Holds the timestamp for the last time we updated the API token.
     */
    lastRefreshedApiTokenAt: null,

    /**
     * The application's data.
     */
    data: {
        loadingNotifications: false,
        notifications: null
    },

    /**
     * The component has been created by Vue.
     */
    created () {
    },

    /**
     * Prepare the application.
     */
    mounted () {
        this.whenReady()
    },

    methods: {
        whenReady () {
            console.log('Vue Ready!')
        },
        /**
         * Refresh the current API token every few minutes.
         */
        refreshApiTokenEveryFewMinutes () {
            this.lastRefreshedApiTokenAt = moment()

            setInterval(() => {
                this.refreshApiToken()
            }, 240000)

            setInterval(() => {
                if (moment().diff(this.lastRefreshedApiTokenAt, 'minutes') >= 5) {
                    this.refreshApiToken()
                }
            }, 5000)
        },

        /**
         * Refresh the current API token.
         */
        refreshApiToken () {
            this.lastRefreshedApiTokenAt = moment()

            axios.put('/spark/token')
        }

    }
}
