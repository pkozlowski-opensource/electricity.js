class Electricity {

  constructor() {
    this.appliancesInUse = new Map();
    this.usageCounter = 0;
  }

  function startUsing(appliance) {
    this.appliancesInUse[appliance] = true;
  }

  function stopUsing(appliance) {
    this.appliancesInUse[appliance] = false;
    this.usageCounter ++;
  }

  function getTotalUsage() {
    return this.usageCounter;
  }
}