/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilInputInput } from "../../util/util-input-input";
import { EShapeActionRuntimeMiscInput } from "./e-shape-action-runtime-misc-input";

export abstract class EShapeActionRuntimeMiscInputInput<
	VALUE = unknown,
	UTIL extends UtilInputInput<VALUE> = UtilInputInput<VALUE>
> extends EShapeActionRuntimeMiscInput<VALUE, HTMLInputElement, UTIL> {}
