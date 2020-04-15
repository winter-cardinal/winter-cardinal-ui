/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeTagValueRange, EShapeTagValueRangeLike } from "./e-shape-tag-value-range";

export enum EShapeTagValueOrder {
	ASCENDING,
	DESCENDING
}

export interface EShapeTagValueLike {
	id: string;
	initial: string;
	format: string;
	range: EShapeTagValueRangeLike;
	capacity: number;
	order: EShapeTagValueOrder;
}

export interface EShapeTagValueParent {
	isChanged: boolean;
}

export interface EShapeTagValue extends EShapeTagValueLike {
	value: unknown;
	readonly nvalue: number;
	time: number;

	values: unknown[];
	times: number[];

	range: EShapeTagValueRange;
	parent?: EShapeTagValueParent;

	formatter?: ( value: unknown ) => unknown;

	clear(): void;
	remove( index: number ): void;
	removeAll( indices: number[] ): void;
	copy( target: EShapeTagValue ): void;
	isEquals( target: EShapeTagValue ): boolean;
	serialize( manager: EShapeResourceManagerSerialization ): number;
	deserialize( target: number, manager: EShapeResourceManagerDeserialization ): void;
}
