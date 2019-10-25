/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DControllers } from "./d-controllers";
import { DDiagramCanvasBase, DDiagramCanvasBaseOptions, DThemeDiagramCanvasBase } from "./d-diagram-canvas-base";
import { EShape } from "./shape/e-shape";
import { EShapeTagValue } from "./shape/e-shape-tag-value";
import { EShapeBase } from "./shape/variant/e-shape-base";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";

interface Tags { [ id: string ]: EShapeTagValue[]; }
interface Ids { [ id: string ]: EShape[] | undefined; }

export interface DDiagramCanvasOptions<
	THEME extends DThemeDiagramCanvas = DThemeDiagramCanvas
> extends DDiagramCanvasBaseOptions<THEME> {

}

export interface DThemeDiagramCanvas extends DThemeDiagramCanvasBase {

}

export class DDiagramCanvas<
	THEME extends DThemeDiagramCanvas = DThemeDiagramCanvas,
	OPTIONS extends DDiagramCanvasOptions<THEME> = DDiagramCanvasOptions<THEME>
> extends DDiagramCanvasBase<THEME, OPTIONS> {
	tags: Tags;
	interactives: EShape[];
	actionables: EShape[];
	ids: Ids;

	protected _work: Point;
	protected _lastOverShape: EShape | null;

	constructor( options: OPTIONS ) {
		super( options );
		this.tags = {};
		this.interactives = [];
		this.actionables = [];
		this.ids = {};
		this._work = new Point();
		this._lastOverShape = null;
	}

	initialize(): void {
		const time = Date.now();
		const tags = this.tags;
		const interactives = this.interactives;
		const actionables = this.actionables;
		const ids = this.ids;
		const layers = this._layer.children;

		for( let i = 0, imax = layers.length; i < imax; ++i ) {
			this.initializeShapes( layers[ i ].children, tags, interactives, actionables, ids );
		}

		for( let i = 0, imax = layers.length; i < imax; ++i ) {
			this.updateShapes( layers[ i ].children, time );
		}

		this.initializeFocus();
	}

	protected initializeFocus(): void {
		const focusController = DControllers.getFocusController();
		const focusable = focusController.findFocusable( this, false, true, true );
		if( focusable != null ) {
			focusController.setFocused( focusable, true, true );
		}
	}

	protected initializeShapes(
		shapes: EShape[], tags: Tags, interactives: EShape[], actionables: EShape[], ids: Ids
	): void {
		for( let i = 0, imax = shapes.length; i < imax; ++i ) {
			const shape = shapes[ i ];

			// Tag mappings
			const tag = shape.tag;
			for( let j = 0, jmax = tag.size(); j < jmax; ++j ) {
				const value = tag.get( j );
				if( value != null ) {
					const valueId = value.id;
					if( 0 < valueId.length ) {
						let values = tags[ valueId ];
						if( values == null ) {
							values = [];
							tags[ valueId ] = values;
						}
						values.push( value );
					}
				}
			}

			// Id mappings
			const shapeId = shape.id;
			if( 0 < shapeId.length ) {
				const mapping: EShape[] | undefined = ids[ shapeId ];
				if( mapping == null ) {
					ids[ shapeId ] = [ shape ];
				} else {
					mapping.push( shape );
				}
			}

			// Interactives
			if( shape.interactive || (0 < shape.cursor.length) || (shape.runtime != null && shape.runtime.interactive) ) {
				interactives.push( shape );
			}

			// Actionables
			const runtime = shape.runtime;
			if( runtime != null && 0 < runtime.actions.length ) {
				actionables.push( shape );
			}

			// Shortcuts
			const shortcut = shape.shortcut;
			if( shortcut != null ) {
				UtilKeyboardEvent.on( this, shortcut, ( e: KeyboardEvent ): void => {
					shape.onShortcut( e );
				});
			}

			// Children
			const children = shape.children;
			if( 0 < children.length ) {
				this.initializeShapes( children, tags, interactives, actionables, ids );
			}
		}
	}

	protected updateShapes( shapes: EShape[], time: number ): void {
		for( let i = 0, imax = shapes.length; i < imax; ++i ) {
			shapes[ i ].update( time );
		}
	}

	onShapeMove( e: interaction.InteractionEvent ): boolean {
		const global = e.data.global;
		const work = this._work;

		const interactives = this.interactives;
		let found: EShape | null = null;
		for( let i = interactives.length - 1; 0 <= i; --i ) {
			const interactive = interactives[ i ];
			if( interactive.visible ) {
				const interactiveLocal = interactive.toLocal( global, undefined, work );
				if( interactive.contains( interactiveLocal ) != null ) {
					found = interactive;
					break;
				}
			}
		}

		const application = DApplications.getInstance();
		if( found != null ) {
			if( 0 < found.cursor.length ) {
				if( application.view.style.cursor !== found.cursor ) {
					application.view.style.cursor = found.cursor;
				}
			}

			const lastOverShape = this._lastOverShape;
			if( found === lastOverShape ) {
				const runtime = lastOverShape.runtime;
				if( runtime != null ) {
					runtime.onPointerMove( lastOverShape, e );
				}
			} else {
				this._lastOverShape = found;

				// Previous
				if( lastOverShape != null ) {
					const previousRuntime = lastOverShape.runtime;
					if( previousRuntime != null ) {
						previousRuntime.onPointerOut( lastOverShape, e );
					}

					// Parents
					let lastOverParent = lastOverShape.parent;
					while( (lastOverParent instanceof EShapeBase) && lastOverParent !== found ) {
						const parentRuntime = lastOverShape.runtime;
						if( parentRuntime != null ) {
							parentRuntime.onPointerOut( lastOverParent, e );
						}
						lastOverParent = lastOverParent.parent;
					}
				}

				// Next
				const runtime = found.runtime;
				if( runtime != null ) {
					runtime.onPointerOver( found, e );
				}
				DApplications.getInstance().view.title = ( found.title || "" );

				// Parents
				let parent = found.parent;
				while( parent instanceof EShapeBase ) {
					const parentRuntime = parent.runtime;
					if( parentRuntime != null ) {
						parentRuntime.onPointerOver( parent, e );
					}
					parent = parent.parent;
				}
			}

			return true;
		} else {
			if( application.view.style.cursor !== "auto" ) {
				application.view.style.cursor = "auto";
			}

			// Previous
			const lastOverShape = this._lastOverShape;
			this._lastOverShape = null;
			if( lastOverShape != null ) {
				const runtime = lastOverShape.runtime;
				if( runtime != null ) {
					runtime.onPointerOut( lastOverShape, e );
				}

				// Parents
				let lastOverParent = lastOverShape.parent;
				while( lastOverParent instanceof EShapeBase ) {
					const parentRuntime = lastOverParent.runtime;
					if( parentRuntime != null ) {
						parentRuntime.onPointerOut( lastOverParent, e );
					}
					lastOverParent = lastOverParent.parent;
				}
			}

			//
			DApplications.getInstance().view.title = "";

			return false;
		}
	}

	onShapeDown( e: interaction.InteractionEvent ): boolean {
		const interactives = this.interactives;
		const global = e.data.global;
		const work = this._work;
		for( let i = interactives.length - 1; 0 <= i; --i ) {
			const interactive = interactives[ i ];
			if( interactive.visible ) {
				const local = interactive.toLocal( global, undefined, work );
				if( interactive.contains( local ) != null ) {
					const runtime = interactive.runtime;
					if( runtime != null ) {
						runtime.onPointerDown( interactive, e );
					}
					return true;
				}
			}
		}
		return false;
	}

	onShapeUp( e: interaction.InteractionEvent ): boolean {
		const interactives = this.interactives;
		const global = e.data.global;
		const work = this._work;
		for( let i = interactives.length - 1; 0 <= i; --i ) {
			const interactive = interactives[ i ];
			if( interactive.visible ) {
				const local = interactive.toLocal( global, undefined, work );
				if( interactive.contains( local ) != null ) {
					const runtime = interactive.runtime;
					if( runtime != null ) {
						runtime.onPointerUp( interactive, e );
					}
					return true;
				}
			}
		}
		return false;
	}

	onShapeClick( e: interaction.InteractionEvent ): boolean {
		const interactives = this.interactives;
		const global = e.data.global;
		const work = this._work;
		for( let i = interactives.length - 1; 0 <= i; --i ) {
			const clickable = interactives[ i ];
			if( clickable.visible ) {
				const clickableLocal = clickable.toLocal( global, undefined, work );
				if( clickable.contains( clickableLocal ) != null ) {
					let target: EShape = clickable;
					while( true ) {
						const runtime = target.runtime;
						if( runtime != null ) {
							runtime.onPointerClick( target, e );
						}
						const parent = target.parent;
						if( parent instanceof EShapeBase ) {
							target = parent;
						} else {
							break;
						}
					}
					return true;
				}
			}
		}
		return false;
	}

	protected getType(): string {
		return "DDiagramCanvas";
	}
}
