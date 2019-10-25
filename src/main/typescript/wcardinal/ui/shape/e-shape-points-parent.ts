/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { EShape } from "./e-shape";
import { EShapeUploaded } from "./e-shape-uploaded";

export interface EShapePointsParent {
	children: EShape[];
	size: IPoint;
	uploaded?: EShapeUploaded;
	toDirty(): void;
	updateUploaded(): void;
}
