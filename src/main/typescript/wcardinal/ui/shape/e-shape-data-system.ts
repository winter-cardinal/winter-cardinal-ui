/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export interface EShapeDataSystem {
	set(key: string, value: string): this;
	get(key: string): string | null;
	contains(key: string): boolean;
	remove(key: string): string | null;
	clear(): this;
	size(): number;

	each(iteratee: (value: string, key: string) => boolean | void): this;
	copy(target: EShapeDataSystem): this;

	serialize(manager: EShapeResourceManagerSerialization): number;
	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void;
}
