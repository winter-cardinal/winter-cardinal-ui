/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeTagValue } from "./e-shape-tag-value";
import { EShapeTagValueRange } from "./e-shape-tag-value-range";

export interface EShapeTag {
	isChanged: boolean;

	readonly id: string;
	readonly initial: string;
	readonly format: string;
	readonly range: EShapeTagValueRange;
	inherited?: EShapeTagValue;

	// Shortcut for elements which have just one tag.
	value: unknown;
	readonly nvalue: number;
	time: number;
	values: unknown[];
	times: number[];
	capacity: number;

	add( value: EShapeTagValue, index?: number ): void;
	set( index: number, value: EShapeTagValue ): EShapeTagValue | null;
	indexOf( target: EShapeTagValue ): number;
	get( index: number ): EShapeTagValue | null;
	remove( index: number ): void;
	size(): number;
	swap( indexA: number, indexB: number ): void;

	copy( target: EShapeTag ): this;
	serialize( manager: EShapeResourceManagerSerialization ): number;
	deserialize( target: number, manager: EShapeResourceManagerDeserialization ): void;
}
