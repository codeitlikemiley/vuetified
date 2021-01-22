<template>
    <v-app>
        <v-main>
            <v-container
                id="error-view"
                class="fill-height text-center"
                tag="section"
                fluid
            >
                <v-row justify="center">
                    <v-col cols="auto">
                        <h1 class="text-h1 mb-16 font-weight-bold text-center">
                            {{ title }}
                        </h1>

                        <div class="text-h4 pt-8 pb-10">
                            {{ description }} :(
                        </div>

                        <v-btn depressed large @click="goBack()">
                            Get me out of here!
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>

export default {
    props: {
        status: Number
    },
    computed: {
        title() {
            return {
                503: "503: Service Unavailable",
                500: "500: Server Error",
                404: "404: Page Not Found",
                403: "403: Forbidden"
            }[this.status];
        },
        description() {
            return {
                503: "Sorry, we are doing some maintenance. Please check back soon.",
                500: "Whoops, something went wrong on our servers.",
                404: "Sorry, the page you are looking for could not be found.",
                403: "Sorry, you are forbidden from accessing this page."
            }[this.status];
        }
    },
    methods: {
        goBack() {
            this.$inertia.visit("/");
        }
    }
};
</script>

<style lang="sass">
#error-view h1.text-h1
  font-size: 3rem !important
</style>
