export class Electricity {

  constructor() {
    this.appliancesInUse = new Map();
    this.usageCounter = 0;
  }

  startUsing(appliance) {
    this.appliancesInUse[appliance] = true;
  }

  stopUsing(appliance) {
    this.appliancesInUse[appliance] = false;
    this.usageCounter ++;
  }

  getTotalUsage() {
    return this.usageCounter;
  }
}