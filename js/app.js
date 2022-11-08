/*
    collect info
    store the info
    put stored info in arrays
    build cards
*/

const submitBtn = document.getElementById('submitBtn');
let games = [];

submitBtn.addEventListener('click', (e)=> {
    //prevents the page from refreshing to the default
    e.preventDefault();
    //console.log('clicked');  => use to test if code is working

    //collect info
    const gameName = document.getElementById('gameName').value;
    const category = document.querySelector('select[name=category]').value;
    const gameImage = document.getElementById('gameImage').value;
    // console.log(gameName);  => test code
    
    //store info in an object
    let data = {
        gameName,
        category,
        gameImage
    };
    // console.log(data)

    //put stored info in arrays
    games = [...games, data]
    console.log(games)
});

//spread operator allows you to make changes in data without actually changing mutating and corupting it
// let coders = ['gwen', 'brison', 'angela', 'sam', 'kevin', 'rhiannon'];
//ex) ... [item1, item2, item3] => item1, item2, item3
// let newCoders = [...coders, 'jayson']