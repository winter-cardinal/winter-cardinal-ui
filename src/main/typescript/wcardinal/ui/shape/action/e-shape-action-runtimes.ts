/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCanvasContainer } from "../../d-canvas-container";
import { EShape } from "../e-shape";

interface EShapeActionRuntimeContainerTagRemote {
	set( id: string, value: unknown, time: number ): void;
}

interface EShapeActionRuntimeContainerTag {
	readonly remote: EShapeActionRuntimeContainerTagRemote;

	set( id: string, value: unknown, time?: number, from?: number | null, to?: number | null ): void;
}

interface EShapeActionRuntimeContainerShape {
	emit( name: string, ...args: unknown[] ): void;
}

interface EShapeActionRuntimeContainer extends DCanvasContainer {
	readonly shape: EShapeActionRuntimeContainerShape;
	readonly tag: EShapeActionRuntimeContainerTag;

	openByName( target: string ): void;
}

export class EShapeActionRuntimes {
	static toContainer( shape?: EShape | null ): EShapeActionRuntimeContainer | null {
		let current: { parent: any; } | null | undefined = shape;
		while( current != null ) {
			if( current instanceof DCanvasContainer ) {
				return current as EShapeActionRuntimeContainer;
			}
			current = current.parent;
		}
		return null;
	}

	static open( shape: EShape, target: string ): void {
		const container = this.toContainer( shape );
		if( container ) {
			container.openByName( target );
		}
	}

	static write( shape: EShape, id: string, value: unknown, time: number, remote: boolean ): void {
		const container = this.toContainer( shape );
		if( container ) {
			if( remote ) {
				container.tag.remote.set( id, value, time );
			} else {
				container.tag.set( id, value, time );
			}
		}
	}

	static emit( shape: EShape, name: string ): void;
	static emit( shape: EShape, name: string, value: unknown, time: number ): void;
	static emit( shape: EShape, name: string, value?: unknown, time?: number ): void {
		const container = EShapeActionRuntimes.toContainer( shape );
		if( time === undefined ) {
			shape.emit( name, shape );
			if( container ) {
				container.shape.emit( name, shape );
			}
		} else {
			shape.emit( name, value, time, shape );
			if( container ) {
				container.shape.emit( name, value, time, shape );
			}
		}
	}
}
