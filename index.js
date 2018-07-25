const app = "I don't do much."


function bumpCounter() {
  var counter = 0;

    function addBump() {
      return counter++
    }

    function getBumps() {
      return counter
    }

    return {addBump, getBumps}
  }

function createAnimal(animalType) {

  function kill(deadlyDevice) {
    return {animalType: animalType, deadlyDevice: deadlyDevice}
  }

  return kill
}

var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
var sharkWithFrickinCannon = sharkCreator('Cannon');
