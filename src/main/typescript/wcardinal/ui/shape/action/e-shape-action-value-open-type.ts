/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramBaseControllerOpenType } from "../../d-diagram-base-controller";

export const EShapeActionValueOpenType = {
	/** @deprecated in favor of {@link DIAGRAM} */
	DIAGRAM_LEGACY: 0,
	/** @deprecated in favor of {@link PAGE} */
	PAGE_LEGACY: 1,
	/** @deprecated in favor of {@link PAGE} */
	PAGE_INPLACE_LEGACY: 2,
	/** @deprecated in favor of {@link DIALOG} */
	DIALOG_TEXT: 3,
	/** @deprecated in favor of {@link DIALOG} */
	DIALOG_INTEGER: 4,
	/** @deprecated in favor of {@link DIALOG} */
	DIALOG_REAL: 5,
	/** @deprecated in favor of {@link DIALOG} */
	DIALOG_BOOLEAN: 6,
	/** @deprecated in favor of {@link DIALOG} */
	DIALOG_DATE: 7,
	/** @deprecated in favor of {@link DIALOG} */
	DIALOG_TIME: 8,
	/** @deprecated in favor of {@link DIALOG} */
	DIALOG_DATETIME: 9,
	DIAGRAM: 10,
	PAGE: 11,
	DIALOG: 12,
	EXTENSION: DDiagramBaseControllerOpenType.EXTENSION
} as const;

export type EShapeActionValueOpenType = number;
