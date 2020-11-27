# &lt;some-tiles&gt;
A web component showing tiles with cards that can be faced up or faced down cards.

## Attributes

### faceup
Displays which part of the card that is facing the viewer at a given moment.

### hidden
Hides the side of the card that is not facing up at the moment.

Default values: `hidden` for the part frontSide and `faceup` for the part backSide.

## Methods

### `(public method)`
Description...

Parameters: (any or none?)

Returns: (Reference to self?)

### `(public method)`

### `(public method)`

## Events 
| Event Name | Fired When |
|------------|------------|
|  `_flip`   | When a card is faced up or down. |

## Styling with CSS
The backside of the card is styleable with the part `backSide`.
The frontside of the card is styleable with the part `frontSide`.

## Example
(```html
   <some-tiles><img src="/images/img.png"></some-tiles>
```)