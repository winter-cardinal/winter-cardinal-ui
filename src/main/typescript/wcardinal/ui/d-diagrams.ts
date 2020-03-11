/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DDiagramLayerContainer } from "./d-diagram-layer-container";
import { DDiagramSerialized, DDiagramSerializedSimple } from "./d-diagram-serialized";
import { EShape } from "./shape/e-shape";
import { EShapeDefaults } from "./shape/e-shape-defaults";
import { EShapeDeserializer } from "./shape/e-shape-deserializer";

export class DDiagrams {
	static toSerialized( target: DDiagramSerializedSimple | DDiagramSerialized ): DDiagramSerialized {
		if( "data" in target ) {
			const result: DDiagramSerialized = JSON.parse( target.data );
			result.id = target.id;
			return result;
		}
		return target;
	}

	static newLayer(
		serialized: DDiagramSerialized,
		container: DDiagramLayerContainer
	): Promise<EShape[]> {
		// Layers
		const pflayers = serialized.layers;
		for( let i = 0, imax = pflayers.length; i < imax; ++i ) {
			container.create( pflayers[ i ][ 0 ] || "" );
		}

		// Activate the first later if it exists
		if( 0 < container.size() ) {
			container.active = container.children[ 0 ];
		}

		// Items
		const pfresources = serialized.resources;
		const pfitems = serialized.items;
		const shapePromises = EShapeDeserializer.deserializeAll( pfitems, pfresources );
		if( shapePromises != null ) {
			return shapePromises.then(( shapes: EShape[] ): EShape[] => {
				const layers = container.children;
				for( let i = 0, imax = shapes.length; i < imax; ++i ) {
					const pfitem = pfitems[ i ];
					const shape = shapes[ i ];
					const layer = layers[ pfitem[ 16 ] ];
					if( layer != null ) {
						shape.attach( layer );
					}
				}
				return shapes;
			});
		} else {
			return Promise.resolve([]);
		}
	}

	static applyBackground(
		serialized: DDiagramSerialized,
		canvas: DBase,
		canvasContainer: DBase
	): void {
		const background = serialized.background;
		const backgroundColor = ( background && background.color != null ? background.color : 0xffffff );
		const backgroundAlpha = ( background && background.alpha != null ? background.alpha : 1.0 );
		if( EShapeDefaults.IS_EDIT_MODE ) {
			const canvasBackground = canvas.background;
			canvasBackground.color = backgroundColor;
			canvasBackground.alpha = backgroundAlpha;
		} else {
			const canvasContainerBackground = canvasContainer.background;
			canvasContainerBackground.color = backgroundColor;
			canvasContainerBackground.alpha = backgroundAlpha;
		}
	}
}
