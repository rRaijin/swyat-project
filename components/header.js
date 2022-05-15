const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    header {
        display: flex;
    }
    .logotype {
        width: 25%;
    }
    .menu {
        width: 65%;
        text-align: center;
    }
    .auth {
        width: 10%;
    }
  </style>
  <header>
    <a href="./index.html" class="logotype">
        LOGO
    </a>
    <div class="menu">
        Main menu
    </div>
    <div class="auth">
        Auth
    </div>
  </header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);
