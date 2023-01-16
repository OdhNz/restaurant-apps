class FooterSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <p>Copyright © 2022 - MyKan</p>
    `;
  }
}

customElements.define('footer-section', FooterSection);
