/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Application, interaction, Point } from "pixi.js";
import { DApplicationLayerLike } from "./d-application-layer-like";
import { DApplicationLayerOptions } from "./d-application-layer-options";
import { DApplicationLike } from "./d-application-like";
import { DBase } from "./d-base";
import { DControllerDefaultFocus } from "./d-controller-default-focus";
import { DControllerFocus, DFocusable, DFocusableContainer } from "./d-controller-focus";
import { DControllers } from "./d-controllers";
import { DPadding } from "./d-padding";
import { DynamicFontAtlases } from "./util/dynamic-font-atlases";
import { UtilPointerEvent } from "./util/util-pointer-event";
import { UtilWheelEvent, UtilWheelEventDeltas } from "./util/util-wheel-event";

interface DblClickable {
	onDblClick( e: MouseEvent | TouchEvent, interactionManager: interaction.InteractionManager ): boolean;
}

const isDblClickable = ( target: any ): target is DblClickable => {
	return target != null && target.onDblClick != null;
};

interface Wheelable {
	onWheel( e: WheelEvent, deltas: UtilWheelEventDeltas, global: Point ): boolean;
}

const isWheelable = ( target: any ): target is Wheelable => {
	return target != null && target.onWheel != null;
};

export class DApplicationLayer extends Application implements DApplicationLayerLike {
	protected _options: DApplicationLayerOptions;
	protected _renderId: number | null = null;
	protected _renderBound: () => void;
	protected _isLocked: boolean;
	protected _isOverlay: boolean;
	protected _refitLimit: number;
	protected _reflowLimit: number;
	protected _focus?: DControllerFocus;
	protected _rootElement: HTMLElement;
	protected _elementContainer: HTMLElement;
	protected _padding: DPadding;
	protected _dynamicFontAtlases: DynamicFontAtlases | null = null;
	protected _isVisible: boolean;

	readonly application: DApplicationLike;

	constructor( application: DApplicationLike, options: DApplicationLayerOptions ) {
		super( options.getPixiApplicationOptions() );

		this.application = application;
		const stageAny = this.stage as any;
		stageAny.layer = this;
		stageAny.application = application;

		this._options = options;
		this._isLocked = true;
		this._isVisible = true;
		const isOverlay = options.isOverlay();
		this._isOverlay = isOverlay;
		this._padding = options.getPadding();
		const rootElement = options.getRootElement();
		this._rootElement = rootElement;
		this._refitLimit = 5;
		this._reflowLimit = 5;

		this._renderBound = (): void => {
			if( this._renderId != null ) {
				this.render();
			}
		};

		// Init element container
		this._elementContainer = this.newElementContainer( rootElement, stageAny, isOverlay );

		// Init canvas
		const viewStyle = this.view.style;
		viewStyle.position = "absolute";
		viewStyle.top = "0";
		viewStyle.left = "0";
		viewStyle.width = "100%";
		viewStyle.height = "100%";
		viewStyle.display = "block";
		viewStyle.outline = "none";

		// Focus handling
		let hasFocus = false;
		const focusController = this.getFocusController();
		const onBlurBound = (): void => {
			if( ! hasFocus ) {
				focusController.clear();
			}
		};
		rootElement.addEventListener( "focus", ( e ): void => {
			hasFocus = true;
		}, true );
		rootElement.addEventListener( "blur", ( e ): void => {
			hasFocus = false;
			setTimeout( onBlurBound, 0 );
		}, true );
		this.view.setAttribute( "tabindex", "0" );

		DControllers.getKeyboardController().init( this.view, this.stage, focusController );

		const interactionManager: interaction.InteractionManager = this.renderer.plugins.interaction;
		interactionManager.on( UtilPointerEvent.down, ( e: interaction.InteractionEvent ): void => {
			if( e.target == null || e.target === stageAny ) {
				focusController.clear();
			}
		});

		// Resize handling
		const onResizeBound = (): void => {
			this.onResize();
		};
		window.addEventListener( "resize", onResizeBound );
		window.addEventListener( "orientationchange", onResizeBound );

		// Mouse wheel handling
		const wheelGlobal = new Point();
		const wheelEventUtil = UtilWheelEvent.getInstance();
		wheelEventUtil.on( this.view, ( e: WheelEvent | Event ): void => {
			const wheelEvent = e as WheelEvent;
			UtilPointerEvent.toGlobal( wheelEvent, interactionManager, wheelGlobal );
			let current = interactionManager.hitTest( wheelGlobal );
			const deltas = wheelEventUtil.normalize( e );
			if( deltas != null ) {
				while( current != null ) {
					if( isWheelable( current ) ) {
						if( current.onWheel( wheelEvent, deltas, wheelGlobal ) ) {
							wheelEvent.preventDefault();
							break;
						}
					}
					current = current.parent;
				}
			}
		});

		// Double click handling
		UtilPointerEvent.onDblClick( this.view, ( e: MouseEvent | TouchEvent ) => {
			const focused = focusController.get();
			if( focused != null ) {
				let current: DFocusable | DFocusableContainer | null = focused;
				while( current != null ) {
					if( isDblClickable( current ) ) {
						if( current.onDblClick( e, interactionManager ) ) {
							break;
						}
					}
					current = current.parent;
				}
			}
		});

		//
		this.stage.interactive = true;
	}

	protected newElementContainer( rootElement: HTMLElement, stageAny: any, isOverlay: boolean ): HTMLDivElement {
		const elementContainer = document.createElement( "div" );
		elementContainer.setAttribute( "style",
			"position: absolute; top: 0; left: 0; width: 0; height: 0;" +
			"margin: 0; padding: 0; outline: none;"
		);
		const children = rootElement.children;
		if( isOverlay ) {
			if( 3 <= children.length ) {
				const thirdChild = children[ 2 ];
				rootElement.insertBefore( this.view, thirdChild );
				rootElement.insertBefore( elementContainer, thirdChild );
			} else {
				rootElement.appendChild( this.view );
				rootElement.appendChild( elementContainer );
			}

			const oldOnChildrenChange = stageAny.onChildrenChange;
			stageAny.onChildrenChange = (): void => {
				this.onStageDirty();
				oldOnChildrenChange.call( stageAny );
			};
		} else {
			if( 0 < children.length ) {
				const firstChild = children[ 0 ];
				rootElement.insertBefore( this.view, firstChild );
				rootElement.insertBefore( elementContainer, firstChild );
			} else {
				rootElement.appendChild( this.view );
				rootElement.appendChild( elementContainer );
			}
		}
		const rootElementStyle = rootElement.style;
		if( rootElement !== document.body ) {
			const rootElementStylePosition = window.getComputedStyle( rootElement ).position;
			if( rootElementStylePosition === "static" ) {
				rootElementStyle.position = "relative";
			}
		}
		rootElementStyle.margin = "0";
		rootElementStyle.padding = "0";
		rootElementStyle.overflow = "hidden";
		return elementContainer;
	}

	protected onResize(): void {
		const bbox = this._rootElement.getBoundingClientRect();
		const bboxWidth = bbox.width;
		const bboxHeight = bbox.height;
		this.renderer.resize( bboxWidth, bboxHeight );

		const padding = this._padding;
		const children = this.stage.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const child = children[ i ];
			if( child instanceof DBase ) {
				child.onParentResize( bboxWidth, bboxHeight, padding );
			}
		}

		this.update();
	}

	lock(): void {
		this._isLocked = false;
	}

	unlock(): void {
		this._isLocked = true;
	}

	update(): void {
		if( this._isLocked && this._renderId == null ) {
			this._renderId = requestAnimationFrame( this._renderBound );
		}
	}

	protected onStageDirty(): void {
		// Update the visibility if this is a overlay layer.
		if( this._isOverlay ) {
			if( 0 < this.stage.children.length ) {
				// There is more than one children,
				// therefore must be visible.
				if( ! this._isVisible ) {
					this._isVisible = true;
					this.view.style.display = "block";
				}
			} else {
				// There is no child,
				// therefore must not be visible.
				if( this._isVisible ) {
					this._isVisible = false;
					this.view.style.display = "none";
				}
			}
		}
	}

	render(): void {
		this.refit();
		this.reflow();

		// Please note why the following line is here.
		//
		// Before this line, the update method does not enque a rendering task
		// because `this._renderId` is not null. As a result, this prevents
		// an unintentional rendering loop caused by the refit or the reflow.
		//
		// After this line, the update method enques a rendering task.
		// Namely, in the DisplayObject#render(Renderer) method, allowed to enque
		// a rendering task. For instance, please refer to the DDiagramShape#update().
		this._renderId = null;

		// Render
		super.render();
	}

	get width(): number {
		return this.screen.width;
	}

	get height(): number {
		return this.screen.height;
	}

	get padding(): DPadding {
		return this._padding;
	}

	refit(): void {
		const children = this.stage.children;
		for( let ilimit = 0, limit = this._refitLimit; ilimit < limit; ++ilimit ) {
			let isChildrenDirty = false;
			for( let i = 0, imax = children.length; i < imax; ++i ) {
				const child = children[ i ];
				if( child instanceof DBase ) {
					child.refit();
					isChildrenDirty = isChildrenDirty || child.isChildrenDirty();
				}
			}

			// If DBases are changed during the `refit` process, need to refit again.
			if( ! isChildrenDirty ) {
				break;
			}
		}
	}

	reflow(): void {
		const children = this.stage.children;
		for( let ilimit = 0, limit = this._refitLimit; ilimit < limit; ++ilimit ) {
			let isDirty = false;
			for( let i = 0, imax = children.length; i < imax; ++i ) {
				const child = children[ i ];
				if( child instanceof DBase ) {
					child.reflow();
					isDirty = isDirty || child.isDirty() || child.hasDirty();
				}
			}

			// If DBases are changed during the `reflow` process, need to reflow again.
			if( ! isDirty ) {
				break;
			}
		}
	}

	getFocusController(): DControllerFocus {
		if( this._focus == null ) {
			this._focus = new DControllerDefaultFocus();
		}
		return this._focus;
	}

	getRootElement(): HTMLElement {
		return this._rootElement;
	}

	getElementContainer(): HTMLElement {
		return this._elementContainer;
	}

	getDynamicFontAtlases(): DynamicFontAtlases {
		if( this._dynamicFontAtlases == null ) {
			this._dynamicFontAtlases = new DynamicFontAtlases( this );
		}
		return this._dynamicFontAtlases;
	}
}
