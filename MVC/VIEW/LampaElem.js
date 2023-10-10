class LampaElem {
  constructor(id, parent, controller) {
    this.id = id;
    this.controller = controller;
    this.element = document.createElement("div");
    this.element.classList.add("lampa");

    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber < 20) {
      this.setSzin("green");
    } else {
      this.setSzin("orange");
    }

    parent.appendChild(this.element);
    this.element.addEventListener("click", () =>
      this.controller.lampaKattintas(this)
    );
  }

  setSzin(szin) {
    this.element.style.backgroundColor = szin;
    this.color = szin; // Add this line to store the current color
  }
}

export default LampaElem;
