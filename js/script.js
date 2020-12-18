/*
Attraverso una chiamata ajax all’API di boolean
(https://flynn.boolean.careers/exercises/api/array/music)
avremo a disposizione una decina di dischi musicali.
Utilizzando vue, stampiamo a schermo una card per ogni album.
*/

/*BONUS: Creare una select con tutti i generi dei dischi.
In base a cosa scegliamo nella select, vedremo i corrispondenti cd.*/
/*BONUS 2: Ordinare i dischi per anno di uscita.*/

/* CHIAVI
// "poster": "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg",
// "title": "New Jersey",
// "author": "Bon Jovi",
// "genre": "Rock",
// "year": "1988"
*/

//______________________________________________________________________________________________________________
var app = new Vue(
  {
    el: '#root',
    data: {
      discs: [],
      selectedValue: '',
      genres: [],
    },
    methods: {

    },
    mounted: function() {

      var self = this;

      axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then( function(keiByGet) {
          self.discs = keiByGet.data.response;
          // console.log(self.discs);

          self.discs.forEach(
            (element) => {

              if (self.genres.includes(element.genre) == false) {
                self.genres.push(element.genre);
              }

          });
          console.log(self.genres);
      });
    },
  },
);
