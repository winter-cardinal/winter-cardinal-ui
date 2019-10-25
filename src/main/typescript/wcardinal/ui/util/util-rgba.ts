/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class UtilRgba {
	static toCode( color: number, alpha: number ): string {
		const r = ( color >> 16 ) & 0xff;
		const g = ( color >> 8 ) & 0xff;
		const b = ( color & 0xff );
		return `rgba(${r},${g},${b},${alpha})`;
	}
}
