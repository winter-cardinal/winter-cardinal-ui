/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DViewTarget } from "./d-view-to-target";

/**
 * {@link DView} constraint.
 */
export type DViewConstraint = (
	target: DViewTarget,
	x: number,
	y: number,
	scaleX: number,
	scaleY: number
) => void;
