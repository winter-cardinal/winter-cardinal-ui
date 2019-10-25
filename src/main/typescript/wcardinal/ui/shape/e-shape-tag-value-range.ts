/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export enum EShapeTagValueRangeType {
	NONE = 0,
	FROM = 1,
	TO = 2,
	FROM_TO = 3
}

export interface EShapeTagValueRangeLike {
	type: EShapeTagValueRangeType;
	from: number;
	to: number;
}

export interface EShapeTagValueRangeParent {
	isChanged: boolean;
}

export interface EShapeTagValueRange extends EShapeTagValueRangeLike {
	parent?: EShapeTagValueRangeParent;

	set( from?: number | null, to?: number | null ): boolean;
	normalize( value: number ): number;
	isEquals( target: EShapeTagValueRangeLike ): boolean;
	copy( target: EShapeTagValueRangeLike ): void;
	toObject(): EShapeTagValueRangeLike;
	serialize( manager: EShapeResourceManagerSerialization ): number;
	deserialize( target: number, manager: EShapeResourceManagerDeserialization ): void;
}
