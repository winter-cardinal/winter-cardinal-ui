/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point } from "pixi.js";
import { DDiagramSerializedItem } from "../d-diagram-serialized";
import { utilIsString } from "../util/util-is-string";
import { EShapeActionValueDeserializer } from "./action/e-shape-action-value-deserializer";
import { EShape } from "./e-shape";
import { EShapeContainer } from "./e-shape-container";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { toFixed, toSizeNormalized } from "./e-shape-to-fixed";
import { toShapeOrPromise } from "./e-shape-to-shape-or-promise";
import { EShapeType } from "./e-shape-type";
import { EShapeBase } from "./variant/e-shape-base";
import { EShapeGradients } from "./variant/e-shape-gradients";

export class EShapes {
	static imageElements: { [ src: string ]: Promise<HTMLImageElement> | HTMLImageElement | undefined } = {};

	static toImageElement( dataUrl: string ): Promise<HTMLImageElement> {
		const imageElements = EShapes.imageElements;
		const cachedImageElement = imageElements[ dataUrl ];
		if( cachedImageElement != null ) {
			if( cachedImageElement instanceof HTMLImageElement ) {
				return Promise.resolve( cachedImageElement );
			} else {
				return cachedImageElement;
			}
		} else {
			const result = new Promise<HTMLImageElement>(( resolve, reject ): void => {
				const imageElement = document.createElement( "img" );
				imageElement.onload = () => {
					imageElements[ dataUrl ] = imageElement;
					resolve( imageElement );
				};
				imageElement.onabort = imageElement.onerror = () => {
					reject();
				};
				imageElement.src = dataUrl;
			});
			imageElements[ dataUrl ] = result;
			return result;
		}
	}

	static deserialize<SHAPE extends EShape>(
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization, result: SHAPE
	): Promise<SHAPE> | SHAPE {
		result.id = manager.resources[ item[ 1 ] ] || "";
		result.transform.position.set( item[ 2 ], item[ 3 ] );
		result.transform.rotation = item[ 6 ];
		result.transform.skew.set( item[ 7 ], item[ 7 ] );
		result.transform.pivot.set( item[ 21 ], item[ 22 ] );
		result.size.set( toSizeNormalized( item[ 4 ] ), toSizeNormalized( item[ 5 ] ) );
		result.fill.deserialize( item[ 8 ], manager );
		result.stroke.deserialize( item[ 9 ], manager );
		result.cursor = manager.resources[ item[ 10 ] ] || "";
		result.text.deserialize( item[ 11 ], manager );
		result.tag.deserialize( item[ 12 ], manager );
		result.radius = item[ 13 ];
		result.corner = item[ 14 ];
		result.interactive = !! ( item[ 23 ] & 1 );
		result.unfocusable = !! ( item[ 23 ] & 2 );
		result.shortcut = ( 0 <= item[ 24 ] ? manager.resources[ item[ 24 ] ] : undefined );
		result.title = ( 0 <= item[ 25 ] ? manager.resources[ item[ 25 ] ] : undefined );

		// Children
		let childrenPromise: Promise<SHAPE> | null = null;
		const childrenSerialized = item[ 20 ];
		if( 0 < childrenSerialized.length ) {
			const childrenOrPromises = [];
			for( let i = 0, imax = childrenSerialized.length; i < imax; ++i ) {
				const childSerialized = childrenSerialized[ i ];
				const childOrPromise = toShapeOrPromise( childSerialized, manager );
				if( childOrPromise != null ) {
					childrenOrPromises.push( childOrPromise );
				}
			}
			childrenPromise = Promise.all( childrenOrPromises ).then(( children: EShape[] ) => {
				result.children = children;
				for( let i = 0, imax = children.length; i < imax; ++i ) {
					children[ i ].parent = result;
				}
				result.onChildTransformChange();
				result.toDirty();
				return result;
			});
		}

		// Action
		const serializedActions = item[ 17 ];
		for( let i = 0, imax = serializedActions.length; i < imax; ++i ) {
			result.action.add( EShapeActionValueDeserializer.deserialize( serializedActions[ i ], manager ) );
		}

		// Gradient
		const gradientId = item[ 19 ];
		if( 0 <= gradientId && gradientId < manager.resources.length ) {
			const gradient = manager.resources[ gradientId ];
			if( utilIsString( gradient ) ) {
				result.gradient = EShapeGradients.deserializeGradient( gradient );
			}
		}

		// Image
		let imagePromise: Promise<SHAPE> | null = null;
		const imageId = item[ 18 ];
		if( 0 <= imageId && imageId < manager.resources.length ) {
			const imageSrc = manager.resources[ imageId ];
			if( utilIsString( imageSrc ) ) {
				imagePromise = this.toImageElement( imageSrc ).then(( imageElement ) => {
					result.image = imageElement;
					return result;
				});
			}
		}

		//
		if( childrenPromise != null ) {
			if( imagePromise != null ) {
				return Promise.all([ childrenPromise, imagePromise ]).then(() => {
					return result;
				});
			} else {
				return childrenPromise;
			}
		} else {
			if( imagePromise != null ) {
				return imagePromise;
			} else {
				return result;
			}
		}
	}

	static destroyAll( shapes: EShape[] ): void {
		for( let i = 0, imax = shapes.length; i < imax; ++i ) {
			shapes[ i ].destroy();
		}
	}

	static destroyPromises( shapeOrPromises: Array<Promise<EShape> | EShape> ): void {
		if( 0 < shapeOrPromises.length ) {
			Promise.all( shapeOrPromises ).then( this.destroyAll );
		}
	}

	static deserializeAll(
		serializedShapes: DDiagramSerializedItem[], resources: string[]
	): Promise<EShape[]> | null {
		const manager = new EShapeResourceManagerDeserialization( resources );
		const shapeOrPromises: Array<Promise<EShape> | EShape> = [];
		for( let i = 0, imax = serializedShapes.length; i < imax; ++i ) {
			const serializedShape = serializedShapes[ i ];
			const shapeOrPromise = toShapeOrPromise( serializedShape, manager );
			if( shapeOrPromise == null ) {
				this.destroyPromises( shapeOrPromises );
				return null;
			}

			shapeOrPromises.push( shapeOrPromise );
		}
		if( 0 < shapeOrPromises.length ) {
			return Promise.all( shapeOrPromises );
		}
		return null;
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

	static resize( shape: EShape, from: Point, to: Point, centerMode: boolean, isPerfect: boolean ): void {
		shape.disallowUploadedUpdate();
		const position = shape.transform.position;
		if( centerMode ) {
			const dx = Math.abs(to.x - from.x);
			const dy = Math.abs(to.y - from.y);
			if (isPerfect) {
				const hsize = Math.max(dx, dy);
				const size = hsize + hsize;
				shape.size.set(
					toSizeNormalized( size ),
					toSizeNormalized( size )
				);
				position.set(
					toFixed( from.x ),
					toFixed( from.y )
				);
			} else {
				shape.size.set(
					toSizeNormalized( dx + dx ),
					toSizeNormalized( dy + dy )
				);
				position.set(
					toFixed( from.x ),
					toFixed( from.y )
				);
			}
		} else {
			if( isPerfect ) {
				const dx = to.x - from.x;
				const dy = to.y - from.y;
				const size = Math.max(Math.abs(dx), Math.abs(dy));
				const x2 = from.x + (dx < 0 ? -size : +size);
				const y2 = from.y + (dy < 0 ? -size : +size);
				const hsize = size * 0.5;
				const x = Math.min(from.x, x2) + hsize;
				const y = Math.min(from.y, y2) + hsize;
				shape.size.set(
					toSizeNormalized( size ),
					toSizeNormalized( size )
				);
				position.set(
					toFixed( x ),
					toFixed( y )
				);
			} else {
				const x0 = Math.min(from.x, to.x);
				const y0 = Math.min(from.y, to.y);
				const x1 = Math.max(from.x, to.x);
				const y1 = Math.max(from.y, to.y);
				const width = x1 - x0;
				const height = y1 - y0;
				const px = width * 0.5;
				const py = height * 0.5;
				shape.size.set(
					toSizeNormalized( width ),
					toSizeNormalized( height )
				);
				position.set(
					toFixed( x0 + px ),
					toFixed( y0 + py )
				);
			}
		}
		shape.allowUploadedUpdate();
	}

	static findChildById( shape: { children: EShape[] }, id: string, recursively?: boolean ): EShape | null {
		const children = shape.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const child = children[ i ];
			if( child.id === id ) {
				return child;
			}
			if( recursively === true ) {
				const result = EShapes.findChildById( child, id, recursively );
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
				const result = EShapes.findChildByType( child, type, recursively );
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
				const result = EShapes.findChild( child, matcher, recursively );
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
				EShapes.findChildrenByType( child, type, recursively, result );
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
				EShapes.findChildren( child, matcher, recursively, result );
			}
		}
		return result;
	}

	static indexComparator( a: EShape, b: EShape ): number {
		return a.index - b.index;
	}

	static delete(
		parent: EShape | EShapeContainer, shapes?: EShape[], generateListOfDetachedShapes?: boolean
	): EShape[] | null {
		const children = parent.children;
		const length = children.length;

		// Update indices
		for( let i = 0; i < length; ++i ) {
			const child = children[ i ];
			if( child.selected ) {
				child.index = length + i;
			} else {
				child.index = i;
			}
		}

		// Sort
		children.sort( EShapes.indexComparator );

		// Detach
		if( generateListOfDetachedShapes === true ) {
			for( let i = length - 1; 0 <= i; --i ) {
				const child = children[ i ];
				if( child.selected ) {
					child.index -= length;
					child.parent = null;
					child.selected = false;
					child.uploaded = undefined;
				} else {
					const size = children.length - (i + 1);
					if( 0 < size ) {
						const result = children.splice( i + 1, size );
						if( shapes != null ) {
							shapes.length = 0;
						}
						parent.onChildTransformChange();
						parent.toDirty();
						return result;
					} else {
						if( shapes != null ) {
							shapes.length = 0;
						}
						return null;
					}
				}
			}
			if( 0 < children.length ) {
				const result = children.splice( 0, children.length );
				if( shapes != null ) {
					shapes.length = 0;
				}
				parent.onChildTransformChange();
				parent.toDirty();
				return result;
			} else {
				if( shapes != null ) {
					shapes.length = 0;
				}
				return null;
			}
		} else {
			for( let i = length - 1; 0 <= i; --i ) {
				const child = children[ i ];
				if( child.selected ) {
					child.parent = null;
					child.selected = false;
					child.uploaded = undefined;
				} else {
					children.length = i + 1;
					if( shapes != null ) {
						shapes.length = 0;
					}
					parent.onChildTransformChange();
					parent.toDirty();
					return null;
				}
			}
			if( 0 < children.length ) {
				children.length = 0;
				if( shapes != null ) {
					shapes.length = 0;
				}
				parent.onChildTransformChange();
				parent.toDirty();
			} else {
				if( shapes != null ) {
					shapes.length = 0;
				}
			}
			return null;
		}
	}

	static toIndices( shapes: EShape[] ): number[] {
		const result = [];
		for( let i = 0, imax = shapes.length; i < imax; ++i ) {
			result.push( shapes[ i ].index );
		}
		return result;
	}
}
