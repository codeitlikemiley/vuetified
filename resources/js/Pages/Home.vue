<template>
    <v-app>
        <v-app-bar app color="white" height="100">
            <v-avatar class="mr-3" color="grey lighten-5" size="70">
                <v-img contain max-height="70%" src="/images/logo.png"></v-img>
            </v-avatar>

            <v-toolbar-title class="font-weight-black headline">
                GOLCODERS CORP.
            </v-toolbar-title>
        </v-app-bar>

        <v-content>
            <section id="hero">
                <v-row no-gutters>
                    <v-img
                        :min-height="
                            'calc(100vh - ' + $vuetify.application.top + 'px)'
                        "
                        src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
                    >
                        <v-theme-provider dark>
                            <v-container fill-height>
                                <v-row
                                    align="center"
                                    class="white--text mx-auto"
                                    justify="center"
                                >
                                    <v-col
                                        class="white--text text-center"
                                        cols="12"
                                        tag="h1"
                                    >
                                        <span
                                            :class="[
                                                $vuetify.breakpoint.smAndDown
                                                    ? 'display-1'
                                                    : 'display-2'
                                            ]"
                                            class="font-weight-light"
                                        >
                                            WELCOME TO
                                        </span>

                                        <br />

                                        <span
                                            :class="[
                                                $vuetify.breakpoint.smAndDown
                                                    ? 'display-3'
                                                    : 'display-4'
                                            ]"
                                            class="font-weight-black"
                                        >
                                            GOLCODERS CORP
                                        </span>
                                    </v-col>

                                    <v-btn
                                        class="align-self-end"
                                        fab
                                        outlined
                                        @click="$vuetify.goTo('#about-me')"
                                    >
                                        <v-icon>mdi-chevron-double-down</v-icon>
                                    </v-btn>
                                </v-row>
                            </v-container>
                        </v-theme-provider>
                    </v-img>
                </v-row>
            </section>

            <section id="about-me">
                <div class="py-12"></div>

                <v-container class="text-center">
                    <h2 class="display-2 font-weight-bold mb-3">About Us</h2>

                    <v-responsive class="mx-auto mb-8" width="56">
                        <v-divider class="mb-1"></v-divider>

                        <v-divider></v-divider>
                    </v-responsive>

                    <v-responsive
                        class="mx-auto title font-weight-light mb-8"
                        max-width="720"
                    >
                        GOLDCODERS CORP. is a Filipino Startup Company That Aims
                        to Provide the Best Platform For Developers To Showcase
                        Their Apps on A Feature Rich Niche Community. Our
                        Patented Platform Empowers and Rewards Its Patrons to
                        Dictate the App Development via Feature Request and Vote
                        Point System. First Feature Request Reach the Required
                        Points Gets to be Unlocked and is Free To Used by Anyone
                        Backing that Developer's Software.
                    </v-responsive>
                </v-container>

                <div class="py-12"></div>
            </section>

            <section id="features" class="grey lighten-3">
                <div class="py-12"></div>

                <v-container class="text-center">
                    <h2 class="display-2 font-weight-bold mb-3">
                        Thriftshop Apps
                    </h2>
                    <v-responsive
                        class="mx-auto title font-weight-light mb-8"
                        max-width="720"
                    >
                        Community Driven App Development
                        <v-chip class="ma-2" color="orange" text-color="white">
                            Patented
                            <v-icon right>
                                mdi-star
                            </v-icon>
                        </v-chip>
                    </v-responsive>

                    <v-row>
                        <v-card class="mx-auto" max-width="400">
                            <v-card dark flat>
                                <v-btn absolute bottom color="pink" right fab>
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                                <v-card-title class="pa-2 purple lighten-3">
                                    <v-btn icon>
                                        <v-icon>mdi-menu</v-icon>
                                    </v-btn>
                                    <h3
                                        class="title font-weight-light text-center grow"
                                    >
                                        Software XYZ
                                    </h3>
                                    <v-avatar>
                                        <v-img
                                            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                                        ></v-img>
                                    </v-avatar>
                                </v-card-title>
                                <v-img
                                    src="https://cdn.vuetifyjs.com/images/cards/forest.jpg"
                                    gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
                                >
                                    <v-container class="fill-height">
                                        <v-row align="center">
                                            <strong
                                                class="display-4 font-weight-regular mr-6"
                                                >323</strong
                                            >
                                            <v-row justify="center">
                                                <div
                                                    class="headline font-weight-light"
                                                >
                                                    Licenses
                                                </div>
                                                <div
                                                    class="text-uppercase font-weight-light"
                                                    style="margin-top:-10px;"
                                                >
                                                    SOLD
                                                </div>
                                            </v-row>
                                        </v-row>
                                    </v-container>
                                </v-img>
                            </v-card>
                            <v-card-text class="py-0">
                                <v-timeline align-top dense>
                                    <v-timeline-item
                                        color="teal lighten-3"
                                        small
                                    >
                                        <v-row class="pt-1">
                                            <v-col cols="3">
                                                <strong>100</strong>
                                            </v-col>
                                            <v-col>
                                                <strong
                                                    >Add New Payment
                                                    Gateway</strong
                                                >
                                                <div class="caption">
                                                    Added Paymongo Checkout
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-timeline-item>

                                    <v-timeline-item
                                        color="teal lighten-3"
                                        small
                                    >
                                        <v-row class="pt-1">
                                            <v-col cols="3">
                                                <strong>200</strong>
                                            </v-col>
                                            <v-col>
                                                <strong
                                                    >Add New Payment
                                                    Gateway</strong
                                                >
                                                <div class="caption mb-2">
                                                    Added Lazada Checkout
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-timeline-item>

                                    <v-timeline-item
                                        color="teal lighten-3"
                                        small
                                    >
                                        <v-row class="pt-1">
                                            <v-col cols="3">
                                                <strong>300</strong>
                                            </v-col>
                                            <v-col>
                                                <strong
                                                    >Add New Payment
                                                    Gateway</strong
                                                >
                                                <div class="caption">
                                                    Added Paypal Checkout
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-timeline-item>
                                    <v-timeline-item color="pink" small>
                                        <v-row class="pt-1">
                                            <v-col cols="3">
                                                <strong>400</strong>
                                            </v-col>
                                            <v-col>
                                                <strong
                                                    >Add New Payment
                                                    Gateway</strong
                                                >
                                                <div class="caption">
                                                    Vote Now
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-timeline-item>
                                </v-timeline>
                            </v-card-text>
                        </v-card>
                    </v-row>
                </v-container>

                <div class="py-12"></div>
            </section>

            <section id="stats">
                <v-parallax
                    :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
                    src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                >
                    <v-container fill-height>
                        <v-row class="mx-auto">
                            <v-col
                                v-for="[value, title] of stats"
                                :key="title"
                                cols="12"
                                md="3"
                            >
                                <div class="text-center">
                                    <div
                                        class="display-3 font-weight-black mb-4"
                                        v-text="value"
                                    ></div>

                                    <div
                                        class="title font-weight-regular text-uppercase"
                                        v-text="title"
                                    ></div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-parallax>
            </section>

            <section id="blog">
                <div class="py-12"></div>

                <v-container>
                    <p class="text-center headline font-weight-medium pb-12">
                        Why We are Different, And Why We Patented it!
                    </p>

                    <v-row>
                        <v-col
                            v-for="(item, index) in items"
                            :key="index"
                            cols="12"
                            md="4"
                            xs="12"
                        >
                            <v-row justify="center" align="start" class="px-5">
                                <v-col
                                    justify="center"
                                    align="center"
                                    cols="12"
                                    md="2"
                                    xs="12"
                                >
                                    <v-icon large>{{ item.icon }}</v-icon>
                                </v-col>
                                <v-col
                                    justify="start"
                                    align="start"
                                    cols="12"
                                    md="10"
                                    xs="12"
                                >
                                    <p
                                        class="ma-0 subtitle-1 font-weight-medium"
                                    >
                                        {{ item.title }}
                                    </p>
                                    <p class="subtitle-1 font-weight-light">
                                        {{ item.description }}
                                    </p>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <p class="text-center headline font-weight-medium pt-12">
                        We Are Looking For Investors/Parners!
                    </p>
                    <p class="text-center subtitle-1 font-weight-medium">
                        If You Think Our Startup Is Top Notch with Big
                        Potentials, Why Not Bet On Us as the Next Trend Setter
                        in this Industry.
                    </p>

                    <v-row align="center" justify="center">
                        <v-col
                            class="text-center"
                            cols="12"
                            align="center"
                            justify="center"
                        >
                            <v-btn
                                x-large
                                outlined
                                class="title font-weight-medium bluetext"
                                @click="support()"
                                >Contact Us</v-btn
                            >
                        </v-col>
                    </v-row>
                    <h2 class="text-center headline font-weight-medium pt-12">
                        Already Our Backer? Go Inside Our Investor's Portal
                    </h2>

                    <v-responsive class="mx-auto mb-12 text-center">
                        <v-avatar class="elevation-12 mb-12" size="128">
                            <v-img src="/images/avatar.svg"></v-img>
                        </v-avatar>

                        <div></div>

                        <v-btn color="grey" @click="login()" outlined large>
                            <span
                                class="grey--text text--darken-1 font-weight-bold"
                            >
                                Login
                            </span>
                        </v-btn>
                    </v-responsive>
                </v-container>

                <div class="py-12"></div>
            </section>
        </v-content>

        <v-footer class="justify-center" color="#292929" height="100">
            <div
                class="title font-weight-light grey--text text--lighten-1 text-center"
            >
                <span>© {{ year }} {{ domain }} ® | {{ trademark }}™</span>
            </div>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        year: new Date().getFullYear(),
        domain: "goldcoders.app",
        trademark: "",
        items: [
            {
                icon: "fa-desktop",
                title: "1 Click Deploy",
                description:
                    "Majoirty of the Softwares Listed In Our Platform Can Be Deployed Within a Few Minutes."
            },
            {
                icon: "fa-money",
                title: "No Monthly Fees",
                description:
                    "Pay Once Use Lifetime, Each License Can Be Used For Lifetime Usage per Domain Name No Matter What Platform."
            },
            {
                icon: "fa-comments-o",
                title: "Customer Support",
                description:
                    "Our Partner Agencies Will Give You Support For Any Sofwares You Bought On Our Platforms"
            },
            {
                icon: "fa-users",
                title: "Referral Bonuses",
                description:
                    "We Value The Community Effort, and Nothing Beats Word of Mouth Advertising."
            },
            {
                icon: "mdi-timeline",
                title: "Feature Request",
                description:
                    "All People Who Download Our Apps, Can Post a Feature Request to the Softwares They are Interested."
            },
            {
                icon: "mdi-vote",
                title: "Voting Point System",
                description:
                    "Everytime A User Buy License They Earned Points, Which Can Be Used To Unlocked Features In Our Platform. First Feature Request to Reached the Required Points Gets Unlocked!"
            },
            {
                icon: "fa-percent",
                title: "Cheapest Price",
                description:
                    "Same Niche Softwares Out There Will Cost Your Thousands of Dollars Just By Development. Why Not Piggy Back Ride in Our Patented Community Driven App Development Platform."
            },
            {
                icon: "fa-plug",
                title: "Plug and Play",
                description:
                    "We Know Not Everyone Needs the Same Features in their App, So You Are Free To Used it Or Remove it Via Plugin. No Bloat In Your Producton Build Application"
            },
            {
                icon: "mdi-bookmark",
                title: "White Label",
                description:
                    "All Softwares That You Purchase in our Platform is Whitelabel, You Can Put Your Brand On it and Used Your Own Branding."
            }
        ]
    }),
    created() {
        this.domain = window.location.host;
        this.trademark = 'Test App'
    },
    methods: {
        login() {
            this.$inertia.visit("/login");
        },
        support() {
            window.open("https://www.facebook.com/goldcodersdev", "_blank");
        }
    }
};
</script>
