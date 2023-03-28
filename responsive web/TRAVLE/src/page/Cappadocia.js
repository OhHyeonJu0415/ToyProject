class Cappadocia {
  constructor($container) {
    this.$container = $container;
    this.render();
  }

  render() {
    console.log("Cappadocia");
    this.$container.innerHTML = `
              <main>
              Cappadocia 페이지에요.
              </main>
            `;
  }
}

export default Cappadocia;
