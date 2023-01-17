function calculateTip() {
    //Store the data of inputs
    let billAmount = document.getElementById('billamt').value;
    let serviceQuality = document.getElementById('serviceQual').value;
    let numberOfPeople = document.getElementById('peopleamt').value;

    // Validation
    if (billAmount === "" ) {
        alert('Please enter a value in Bill Amount');
        return;
    } else if (serviceQuality == 0) {
        alert('Please select Service Type')
        return;
    } else if (numberOfPeople === '' || numberOfPeople <= 1) {
        numberOfPeople = 1;
        document.getElementById('each').style.display = 'none';
    } else {
        document.getElementById('each').style.display = 'block';
    }

    // Our math calculation
    let totalPayment = (billAmount * serviceQuality) / numberOfPeople;
    totalPayment = Math.round(totalPayment * 100) / 100;
    totalPayment = totalPayment.toFixed(2);
    

    // Displaying our tip
    document.getElementById('totalTip').style.display = 'block';
    document.getElementById('tip').innerHTML = totalPayment;
}

document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display = 'none';

document.getElementById('calculate').onclick = function () {
    calculateTip();
}
