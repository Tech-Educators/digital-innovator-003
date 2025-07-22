// Default exports
// and
// how to export everything as one thing

export default {
  favouriteColours: ["yellow", "green", "red"],
  favouriteFruits: ["banana", "orange", "blueberries"],
  workingLocation: "Nottingham",
  getLocation: function () {
    //methods!
    return this.workingLocation;
  },
  getFruits: function () {
    return this.favouriteFruits;
  },
};
