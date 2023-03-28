class NotFound {
  constructor($container) {
    this.$container = $container;
    this.render();
  }

  render() {
    this.$container.innerHTML = `
                      <main>
                      404
                      </main>
                    `;
  }
}

export default NotFound;
