Hermite-resize
==============

Fast image resize/resample using Hermite filter with JavaScript.

demo: http://viliusle.github.io/miniPaint/
### Single core:
<b>hermite.js</b> - main function, fastest way.

### Multi-core*:
<b>worker-handler.js</b> - function that split image, send each peace to resize and combine results<br />
<b>worker-hermite.js</b> - worker, must be in same domain

* slower than single core, becouse sharing resources, combining takes additional time. And there is no way to get CPU count WITH js.
