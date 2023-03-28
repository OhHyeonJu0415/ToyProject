class Ankara {
  constructor($container) {
    this.$container = $container;
    this.render();
  }

  render() {
    console.log("ankara");
    this.$container.innerHTML = `
      <main>
        메인 페이지에요.
      </main>
    `;
  }
}

export default Ankara;
