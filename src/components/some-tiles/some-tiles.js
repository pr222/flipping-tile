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
  border-radius: 0px;
  width: 85px;
  height: 100px;
  margin: 5px;
  }

  :host([faceup]) #back {
    background-color: #FFFFFF;
  }

  :host([faceup]) #front {
    background-color: #FF66CC;
  }

  :disabled {
    border: 2px dotted #CCCCCC;
  }
*/
  [hidden] {
    visibility: hidden;
  }

  #tile {
     padding: 0px;
     width: 100%;
     height: 100%;
  }

  #tile:focus {
      outline: 2px solid #000000;
  }

  #front, #back {
      width: 100%;
      height: 100%;
  }

  #front hidden {
      display: none;
  }

  #back {
    background-image: url("${backImg}");
    background-repeat: no-repeat;
    background-color: #ffcc00;
    background-size: 50%;
    background-position: center;
  }

</style>

<button type="button" part="wholeTile" id="tile">
    <div part="frontSide" id="front" hidden>
      <slot></slot>
    </div>
    <div part="backSide" id="back" class="faceup"></div>
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
        .appendChild(template.content.cloneNode(true))

      this._tile = this.shadowRoot.querySelector('#tile')
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
      this.addEventListener('click', this._cardClicked)
      // this.addEventListener('keydown', this._cardClicked)
    }

    /**
     * Called when the element has been removed from the DOM.
     */
    disconnectedCallback () {
      this.removeEventListener('click', this._cardClicked)
      // this.removeEventListener('keydown', this._cardClicked)
    }

    /**
     * Click event
     *
     * @param {Event} - Mouse or key press event.
     */
    _cardClicked (event) {
        if (event.button === 0 &&
            event.buttons < 2 &&
            !event.altKey &&
            !event.ctrlKey &&
            !event.metaKey &&
            !event.shiftKey) {
            this._flip()
          }
          // this._flip()
    
    }

    _flip () {
      // Changed what is flipped, the card not the entire tile.
      this.setAttribute('faceup', '')
    //   this._tile.setAttribute('focus', '')
    }
  }
)
