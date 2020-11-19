/**
 * The some-tiles web component module.
 *
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

const backImg = (new URL('img/lnu-symbol.png', import.meta.url)).href

/**
 * Define the template
 */
const template = document.createElement('template')
template.innerHTML = `
<style>
  :host {
  display: inline-block;
  }

  .button {
    max-height: 50px;
    max-width: 50px;
    border-radius: 2px;        
  }

  :disabled {
    visibility: hidden;
    border: 2px solid #000000
  }

  #back {
    background-image: url("${backImg}");
    background-repeat: no-repeat;
    background-position: center;
    background-color: #cccccc;
    background-size: cover;
  }
</style>

<button type="button" part="wholeTile" id="tile">
    <div part="frontTile">
      <slot></slot>
    </div>
    <div part"backTile" id="back"></div>
</button>
`

/**
 * Define the custom element.
 */
customElements.define('some-tiles',
  class extends HTMLElement {
    /**
     * Makes an instance of this type.
     */
    constructor () {
      super()

      // Attach shadow and append template.
      this.attachShadow({ mode: 'open' })
        .addendChild(template.content.cloneNode(true))

      // More stuff
    }

    /**
     * Looks for changes in the attributes.
     *
     * @readonly
     * @static
     * @returns {string} - The observed attributes.
     */
    static get observedAttributes () {
      return []
    }

    /**
     * Called by the browser when an attribute is changed.
     *
     * @param {string} name - The name of the attribute.
     * @param {any} oldValue - The old attribute value.
     * @param {any} newValue - The new attribute.
     */
    attributeChangedCallback (name, oldValue, newValue) {

    }

    /**
     * Called when the element has been insterted into the DOM.
     */
    connectedCallback () {
      // Event listeners
    }

    /**
     * Called when the element has been removed from the DOM.
     */
    disconnectedCallback () {
      this.removeEventListener('', this)
    }
  }
)
