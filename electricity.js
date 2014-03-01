class Electricity {

  constructor() {
    this.appliancesInUse = new Map();
    this.usageCounter = 0;
  }

  function startUsing(appliance) {
  }

  function stopUsing(appliance) {
  }

  function getTotalUsage() {
    return this.usageCounter;
  }
}