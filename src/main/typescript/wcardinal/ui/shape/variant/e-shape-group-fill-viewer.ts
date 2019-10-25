/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeFill, EShapeFillLike } from "../e-shape-fill";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";

export class EShapeGroupFillViewer implements EShapeFill {
	constructor() {
		// DO NOTHING
	}

	get enable(): boolean {
		return true;
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

	copy( target: EShapeFillLike ) {
		// DO NOTHING
	}

	set( enable: boolean, color: number, alpha: number ) {
		// DO NOTHING
	}

	clone(): EShapeGroupFillViewer {
		return new EShapeGroupFillViewer();
	}

	toObject(): EShapeFillLike {
		return {
			enable: true,
			color: 0xffffff,
			alpha: 1.0
		};
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		return -1;
	}

	deserialize( target: number, manager: EShapeResourceManagerDeserialization ) {
		//
	}
}
