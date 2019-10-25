/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeTextAlign, EShapeTextAlignLike } from "../e-shape-text-align";
import { EShapeTextAlignHorizontal } from "../e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "../e-shape-text-align-vertical";

export class EShapeGroupTextAlignViewer implements EShapeTextAlign {
	constructor() {
		// DO NOTHING
	}

	get horizontal(): EShapeTextAlignHorizontal {
		return EShapeTextAlignHorizontal.CENTER;
	}

	set horizontal( horizontal: EShapeTextAlignHorizontal ) {
		// DO NOTHING
	}

	get vertical(): EShapeTextAlignVertical {
		return EShapeTextAlignVertical.MIDDLE;
	}

	set vertical( vertical: EShapeTextAlignVertical ) {
		// DO NOTHING
	}

	copy( target?: Partial<EShapeTextAlignLike> ): void {
		// DO NOTHING
	}

	set( horizontal?: EShapeTextAlignHorizontal, vertical?: EShapeTextAlignVertical ): void {
		// DO NOTHING
	}

	toObject(): EShapeTextAlignLike {
		return {
			horizontal: EShapeTextAlignHorizontal.CENTER,
			vertical: EShapeTextAlignVertical.MIDDLE
		};
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		return -1;
	}

	deserialize( target: number, manager: EShapeResourceManagerDeserialization ): void {
		// DO NOTHING
	}
}
