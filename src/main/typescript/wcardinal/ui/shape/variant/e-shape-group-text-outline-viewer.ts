/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeTextOutline, EShapeTextOutlineLike } from "../e-shape-text-outline";

export class EShapeGroupTextOutlineViewer implements EShapeTextOutline {
	constructor() {
		// DO NOTHING
	}

	get enable(): boolean {
		return false;
	}

	set enable( enable: boolean ) {
		// DO NOTHING
	}

	get color(): number {
		return 0xffffff;
	}

	set color( color: number ) {
		// DO NOTHING
	}

	get alpha(): number {
		return 1.0;
	}

	set alpha( alpha: number ) {
		// DO NOTHING
	}

	get width(): number {
		return 1.0;
	}

	set width( width: number ) {
		// DO NOTHING
	}

	copy( target?: Partial<EShapeTextOutlineLike> ): void {
		// DO NOTHING
	}

	set( enable?: boolean, color?: number, alpha?: number, width?: number ): void {
		// DO NOTHING
	}

	clone(): EShapeGroupTextOutlineViewer {
		return new EShapeGroupTextOutlineViewer();
	}

	toObject(): EShapeTextOutlineLike {
		return {
			enable: false,
			color: 0xffffff,
			alpha: 1.0,
			width: 1.0
		};
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		return -1;
	}

	deserialize( target: number, manager: EShapeResourceManagerDeserialization ): void {
		//
	}
}
