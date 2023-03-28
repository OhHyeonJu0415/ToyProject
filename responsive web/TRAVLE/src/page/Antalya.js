class Antalya {
  constructor($container) {
    this.$container = $container;
    this.render();
  }

  render() {
    console.log("Antalya");
    this.$container.innerHTML = `
          <main>
          Antalya 페이지에요.
          </main>
        `;
  }
}

export default Antalya;
