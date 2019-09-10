const width = 400;
const height = 400;

let target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
};

let $map = document.getElementById('map');
let $distance = document.getElementById("distance");
let clicks = 0;

$map.addEventListener("click", function (e) {
  clicks++;
let distance = getDistance(e, target);
let distanceHint = getDistanceHint(distance);
$distance.innerHTML = `<h1>${distanceHint}</h1>`

if (distance < 20) {
  alert(`Haz encontrado el tesoro en ${clicks} clicks`);
location.reload();
}
})
