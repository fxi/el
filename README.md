# buel

Quick DOM elements creation in js


## Installing

```js
npm install --save buel
````

## Usage

```js
import {buel} from 'buel';

buel('div',
  buel('canvas',{
    width: 300,
    height: 300,
    on : { 'click' : console.log }
  })
)

```

## See also

- [crel](https://github.com/KoryNunn/crel) A small, simple, and fast DOM creation utility. 
- [laconic](https://github.com/joestelmach/laconic) Laconic offers a sane solution to generating DOM content in JavaScript.


