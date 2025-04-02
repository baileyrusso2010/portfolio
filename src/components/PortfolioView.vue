<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h2 class="text-h4 mb-4">Bailey Russo</h2>
            </v-col>
        </v-row>

        <v-row>
            <!-- Filter Buttons -->
            <v-col cols="12" class="mb-4">
                <v-btn-toggle v-model="activeFilter" color="primary" group>
                    <v-btn value="all">All</v-btn>
                    <v-btn value="web">Web</v-btn>
                    <v-btn value="mobile">Mobile</v-btn>
                    <v-btn value="design">Design</v-btn>
                </v-btn-toggle>
            </v-col>

            <!-- Portfolio Items -->
            <v-col v-for="item in filteredItems" :key="item.id" cols="12" sm="6" md="4">
                <v-card class="portfolio-card" elevation="2" @click="showDetails(item)">
                    <v-img :src="item.image" height="200" class="portfolio-image"></v-img>

                    <v-card-title>{{ item.title }}</v-card-title>

                    <v-card-subtitle>{{ item.category }}</v-card-subtitle>

                    <v-card-text>
                        <div class="text-caption">{{ item.shortDescription }}</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn text color="primary">View Details</v-btn>
                        <v-spacer></v-spacer>
                        <v-chip small>{{ item.tech }}</v-chip>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <!-- Dialog for project details -->
        <v-dialog v-model="dialog" max-width="600">
            <v-card v-if="selectedItem">
                <v-card-title>{{ selectedItem.title }}</v-card-title>
                <v-card-text>
                    <v-img :src="selectedItem.image" class="mb-4"></v-img>
                    <p>{{ selectedItem.fullDescription }}</p>
                    <v-chip class="ma-1" v-for="tech in selectedItem.techStack" :key="tech">
                        {{ tech }}
                    </v-chip>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            activeFilter: "all",
            dialog: false,
            selectedItem: null,
            portfolioItems: [
                {
                    id: 1,
                    title: "E-commerce Platform",
                    category: "web",
                    image: "https://picsum.photos/300/200?random=1",
                    shortDescription: "Online shopping platform with real-time inventory",
                    fullDescription:
                        "A full-featured e-commerce solution with payment integration and user management",
                    tech: "Vue.js",
                    techStack: ["Vue.js", "Node.js", "MongoDB"],
                },
                {
                    id: 2,
                    title: "Mobile Banking App",
                    category: "mobile",
                    image: "https://picsum.photos/300/200?random=2",
                    shortDescription: "Secure mobile banking application",
                    fullDescription:
                        "Cross-platform mobile banking app with biometric authentication",
                    tech: "React Native",
                    techStack: ["Swift", "Plaid", "Spine2D"],
                },
                {
                    id: 3,
                    title: "Brand Identity",
                    category: "design",
                    image: "https://picsum.photos/300/200?random=3",
                    shortDescription: "Complete brand design package",
                    fullDescription: "Logo design, color scheme, and marketing materials",
                    tech: "Adobe Suite",
                    techStack: ["Photoshop", "Illustrator", "InDesign"],
                },
            ],
        }
    },
    computed: {
        filteredItems() {
            if (this.activeFilter === "all") {
                return this.portfolioItems
            }
            return this.portfolioItems.filter((item) => item.category === this.activeFilter)
        },
    },
    methods: {
        showDetails(item) {
            this.selectedItem = item
            this.dialog = true
        },
    },
}
</script>

<style scoped>
.portfolio-card {
    transition: all 0.3s;
}

.portfolio-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.portfolio-image {
    object-fit: cover;
}

.portfolio-container {
    background-color: red;
}
</style>
