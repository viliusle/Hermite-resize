Hermite-resize
==============

Fast image resize/resample using Hermite filter with JavaScript.

demo: http://viliusle.github.io/miniPaint/<br />
fiddle: http://jsfiddle.net/9g9Nv/96/

### Single core:
<b>hermite.js</b> - main function, fastest way.

### Multi-core*:
<b>worker-handler.js</b> - function that splits image, sends each peace to resize and combines results<br />
<b>worker-hermite.js</b> - worker, must be in same domain

* slower than single core, because sharing resources, combining takes additional time. And there are no ways to get CPU count with JS.
