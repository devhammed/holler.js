# holler.js
144-bytes lightweight JavaScript polling library!

> This library can be used to setup a run function in specified intervals that can also be used for polling the server for new data. one of the advantages of this library is to avoid the evil behaviour of `setInterval` which is a function interval don't wait for the former function to finish before starting which results in bunch of functions that has not been executed.
## Use-cases
- AJAX to pull data repeatedly
- Run a function in intervals
etc.

## API
```js
  holler( func, intervalMs=1000 );
```
> `func` is the function to run.

> `intervalMs` is the intervals to run `func` in milliseconds.

Thanks - [Oyedele Hammed](https://devhammed.github.io)
