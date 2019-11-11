/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DDiagramLayerContainer } from "./d-diagram-layer-container";
import { DDiagramSerialized, DDiagramSerializedSimple } from "./d-diagram-serialized";
import { EShape } from "./shape/e-shape";
import { EShapeDefaults } from "./shape/e-shape-defaults";
import { EShapeDeserializer } from "./shape/e-shape-deserializer";

export class DDiagrams {
	static toSerialized( simple: DDiagramSerializedSimple ): DDiagramSerialized {
		const result: DDiagramSerialized = JSON.parse( simple.data );
		result.id = simple.id;
		return result;
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
			canvas.background.color = backgroundColor;
			canvas.background.alpha = backgroundAlpha;
		} else {
			canvasContainer.background.color = backgroundColor;
			const layer = DApplications.getLayer( canvasContainer );
			if( layer ) {
				layer.renderer.backgroundColor = backgroundColor;
			}
			canvasContainer.background.alpha = backgroundAlpha;
		}
	}
}
