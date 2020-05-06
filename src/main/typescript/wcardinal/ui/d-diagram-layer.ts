/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem, DDiagramSerializedLayer } from "./d-diagram-serialized";
import { EShapeContainer } from "./shape/e-shape-container";
import { EShapeResourceManagerSerialization } from "./shape/e-shape-resource-manager-serialization";

export class DDiagramLayer extends EShapeContainer {
	reference: number;

	constructor( name: string ) {
		super();
		this.name = name;
		this.interactive = false;
		this.reference = 0;
	}

	destroy(): void {
		if( ! this._destroyed ) {
			const children = this.children;
			for( let i = children.length - 1; 0 <= i; --i ) {
				children[ i ].destroy();
			}
			children.length = 0;
			super.destroy();
		}
	}

	serialize(
		layer: number, manager: EShapeResourceManagerSerialization, items: DDiagramSerializedItem[]
	): DDiagramSerializedLayer {
		const children = this.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const shape = children[ i ];
			const item = shape.serialize( manager );
			item[ 16 ] = layer;
			items.push( item );
		}

		return [
			this.name || ""
		];
	}

	addUuid( manager: EShapeResourceManagerSerialization ): void {
		const children = this.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].addUuid( manager );
		}
	}

	updateUuid( manager: EShapeResourceManagerSerialization ): void {
		const children = this.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].updateUuid( manager );
		}
	}
}
