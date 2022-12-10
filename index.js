const cashTip = document.getElementById('cash-tips');
const cardTip = document.getElementById('card-tip');
const spotHopperTip = document.getElementById('sh-tip');
const submitBtn = document.getElementById('submit-btn');
const testWorker = document.getElementById('worker');

const totalTip = document.getElementById('total-tip')

//sections
const sushiTotal = document.getElementById('sushi-total');
//workers
const kitchenOne = document.getElementById('kitchen-1');
const kitchenTwo = document.getElementById('kitchen-2');
const dishwasher = document.getElementById('dishwasher');

// how many worker elements
const kitchenWorkers = document.getElementById('kitchen-amt');
const sushiChef = document.getElementById('sushi-amt');
const serverAmt = document.getElementById('server-amt');

// what we want to do is calculate total tip by adding all the tip
// function getTotalTip() {
//     let totalTip = cardtip.value + cashTip.value + spotHopperTip.value;
//     return totalTip;
// }

// function testDisplay() {
//     testWorker.innerText = getTotalTip();
// }

// should ask how many workers are working
// and the amount of hours they worked (SERVERS)

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // parse ints
    let result = parseInt(cardTip.value) + parseInt(cashTip.value) + parseInt(spotHopperTip.value)
    console.log(result)
    totalTip.innerHTML = `Total: ${result}`;
    let kitchenTip = (result * .10);
    // find kitchen tip
    if (parseInt(kitchenWorkers.value) === 1) {
        
        kitchenOne.innerHTML = kitchenTip
        kitchenTwo.classList.add('hide');
    }
    else {
        kitchenOne.innerHTML = kitchenTip / 2;
        kitchenTwo.innerHTML = kitchenTip / 2
    }
    
    // console.log(kitchenTip)
    // kitchenOne.innerHTML = kitchenTip / 2;
    // kitchenTwo.innerHTML = kitchenTip / 2;

    // calculate foh tip
    let sushiBar = (result - kitchenTip) / 2;
    console.log(sushiBar)
    sushiTotal.innerHTML = sushiBar;


    let fohTotal = (result - kitchenTip) / 2;
    console.log(fohTotal)

})




