/*
 * Copyright (C) 2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export const newShapeDragImage = (color: string): HTMLCanvasElement => {
	const result = document.createElement("canvas");
	result.width = 24;
	result.height = 24;
	const context = result.getContext("2d");
	if (context != null) {
		context.fillStyle = color;
		context.save();
		context.scale(24 / 960, 24 / 960);
		context.translate(0, 960);
		context.fill(
			new Path2D(
				"M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"
			)
		);
		context.restore();
	}
	result.style.position = "absolute";
	result.style.top = "-24px";
	result.style.left = "-24px";
	result.style.zIndex = "-1";
	result.style.pointerEvents = "none";
	result.style.userSelect = "none";
	document.body.appendChild(result);
	return result;
};
