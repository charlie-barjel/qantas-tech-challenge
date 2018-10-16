function getCarOfTheWeek() {
  return fetch('data/carOfTheWeek.json')
    .then(r => r.json());
}

function findByMake(make) {
  return getMakes()
    .then(data => findMake(data, make));
}

function findMake(makes, make) {
  return Promise.resolve(makes.find(m => m.name.toLowerCase() === make.toLowerCase()));
}

function getMakes() {
  return fetch('/data/makes.json')
    .then(r => r.json());
}

function getModels() {
  return fetch('/data/models.json')
    .then(r => r.json());
}

function getModelById(id) {
  return getModels()
    .then(models => models.find(m => m.id === id));
}

export {
  getCarOfTheWeek,
  findByMake,
  getMakes,
  getModels,
  getModelById,
}
