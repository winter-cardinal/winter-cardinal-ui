/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeBufferCount } from "../e-shape-buffer-count";

export class EShapeTextUploadeds {
	static getTextCount( shape: EShape, result: EShapeBufferCount ): EShapeBufferCount {
		const length = shape.text.value.length;
		const count = Math.ceil( length / 12 ) * 12;
		result.vertexCount = count << 2;
		result.indexCount = count << 1;
		return result;
	}
}
