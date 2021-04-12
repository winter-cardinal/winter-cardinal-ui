/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeBuffer } from "./e-shape-buffer";

export type EShapeUploadedConstructor<T> = new (
	buffer: EShapeBuffer,
	voffset: number,
	ioffset: number,
	tvcount: number,
	ticount: number,
	vcount: number,
	icount: number
) => T;
