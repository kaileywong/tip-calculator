function calculateTip() {
    const billAmt = document.getElementById("priceinput").value;
    const percent = document.getElementById("tipinput").value / 100;
    const numParties = document.getElementById("partiesinput").value || 1;
    if (billAmt === "" || numParties === 0) {
        alert("Please enter values.");
        return;
    } else {
        let tip = billAmt * percent;
        tip = Math.round(tip * 100) / 100;
        let total = tip + Number.parseFloat(billAmt);
        tip /= numParties;
        let perParty = total / numParties;
        perParty = perParty.toFixed(2);
        tip = tip.toFixed(2);
        total = total.toFixed(2);
        if (numParties > 1) {
            alert(`Each party should give $${tip} for tip.\nThe total bill is $${total}.\nEach party should pay $${perParty}.`);
        } else if (numParties === 1) {
            alert(`Your tip is $${tip}.\nThe total bill is $${total}.`);
        }
    }
}

document.getElementById("calculateButton").onclick = () => {
    calculateTip();
};