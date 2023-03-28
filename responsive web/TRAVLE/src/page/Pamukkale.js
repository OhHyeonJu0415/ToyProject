class Pamukkale {
  constructor($container) {
    this.$container = $container;
    this.render();
  }

  render() {
    console.log("Pamukkale");
    this.$container.innerHTML = `
                      <main>
                      Pamukkale 페이지에요.
                      </main>
                    `;
  }
}

export default Pamukkale;
