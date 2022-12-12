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
const dishwasherTips = document.getElementById('dishwasher-tip');

// how many worker elements
const kitchenWorkers = document.getElementById('kitchen-amt');
const sushiChef = document.getElementById('sushi-amt');
const serverAmt = document.getElementById('server-amt');

function toFixed(num) {
    return num.toFixed(2);
}

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

// if there is a dishwasher it would be kitchentip * .3
// create two variables // with dishwasher and without?
kitchenOne.style.display = 'none';
kitchenTwo.style.display = 'none';
dishwasherTips.style.display = 'none';
sushiOne.style.display = 'none';
sushiTwo.style.display = 'none';
sushiThree.style.display = 'none';
serverOne.style.display = 'none';
serverTwo.style.display = 'none';
serverThree.style.display = 'none';

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    // parse ints
    let result = parseInt(cardTip.value) + parseInt(cashTip.value) + parseInt(spotHopperTip.value)
    console.log(result)
    totalTip.innerHTML = `Total: ${result}`;
    let kitchenTip = (result * .10);
    let dishwasherTotal = kitchenTip * .30;

    kitchenOne.style.display = 'block';
    kitchenTwo.style.display = 'block';
    dishwasherTips.style.display = 'block';
    sushiOne.style.display = 'block';
    sushiTwo.style.display = 'block';
    sushiThree.style.display = 'block';
    serverOne.style.display = 'block';
    serverTwo.style.display = 'block';
    serverThree.style.display = 'block';
    // find kitchen tip
    if (dishwasher.checked) {
        dishwasherTips.innerHTML = `Dishwasher ${dishwasherTotal}`;
    }

    if (parseInt(kitchenWorkers.value) === 1 && dishwasher.checked) {

        kitchenOne.innerHTML = `Kitchen 1: ${toFixed(kitchenTip - dishwasherTotal)}`;
        kitchenTwo.style.display = 'none';
        dishwasherTips.style.display = 'block';
    }
    else if (parseInt(kitchenWorkers.value) === 2 && dishwasher.checked) {
        kitchenOne.innerHTML = `Kitchen 1: ${toFixed((kitchenTip - dishwasherTotal) / 2)}`;
        kitchenTwo.innerHTML = `Kitchen 2: ${toFixed((kitchenTip - dishwasherTotal) / 2)}`;
        dishwasherTips.style.display = 'block';
    }

    else if (parseInt(kitchenWorkers.value) === 2) {
        kitchenOne.innerHTML = `Kitchen 1: ${toFixed(kitchenTip / 2)}`;
        kitchenTwo.innerHTML = `Kitchen 2: ${toFixed(kitchenTip / 2)}`;
        kitchenTwo.style.display = 'block';
        dishwasherTips.style.display = 'none';
    }

    else {
        kitchenOne.innerHTML = `Kitchen: ${kitchenTip}`;
        kitchenTwo.style.display = 'none';
        dishwasherTips.style.display = 'none';
    }

    // console.log(kitchenTip)
    // kitchenOne.innerHTML = kitchenTip / 2;
    // kitchenTwo.innerHTML = kitchenTip / 2;

    // calculate foh tip
    // for sushi bar need to create a variable if server is alone
    // if alone === true sushi bar gets .6 instead of half
    let sushiBarAlone = (result - kitchenTip) * .60;
    let sushiBar = (result - kitchenTip) / 2;
    console.log(sushiBar)

    if(parseInt(serverAmt.value) === 1) {
        sushiTotal.innerHTML = `Sushi Bar Total: ${sushiBarAlone}`;
    }
    else {
        sushiTotal.innerHTML = `Sushi Bar Total: ${sushiBar}`;
    }
    
    // if(parseInt(sushiChef.value) === 3) {
    //     sushiOne.innerHTML = sushiBar / 3
    //     sushiTwo.innerHTML = sushiBar / 3
    //     sushiThree.innerHTML = sushiBar / 3
    //     sushiThree.style.display = 'block';
    // }
    // else if(parseInt(sushiChef.value) === 2) {
    //     sushiOne.innerHTML = sushiBar / 2;
    //     sushiTwo.innerHTML = sushiBar / 2;
    //     sushiThree.style.display = 'none';
    // }

    if (parseInt(sushiChef.value) === 3 && parseInt(serverAmt.value) === 1) {
        sushiOne.innerHTML = `Sushi 1: ${toFixed(sushiBarAlone / 3)}`
        sushiTwo.innerHTML = `Sushi 2: ${toFixed(sushiBarAlone / 3)}`
        sushiThree.innerHTML = `Sushi 3: ${toFixed(sushiBarAlone / 3)}`
    }
    else if (parseInt(sushiChef.value) === 2 && parseInt(serverAmt.value) === 1) {
        sushiOne.innerHTML = `Sushi 1: ${toFixed(sushiBarAlone / 2)}`
        sushiTwo.innerHTML = `Sushi 2: ${toFixed(sushiBarAlone / 2)}`
        sushiThree.style.display = 'none';
    }
    else if (parseInt(sushiChef.value) === 3 && parseInt(serverAmt.value) > 1) {
        sushiOne.innerHTML = `Sushi 1: ${toFixed(sushiBar / 3)}`
        sushiTwo.innerHTML = `Sushi 2: ${toFixed(sushiBar / 3)}`
        sushiThree.innerHTML = `Sushi 3: ${toFixed(sushiBar / 3)}`
        sushiThree.style.display = 'block';
    }
    else if (parseInt(sushiChef.value) === 2 && parseInt(serverAmt.value) > 1) {
        sushiOne.innerHTML = `Sushi 1: ${toFixed(sushiBar / 2)}`
        sushiTwo.innerHTML = `Sushi 2: ${toFixed(sushiBar / 2)}`
        sushiThree.style.display = 'block';
    }





    // foh hourly logic is
    // add the total amount of hours and divide it by the total
    // so we get the value of the input(s)
    const serverOneHour = document.getElementById('server-1-hour');
    const serverTwoHour = document.getElementById('server-2-hour');
    const serverThreeHour = document.getElementById('server-3-hour');
    let serverHours = parseInt(serverOneHour.value) + parseInt(serverTwoHour.value) + parseInt(serverThreeHour.value)
    // created another variable if there are only two servers
    let serverHoursTwo = parseInt(serverOneHour.value) + parseInt(serverTwoHour.value);
    //once we get the total amount of hours we can add them and divide it by the total amount of tip
    let fohTotal = (result - kitchenTip) / 2;
    let serverTipHourly = fohTotal / serverHours;
    let serverTipHourlyTwo = fohTotal / serverHoursTwo;
    let serverAlone = (result - kitchenTip) * .40
    console.log(serverTipHourly)
    console.log(fohTotal)
    serverTotal.innerHTML = `Server Total: ${fohTotal}`;
    if (parseInt(serverAmt.value) === 3) {
        // serverOne.innerHTML = fohTotal / 3;
        // serverTwo.innerHTML = fohTotal / 3;
        // serverThree.innerHTML = fohTotal / 3;
        serverOne.innerHTML = `Server 1: ${(serverTipHourly * parseInt(serverOneHour.value)).toFixed(2)}`;
        serverTwo.innerHTML = `Server 2: ${(serverTipHourly * parseInt(serverTwoHour.value)).toFixed(2)}`;
        serverThree.innerHTML = `Server 3: ${(serverTipHourly * parseInt(serverThreeHour.value)).toFixed(2)}`;
        serverTwo.style.display = 'block';
        serverThree.style.display = 'block';
    }
    else if (parseInt(serverAmt.value) === 2) {
        serverOne.innerHTML = `Server 1: ${(serverTipHourlyTwo * parseInt(serverOneHour.value)).toFixed(2)}`;
        serverTwo.innerHTML = `Server 2: ${(serverTipHourlyTwo * parseInt(serverTwoHour.value)).toFixed(2)}`;
        serverThree.style.display = 'none';
    }
    else if (parseInt(serverAmt.value) === 1) {
        serverOne.innerHTML = `Server: ${serverAlone.toFixed(2)}`;
        serverTwo.style.display = 'none';
        serverThree.style.display = 'none';
    }


})




