class TabLayout extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchBox').value;
  }

  render() {
    this.innerHTML = `
    <a href="../#mainContent" class="skip-link">Skip to Content</a>
    <nav id="drawer">
        <a href="index.html" class="drawer-title">MyKan</a>
        <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li><a href="https://www.linkedin.com/in/odih-nurzaman/" target="_blank" rel="noopener">About Us</a></li>
        </ul>
    </nav>
    <button id="hamburger" aria-label="Open Navigation">☰</button>
    <a href="index.html" class="main-title"><h1>MyKan</h1></a>`;
  }
}

customElements.define('app-bar', TabLayout);
