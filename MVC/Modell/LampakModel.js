class LampakModel {
  constructor() {
    this.lampakAllapot = [];
  }

  getLampakAllapot() {
    return this.lampakAllapot;
  }

  frissitLampakAllapot(id, ujAllapot) {
    this.lampakAllapot[id] = ujAllapot;
  }
}

export default LampakModel;