const vue = new Vue({

    el: "#app",
    data: {

        active: 0,
        clock: null,
        // Mi dichiaro un array con le varie proprietà
        items: [{
                url: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                url: 'img/02.jpg',
                title: "Svizzera",
                text: "Lorem ipsum."
            },
            {
                url: 'img/03.jpg',
                title: "Gran Bretagna",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            },
            {
                url: 'img/04.jpg',
                title: "Germania",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
            },
            {
                url: 'img/05.jpg',
                title: "Paradise",
                text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
            }
        ],

    },
    mounted: function(){
            this.startAutoPlay();
        },
    methods: {
        getPrev: function () {
            if (this.active <= 0) {
                this.active = this.items.length - 1;
            } else {
                this.active--;
            }
        },
        getNext: function () {
            if (this.active >= this.items.length - 1) {
                this.active = 0;
            } else {
                this.active++;
            }
        },
        // al click su una thumb, visualizzare in grande l'immagine corrispondente
        goToSlide(index) {
            this.active = index;
        },
        // applico l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
        startAutoPlay() {
            var that = this;

            this.clock = setInterval(function(){
                that.getNext();
            }, 3000);
        },
        // quando il mouse va in hover sullo slider, blocca l'autoplay e lo fa riprendere quando esce
        stopAutoPlay(){
            clearInterval(this.clock);
            this.clock = null;
        }
    },

});