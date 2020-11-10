/**
 * The main script file of the application.
 *
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

document.querySelector('.grid-container').addEventListener('tileflip', event => {
  console.log(event.target.innerHTML.trim())
})
