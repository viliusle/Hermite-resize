Hermite-resize
==============

Fast image resize/resample using Hermite filter with JavaScript.

## Single core:
hermite.js - main function, fastest

## Multi-core:
worker-handler.js - function that split image, send each peace to resize and combine results
worker-hermite.js - worker, must be in same domain

demo: http://viliusle.github.io/miniPaint/
