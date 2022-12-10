const cashTip = document.getElementById('cash-tips');
const cardTip = document.getElementById('card-tip');
const spotHopperTip = document.getElementById('sh-tip');
const submitBtn = document.getElementById('submit-btn');
const testWorker = document.getElementById('worker');

const totalTip = document.getElementById('total-tip')

//sections
const sushiTotal = document.getElementById('sushi-total');
const serverTotal = document.getElementById('foh-total');
//workers
const kitchenOne = document.getElementById('kitchen-1');
const kitchenTwo = document.getElementById('kitchen-2');
const dishwasher = document.getElementById('dishwasher');
const sushiOne = document.getElementById('sushi-1');
const sushiTwo = document.getElementById('sushi-2');
const sushiThree = document.getElementById('sushi-3');
const serverOne = document.getElementById('server-1');
const serverTwo = document.getElementById('server-2');
const serverThree = document.getElementById('server-3');

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
        kitchenTwo.style.display= 'none';
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
    sushiTotal.innerHTML = `Sushi Bar Total: ${sushiBar}`;
    if(parseInt(sushiChef.value) === 3) {
        sushiOne.innerHTML = sushiBar / 3
        sushiTwo.innerHTML = sushiBar / 3
        sushiThree.innerHTML = sushiBar / 3
        sushiThree.style.display = 'block';
    }
    else if(parseInt(sushiChef.value) === 2) {
        sushiOne.innerHTML = sushiBar / 2;
        sushiTwo.innerHTML = sushiBar / 2;
        sushiThree.style.display = 'none';
    }


    let fohTotal = (result - kitchenTip) / 2;
    console.log(fohTotal)
    serverTotal.innerHTML = `Server Total: ${fohTotal}`;
    if(parseInt(serverAmt.value) === 3) {
        serverOne.innerHTML = fohTotal / 3;
        serverTwo.innerHTML = fohTotal / 3;
        serverThree.innerHTML = fohTotal / 3;
        serverTwo.style.display = 'block';
        serverThree.style.display = 'block';
    }
    else if(parseInt(serverAmt.value) === 2) {
        serverOne.innerHTML = fohTotal / 2;
        serverTwo.innerHTML = fohTotal /2;
        serverThree.style.display = 'none';
    }
    else {
        serverOne.innerHTML = fohTotal;
        serverTwo.style.display = 'none';
        serverThree.style.display = 'none';
    }


})




