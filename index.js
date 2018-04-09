const app = "I don't do much.";

function bumpCounter() {
  let counter = 0;

  function addBump() {
    counter += 1;
  }

  function getBumps() {
    return counter;
  }

  return { addBump, getBumps };
}
//
function createAnimal(animalType) {
  return function deadlyDevice(device) {
    return { animalType: animalType, deadlyDevice: device };
  };
}

var sharkCreator = createAnimal('Shark');

var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');

var sharkWithFrickinCannon = sharkCreator('Cannon');
