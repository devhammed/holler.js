function holler( fn, interval ) {
  interval = interval || 1000;
  (function holl(){
    fn();
    setTimeout( holl, interval );
  })();
}