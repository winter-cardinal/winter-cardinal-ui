/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Rectangle } from "pixi.js";
import { UtilHtmlElementClipperEx } from "./util-html-element-clipper-ex";
import { UtilHtmlElementClipperExRects } from "./util-html-element-clipper-ex-rects";

export class UtilHtmlElementClipperExImpl implements UtilHtmlElementClipperEx {
	private static WORK_MATRIX?: Matrix;
	private static WORK_RECTS?: number[];

	private _id: string;
	private _path: SVGPathElement;
	private _pathD: string;

	constructor(container: HTMLElement) {
		const SVG_XMLNS = "http://www.w3.org/2000/svg";
		const element = document.createElementNS(SVG_XMLNS, "svg");
		element.setAttribute("style", "position: absolute;");
		element.setAttribute("width", "0px");
		element.setAttribute("height", "0px");

		const defs = document.createElementNS(SVG_XMLNS, "defs");
		const clipPath = document.createElementNS(SVG_XMLNS, "clipPath");
		const clipPathId = `clipper_ex_${Math.random().toString(32).substring(2)}`;
		clipPath.setAttribute("id", clipPathId);
		clipPath.setAttribute("clipPathUnits", "objectBoundingBox");
		const path = document.createElementNS(SVG_XMLNS, "path");
		this._path = path;
		this._pathD = "";
		path.setAttribute("clip-rule", "evenodd");
		clipPath.appendChild(path);
		defs.appendChild(clipPath);
		element.appendChild(defs);
		this._id = clipPathId;
		container.appendChild(element);
	}

	get id(): string {
		return this._id;
	}

	update(
		elementRect: Rectangle | null,
		elementMatrix: Matrix | null,
		clipperExRects: UtilHtmlElementClipperExRects
	): void {
		const d = this.toD(elementRect, elementMatrix, clipperExRects);
		if (this._pathD != d) {
			this._path.setAttribute("d", d);
			this._pathD = d;
		}
	}

	protected toD(
		elementRect: Rectangle | null,
		elementMatrix: Matrix | null,
		clipperExRects: UtilHtmlElementClipperExRects
	): string {
		if (elementRect == null) {
			return "";
		}

		const w = elementRect.width;
		const h = elementRect.height;
		const threshold = 0.0001;
		if (w < threshold || h < threshold) {
			return "";
		}

		const clipperExRectsSize = clipperExRects.size;
		if (clipperExRectsSize <= 0) {
			return "M0,0 h1 v1 h-1z";
		}

		const matrix = (UtilHtmlElementClipperExImpl.WORK_MATRIX ??= new Matrix());
		if (elementMatrix != null) {
			matrix.copyFrom(elementMatrix);
			matrix.invert();
		} else {
			matrix.identity();
		}
		matrix.translate(-elementRect.x, -elementRect.y);
		matrix.scale(1 / w, 1 / h);

		let xmin = -1;
		let xmax = +2;
		let ymin = -1;
		let ymax = +2;
		let result = "";
		const a = matrix.a;
		const b = matrix.b;
		const c = matrix.c;
		const d = matrix.d;
		const tx = matrix.tx;
		const ty = matrix.ty;
		const rects = (UtilHtmlElementClipperExImpl.WORK_RECTS ??= []);
		const rectsLength = this.toRects(clipperExRects, rects);
		const precision = 5;
		for (let i = 0; i < rectsLength; i += 4) {
			const x0 = rects[i + 0];
			const y0 = rects[i + 1];
			const x1 = rects[i + 2];
			const y1 = rects[i + 3];

			const x2 = a * x0 + c * y0 + tx;
			const y2 = b * x0 + d * y0 + ty;
			const x3 = a * x1 + c * y0 + tx;
			const y3 = b * x1 + d * y0 + ty;
			const x4 = a * x1 + c * y1 + tx;
			const y4 = b * x1 + d * y1 + ty;
			const x5 = a * x0 + c * y1 + tx;
			const y5 = b * x0 + d * y1 + ty;

			xmin = Math.min(xmin, x2, x3, x4, x5);
			xmax = Math.max(xmax, x2, x3, x4, x5);
			ymin = Math.min(ymin, y2, y3, y4, y5);
			ymax = Math.max(ymax, y2, y3, y4, y5);

			const x2s = x2.toFixed(precision);
			const y2s = y2.toFixed(precision);
			const x3s = x3.toFixed(precision);
			const y3s = y3.toFixed(precision);
			const x4s = x4.toFixed(precision);
			const y4s = y4.toFixed(precision);
			const x5s = x5.toFixed(precision);
			const y5s = y5.toFixed(precision);

			result += ` M${x2s},${y2s} L${x3s},${y3s} L${x4s},${y4s} L${x5s},${y5s}Z`;
		}
		return `M${xmin},${ymin} L${xmax},${ymin} L${xmax},${ymax} L${xmin},${ymax}Z` + result;
	}

	protected toRects(clipperExRects: UtilHtmlElementClipperExRects, result: number[]): number {
		const data = clipperExRects.data;
		const size = clipperExRects.size;

		// Copy all rectangles
		let imax = size << 2;
		for (let i = 0; i < imax; i += 4) {
			const x0 = data[i + 0];
			const y0 = data[i + 1];
			const x1 = data[i + 2];
			const y1 = data[i + 3];
			if (x0 < x1) {
				result[i + 0] = x0;
				result[i + 2] = x1;
			} else {
				result[i + 0] = x1;
				result[i + 2] = x0;
			}
			if (y0 < y1) {
				result[i + 1] = y0;
				result[i + 3] = y1;
			} else {
				result[i + 1] = y1;
				result[i + 3] = y0;
			}
		}

		// Subdivide all rectangles if they have intersections
		for (let i = 4; i < imax; i += 4) {
			let x0 = result[i + 0];
			let y0 = result[i + 1];
			let x1 = result[i + 2];
			let y1 = result[i + 3];

			for (let j = 0; j < i; j += 4) {
				const x2 = result[j + 0];
				const y2 = result[j + 1];
				const x3 = result[j + 2];
				const y3 = result[j + 3];

				// Check if there are intersections along the X axis.
				// Here, ix represents which edges of the i-th rectangle are in the j-th rectangle as follows:
				//
				// * 0: No edge is in the j-th rectangle,
				// * 1: The left edge is in the j-th rectangle,
				// * 2: The right edge is in the j-th rectangle, and
				// * 3: Both edges are in the j-th rectangle.
				//
				// The same spplies to the variable jx.
				let ix = 0;
				let jx = 0;
				if (x0 <= x2) {
					if (x1 <= x3) {
						if (x1 <= x2) {
							// x0--x1
							//         x2--x3
							// In this case, there is no intersection.
							continue;
						} else {
							// x0----x1
							//    x2----x3
							ix = 2;
							jx = 1;
						}
					} else {
						// x0--------x1
						//    x2--x3
						jx = 3;
					}
				} else {
					if (x1 <= x3) {
						//    x0--x1
						// x2--------x3
						ix = 3;
					} else {
						if (x3 <= x0) {
							//         x0--x1
							// x2--x3
							// In this case, there is no intersection.
							continue;
						} else {
							//    x0----x1
							// x2----x3
							ix = 1;
							jx = 2;
						}
					}
				}

				// Check if there are intersections along the Y axis.
				//
				// * 0: No edge is in a rectangle,
				// * 1: The bottom edge is in a rectangle,
				// * 2: The top edge is in a rectangle, and
				// * 3: Both edges are in a rectangle.
				let iy = 0;
				let jy = 0;
				if (y0 <= y2) {
					if (y1 <= y3) {
						if (y1 <= y2) {
							// y0--y1
							//         y2--y3
							// In this case, there is no intersection.
							continue;
						} else {
							// y0----y1
							//    y2----y3
							iy = 2;
							jy = 1;
						}
					} else {
						// y0--------y1
						//    y2--y3
						jy = 3;
					}
				} else {
					if (y1 <= y3) {
						//    y0--y1
						// y2--------y3
						iy = 3;
					} else {
						if (y3 <= y0) {
							//         y0--y1
							// y2--y3
							// In this case, there is no intersection.
							continue;
						} else {
							//    y0----y1
							// y2----y3
							iy = 1;
							jy = 2;
						}
					}
				}

				// Count number of i-th rectangle vertices in j-th rectangle.
				let ic = 0;
				if (ix === 0 || iy === 0) {
					ic = 0;
				} else if (ix === 1 || ix === 2) {
					if (iy === 3) {
						ic = 2;
					} else {
						ic = 1;
					}
				} else {
					if (iy === 3) {
						ic = 4;
					} else {
						ic = 2;
					}
				}

				// If all the vertices of the i-th rectangle are in j-th rectangle, remove the i-th rectangle.
				if (ic === 4) {
					if (i + 4 < imax) {
						result[i + 0] = result[imax + 0];
						result[i + 1] = result[imax + 1];
						result[i + 2] = result[imax + 2];
						result[i + 3] = result[imax + 3];
					}
					i -= 4;
					imax -= 4;
					break;
				}

				// Count number of j-th rectangle vertices in i-th rectangle.
				let jc = 0;
				if (jx === 0 || jy === 0) {
					jc = 0;
				} else if (jx === 1 || jx === 2) {
					if (jy === 3) {
						jc = 2;
					} else {
						jc = 1;
					}
				} else {
					if (jy === 3) {
						jc = 4;
					} else {
						jc = 2;
					}
				}

				// If all the vertices of the j-th rectangle are in the i-th rectangle, remove the j-th rectangle.
				if (jc === 4) {
					for (let k = j + 4; k < imax; k += 4) {
						result[k - 4] = result[k + 0];
						result[k - 3] = result[k + 1];
						result[k - 2] = result[k + 2];
						result[k - 1] = result[k + 3];
					}
					i -= 4;
					imax -= 4;
					j -= 4;
					continue;
				}

				// Other cases
				if (ic === 0) {
					if (jc === 0) {
						for (let k = imax - 4; j < k; k -= 4) {
							result[k + 4] = result[k + 0];
							result[k + 5] = result[k + 1];
							result[k + 6] = result[k + 2];
							result[k + 7] = result[k + 3];
						}
						if (jx === 0) {
							//      +-----+      y1
							// +----|     |----+ y3
							// | i  |  j  |    |
							// +----|     |----+ y2
							//      +-----+      y0
							// x0   x2    x3   x1
							result[j + 3] = y0;
							result[j + 4] = x2;
							result[j + 5] = y1;
							result[j + 6] = x3;
							result[j + 7] = y3;
						} else {
							//      +-----+      y1
							// +----|     |----+ y3
							// | j  |  i  |    |
							// +----|     |----+ y2
							//      +-----+      y0
							// x2   x0    x1   x3
							result[j + 2] = x0;
							result[j + 4] = x1;
							result[j + 5] = y2;
							result[j + 6] = x3;
							result[j + 7] = y3;
						}
						i += 4;
						imax += 4;
						j += 4;
					} else if (jc === 2) {
						if (jx === 1) {
							// +---------+
							// |         |-----+
							// |    i    |  j  |
							// |         |-----+
							// +---------+
							result[j + 0] = x1;
						} else if (jx === 2) {
							//       +---------+
							// +-----|         |
							// |  j  |    i    |
							// +-----|         |
							//       +---------+
							result[j + 2] = x0;
						} else if (jy === 1) {
							//   +-----+
							//   |  j  |
							// +---------+
							// |         |
							// |    i    |
							// |         |
							// +---------+
							result[j + 1] = y1;
						} else if (jy === 2) {
							// +---------+
							// |         |
							// |    i    |
							// |         |
							// +---------+
							//   |  j  |
							//   +-----+
							result[j + 3] = y0;
						}
					}
				} else if (ic === 1) {
					for (let k = imax - 4; j < k; k -= 4) {
						result[k + 4] = result[k + 0];
						result[k + 5] = result[k + 1];
						result[k + 6] = result[k + 2];
						result[k + 7] = result[k + 3];
					}
					if (jx === 1) {
						if (jy === 1) {
							//         +---------+
							//         |         |
							//         |    j    |
							// +---------+       |
							// |         |-------+
							// |    i    |
							// |         |
							// +---------+
							result[j + 0] = x1;
							result[j + 4] = x2;
							result[j + 5] = y1;
							result[j + 6] = x1;
							result[j + 7] = y3;
						} else {
							// +---------+
							// |         |
							// |    i    |
							// |       +---------+
							// +-------|         |
							//         |    j    |
							//         |         |
							//         +---------+
							result[j + 0] = x1;
							result[j + 4] = x2;
							result[j + 5] = y2;
							result[j + 6] = x1;
							result[j + 7] = y0;
						}
					} else {
						if (jy === 1) {
							// +---------+
							// |         |
							// |    j    |
							// |         |-------+
							// +---------+       |
							//         |    i    |
							//         |         |
							//         +---------+
							result[j + 2] = x0;
							result[j + 4] = x0;
							result[j + 5] = y1;
							result[j + 6] = x3;
							result[j + 7] = y3;
						} else {
							//         +---------+
							//         |         |
							//         |    i    |
							// +---------+       |
							// |         |-------+
							// |    j    |
							// |         |
							// +---------+
							result[j + 2] = x0;
							result[j + 4] = x0;
							result[j + 5] = y2;
							result[j + 6] = x3;
							result[j + 7] = y0;
						}
					}
					i += 4;
					imax += 4;
					j += 4;
				} else if (ic === 2) {
					if (ix === 1) {
						// +---------+
						// |         |-----+
						// |    j    |  i  |
						// |         |-----+
						// +---------+
						result[i + 0] = x3;
						x0 = x3;
					} else if (ix === 2) {
						//       +---------+
						// +-----|         |
						// |  i  |    j    |
						// +-----|         |
						//       +---------+
						result[i + 2] = x2;
						x1 = x2;
					} else if (iy === 1) {
						//   +-----+
						//   |  i  |
						// +---------+
						// |         |
						// |    j    |
						// |         |
						// +---------+
						result[i + 1] = y3;
						y0 = y3;
					} else if (iy === 2) {
						// +---------+
						// |         |
						// |    j    |
						// |         |
						// +---------+
						//   |  i  |
						//   +-----+
						result[i + 3] = y2;
						y1 = y2;
					}
				}
			}
		}
		return imax;
	}
}
