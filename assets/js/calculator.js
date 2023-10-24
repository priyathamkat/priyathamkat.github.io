
function calculate(event) {
    event.preventDefault();

    console.log("hello");

    const spot = Number(event.target.elements.spot.value);
    const exercise = Number(event.target.elements.exercise.value);
    const rf = Number(event.target.elements.rf.value);
    const sigma = Number(event.target.elements.sigma.value);
    const t = Number(event.target.elements.t.value);

    const d1 = (Math.log(spot / exercise) + (rf + (sigma * sigma) / 2) * t) / (sigma * Math.sqrt(t));
    const d2 = d1 - sigma * Math.sqrt(t);

    const d1Element = document.getElementById("d1");
    const d2Element = document.getElementById("d2");

    d1Element.innerHTML = d1.toFixed(4);
    d2Element.innerHTML = d2.toFixed(4);

    console.log(spot, exercise, rf, sigma, t);

}