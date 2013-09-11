Hermite-resize
==============

Fast image resize/resample using Hermite filter with JavaScript.

## Single core:
hermite.js - main function, fastest way.

## Multi-core*:
worker-handler.js - function that split image, send each peace to resize and combine results
worker-hermite.js - worker, must be in same domain

* - beta, slower than single core, becouse sharing resources, combining takes additional time, to be usefull must be slow process. Or not optimized? :) 

demo: http://viliusle.github.io/miniPaint/
