var distance = {
	euclideanDistance : function euclideanDistance(x1, y1, x2, y2) {
		"use strict";

		return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
	},
	manhattanDistance : function manhattanDistance(x1, y1, x2, y2) {
		"use strict";

		return Math.abs(x1 - x2) + Math.abs(y1 - y2);
	},
	chebyshevDistance : function chebyshevDistance(x1, y1, x2, y2) {
		"use strict";

		return Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
	},
	minkowskiDistance : function minkowskiDistance(x1, y1, x2, y2, order) {
		"use strict";

		return Math.pow(Math.pow(Math.abs(x1 - x2), order) + Math.pow(Math.abs(y1- y2), order), 1 / order);
	}
};

module.exports = distance;