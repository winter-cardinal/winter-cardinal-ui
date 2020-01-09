/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point } from "pixi.js";
import { EShape } from "../e-shape";
import {
	EShapePoints, EShapePointsHitTester, EShapePointsHitThreshold,
	EShapePointsStyle, EShapePointsTestRange
} from "../e-shape-points";
import { EShapePointsParent } from "../e-shape-points-parent";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeGroupPropertyParent } from "./e-shape-group-property-parent";

export class EShapeGroupPoints implements EShapePoints {
	protected _parent: EShapeGroupPropertyParent;

	constructor( parent: EShapeGroupPropertyParent ) {
		this._parent = parent;
	}

	get length(): number {
		const children = this._parent.children;
		if( 0 < children.length ) {
			const points = children[ children.length - 1 ].points;
			if( points != null ) {
				return points.length;
			}
		}
		return 0;
	}

	get id(): number {
		const children = this._parent.children;
		if( 0 < children.length ) {
			const points = children[ children.length - 1 ].points;
			if( points != null ) {
				return points.id;
			}
		}
		return 0;
	}

	get values(): number[] {
		const children = this._parent.children;
		if( 0 < children.length ) {
			const points = children[ children.length - 1 ].points;
			if( points != null ) {
				return points.values;
			}
		}
		return [];
	}

	set values( values: number[] ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const points = children[ i ].points;
			if( points != null ) {
				points.values = values;
			}
		}
	}

	get segments(): number[] {
		const children = this._parent.children;
		if( 0 < children.length ) {
			const points = children[ children.length - 1 ].points;
			if( points != null ) {
				return points.segments;
			}
		}
		return [];
	}

	set segments( segments: number[] ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const points = children[ i ].points;
			if( points != null ) {
				points.segments = segments;
			}
		}
	}

	get style(): EShapePointsStyle {
		const children = this._parent.children;
		if( 0 < children.length ) {
			const points = children[ children.length - 1 ].points;
			if( points != null ) {
				return points.style;
			}
		}
		return EShapePointsStyle.NONE;
	}

	set style( style: EShapePointsStyle ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const points = children[ i ].points;
			if( points != null ) {
				points.style = style;
			}
		}
	}

	copy( source: EShapePoints ): this {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const points = children[ i ].points;
			if( points != null ) {
				points.copy( source );
			}
		}
		return this;
	}

	set( values?: number[], segments?: number[], style?: EShapePointsStyle ): this {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const points = children[ i ].points;
			if( points != null ) {
				points.set( values, segments, style );
			}
		}
		return this;
	}

	clone( parent: EShapePointsParent ): EShapeGroupPoints {
		return new EShapeGroupPoints( parent );
	}

	toPoints( transform: Matrix ): Point[] {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const points = children[ i ].points;
			if( points != null ) {
				return points.toPoints( transform );
			}
		}
		return [];
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const points = children[ i ].points;
			if( points != null ) {
				return points.serialize( manager );
			}
		}
		return -1;
	}

	calcHitPointAbs<RESULT>(
		shape: EShape,
		x: number, y: number,
		ax: number, ay: number,
		strokeScale: number,
		threshold: EShapePointsHitThreshold | null,
		range: EShapePointsTestRange | null,
		tester: EShapePointsHitTester<RESULT>,
		result: RESULT
	): boolean {
		return false;
	}
}
