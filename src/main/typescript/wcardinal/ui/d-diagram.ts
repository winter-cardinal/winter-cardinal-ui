/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Renderer } from "pixi.js";
import {
	DDiagramBase, DDiagramBaseController, DDiagramBaseOptions, DDiagramBasePieceController, DThemeDiagramBase
} from "./d-diagram-base";
import { DDiagramCanvas, DDiagramCanvasOptions, DDiagramCanvasTagOptions } from "./d-diagram-canvas";
import { DDiagramSerialized } from "./d-diagram-serialized";
import { DDiagramShape } from "./d-diagram-shape";
import { DDiagramTag } from "./d-diagram-tag";
import { EShapeActionRuntime } from "./shape/action/e-shape-action-runtime";
import { EShapeActionRuntimeOpen } from "./shape/action/e-shape-action-runtime-open";
import { EShapeActionValue } from "./shape/action/e-shape-action-value";
import { EShape } from "./shape/e-shape";
import { EShapeRuntime } from "./shape/e-shape-runtime";
import { EShapeRuntimes } from "./shape/e-shape-runtimes";
import { UtilPointerEvent } from "./util/util-pointer-event";

/**
 * {@link DDiagram} piece controller.
 */
export interface DDiagramPieceController extends DDiagramBasePieceController {

}

/**
 * {@link DDiagram} controller.
 */
export interface DDiagramController extends DDiagramBaseController {

}

/**
 * {@link DDiagram} options.
 */
export interface DDiagramOptions<
	THEME extends DThemeDiagram = DThemeDiagram,
	EMITTER = any
> extends DDiagramBaseOptions<DDiagramCanvas, DDiagramController, THEME, EMITTER> {
	tag?: DDiagramCanvasTagOptions;
}

/**
 * {@link DDiagram} theme.
 */
export interface DThemeDiagram extends DThemeDiagramBase {

}

export class DDiagram<
	THEME extends DThemeDiagram = DThemeDiagram,
	OPTIONS extends DDiagramOptions<THEME> = DDiagramOptions<THEME>
> extends DDiagramBase<DDiagramCanvas, DDiagramController, THEME, OPTIONS> {
	tag: DDiagramTag;
	shape: DDiagramShape;

	constructor( options?: OPTIONS ) {
		super( options );

		// Hover handling
		this.on( UtilPointerEvent.move, ( e: interaction.InteractionEvent ): void => {
			if( UtilPointerEvent.contains( this, e.target ) ) {
				const canvas = this.canvas;
				if( canvas ) {
					canvas.onShapeMove( e );
				}
			}
		});

		// Pointer down / up handling
		this.on( UtilPointerEvent.up, ( e: interaction.InteractionEvent ): void => {
			if( UtilPointerEvent.contains( this, e.target ) ) {
				const canvas = this.canvas;
				if( canvas ) {
					canvas.onShapeUp( e );
				}
			}
		});

		// Click handling
		this.on( "click", ( e: interaction.InteractionEvent ): void => {
			if( UtilPointerEvent.contains( this, e.target ) ) {
				const canvas = this.canvas;
				if( canvas ) {
					canvas.onShapeClick( e );
				}
			}
		});

		//
		this.tag = new DDiagramTag( this, options && options.tag );
		this.shape = new DDiagramShape( this );
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
				if( value ) {
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
		return new DDiagramCanvas( this.toCanvasOptions( serialized ) );
	}

	protected toCanvasOptions( serialized: DDiagramSerialized ): DDiagramCanvasOptions {
		return {
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
			},
			tag: {
				mapper: this.tag.mapper || undefined
			}
		};
	}

	protected onDown( e: interaction.InteractionEvent ): void {
		const canvas = this.canvas;
		if( canvas && canvas.onShapeDown( e ) ) {
			return;
		}
		super.onDown( e );
	}

	onDblClick( e: MouseEvent | TouchEvent, interactionManager: interaction.InteractionManager ): boolean {
		const canvas = this.canvas;
		if( canvas && canvas.onShapeDblClick( e, interactionManager ) ) {
			return true;
		}
		return super.onDblClick( e, interactionManager );
	}

	render( renderer: Renderer ): void {
		this.shape.update();
		super.render( renderer );
	}

	protected getType(): string {
		return "DDiagram";
	}
}
