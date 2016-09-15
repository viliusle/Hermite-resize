onmessage = function (event) {
	var core = event.data.core;
	var cores = event.data.cores;
	var width_source = event.data.width_source;
	var height_source = event.data.height_source;
	var width = event.data.width;
	var height = event.data.height;

	var ratio_w = width_source / width;
	var ratio_h = height_source / height;
	var ratio_w_half = Math.ceil(ratio_w / 2);
	var ratio_h_half = Math.ceil(ratio_h / 2);

	var source = new Uint8ClampedArray(event.data.source);
	var source_h = source.length / width_source / 4;

	var target_size = width * Math.ceil(height / cores) * 4;
	var target_memory = new ArrayBuffer(target_size);
	var target = new Uint8ClampedArray(target_memory, 0, target_size);

	//j position in original source = j + d_h - d_h_source;
	var d_h_source = Math.ceil(height_source / cores) * core;
	var d_h = Math.ceil(height / cores) * core;

	//calculate
	for (var j = 0; j < Math.ceil(height / cores); j++) {
		for (var i = 0; i < width; i++) {
			var x2 = (i + j * width) * 4;
			var weight = 0;
			var weights = 0;
			var weights_alpha = 0;
			var gx_r = 0;
			var gx_g = 0;
			var gx_b = 0;
			var gx_a = 0;
			var center_y = (d_h + j + 0.5) * ratio_h - d_h_source;

			var yy_start = Math.floor(j * ratio_h);
			var yy_stop = Math.ceil((d_h + j + 1) * ratio_h - d_h_source);
			var xx_start = Math.floor(i * ratio_w);
			var xx_stop = Math.ceil((i + 1) * ratio_w);
			for (var yy = yy_start; yy < yy_stop; yy++) {
				if (yy >= source_h || yy < 0) {
					//extra border check
					continue;
				}
				var dy = Math.abs(center_y - (yy + 0.5)) / ratio_h_half;
				var center_x = (i + 0.5) * ratio_w;
				var w0 = dy * dy; //pre-calc part of w
				for (var xx = xx_start; xx < xx_stop; xx++) {
					var dx = Math.abs(center_x - (xx + 0.5)) / ratio_w_half;
					var w = Math.sqrt(w0 + dx * dx);
					if (w >= 1) {
						//pixel too far
						continue;
					}
					//hermite filter
					weight = 2 * w * w * w - 3 * w * w + 1;
					//calc source pixel location
					var pos_x = 4 * (xx + yy * width_source);
					//alpha
					gx_a += weight * source[pos_x + 3];
					weights_alpha += weight;
					//colors
					if (source[pos_x + 3] < 255)
						weight = weight * source[pos_x + 3] / 250;
					gx_r += weight * source[pos_x];
					gx_g += weight * source[pos_x + 1];
					gx_b += weight * source[pos_x + 2];
					weights += weight;
				}
			}
			target[x2] = gx_r / weights;
			target[x2 + 1] = gx_g / weights;
			target[x2 + 2] = gx_b / weights;
			target[x2 + 3] = gx_a / weights_alpha;
		}
	}

	//return
	var objData = {
		core: core,
		target: target,
	};
	postMessage(objData, [target.buffer]);
};
