/**
* @description Shows an infograpic
*/
function showInfographic() {


    /**
    * @description Gets input values from form and checks for missing values
    * @returns {object} Object with input values and an erroMessage with errors
    */
    function checkInput() {

        // store errorMessages
        let errorMessage = '';

        // get input from DOM
        const name =  document.getElementById('name').value;
        const feet = document.getElementById('feet').value;
        const inches = document.getElementById('inches').value;
        const weight = document.getElementById('weight').value;
        const diet = document.getElementById('diet').value;

        // check for missing input values
        if (!name) {
            errorMessage = 'Name is required!';
        }
        // one height mesurement should be filled out
        if (!feet && !inches) {
            errorMessage += '\nHeight is required';
        }
        if (!weight) {
            errorMessage += '\nWeight is required';
        }


        // return input values and errorMessage
        return{
            errorMessage,
            name,
            height: feet *12 + inches * 1,
            weight,
            diet
        };
    }


    /**
    * @description Creates human object
    */
    function createHuman(input) {
        return {
            name: document.getElementById('name').value,
            weight: document.getElementById('weight').value,
            // store height in inches
            height: document.getElementById('feet').value * 12 + document.getElementById('inches').value * 1,
            diet: document.getElementById('diet').value
        };
    }


    /**
    * @description Creates an array of Dino objects object
    */
    function createDinos() {
        // copy of dino facts from JSON file
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

        /**
        * @description Represents a dino
        * @constructor
        * @param {string} species
        * @param {number} weight
        * @param {number} height
        * @param {string} diet
        * @param {string} where - Location of the dino
        * @param {string} when - The time period, the dino lived
        * @param {string} fact - Fact about the dino
        */
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
            const weightDifference = this.weight - weight;
            if(weightDifference > 0) {
                return `I'm ${weightDifference} lbs heavier than you.`;
            }

            if (weightDifference < 0) {
                return `I'm ${weightDifference * -1} lbs lighter than you`;
            }

            return `We have the exact same weight!`;
        }


        Dino.prototype.compareHeight = function(height) {
            const heightDifference = this.height - height;

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
                } else if (this.diet === 'herbavor') {
                    return 'I only eat vegetables, looks like you eat meat too.';
                }
            }

            if (humanDiet === 'carnivor') {
                if (this.diet === 'omnivor') {
                    return 'Looks like you don\'t eat vegetables, I like those too.';
                } else if (this.diet === 'herbavor') {
                    return 'Looks like you only eat meat, me? not a bite of those.';
                }
            }

            if (humanDiet === 'herbavor') {
                if (this.diet === 'omnivor') {
                    return 'I see you don\'t eat meat, I like meat too.';
                } else if (this.diet == 'carnivor') {
                    return 'I see you don\'t eat meat at all, that is the only thing I eat';
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


    /**
    * @description Creates infographic
    * @param {object} human
    * @param {object} dinos - Array of Dino objects
    */
    function addInfographic(human, dinos) {


        /**
        * @description Creates random integer
        * @param {number} max - Maximum random number to be generated
        * @returns {number} Random integer between 0 (inclusive) and max (inclusive)
        */
        function createRandomInteger(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }


        /**
        * @description Creates random fact for dino tile
        * @param {object} factList - List of fact types to choose from
        * @param {object} dino - Dino object to create a fact for
        * @param {object} human - Human object to compare Dino to if needed
        * @returns {string} Random fact to display
        */
        function createFact(factList, dino, human) {

            // array to store facts that don't need comparision
            const simpleFacts = ['location', 'time', 'fact'];

            // handle fixed fact for Pigeon`
            if (dino.name === 'Pigeon') {
                return 'All birds are dinosaurs.';
            }

            // select random fact-type from factList
            const fact = factList.splice(createRandomInteger(factList.length), 1)[0];

            // if it's a simple fact return relevant fact from dino object
            if (simpleFacts.includes(fact)) {
                return dino[fact];
            }

            // if comparision is needed call relevant method of dino object
            const compareMethod = 'compare' + fact[0].toUpperCase() + fact.slice(1,);
            return dino[compareMethod](human[fact]);
        }


        const grid = document.getElementById('grid');
        // empty grid, usefull when recreating infographic
        grid.innerHTML = '';

        // creating infographic fragment to reduce reflows and repaint
        const infographic = document.createDocumentFragment();

        // indexes array stores the possible indexes of dinos is dinos array
        // it is used to select dinos at random
        const indexes = [0, 1, 2, 3, 4, 5, 6, 7];

        // list of possible facts, helper variable to choose facts at random
        const factList = ['weight', 'height', 'diet', 'location', 'time', 'fact'];
        // as we need 7 fact add one of the fact at random
        factList.push(factList[createRandomInteger(factList.length)]);

        // use for loop to add 9 tiles to infographic
        for (i = 0; i < 9; i++) {
            // create element for tile (div), it's name (h3), image (img) and fact (p)
            const tile = document.createElement('div');
            const tileName = document.createElement('h3');
            const tileImage = document.createElement('img');
            const tileFact = document.createElement('p');



            // if it's the middle tile add human
            if (i === 4) {
                // add name and image
                tileName.innerText = human.name;
                tileImage.src = `./images/human.png`;
            } else {
                // select dino for the tile
                // create random integer between 0 and the current length of the indexes array
                const randomNum = createRandomInteger(indexes.length);
                // store and remove the randomly selected index
                // use it for add a dino to the tile
                const index = indexes.splice(randomNum, 1)[0];
                const dino = dinos[index];

                // add dino name, image and fact
                tileName.innerText = dino.name;
                tileImage.src = `./images/${dinos[index].name}.png`;
                const dinoFact = createFact(factList, dino, human);
                tileFact.innerText = dinoFact;

                // append fact to tile done here, as human don't need a fact
                tile.appendChild(tileFact);
            }

            // append naem and image to tile
            tile.appendChild(tileName);
            tile.appendChild(tileImage);
            // add style to tile
            tile.classList = 'grid-item';

            //append tile to infographic
            infographic.appendChild(tile);
        }

        // append infograpic to document
        grid.appendChild(infographic);
    }


    /**
    * @description Creates button to refresh infographic
    * @param {object} human
    * @param {object} dinos - Array of Dino objects
    */
    function addControls(human, dinos) {
        // const grid = document.getElementById('grid');


        // select parent element on document
        const control = document.getElementById('control');

        // create button to refresh inforgraphic
        const refreshButton = document.createElement('button');

        // add text to button
        refreshButton.innerText = 'Compare Me Again';
        // console.log(`restart button: ${restartButton}`);
        // add event click evenet listener to recreate infographic
        refreshButton.addEventListener('click', () => {
           addInfographic(human, dinos);
        });

        // append button to document
        control.innerHTML = '';
        control.appendChild(refreshButton);
    }


    /**
    * @description Hides user input form
    */
    function hideForm() {
        const form = document.getElementById('dino-compare');
        form.classList.add('hidden');
    }


    // use input values to create human object
    const human = checkInput();
    // if there are errors with input values
    if (human.errorMessage) {
        // alert user
        alert(human.errorMessage);
        // quit program
        return;
    }


    // create array of dino objects
    const dinos = createDinos();
    // hide user input form
    hideForm();
    // add infographic control panel
    addControls(human, dinos);
    // add infographic
    addInfographic(human, dinos);


}// On button click, prepare and display infographic
const button = document.getElementById('btn');
button.addEventListener('click', () => {
    showInfographic();
});
