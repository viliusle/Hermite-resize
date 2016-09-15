# Hermite-resize
Fast canvas image resize/resample using Hermite filter with JavaScript.
Supports transparency, gives good quality.
Library was created for canvas manipulation, but it also can be used for HTML images.
 
### Version 2.0
**Faster** and non-blocking. Switched to **web workers** with **transferable objects**. Single cpu version 20% faster, multi-cpu version - 80% faster.

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

- demo file included: test/demo.html (canvas + image resize)
- **Online demo coming soon.**

### Version 1.0 - (deprecated)
Single core version - stable. Multi core version - experimental.
- demo: http://viliusle.github.io/miniPaint/
- fiddle: http://jsfiddle.net/9g9Nv/96/
