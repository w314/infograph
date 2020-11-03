function showInfographic() {

    // function returns human object based on form input
    function createHuman() {
        return {
            name: document.getElementById('name').value,
            weight: document.getElementById('weight').value,
            // store height in inches
            height: document.getElementById('feet').value * 12 + document.getElementById('inches').value * 1,
            diet: document.getElementById('diet').value
        };        
    }


    // function returns Create Dino Objects
    function createDinos() {
        // dino facts from JSON file
        const dinoFacts = [
            {
                "species": "Triceratops",
                "weight": 13000,
                "height": 114,
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "First discovered in 1889 by Othniel Charles Marsh"
            },
            {
                "species": "Tyrannosaurus Rex",
                "weight": 11905,
                "height": 144,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "The largest known skull measures in at 5 feet long."
            },
            {
                "species": "Anklyosaurus",
                "weight": 10500,
                "height": 55,
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Anklyosaurus survived for approximately 135 million years."
            },
            {
                "species": "Brachiosaurus",
                "weight": 70000,
                "height": "372",
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Jurasic",
                "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
            },
            {
                "species": "Stegosaurus",
                "weight": 11600,
                "height": 79,
                "diet": "herbavor",
                "where": "North America, Europe, Asia",
                "when": "Late Jurasic to Early Cretaceous",
                "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
            },
            {
                "species": "Elasmosaurus",
                "weight": 16000,
                "height": 59,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
            },
            {
                "species": "Pteranodon",
                "weight": 44,
                "height": 20,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
            },
            {
                "species": "Pigeon",
                "weight": 0.5,
                "height": 9,
                "diet": "herbavor",
                "where": "World Wide",
                "when": "Holocene",
                "fact": "All birds are living dinosaurs."
            }
        ]

        // Dino Constructor
        function Dino(species, weight, height, diet, where, when, fact) {
            this.name = species;
            this.weight = weight;
            this.height = height;
            this.diet = diet;
            this.location = when;
            this.time = where;
            this.fact = fact;
        }



        // create array of Dino objects based on dinoFacts
        const dinos = dinoFacts.map(function (dino) {
            return (
                new Dino(dino.species, dino.weight, dino.height, dino.diet, dino.where, dino.when, dino.fact)
            )
        })

        return dinos;
    }

    function addTiles(human, dinos) {
        const grid = document.getElementById('grid');
        const tiles = document.createDocumentFragment();
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7];
        for (i = 0; i < 9; i++) {
            const picture = document.createElement('img');
            const tile = document.createElement('div');
            tile.classList = 'grid-item'; 
            if (i === 4) {
                tile.innerText = 'human'
                picture.src = `./images/human.png`;
            }
            else {
                const randomNum = Math.floor(Math.random() * numbers.length)
                const index = numbers.splice(randomNum, 1)[0]; 
                console.log(`dino index: ${index}`);
                tile.innerText = dinos[index].name;
                picture.src = `./images/${dinos[index].name}.png`;
            }
            tile.appendChild(picture);
            tiles.appendChild(tile);
        }
        const form = document.getElementById('dino-compare');
        form.classList.toggle('hidden');
        grid.appendChild(tiles);
    }


    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen

    const human = createHuman();
    const dinos = createDinos();
    addTiles(human, dinos);

}

// On button click, prepare and display infographic
const button = document.getElementById('btn');
button.addEventListener('click', () => {
    showInfographic();
});
