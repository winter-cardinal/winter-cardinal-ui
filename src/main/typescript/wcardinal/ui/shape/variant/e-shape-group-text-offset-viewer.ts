/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeTextOffset, EShapeTextOffsetLike } from "../e-shape-text-offset";

export class EShapeGroupTextOffsetViewer implements EShapeTextOffset {
	constructor() {
		// DO NOTHING
	}

	get horizontal(): number {
		return 0;
	}

	set horizontal(horizontal: number) {
		// DO NOTHING
	}

	get vertical(): number {
		return 0;
	}

	set vertical(vertical: number) {
		// DO NOTHING
	}

	copy(target?: Partial<EShapeTextOffsetLike>): void {
		// DO NOTHING
	}

	set(horizontal?: number, vertical?: number): void {
		// DO NOTHING
	}

	toObject(): EShapeTextOffsetLike {
		return {
			horizontal: 0,
			vertical: 0
		};
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		return -1;
	}

	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void {
		// DO NOTHING
	}
}
