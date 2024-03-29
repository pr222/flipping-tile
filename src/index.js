/**
 * The main script file of the application.
 *
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */
import './components/some-tiles/'

// When 'flip' event - log {$innerHTML} of the element.
document.querySelector('body').addEventListener('flippingCard', event => {
  console.log(event.target.innerHTML.trim())
})
