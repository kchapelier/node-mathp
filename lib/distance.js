var distance = {
	euclideanDistance : function euclideanDistance(x1, y1, x2, y2) {
		"use strict";

		return this.sqrt(this.pow(x1 - x2, 2) + this.pow(y1 - y2, 2));
	},
	manhattanDistance : function manhattanDistance(x1, y1, x2, y2) {
		"use strict";

		return this.abs(x1 - x2) + this.abs(y1 - y2);
	},
	chebyshevDistance : function chebyshevDistance(x1, y1, x2, y2) {
		"use strict";

		return this.max(this.abs(x1 - x2), this.abs(y1 - y2));
	},
	minkowskiDistance : function minkowskiDistance(x1, y1, x2, y2, order) {
		"use strict";

		return this.pow(this.pow(this.abs(x1 - x2), order) + this.pow(this.abs(y1- y2), order), 1 / order);
	}
};

module.exports = distance;