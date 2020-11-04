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
                "height": 372,
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

        // create Dino methods

        Dino.prototype.compareWeight = function(weight) {
            const weightDifference = this.weight *1 - weight *1;
            if(weightDifference > 0) {
                return `I'm ${weightDifference} lbs heavier than you.`;
            } 

            if (weightDifference < 0) {
                return `I'm ${weightDifference * -1} lbs lighter than you`;
            } 

            return `We have the exact same weight!`;
        }


        Dino.prototype.compareHeight = function(height) {
            const heightDifference = this.height * 1 - height * 1;

            if(heightDifference > 0) {
                return `I'm ${heightDifference} inches taller than you.`;
            } 
            
            if (heightDifference < 0) {
                return `I'm ${heightDifference * -1} inches smaller than you`;
            } 

            return `We are the exact same height!`;
        }


        Dino.prototype.compareDiet = function(diet) {
            const humanDiet = diet.toLowerCase();

            if (this.diet === humanDiet) {
                return 'We like the exact same food';
            }

            if (humanDiet === 'omnivor') {
                if (this.diet === 'carnivor') {
                    return 'I only eat meat, looks like you eat vegetables too.';
                }
                else if (this.diet === 'herbavor') {
                    return 'I only eat vegetables, looks like you eat meat too.';
                }
            }

            if (humanDiet === 'carnivor') {
                if (this.diet === 'omnivor') {
                    return 'Looks like you don\'t eat vegetables, I like those too.';
                }
                else if (this.diet === 'herbavor') {
                    return 'Looks like you only eat meat, me? not a bite of those.';
                }
            }

            if (humanDiet === 'herbavor') {
                if (this.diet === 'omnivor') {
                    return 'I see you don\'t eat meat, I like meat too.';
                }
                else if (this.diet == 'carnivore') {
                    return 'I see you don\'t eat meat at all, that the only thin I eat';
                }
            }
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

        function createRandomInteger(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        
        function createFact(factList, dino, human) {
            const simpleFacts = ['location', 'time', 'fact'];

            if (dino.name === 'Pigeon') {
                return 'All birds are dinosaurs.';
            }

            // select random fact from factList
            const fact = factList.splice(createRandomInteger(factList.length), 1)[0];
            if (simpleFacts.includes(fact)) {
                return dino[fact];
            }
            
            switch (fact) {
                case 'weight':
                    return dino.compareWeight(human.weight);
                    break;
                case 'height':
                    return dino.compareHeight(human.height);
                    break;
                case 'diet':
                    return dino.compareDiet(human.diet);
            }

        }


        const grid = document.getElementById('grid');
        // empty grid, usefull when recreateing tiles
        grid.innerHTML = '';

        // creating tiles fragment to reduce reflows and repaint
        const tiles = document.createDocumentFragment();
        // indexes array stores the possible indexes of dinos is dinos array
        // it is used to select dinos at random
        const indexes = [0, 1, 2, 3, 4, 5, 6, 7];

        // list of possible facts, helper variable to choose facts at random
        const factList = ['weight', 'height', 'location', 'time', 'fact', 'diet'];
        // as we need 7 fact add one of the fact at random
        factList.push(factList[createRandomInteger(factList.length)]);
        console.log(`extended factList: ${factList}`);

        // use for loop to add 9 tiles
        for (i = 0; i < 9; i++) {
            const tile = document.createElement('div');
            const tileImage = document.createElement('img');
            const tileName = document.createElement('h3');
            const tileFact = document.createElement('p');
            tile.classList = 'grid-item'; 
            // if it's the middle tile add human
            if (i === 4) {
                tileName.innerText = human.name;
                tileImage.src = `./images/human.png`;
            }
            else {
                // create random integer between 0 and the current length of the indexes array
                const randomNum = createRandomInteger(indexes.length);
                // store and remove the randomly selected index
                // use it for add a dino to the tile
                const index = indexes.splice(randomNum, 1)[0]; 

                const dino = dinos[index];
                console.log(`dino index: ${index}`);
                tileName.innerText = dino.name;
                tileImage.src = `./images/${dinos[index].name}.png`;
                const dinoFact = createFact(factList, dino, human);
                console.log(`returned fact: ${dinoFact}`);
                // tileFact.innerText = createFact(factList, dino, human);
                tileFact.innerText = dinoFact;
                tile.appendChild(tileFact);
            }
            tile.appendChild(tileName);
            tile.appendChild(tileImage);
            tiles.appendChild(tile);
        }
        grid.appendChild(tiles);
    }

    function addControls(human, dinos) {
        const grid = document.getElementById('grid');
        const control = document.getElementById('control');
        const restartButton = document.createElement('button');
        restartButton.innerText = 'Compare Me Again';
        console.log(`restart button: ${restartButton}`);
        restartButton.addEventListener('click', () => {
           addTiles(human, dinos);
        });
        control.appendChild(restartButton);
    }


    function hideForm() {
        const form = document.getElementById('dino-compare');
        form.classList.toggle('hidden');        
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
    hideForm();
    addControls(human, dinos);
    addTiles(human, dinos);

}

// On button click, prepare and display infographic
const button = document.getElementById('btn');
button.addEventListener('click', () => {
    showInfographic();
});
