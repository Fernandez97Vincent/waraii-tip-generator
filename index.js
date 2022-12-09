const cashTip = document.getElementById('cash-tips');
const cardTip = document.getElementById('card-tip');
const spotHopperTip = document.getElementById('sh-tip');
const submitBtn = document.getElementById('submit-btn');
const testWorker = document.getElementById('worker');

const totalTip = document.getElementById('total-tip')

//workers
const kitchenOne = document.getElementById('kitchen-1');
const kitchenTwo = document.getElementById('kitchen-2');

// what we want to do is calculate total tip by adding all the tip
// function getTotalTip() {
//     let totalTip = cardtip.value + cashTip.value + spotHopperTip.value;
//     return totalTip;
// }

// function testDisplay() {
//     testWorker.innerText = getTotalTip();
// }

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // parse ints
    let result = parseInt(cardTip.value) + parseInt(cashTip.value) + parseInt(spotHopperTip.value)
    console.log(result)
    totalTip.innerHTML = `Total: ${result}`;

    // find kitchen tip
    let kitchenTip = (result * .10) / 2;
    console.log(kitchenTip)

})




