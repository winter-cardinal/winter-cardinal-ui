/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeContainer } from "./e-shape-container";
import { EShapeType } from "./e-shape-type";
import { EShapeBase } from "./variant/e-shape-base";

export class EShapeSearch {
	static COMPARATOR_INDEX = ( a: EShape, b: EShape ): number => {
		return a.index - b.index;
	}

	static toIndices( shapes: EShape[] ): number[] {
		const result = [];
		for( let i = 0, imax = shapes.length; i < imax; ++i ) {
			result.push( shapes[ i ].index );
		}
		return result;
	}

	static toDepth( shape: EShape ): number {
		let result = 0;
		let parent = shape.parent;
		while( parent instanceof EShapeBase ) {
			result += 1;
			parent = parent.parent;
		}
		return result;
	}

	static toSharedParent( first: EShape, shape: EShape ): EShape | EShapeContainer {
		const depthA = this.toDepth( first );
		const depthB = this.toDepth( shape );
		if( depthA < depthB ) {
			let parent = first.parent;
			while( parent instanceof EShapeBase ) {
				if( this.isParent( shape, parent ) ) {
					return parent;
				}
				parent = parent.parent;
			}
			return parent!;
		} else {
			let parent = shape.parent;
			while( parent instanceof EShapeBase ) {
				if( this.isParent( first, parent ) ) {
					return parent;
				}
				parent = parent.parent;
			}
			return parent!;
		}
	}

	static toOfParent( shape: EShape, parent: EShape | EShapeContainer ) {
		let shapeParent = shape.parent;
		while( shapeParent !== parent && shapeParent instanceof EShapeBase ) {
			shape = shapeParent;
			shapeParent = shapeParent.parent;
		}
		return shape;
	}

	static isParent( shape: EShape, target: EShape | null ): boolean {
		let parent = shape.parent;
		while( parent instanceof EShapeBase ) {
			if( parent === target ) {
				return true;
			}
			parent = parent.parent;
		}
		return false;
	}

	static toSelected( shape: EShape ): EShape | null {
		let target: EShape | EShapeContainer | null = shape;
		while( target instanceof EShapeBase ) {
			if( target.selected ) {
				return target;
			}
			target = target.parent;
		}
		return null;
	}

	static findChildById( shape: { children: EShape[] }, id: string, recursively?: boolean ): EShape | null {
		const children = shape.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const child = children[ i ];
			if( child.id === id ) {
				return child;
			}
			if( recursively === true ) {
				const result = EShapeSearch.findChildById( child, id, recursively );
				if( result != null ) {
					return result;
				}
			}
		}
		return null;
	}

	static findChildByType( shape: { children: EShape[] }, type: EShapeType, recursively?: boolean ): EShape | null {
		const children = shape.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const child = children[ i ];
			if( child.type === type ) {
				return child;
			}
			if( recursively === true ) {
				const result = EShapeSearch.findChildByType( child, type, recursively );
				if( result != null ) {
					return result;
				}
			}
		}
		return null;
	}

	static findChild(
		shape: { children: EShape[] }, matcher: ( shape: EShape ) => boolean, recursively?: boolean
	): EShape | null {
		const children = shape.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const child = children[ i ];
			if( matcher( child ) ) {
				return child;
			}
			if( recursively === true ) {
				const result = EShapeSearch.findChild( child, matcher, recursively );
				if( result != null ) {
					return result;
				}
			}
		}
		return null;
	}

	static findChildrenByType(
		shape: { children: EShape[] }, type: EShapeType, recursively?: boolean, result?: EShape[]
	): EShape[] {
		result = result || [];
		const children = shape.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const child = children[ i ];
			if( child.type === type ) {
				result.push( child );
			}
			if( recursively === true ) {
				EShapeSearch.findChildrenByType( child, type, recursively, result );
			}
		}
		return result;
	}

	static findChildren(
		shape: { children: EShape[] }, matcher: ( shape: EShape ) => boolean, recursively?: boolean, result?: EShape[]
	): EShape[] {
		result = result || [];
		const children = shape.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const child = children[ i ];
			if( matcher( child ) ) {
				result.push( child );
			}
			if( recursively === true ) {
				EShapeSearch.findChildren( child, matcher, recursively, result );
			}
		}
		return result;
	}
}
