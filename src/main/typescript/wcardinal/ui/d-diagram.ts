/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DDiagramBase, DDiagramBaseOptions, DThemeDiagramBase } from "./d-diagram-base";
import { DDiagramCanvas } from "./d-diagram-canvas";
import { DDiagramSerialized } from "./d-diagram-serialized";
import { EShapeActionRuntime } from "./shape/action/e-shape-action-runtime";
import { EShapeActionRuntimeOpen } from "./shape/action/e-shape-action-runtime-open";
import { EShapeActionValue } from "./shape/action/e-shape-action-value";
import { EShape } from "./shape/e-shape";
import { EShapeRuntime } from "./shape/e-shape-runtime";
import { EShapeRuntimes } from "./shape/e-shape-runtimes";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DDiagramOptions<
	THEME extends DThemeDiagram = DThemeDiagram
> extends DDiagramBaseOptions<DDiagramCanvas, THEME> {

}

export interface DThemeDiagram extends DThemeDiagramBase {

}

export class DDiagram<
	THEME extends DThemeDiagram = DThemeDiagram,
	OPTIONS extends DDiagramOptions<THEME> = DDiagramOptions<THEME>
> extends DDiagramBase<DDiagramCanvas, THEME, OPTIONS> {
	constructor( options: OPTIONS ) {
		super( options );

		// Hover handling
		this.on( UtilPointerEvent.move, ( e: interaction.InteractionEvent ): void => {
			if( UtilPointerEvent.contains( this, e.target ) ) {
				const canvas = this.canvas;
				if( canvas != null ) {
					canvas.onShapeMove( e );
				}
			}
		});

		// Pointer down / up handling
		this.on( UtilPointerEvent.up, ( e: interaction.InteractionEvent ): void => {
			if( UtilPointerEvent.contains( this, e.target ) ) {
				const canvas = this.canvas;
				if( canvas != null ) {
					canvas.onShapeUp( e );
				}
			}
		});

		// Click handling
		this.on( "click", ( e: interaction.InteractionEvent ): void => {
			if( UtilPointerEvent.contains( this, e.target ) ) {
				const canvas = this.canvas;
				if( canvas != null ) {
					canvas.onShapeClick( e );
				}
			}
		});
	}

	protected initialize( shapes: EShape[] ): void {
		const formatterMap: { [format: string]: ( value: unknown ) => unknown } = {};
		const initialMap: { [initial: string]: unknown | undefined } = {};
		const actionMap: Map<EShapeActionValue, EShapeActionRuntime> = new Map<EShapeActionValue, EShapeActionRuntime>();

		for( let i = 0, imax = shapes.length; i < imax; ++i ) {
			const shape = shapes[ i ];
			const runtimeConstructor = EShapeRuntimes[ shape.type ] || EShapeRuntime;
			const runtime = shape.runtime = new (runtimeConstructor)( shape );

			// Tag
			const tag = shape.tag;
			for( let j = 0, jmax = tag.size(); j < jmax; ++j ) {
				const value = tag.get( j );
				if( value != null ) {
					// Format
					const tagFormat = value.format;
					const tagInitial = value.initial;
					if( tagFormat in formatterMap ) {
						value.formatter = formatterMap[ tagFormat ];
					} else if( 0 < tagFormat.length ) {
						try {
							const formatter = Function(
								"value",
								`try {` +
									`return (${tagFormat});` +
								`} catch( e1 ) {` +
									`try {` +
										`return (${0 < tagInitial.length ? tagInitial : 0});` +
									`} catch( e2 ) {` +
										`return 0;` +
									`}` +
								`}`
							) as any;
							formatterMap[ tagFormat ] = formatter;
							value.formatter = formatter;
						} catch( e ) {
							//
						}
					}

					// Initial
					if( tagInitial in initialMap ) {
						value.value = initialMap[ tagInitial ];
					} else if( 0 < tagInitial.length ) {
						try {
							value.value = initialMap[ tagInitial ] = (Function(
								`try {` +
									`return (${tagInitial});` +
								`} catch( e ) {` +
									`return 0;` +
								`}`
							)());
						} catch( e ) {
							//
						}
					}
				}
			}

			// Initialize runtime actions
			const values = shape.action.values;
			const actions = runtime.actions;
			for( let j = 0, jmax = values.length; j < jmax; ++j ) {
				const value = values[ j ];
				let action: EShapeActionRuntime | undefined | null = actionMap.get( value );
				if( action == null ) {
					action = value.toRuntime( shape );
					if( action != null ) {
						if( action instanceof EShapeActionRuntimeOpen ) {
							if( shape.cursor.length <= 0 ) {
								shape.cursor = "pointer";
							}
						}

						actionMap.set( value, action );
						actions.push( action );
						runtime.reset |= action.reset;
					}
				} else {
					actions.push( action );
					runtime.reset |= action.reset;
				}
			}

			// Children
			const children = shape.children;
			if( 0 < children.length ) {
				this.initialize( children );
			}
		}
	}

	protected newCanvas( serialized: DDiagramSerialized ): DDiagramCanvas {
		return new DDiagramCanvas({
			name: serialized.name,
			width: serialized.width,
			height: serialized.height,
			background: {
				color: null
			},
			border: {
				color: null
			},
			tile: {
				factory: this._tileFactory,
				mapping: serialized.tile && serialized.tile.mapping
			}
		});
	}

	protected onDown( e: interaction.InteractionEvent ): void {
		const canvas = this.canvas;
		if( canvas != null ) {
			if( canvas.onShapeDown( e ) ) {
				return;
			}
		}
		super.onDown( e );
	}

	protected getType(): string {
		return "DDiagram";
	}
}
