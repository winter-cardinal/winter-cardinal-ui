import { utils } from "pixi.js";
import { DApplicationTarget } from "./d-application-like";
import { DApplications } from "./d-applications";
import { DDiagramCanvasIdMap } from "./d-diagram-canvas-id-map";
import { EShape } from "./shape/e-shape";

export interface DDiagramShapeLayer {
	children: EShape[];
}

export interface DDiagramShapeLayerContainer {
	children: DDiagramShapeLayer[];
}

export interface DDiagramShapeCanvas {
	layer: DDiagramShapeLayerContainer;
	ids: DDiagramCanvasIdMap;
	actionables: EShape[];
}

export interface DDiagramShapeDiagram extends DApplicationTarget {
	canvas: DDiagramShapeCanvas | null;
}

/**
 * A shape helper class for diagrams.
 */
export class DDiagramShape extends utils.EventEmitter {
	protected _diagram: DDiagramShapeDiagram;
	protected _updateBound: () => void;

	constructor( diagram: DDiagramShapeDiagram ) {
		super();
		this._diagram = diagram;
		this._updateBound = (): void => {
			DApplications.update( diagram );
		};
	}

	update(): void {
		const diagram = this._diagram;
		const canvas = diagram.canvas;
		if( canvas ) {
			const actionables = canvas.actionables;
			if( 0 < actionables.length ) {
				let effect = -1;
				const time = Date.now();
				for( let i = 0, imax = actionables.length; i < imax; ++i ) {
					const actionable = actionables[ i ];
					actionable.update( time );
					const runtime = actionable.runtime;
					if( runtime && time < runtime.effect ) {
						const runtimeEffect = runtime.effect;
						if( time < runtimeEffect ) {
							effect = ( effect < 0 ? runtimeEffect : Math.min( effect, runtimeEffect ) );
						}
					}
				}
				if( 0 <= effect ) {
					setTimeout( this._updateBound, effect - Date.now() );
				}
			}
		}
	}

	get( id: string ): EShape | null {
		const canvas = this._diagram.canvas;
		const shapes = ( canvas && canvas.ids[ id ] );
		return ( shapes && 0 < shapes.length ? shapes[ 0 ] : null );
	}

	getAll( id: string ): EShape[] {
		const canvas = this._diagram.canvas;
		return ( canvas && canvas.ids[ id ] ) || [];
	}

	each( callback: ( shape: EShape ) => (boolean | void), reverse = false ): EShape | null {
		const canvas = this._diagram.canvas;
		if( canvas != null ) {
			const layers = canvas.layer.children;
			if( ! reverse ) {
				for( let i = 0, imax = layers.length; i < imax; ++i ) {
					const layer = layers[ i ];
					const children = layer.children;
					for( let j = 0, jmax = children.length; j < jmax; ++j ) {
						const child = children[ j ];
						if( callback( child ) === false ) {
							return child;
						}
					}
				}
			} else {
				for( let i = layers.length - 1; 0 <= i; --i ) {
					const layer = layers[ i ];
					const children = layer.children;
					for( let j = children.length - 1; 0 <= j; --j ) {
						const child = children[ j ];
						if( callback( child ) === false ) {
							return child;
						}
					}
				}
			}
		}
		return null;
	}
}
