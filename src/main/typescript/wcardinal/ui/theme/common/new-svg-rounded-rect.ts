export const newSvgRoundedRect = (
	x: number,
	y: number,
	width: number,
	height: number,
	fill: string,
	stroke?: string,
	strokeWidth?: number,
	strokeOpacity?: number
): string => {
	const sw = strokeWidth ?? 0;
	const o = sw * 0.5;
	const r = Math.max(0, 3 - o);
	const w = width - sw - r - r;
	const h = height - sw - r - r;
	x += o + r;
	y += o;
	return (
		`<path d="M${x},${y} h${w} a${r},${r} 0 0 1 ${r},${r} v${h} a${r},${r} 0 0 1 -${r},${r} h-${w} a${r},${r} 0 0 1 -${r},-${r} v-${h} a${r},${r} 0 0 1 ${r},-${r}z" fill="${fill}"` +
		(stroke ? ` stroke="${stroke}"` : ``) +
		(strokeWidth != null ? ` stroke-width="${strokeWidth}"` : ``) +
		(strokeOpacity != null ? ` stroke-opacity="${strokeOpacity}"` : ``) +
		` />`
	);
};
