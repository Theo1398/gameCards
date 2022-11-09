/*
    collect info
    store the info
    put stored info in arrays
    build cards
*/

const submitBtn = document.getElementById('submitBtn');
const gameCards = document.getElementById('gameCards');
let games = [];

//HIGH ORDER FUNCTION  a function that calls another function
const collectInfo =()=> {
    //collect info
    const gameName = document.getElementById('gameName').value;
    const category = document.querySelector('select[name=category]').value;
    const gameImage = document.getElementById('gameImage').value;
    // console.log(gameName);  => test code

    if (gameName == '' || category == '' || gameImage == '') {
        alert('please fill out fields')
    } else {
        //store info in an object
        let data = {
            gameName,
            category,
            gameImage
        };
        // console.log(data)
        addInfo(games, data);
    }

};

//put stored info in arrays
const addInfo =(arr, obj)=> {
    arr = [...arr, obj];
    buildCard(arr);
};

const buildCard =(arr)=> {
    let card;
    //build card
    arr.forEach(item => {
        card = `<div class="col-md-3">
                    <div class="card border-danger">
                        <div class="card-header">
                            <h2 class="h3 text-danger">${item.gameName}</h2>
                        </div>
                        <img src="${item.gameImage}" alt="${item.gameName}" class="img-fluid" />
                        <div class="card-body">
                            <p class="card-text text-danger">Category: <span id="gameCategory">${item.category}</span></p>
                        </div>
                    </div>
                </div>`
        });
    gameCards.innerHTML += card;
    // += keeps it from getting rid of the previous card
};

//when you write a function you want it to complete one task not several different things
submitBtn.addEventListener('click', (e)=> {
    //prevents the page from refreshing to the default
    e.preventDefault();
    //console.log('clicked');  => use to test if code is working

    collectInfo();
});

/* 
**SPREAD OPERATOR allows you to make changes in data without actually changing mutating and corupting it
let coders = ['gwen', 'brison', 'angela', 'sam', 'kevin', 'rhiannon'];
**ex) ... [item1, item2, item3] => item1, item2, item3
let newCoders = [...coders, 'jayson']
*/

/*
let myName = 'Herbert'
let myAge = 42
let message = 'My name is ' + myName + ' and I am ' + myAge + ' years old.'  **this one is not so good**

**STRING TEMPERATE LITERAL
let newMessage = `my name is ${myName} and I am ${myAge} years old.`   **this one is better** 
**doesn't have to be a variable in the curly brackets
*/