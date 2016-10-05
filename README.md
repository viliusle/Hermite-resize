# Hermite-resize
Fast canvas image resize/resample using Hermite filter with JavaScript.
Supports transparency, gives good quality.
Library was created for canvas manipulation, but it also can resize HTML images.
 
Uses web workers with transferable objects. Also single core version is supported.

Usage:
```javascript
<script src="../dist/hermite.js"></script>
<script>
var HERMITE = new Hermite_class();
//default resize
HERMITE.resample(canvas, width, height);
//more options
HERMITE.resample(canvas, width, height, true, finish_handler); //true=resize canvas
//single core
HERMITE.resample_single(canvas, width, height);

//resize image to 300x100
HERMITE.resize_image('image_id', 300, 100);
//resize image to 50%
HERMITE.resize_image('image_id', null, null, 50);
</script>
```

- demo file included: ```test/demo.html``` 
- single core demo - http://jsfiddle.net/9g9Nv/460/

### Version 1.0
Single core version - stable. Multi core version - experimental.
- demo: http://viliusle.github.io/miniPaint/
