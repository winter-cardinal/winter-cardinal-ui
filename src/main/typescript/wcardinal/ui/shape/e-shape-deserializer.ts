/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../d-diagram-serialized";
import { isString } from "../util/is-string";
import { EShapeActionValueDeserializer } from "./action/e-shape-action-value-deserializer";
import { EShape } from "./e-shape";
import { EShapeDeserializers } from "./e-shape-deserializers";
import { EShapeImageElements } from "./e-shape-image-elements";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeSizes } from "./e-shape-sizes";
import { EShapeGradients } from "./variant/e-shape-gradients";

export class EShapeDeserializer {
	static toShape(
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
	): Promise<EShape> | EShape | null {
		const shapeDeserializer = EShapeDeserializers[ item[ 0 ] ];
		if( shapeDeserializer != null ) {
			return shapeDeserializer( item, manager );
		}
		return null;
	}

	static deserialize<SHAPE extends EShape>(
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization, result: SHAPE
	): Promise<SHAPE> | SHAPE {
		result.id = manager.resources[ item[ 1 ] ] || "";
		result.transform.position.set( item[ 2 ], item[ 3 ] );
		result.transform.rotation = item[ 6 ];
		result.transform.skew.set( item[ 7 ], item[ 7 ] );
		result.transform.pivot.set( item[ 21 ], item[ 22 ] );
		result.size.set( EShapeSizes.toNormalized( item[ 4 ] ), EShapeSizes.toNormalized( item[ 5 ] ) );
		result.fill.deserialize( item[ 8 ], manager );
		result.stroke.deserialize( item[ 9 ], manager );
		result.cursor = manager.resources[ item[ 10 ] ] || "";
		result.text.deserialize( item[ 11 ], manager );
		result.tag.deserialize( item[ 12 ], manager );
		result.radius = item[ 13 ];
		result.corner = item[ 14 ];
		result.interactive = !! ( item[ 23 ] & 1 );
		result.state.isFocusable = ! ( item[ 23 ] & 2 );
		result.shortcut = ( 0 <= item[ 24 ] ? manager.resources[ item[ 24 ] ] : undefined );
		result.title = ( 0 <= item[ 25 ] ? manager.resources[ item[ 25 ] ] : undefined );
		result.uuid = ( item[ 26 ] != null ? item[ 26 ] : 0 );

		// Children
		let childrenPromise: Promise<SHAPE> | null = null;
		const childrenSerialized = item[ 20 ];
		if( 0 < childrenSerialized.length ) {
			const childrenOrPromises = [];
			for( let i = 0, imax = childrenSerialized.length; i < imax; ++i ) {
				const childSerialized = childrenSerialized[ i ];
				const childOrPromise = EShapeDeserializer.toShape( childSerialized, manager );
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
			if( isString( gradient ) ) {
				result.gradient = EShapeGradients.deserializeGradient( gradient );
			}
		}

		// Image
		let imagePromise: Promise<SHAPE> | null = null;
		const imageId = item[ 18 ];
		if( 0 <= imageId && imageId < manager.resources.length ) {
			const imageSrc = manager.resources[ imageId ];
			if( isString( imageSrc ) ) {
				imagePromise = EShapeImageElements.toImageElement( imageSrc ).then(( imageElement ) => {
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

	static deserializeAll(
		serializeds: DDiagramSerializedItem[],
		manager: EShapeResourceManagerDeserialization
	): Promise<EShape[]> | null {
		const shapes: Array<Promise<EShape> | EShape> = [];
		for( let i = 0, imax = serializeds.length; i < imax; ++i ) {
			const serialized = serializeds[ i ];
			const shape = EShapeDeserializer.toShape( serialized, manager );
			if( shape == null ) {
				if( 0 < shapes.length ) {
					Promise.all( shapes ).then( ( resolved: EShape[] ): void => {
						for( let j = 0, jmax = resolved.length; j < jmax; ++j ) {
							resolved[ j ].destroy();
						}
					});
				}
				return null;
			}

			shapes.push( shape );
		}
		if( 0 < shapes.length ) {
			return Promise.all( shapes );
		}
		return null;
	}
}
