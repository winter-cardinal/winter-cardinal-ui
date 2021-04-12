/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DScalar } from "./d-scalar";
import { DScalarFunction } from "./d-scalar-function";

/**
 * One of the followings:
 * * A position
 * * A position keywords
 * * A position expression (Parsed by {@link DScalarExpression})
 * * A function returning a position ({@link DScalarFunction})
 * * An object returning a position value ({@link DScalar})
 */
export type DCoordinatePosition =
	| number
	| string
	| "center"
	| "padding"
	| "CENTER"
	| "PADDING"
	| DScalarFunction
	| DScalar;

/**
 * One of the followings:
 * * A size,
 * * A size keywords
 * * A size expression (Parsed by {@link DScalarExpression})
 * * A function returning a size ({@link DScalarFunction})
 * * An object returning a size ({@link DScalar})
 */
export type DCoordinateSize = "auto" | "AUTO" | DCoordinateSizeNoAuto;

export type DCoordinateSizeNoAuto =
	| number
	| string
	| "100%"
	| "maximized"
	| "padding"
	| "MAXIMIZED"
	| "PADDING"
	| DScalarFunction
	| DScalar;
