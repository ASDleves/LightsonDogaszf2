class LampaElem {
    constructor(id, szuloElem, controller) {
      this.id = id;
      this.controller = controller;
      this.divElem = document.createElement("div");
      this.divElem.classList.add("Lampa");
      const szin = "green"
      this.divElem.style.backgroundColor = szin;
  
      this.divElem.addEventListener("click", () => this.controller.lampaKattintas(this));
      szuloElem.appendChild(this.divElem);
    }
  
    setSzin(szin) {
      this.divElem.style.backgroundColor = szin;
    }
  }
  
  export default LampaElem;
  