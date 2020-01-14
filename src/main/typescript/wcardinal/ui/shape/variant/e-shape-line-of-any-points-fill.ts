/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeLineOfAnyValue } from "./e-shape-lines-of-any";

export interface EShapeLineOfAnyPointsFill {
	id: number;
	color: EShapeLineOfAnyValue;
	alpha: EShapeLineOfAnyValue;

	set( color?: EShapeLineOfAnyValue, alpha?: EShapeLineOfAnyValue ): void;

	getColor( index: number, def: number ): number;
	getAlpha( index: number, def: number ): number;

	isStaticColor(): boolean;
	isStaticAlpha(): boolean;

	toDirty(): void;
}
