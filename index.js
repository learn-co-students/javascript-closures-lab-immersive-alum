const app = "I don't do much."

function bumpCounter() {
  let counter = 0

  return function addBump() {
    counter++
  };

  return function getBumps() {
    return counter;
  };
}

function createAnimal(animalType) {
  return function (deadlyDevice) {
    return { animalType, deadlyDevice };
  }
}

let sharkCreator = createAnimal('Shark');
let sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
let sharkWithFrickinLaserbeam = sharkCreator('Cannon');