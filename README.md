# Hermite-resize
Fast canvas image resize/resample using Hermite filter with JavaScript.
Supports transparency, gives good quality.
Library was created for canvas manipulation, but it also can be used for HTML images.
 
### Version 2.0
**Faster** and don't block the UI. Switched to **web workers** with **transferable objects**. 
Single core version is 20% faster, multi-core version - 5 times faster then previous multi-core version. 
For small images, 1-core version still faster, for big images, multi-core version is similar/faster.

Usage:
```javascript
<script src="../dist/hermite.js"></script>
<script src="../dist/hermite.worker.js"></script>
<script>
var HERMITE = new Hermite_class();
//default resize
HERMITE.resample(canvas, width, height);
//more options
HERMITE.resample(canvas, width, height, true, finish_handler); //true=resize canvas
//single core
HERMITE.resample_single(canvas, width, height);
</script>
```

- demo file included: ```test/demo.html``` 
- single core demo - http://jsfiddle.net/9g9Nv/442/

### Version 1.0
Single core version - stable. Multi core version - experimental.
- demo: http://viliusle.github.io/miniPaint/
