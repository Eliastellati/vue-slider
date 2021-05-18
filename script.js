const app = new Vue({
    el: "#root",
    data: {
        wallpaper: "img/img-1.jpg",
        counter: 0,
        wallpaperArray: [
            "https://editorial.uefa.com/resources/025d-0f7062d553b1-dfe9a954cbb0-1000/format/wide2/uefa_champions_league_final_-_ac_milan_v_liverpool.jpeg",
            "https://www.contra-ataque.it/wp-content/uploads/2013/06/milan-liverpool.jpg",
            "https://ultimouomo.imgix.net/wp-content/uploads/2015/05/20202347/Istanbul-624x401.jpg",
            "https://blog.marathonbet.it/wp-content/uploads/2020/04/milan-liverpool-min-1.jpg",
        ]
    },



    methods: {

        nextImage() {
            this.counter++

                if (this.counter > this.wallpaperArray.length - 1) {
                    this.counter = 0
                }

                //console.log(this.counter)

            this.wallpaper = this.wallpaperArray[this.counter]
            this.changeImageRadio()
        },

        prevImage() {
            this.counter--

                if (this.counter < 0) {
                    this.counter = this.wallpaperArray.length - 1
                }

                //console.log(this.counter)

            this.wallpaper = this.wallpaperArray[this.counter]
            this.changeImageRadio()
        },

        changeImageRadio() {
            const pallini = document.querySelectorAll("[type='radio']")

            pallini[this.counter].checked = true
        },

        radioClick() {
            const pallini = document.querySelectorAll("[type='radio']")

            pallini.forEach((element, index) => {
                if (element.checked) {
                    this.counter = index
                }
            })

            this.wallpaper = this.wallpaperArray[this.counter]
        },


    },

    // mounted() {
    //     setInterval(() => {
    //         this.nextImage()
    //     }, 3000);
    // }
})