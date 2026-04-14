const pokemons = [
    {
        "id": 1,
        "name": "bulbasaur",
        "types": [
            "grass",
            "poison"
        ],
        "height": 7,
        "weight": 69,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg"
    },
    {
        "id": 2,
        "name": "ivysaur",
        "types": [
            "grass",
            "poison"
        ],
        "height": 10,
        "weight": 130,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/2.ogg"
    },
    {
        "id": 3,
        "name": "venusaur",
        "types": [
            "grass",
            "poison"
        ],
        "height": 20,
        "weight": 1000,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/3.ogg"
    },
    {
        "id": 4,
        "name": "charmander",
        "types": [
            "fire"
        ],
        "height": 6,
        "weight": 85,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/4.ogg"
    },
    {
        "id": 5,
        "name": "charmeleon",
        "types": [
            "fire"
        ],
        "height": 11,
        "weight": 190,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/5.ogg"
    },
    {
        "id": 6,
        "name": "charizard",
        "types": [
            "fire",
            "flying"
        ],
        "height": 17,
        "weight": 905,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/6.ogg"
    },
    {
        "id": 7,
        "name": "squirtle",
        "types": [
            "water"
        ],
        "height": 5,
        "weight": 90,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/7.ogg"
    },
    {
        "id": 8,
        "name": "wartortle",
        "types": [
            "water"
        ],
        "height": 10,
        "weight": 225,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/8.ogg"
    },
    {
        "id": 9,
        "name": "blastoise",
        "types": [
            "water"
        ],
        "height": 16,
        "weight": 855,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/9.ogg"
    },
    {
        "id": 10,
        "name": "caterpie",
        "types": [
            "bug"
        ],
        "height": 3,
        "weight": 29,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10.ogg"
    },
    {
        "id": 11,
        "name": "metapod",
        "types": [
            "bug"
        ],
        "height": 7,
        "weight": 99,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/11.ogg"
    },
    {
        "id": 12,
        "name": "butterfree",
        "types": [
            "bug",
            "flying"
        ],
        "height": 11,
        "weight": 320,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/12.ogg"
    },
    {
        "id": 13,
        "name": "weedle",
        "types": [
            "bug",
            "poison"
        ],
        "height": 3,
        "weight": 32,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/13.ogg"
    },
    {
        "id": 14,
        "name": "kakuna",
        "types": [
            "bug",
            "poison"
        ],
        "height": 6,
        "weight": 100,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/14.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/14.ogg"
    },
    {
        "id": 15,
        "name": "beedrill",
        "types": [
            "bug",
            "poison"
        ],
        "height": 10,
        "weight": 295,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/15.ogg"
    },
    {
        "id": 16,
        "name": "pidgey",
        "types": [
            "normal",
            "flying"
        ],
        "height": 3,
        "weight": 18,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/16.ogg"
    },
    {
        "id": 17,
        "name": "pidgeotto",
        "types": [
            "normal",
            "flying"
        ],
        "height": 11,
        "weight": 300,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/17.ogg"
    },
    {
        "id": 18,
        "name": "pidgeot",
        "types": [
            "normal",
            "flying"
        ],
        "height": 15,
        "weight": 395,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/18.ogg"
    },
    {
        "id": 19,
        "name": "rattata",
        "types": [
            "normal"
        ],
        "height": 3,
        "weight": 35,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/19.ogg"
    },
    {
        "id": 20,
        "name": "raticate",
        "types": [
            "normal"
        ],
        "height": 7,
        "weight": 185,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/20.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/20.ogg"
    },
    {
        "id": 21,
        "name": "spearow",
        "types": [
            "normal",
            "flying"
        ],
        "height": 3,
        "weight": 20,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/21.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/21.ogg"
    },
    {
        "id": 22,
        "name": "fearow",
        "types": [
            "normal",
            "flying"
        ],
        "height": 12,
        "weight": 380,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/22.ogg"
    },
    {
        "id": 23,
        "name": "ekans",
        "types": [
            "poison"
        ],
        "height": 20,
        "weight": 69,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/23.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/23.ogg"
    },
    {
        "id": 24,
        "name": "arbok",
        "types": [
            "poison"
        ],
        "height": 35,
        "weight": 650,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/24.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/24.ogg"
    },
    {
        "id": 25,
        "name": "pikachu",
        "types": [
            "electric"
        ],
        "height": 4,
        "weight": 60,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg"
    },
    {
        "id": 26,
        "name": "raichu",
        "types": [
            "electric"
        ],
        "height": 8,
        "weight": 300,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/26.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/26.ogg"
    },
    {
        "id": 27,
        "name": "sandshrew",
        "types": [
            "ground"
        ],
        "height": 6,
        "weight": 120,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/27.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/27.ogg"
    },
    {
        "id": 28,
        "name": "sandslash",
        "types": [
            "ground"
        ],
        "height": 10,
        "weight": 295,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/28.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/28.ogg"
    },
    {
        "id": 29,
        "name": "nidoran-f",
        "types": [
            "poison"
        ],
        "height": 4,
        "weight": 70,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/29.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/29.ogg"
    },
    {
        "id": 30,
        "name": "nidorina",
        "types": [
            "poison"
        ],
        "height": 8,
        "weight": 200,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/30.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/30.ogg"
    },
    {
        "id": 31,
        "name": "nidoqueen",
        "types": [
            "poison",
            "ground"
        ],
        "height": 13,
        "weight": 600,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/31.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/31.ogg"
    },
    {
        "id": 32,
        "name": "nidoran-m",
        "types": [
            "poison"
        ],
        "height": 5,
        "weight": 90,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/32.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/32.ogg"
    },
    {
        "id": 33,
        "name": "nidorino",
        "types": [
            "poison"
        ],
        "height": 9,
        "weight": 195,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/33.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/33.ogg"
    },
    {
        "id": 34,
        "name": "nidoking",
        "types": [
            "poison",
            "ground"
        ],
        "height": 14,
        "weight": 620,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/34.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/34.ogg"
    },
    {
        "id": 35,
        "name": "clefairy",
        "types": [
            "fairy"
        ],
        "height": 6,
        "weight": 75,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/35.ogg"
    },
    {
        "id": 36,
        "name": "clefable",
        "types": [
            "fairy"
        ],
        "height": 13,
        "weight": 400,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/36.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/36.ogg"
    },
    {
        "id": 37,
        "name": "vulpix",
        "types": [
            "fire"
        ],
        "height": 6,
        "weight": 99,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/37.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/37.ogg"
    },
    {
        "id": 38,
        "name": "ninetales",
        "types": [
            "fire"
        ],
        "height": 11,
        "weight": 199,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/38.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/38.ogg"
    },
    {
        "id": 39,
        "name": "jigglypuff",
        "types": [
            "normal",
            "fairy"
        ],
        "height": 5,
        "weight": 55,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/39.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/39.ogg"
    },
    {
        "id": 40,
        "name": "wigglytuff",
        "types": [
            "normal",
            "fairy"
        ],
        "height": 10,
        "weight": 120,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/40.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/40.ogg"
    },
    {
        "id": 41,
        "name": "zubat",
        "types": [
            "poison",
            "flying"
        ],
        "height": 8,
        "weight": 75,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/41.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/41.ogg"
    },
    {
        "id": 42,
        "name": "golbat",
        "types": [
            "poison",
            "flying"
        ],
        "height": 16,
        "weight": 550,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/42.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/42.ogg"
    },
    {
        "id": 43,
        "name": "oddish",
        "types": [
            "grass",
            "poison"
        ],
        "height": 5,
        "weight": 54,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/43.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/43.ogg"
    },
    {
        "id": 44,
        "name": "gloom",
        "types": [
            "grass",
            "poison"
        ],
        "height": 8,
        "weight": 86,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/44.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/44.ogg"
    },
    {
        "id": 45,
        "name": "vileplume",
        "types": [
            "grass",
            "poison"
        ],
        "height": 12,
        "weight": 186,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/45.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/45.ogg"
    },
    {
        "id": 46,
        "name": "paras",
        "types": [
            "bug",
            "grass"
        ],
        "height": 3,
        "weight": 54,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/46.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/46.ogg"
    },
    {
        "id": 47,
        "name": "parasect",
        "types": [
            "bug",
            "grass"
        ],
        "height": 10,
        "weight": 295,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/47.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/47.ogg"
    },
    {
        "id": 48,
        "name": "venonat",
        "types": [
            "bug",
            "poison"
        ],
        "height": 10,
        "weight": 300,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/48.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/48.ogg"
    },
    {
        "id": 49,
        "name": "venomoth",
        "types": [
            "bug",
            "poison"
        ],
        "height": 15,
        "weight": 125,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/49.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/49.ogg"
    },
    {
        "id": 50,
        "name": "diglett",
        "types": [
            "ground"
        ],
        "height": 2,
        "weight": 8,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/50.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/50.ogg"
    },
    {
        "id": 51,
        "name": "dugtrio",
        "types": [
            "ground"
        ],
        "height": 7,
        "weight": 333,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/51.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/51.ogg"
    },
    {
        "id": 52,
        "name": "meowth",
        "types": [
            "normal"
        ],
        "height": 4,
        "weight": 42,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/52.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/52.ogg"
    },
    {
        "id": 53,
        "name": "persian",
        "types": [
            "normal"
        ],
        "height": 10,
        "weight": 320,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/53.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/53.ogg"
    },
    {
        "id": 54,
        "name": "psyduck",
        "types": [
            "water"
        ],
        "height": 8,
        "weight": 196,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/54.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/54.ogg"
    },
    {
        "id": 55,
        "name": "golduck",
        "types": [
            "water"
        ],
        "height": 17,
        "weight": 766,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/55.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/55.ogg"
    },
    {
        "id": 56,
        "name": "mankey",
        "types": [
            "fighting"
        ],
        "height": 5,
        "weight": 280,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/56.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/56.ogg"
    },
    {
        "id": 57,
        "name": "primeape",
        "types": [
            "fighting"
        ],
        "height": 10,
        "weight": 320,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/57.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/57.ogg"
    },
    {
        "id": 58,
        "name": "growlithe",
        "types": [
            "fire"
        ],
        "height": 7,
        "weight": 190,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/58.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/58.ogg"
    },
    {
        "id": 59,
        "name": "arcanine",
        "types": [
            "fire"
        ],
        "height": 19,
        "weight": 1550,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/59.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/59.ogg"
    },
    {
        "id": 60,
        "name": "poliwag",
        "types": [
            "water"
        ],
        "height": 6,
        "weight": 124,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/60.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/60.ogg"
    },
    {
        "id": 61,
        "name": "poliwhirl",
        "types": [
            "water"
        ],
        "height": 10,
        "weight": 200,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/61.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/61.ogg"
    },
    {
        "id": 62,
        "name": "poliwrath",
        "types": [
            "water",
            "fighting"
        ],
        "height": 13,
        "weight": 540,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/62.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/62.ogg"
    },
    {
        "id": 63,
        "name": "abra",
        "types": [
            "psychic"
        ],
        "height": 9,
        "weight": 195,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/63.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/63.ogg"
    },
    {
        "id": 64,
        "name": "kadabra",
        "types": [
            "psychic"
        ],
        "height": 13,
        "weight": 565,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/64.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/64.ogg"
    },
    {
        "id": 65,
        "name": "alakazam",
        "types": [
            "psychic"
        ],
        "height": 15,
        "weight": 480,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/65.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/65.ogg"
    },
    {
        "id": 66,
        "name": "machop",
        "types": [
            "fighting"
        ],
        "height": 8,
        "weight": 195,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/66.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/66.ogg"
    },
    {
        "id": 67,
        "name": "machoke",
        "types": [
            "fighting"
        ],
        "height": 15,
        "weight": 705,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/67.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/67.ogg"
    },
    {
        "id": 68,
        "name": "machamp",
        "types": [
            "fighting"
        ],
        "height": 16,
        "weight": 1300,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/68.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/68.ogg"
    },
    {
        "id": 69,
        "name": "bellsprout",
        "types": [
            "grass",
            "poison"
        ],
        "height": 7,
        "weight": 40,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/69.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/69.ogg"
    },
    {
        "id": 70,
        "name": "weepinbell",
        "types": [
            "grass",
            "poison"
        ],
        "height": 10,
        "weight": 64,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/70.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/70.ogg"
    },
    {
        "id": 71,
        "name": "victreebel",
        "types": [
            "grass",
            "poison"
        ],
        "height": 17,
        "weight": 155,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/71.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/71.ogg"
    },
    {
        "id": 72,
        "name": "tentacool",
        "types": [
            "water",
            "poison"
        ],
        "height": 9,
        "weight": 455,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/72.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/72.ogg"
    },
    {
        "id": 73,
        "name": "tentacruel",
        "types": [
            "water",
            "poison"
        ],
        "height": 16,
        "weight": 550,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/73.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/73.ogg"
    },
    {
        "id": 74,
        "name": "geodude",
        "types": [
            "rock",
            "ground"
        ],
        "height": 4,
        "weight": 200,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/74.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/74.ogg"
    },
    {
        "id": 75,
        "name": "graveler",
        "types": [
            "rock",
            "ground"
        ],
        "height": 10,
        "weight": 1050,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/75.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/75.ogg"
    },
    {
        "id": 76,
        "name": "golem",
        "types": [
            "rock",
            "ground"
        ],
        "height": 14,
        "weight": 3000,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/76.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/76.ogg"
    },
    {
        "id": 77,
        "name": "ponyta",
        "types": [
            "fire"
        ],
        "height": 10,
        "weight": 300,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/77.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/77.ogg"
    },
    {
        "id": 78,
        "name": "rapidash",
        "types": [
            "fire"
        ],
        "height": 17,
        "weight": 950,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/78.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/78.ogg"
    },
    {
        "id": 79,
        "name": "slowpoke",
        "types": [
            "water",
            "psychic"
        ],
        "height": 12,
        "weight": 360,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/79.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/79.ogg"
    },
    {
        "id": 80,
        "name": "slowbro",
        "types": [
            "water",
            "psychic"
        ],
        "height": 16,
        "weight": 785,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/80.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/80.ogg"
    },
    {
        "id": 81,
        "name": "magnemite",
        "types": [
            "electric",
            "steel"
        ],
        "height": 3,
        "weight": 60,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/81.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/81.ogg"
    },
    {
        "id": 82,
        "name": "magneton",
        "types": [
            "electric",
            "steel"
        ],
        "height": 10,
        "weight": 600,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/82.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/82.ogg"
    },
    {
        "id": 83,
        "name": "farfetchd",
        "types": [
            "normal",
            "flying"
        ],
        "height": 8,
        "weight": 150,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/83.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/83.ogg"
    },
    {
        "id": 84,
        "name": "doduo",
        "types": [
            "normal",
            "flying"
        ],
        "height": 14,
        "weight": 392,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/84.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/84.ogg"
    },
    {
        "id": 85,
        "name": "dodrio",
        "types": [
            "normal",
            "flying"
        ],
        "height": 18,
        "weight": 852,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/85.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/85.ogg"
    },
    {
        "id": 86,
        "name": "seel",
        "types": [
            "water"
        ],
        "height": 11,
        "weight": 900,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/86.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/86.ogg"
    },
    {
        "id": 87,
        "name": "dewgong",
        "types": [
            "water",
            "ice"
        ],
        "height": 17,
        "weight": 1200,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/87.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/87.ogg"
    },
    {
        "id": 88,
        "name": "grimer",
        "types": [
            "poison"
        ],
        "height": 9,
        "weight": 300,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/88.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/88.ogg"
    },
    {
        "id": 89,
        "name": "muk",
        "types": [
            "poison"
        ],
        "height": 12,
        "weight": 300,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/89.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/89.ogg"
    },
    {
        "id": 90,
        "name": "shellder",
        "types": [
            "water"
        ],
        "height": 3,
        "weight": 40,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/90.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/90.ogg"
    },
    {
        "id": 91,
        "name": "cloyster",
        "types": [
            "water",
            "ice"
        ],
        "height": 15,
        "weight": 1325,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/91.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/91.ogg"
    },
    {
        "id": 92,
        "name": "gastly",
        "types": [
            "ghost",
            "poison"
        ],
        "height": 13,
        "weight": 1,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/92.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/92.ogg"
    },
    {
        "id": 93,
        "name": "haunter",
        "types": [
            "ghost",
            "poison"
        ],
        "height": 16,
        "weight": 1,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/93.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/93.ogg"
    },
    {
        "id": 94,
        "name": "gengar",
        "types": [
            "ghost",
            "poison"
        ],
        "height": 15,
        "weight": 405,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/94.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/94.ogg"
    },
    {
        "id": 95,
        "name": "onix",
        "types": [
            "rock",
            "ground"
        ],
        "height": 88,
        "weight": 2100,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/95.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/95.ogg"
    },
    {
        "id": 96,
        "name": "drowzee",
        "types": [
            "psychic"
        ],
        "height": 10,
        "weight": 324,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/96.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/96.ogg"
    },
    {
        "id": 97,
        "name": "hypno",
        "types": [
            "psychic"
        ],
        "height": 16,
        "weight": 756,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/97.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/97.ogg"
    },
    {
        "id": 98,
        "name": "krabby",
        "types": [
            "water"
        ],
        "height": 4,
        "weight": 65,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/98.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/98.ogg"
    },
    {
        "id": 99,
        "name": "kingler",
        "types": [
            "water"
        ],
        "height": 13,
        "weight": 600,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/99.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/99.ogg"
    },
    {
        "id": 100,
        "name": "voltorb",
        "types": [
            "electric"
        ],
        "height": 5,
        "weight": 104,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/100.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/100.ogg"
    },
    {
        "id": 101,
        "name": "electrode",
        "types": [
            "electric"
        ],
        "height": 12,
        "weight": 666,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/101.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/101.ogg"
    },
    {
        "id": 102,
        "name": "exeggcute",
        "types": [
            "grass",
            "psychic"
        ],
        "height": 4,
        "weight": 25,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/102.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/102.ogg"
    },
    {
        "id": 103,
        "name": "exeggutor",
        "types": [
            "grass",
            "psychic"
        ],
        "height": 20,
        "weight": 1200,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/103.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/103.ogg"
    },
    {
        "id": 104,
        "name": "cubone",
        "types": [
            "ground"
        ],
        "height": 4,
        "weight": 65,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/104.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/104.ogg"
    },
    {
        "id": 105,
        "name": "marowak",
        "types": [
            "ground"
        ],
        "height": 10,
        "weight": 450,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/105.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/105.ogg"
    },
    {
        "id": 106,
        "name": "hitmonlee",
        "types": [
            "fighting"
        ],
        "height": 15,
        "weight": 498,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/106.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/106.ogg"
    },
    {
        "id": 107,
        "name": "hitmonchan",
        "types": [
            "fighting"
        ],
        "height": 14,
        "weight": 502,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/107.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/107.ogg"
    },
    {
        "id": 108,
        "name": "lickitung",
        "types": [
            "normal"
        ],
        "height": 12,
        "weight": 655,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/108.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/108.ogg"
    },
    {
        "id": 109,
        "name": "koffing",
        "types": [
            "poison"
        ],
        "height": 6,
        "weight": 10,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/109.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/109.ogg"
    },
    {
        "id": 110,
        "name": "weezing",
        "types": [
            "poison"
        ],
        "height": 12,
        "weight": 95,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/110.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/110.ogg"
    },
    {
        "id": 111,
        "name": "rhyhorn",
        "types": [
            "ground",
            "rock"
        ],
        "height": 10,
        "weight": 1150,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/111.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/111.ogg"
    },
    {
        "id": 112,
        "name": "rhydon",
        "types": [
            "ground",
            "rock"
        ],
        "height": 19,
        "weight": 1200,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/112.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/112.ogg"
    },
    {
        "id": 113,
        "name": "chansey",
        "types": [
            "normal"
        ],
        "height": 11,
        "weight": 346,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/113.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/113.ogg"
    },
    {
        "id": 114,
        "name": "tangela",
        "types": [
            "grass"
        ],
        "height": 10,
        "weight": 350,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/114.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/114.ogg"
    },
    {
        "id": 115,
        "name": "kangaskhan",
        "types": [
            "normal"
        ],
        "height": 22,
        "weight": 800,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/115.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/115.ogg"
    },
    {
        "id": 116,
        "name": "horsea",
        "types": [
            "water"
        ],
        "height": 4,
        "weight": 80,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/116.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/116.ogg"
    },
    {
        "id": 117,
        "name": "seadra",
        "types": [
            "water"
        ],
        "height": 12,
        "weight": 250,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/117.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/117.ogg"
    },
    {
        "id": 118,
        "name": "goldeen",
        "types": [
            "water"
        ],
        "height": 6,
        "weight": 150,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/118.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/118.ogg"
    },
    {
        "id": 119,
        "name": "seaking",
        "types": [
            "water"
        ],
        "height": 13,
        "weight": 390,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/119.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/119.ogg"
    },
    {
        "id": 120,
        "name": "staryu",
        "types": [
            "water"
        ],
        "height": 8,
        "weight": 345,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/120.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/120.ogg"
    },
    {
        "id": 121,
        "name": "starmie",
        "types": [
            "water",
            "psychic"
        ],
        "height": 11,
        "weight": 800,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/121.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/121.ogg"
    },
    {
        "id": 122,
        "name": "mr-mime",
        "types": [
            "psychic",
            "fairy"
        ],
        "height": 13,
        "weight": 545,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/122.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/122.ogg"
    },
    {
        "id": 123,
        "name": "scyther",
        "types": [
            "bug",
            "flying"
        ],
        "height": 15,
        "weight": 560,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/123.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/123.ogg"
    },
    {
        "id": 124,
        "name": "jynx",
        "types": [
            "ice",
            "psychic"
        ],
        "height": 14,
        "weight": 406,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/124.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/124.ogg"
    },
    {
        "id": 125,
        "name": "electabuzz",
        "types": [
            "electric"
        ],
        "height": 11,
        "weight": 300,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/125.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/125.ogg"
    },
    {
        "id": 126,
        "name": "magmar",
        "types": [
            "fire"
        ],
        "height": 13,
        "weight": 445,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/126.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/126.ogg"
    },
    {
        "id": 127,
        "name": "pinsir",
        "types": [
            "bug"
        ],
        "height": 15,
        "weight": 550,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/127.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/127.ogg"
    },
    {
        "id": 128,
        "name": "tauros",
        "types": [
            "normal"
        ],
        "height": 14,
        "weight": 884,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/128.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/128.ogg"
    },
    {
        "id": 129,
        "name": "magikarp",
        "types": [
            "water"
        ],
        "height": 9,
        "weight": 100,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/129.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/129.ogg"
    },
    {
        "id": 130,
        "name": "gyarados",
        "types": [
            "water",
            "flying"
        ],
        "height": 65,
        "weight": 2350,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/130.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/130.ogg"
    },
    {
        "id": 131,
        "name": "lapras",
        "types": [
            "water",
            "ice"
        ],
        "height": 25,
        "weight": 2200,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/131.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/131.ogg"
    },
    {
        "id": 132,
        "name": "ditto",
        "types": [
            "normal"
        ],
        "height": 3,
        "weight": 40,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/132.ogg"
    },
    {
        "id": 133,
        "name": "eevee",
        "types": [
            "normal"
        ],
        "height": 3,
        "weight": 65,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/133.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/133.ogg"
    },
    {
        "id": 134,
        "name": "vaporeon",
        "types": [
            "water"
        ],
        "height": 10,
        "weight": 290,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/134.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/134.ogg"
    },
    {
        "id": 135,
        "name": "jolteon",
        "types": [
            "electric"
        ],
        "height": 8,
        "weight": 245,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/135.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/135.ogg"
    },
    {
        "id": 136,
        "name": "flareon",
        "types": [
            "fire"
        ],
        "height": 9,
        "weight": 250,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/136.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/136.ogg"
    },
    {
        "id": 137,
        "name": "porygon",
        "types": [
            "normal"
        ],
        "height": 8,
        "weight": 365,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/137.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/137.ogg"
    },
    {
        "id": 138,
        "name": "omanyte",
        "types": [
            "rock",
            "water"
        ],
        "height": 4,
        "weight": 75,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/138.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/138.ogg"
    },
    {
        "id": 139,
        "name": "omastar",
        "types": [
            "rock",
            "water"
        ],
        "height": 10,
        "weight": 350,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/139.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/139.ogg"
    },
    {
        "id": 140,
        "name": "kabuto",
        "types": [
            "rock",
            "water"
        ],
        "height": 5,
        "weight": 115,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/140.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/140.ogg"
    },
    {
        "id": 141,
        "name": "kabutops",
        "types": [
            "rock",
            "water"
        ],
        "height": 13,
        "weight": 405,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/141.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/141.ogg"
    },
    {
        "id": 142,
        "name": "aerodactyl",
        "types": [
            "rock",
            "flying"
        ],
        "height": 18,
        "weight": 590,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/142.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/142.ogg"
    },
    {
        "id": 143,
        "name": "snorlax",
        "types": [
            "normal"
        ],
        "height": 21,
        "weight": 4600,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/143.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/143.ogg"
    },
    {
        "id": 144,
        "name": "articuno",
        "types": [
            "ice",
            "flying"
        ],
        "height": 17,
        "weight": 554,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/144.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/144.ogg"
    },
    {
        "id": 145,
        "name": "zapdos",
        "types": [
            "electric",
            "flying"
        ],
        "height": 16,
        "weight": 526,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/145.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/145.ogg"
    },
    {
        "id": 146,
        "name": "moltres",
        "types": [
            "fire",
            "flying"
        ],
        "height": 20,
        "weight": 600,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/146.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/146.ogg"
    },
    {
        "id": 147,
        "name": "dratini",
        "types": [
            "dragon"
        ],
        "height": 18,
        "weight": 33,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/147.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/147.ogg"
    },
    {
        "id": 148,
        "name": "dragonair",
        "types": [
            "dragon"
        ],
        "height": 40,
        "weight": 165,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/148.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/148.ogg"
    },
    {
        "id": 149,
        "name": "dragonite",
        "types": [
            "dragon",
            "flying"
        ],
        "height": 22,
        "weight": 2100,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/149.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/149.ogg"
    },
    {
        "id": 150,
        "name": "mewtwo",
        "types": [
            "psychic"
        ],
        "height": 20,
        "weight": 1220,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/150.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/150.ogg"
    },
    {
        "id": 151,
        "name": "mew",
        "types": [
            "psychic"
        ],
        "height": 4,
        "weight": 40,
        "img_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
        "img_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/151.png",
        "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/151.ogg"
    }
];