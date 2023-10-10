import LampaElem from "../VIEW/LampaElem.js";
import LampakModel from "../Modell/LampakModel.js"

class Controller {
  constructor() {
    this.model = new LampakModel();
    this.lampakView = [];
    const szuloElem = document.querySelector("article");

    for (let index = 0; index < 9; index++) {
      const lampaElem = new LampaElem(index, szuloElem, this);
      this.lampakView.push(lampaElem);
    }

    this.lampakModel = new LampakModel();
  }

  lampaKattintas(lampaElem) {
    const id = lampaElem.id;
    const aktualisAllapot = this.model.getLampakAllapot()[id];
    const ujAllapot = !aktualisAllapot;
    this.model.frissitLampakAllapot(id, ujAllapot);

    const szin = ujAllapot ? "orange" : "green";
    lampaElem.setSzin(szin);

  }
}

export default Controller;
