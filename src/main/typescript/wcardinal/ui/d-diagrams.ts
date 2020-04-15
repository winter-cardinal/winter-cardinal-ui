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
import { EShapeLayerContainer } from "./shape/e-shape-layer-container";
import { EShapeResourceManagerDeserialization } from "./shape/e-shape-resource-manager-deserialization";

export class DDiagrams {
	static toSimple( serialized: DDiagramSerialized ): DDiagramSerializedSimple {
		return {
			version: serialized.version,
			id: serialized.id,
			name: serialized.name,
			data: JSON.stringify({
				width: serialized.width,
				height: serialized.height,
				background: serialized.background,
				tile: serialized.tile,
				resources: serialized.resources,
				tags: serialized.tags,
				pieces: serialized.pieces,
				layers: serialized.layers,
				items: serialized.items,
				snap: serialized.snap
			})
		};
	}

	static toSerialized( target: DDiagramSerializedSimple | DDiagramSerialized ): DDiagramSerialized {
		if( "data" in target ) {
			const result: DDiagramSerialized = JSON.parse( target.data );
			result.version = target.version;
			result.id = target.id;
			result.name = target.name;
			return result;
		}
		return target;
	}

	static newLayer(
		serialized: DDiagramSerialized,
		container: DDiagramLayerContainer | EShapeLayerContainer,
		manager: EShapeResourceManagerDeserialization
	): Promise<EShape[]> {
		// Layers
		const serializedLayers = serialized.layers;
		for( let i = 0, imax = serializedLayers.length; i < imax; ++i ) {
			container.create( serializedLayers[ i ][ 0 ] || "" );
		}

		// Items
		const serializedItems = serialized.items;
		const shapePromises = EShapeDeserializer.deserializeAll( serializedItems, manager );
		if( shapePromises != null ) {
			return shapePromises.then(( shapes: EShape[] ): EShape[] => {
				const layers = container.children;
				for( let i = 0, imax = shapes.length; i < imax; ++i ) {
					const serializedItem = serializedItems[ i ];
					const shape = shapes[ i ];
					const layer = layers[ serializedItem[ 16 ] ];
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
