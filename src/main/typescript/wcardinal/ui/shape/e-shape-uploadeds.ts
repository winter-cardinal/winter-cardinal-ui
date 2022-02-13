/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeBuffer } from "./e-shape-buffer";
import { EShapeUploaded } from "./e-shape-uploaded";

export type EShapeUploadedCreator = (
	buffer: EShapeBuffer,
	shape: EShape,
	voffset: number,
	ioffset: number,
	antialiasWeight: number
) => EShapeUploaded | null;

export const EShapeUploadeds: Record<number, EShapeUploadedCreator | undefined> = {};
