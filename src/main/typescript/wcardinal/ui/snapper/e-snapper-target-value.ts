/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedSnapTargetValue } from "../d-diagram-serialized";

export const ESnapperTargetValueType = {
	HORIZONTAL: 0,
	VERTICAL: 1
} as const;

export type ESnapperTargetValueType = typeof ESnapperTargetValueType[keyof typeof ESnapperTargetValueType];

export class ESnapperTargetValue {
	type: ESnapperTargetValueType;
	position: number;

	constructor(type: ESnapperTargetValueType, position: number) {
		this.type = type;
		this.position = position;
	}

	serialize(): DDiagramSerializedSnapTargetValue {
		return [this.type, this.position];
	}
}
