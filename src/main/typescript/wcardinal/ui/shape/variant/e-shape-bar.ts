/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapePointsStyle } from "../e-shape-points";
import { EShapeType } from "../e-shape-type";
import { EShapeBarPoints } from "./e-shape-bar-points";
import { EShapeBarPosition } from "./e-shape-bar-position";
import { EShapeLineBase } from "./e-shape-line-base";

export class EShapeBar extends EShapeLineBase {
	points: EShapeBarPoints;

	constructor( position: EShapeBarPosition, size: number, width: number, style: EShapePointsStyle ) {
		super( EShapeType.BAR );
		this.fill.enable = false;
		this.stroke.set( true, undefined, undefined, width );
		this.points = new EShapeBarPoints( this, position, size, style );
	}

	clone(): EShapeBar {
		const points = this.points;
		return new EShapeBar( points.position, points.size, this.stroke.width, points.style ).copy( this );
	}

	containsAbsBBox( x: number, y: number, ax: number, ay: number ): boolean {
		const size = Math.max( 0, this.points.size );
		return super.containsAbsBBox( x, y, ax + size, ay + size );
	}
}
