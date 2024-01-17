/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Application, interaction, Point } from "pixi.js";
import { DApplicationLayerLike } from "./d-application-layer-like";
import { DApplicationLayerOptions } from "./d-application-layer-options";
import { DApplicationLike } from "./d-application-like";
import { DBase } from "./d-base";
import { DControllerFocus, DFocusable, DFocusableContainer } from "./d-controller-focus";
import { DControllers } from "./d-controllers";
import { DPadding } from "./d-padding";
import { DynamicFontAtlases } from "./util/dynamic-font-atlases";
import { UtilPointerEvent } from "./util/util-pointer-event";
import { UtilWheelEvent, UtilWheelEventDeltas } from "./util/util-wheel-event";

interface DblClickable {
	onDblClick(
		e: MouseEvent | TouchEvent,
		interactionManager: interaction.InteractionManager
	): boolean;
}

const isDblClickable = (target: any): target is DblClickable => {
	return target != null && target.onDblClick != null;
};

interface Wheelable {
	onWheel(e: WheelEvent, deltas: UtilWheelEventDeltas, global: Point): boolean;
}

const isWheelable = (target: any): target is Wheelable => {
	return target != null && target.onWheel != null;
};

export class DApplicationLayer extends Application implements DApplicationLayerLike {
	protected _options: DApplicationLayerOptions;
	protected _renderId: number | null = null;
	protected _renderBound: () => void;
	protected _isLocked: boolean;
	protected _isOverlay: boolean;
	protected _reflowLimit: number;
	protected _rootElement: HTMLElement;
	protected _elementContainer: HTMLElement;
	protected _padding: DPadding;
	protected _dynamicFontAtlases: DynamicFontAtlases | null = null;
	protected _isVisible: boolean;

	readonly application: DApplicationLike;

	constructor(application: DApplicationLike, options: DApplicationLayerOptions) {
		super(options.getPixiApplicationOptions());

		this._options = options;
		this._isLocked = false;
		this._isVisible = true;
		this._isOverlay = options.isOverlay();
		this._padding = options.getPadding();
		this._rootElement = options.getRootElement();
		this._reflowLimit = 5;
		this._elementContainer = this.newElementContainer();

		this.application = application;

		this._renderBound = (): void => {
			if (this._renderId != null) {
				this.render();
			}
		};

		this.initStage();
		this.initView();
		this.initRootElement();
		this.initFocusHandling();
		this.initResizeHandling();
		this.initWheelHandling();
		this.initDoubleClickHandling();
	}

	protected newElementContainer(): HTMLElement {
		const result = document.createElement("div");
		result.setAttribute(
			"style",
			"position: absolute; top: 0; left: 0; width: 0; height: 0;" +
				"margin: 0; padding: 0; outline: none;"
		);
		return result;
	}

	protected initStage(): void {
		const stage = this.stage;
		(stage as any).layer = this;
		(stage as any).application = this.application;
		stage.interactive = true;
	}

	protected initView(): void {
		const view = this.view;
		const style = view.style;
		style.position = "absolute";
		style.top = "0";
		style.left = "0";
		style.width = "100%";
		style.height = "100%";
		style.display = "block";
		style.outline = "none";
		(style as any).webkitTapHighlightColor = "rgba(255,255,255,0)";
		style.webkitUserSelect = "none";
		style.setProperty("-khtml-user-select", "none");
		style.setProperty("-moz-user-select", "none");
		style.setProperty("-ms-user-select", "none");
		style.userSelect = "none";
	}

	protected initRootElement(): void {
		const view = this.view;
		const isOverlay = this._isOverlay;
		const rootElement = this._rootElement;
		const elementContainer = this._elementContainer;

		// Insert elements
		const insertionPosition = isOverlay ? 2 : 0;
		const children = rootElement.children;
		if (insertionPosition < children.length) {
			const child = children[insertionPosition];
			rootElement.insertBefore(view, child);
			rootElement.insertBefore(elementContainer, child);
		} else {
			rootElement.appendChild(view);
			rootElement.appendChild(elementContainer);
		}

		if (isOverlay) {
			const stage = this.stage;
			const oldOnChildrenChange = (stage as any).onChildrenChange;
			(stage as any).onChildrenChange = (): void => {
				this.onStageDirty();
				oldOnChildrenChange.call(stage);
			};
		}

		// Init styles
		const rootElementStyle = rootElement.style;
		if (rootElement !== document.body) {
			const rootElementStylePosition = window.getComputedStyle(rootElement).position;
			if (rootElementStylePosition === "static") {
				rootElementStyle.position = "relative";
			}
		}
		rootElementStyle.margin = "0";
		rootElementStyle.padding = "0";
		rootElementStyle.overflow = "hidden";
	}

	protected initFocusHandling(): void {
		const view = this.view;
		const stage = this.stage;
		const focusController = this.getFocusController();

		view.setAttribute("tabindex", "0");

		DControllers.getKeyboardController().init(view, stage, focusController);

		const interactionManager = this.renderer.plugins.interaction;
		interactionManager.on(UtilPointerEvent.down, (e: interaction.InteractionEvent): void => {
			if (e.target == null || e.target === stage) {
				focusController.clear();
			}
		});
	}

	protected initResizeHandling(): void {
		const options = this._options;
		const isWidthFixed = options.isWidthFixed();
		const isHeightFixed = options.isHeightFixed();
		if (!isWidthFixed || !isHeightFixed) {
			const onResizeBound = (): void => {
				this.onResize();
			};
			if (window.ResizeObserver != null) {
				new ResizeObserver(onResizeBound).observe(this._rootElement);
			} else {
				window.addEventListener("resize", onResizeBound);
				window.addEventListener("orientationchange", onResizeBound);
			}
		}
	}

	protected onResize(): void {
		const options = this._options;
		const bboxes = this._rootElement.getClientRects();
		if (bboxes.length <= 0) {
			// The root element size is (0, 0) and not visible.
			// In this case, skip the resizing.
			return;
		}
		const bbox = bboxes[0];
		const newWidth = options.isWidthFixed() ? options.getWidth() : bbox.width;
		const newHeight = options.isHeightFixed() ? options.getHeight() : bbox.height;
		this.renderer.resize(newWidth, newHeight);

		const padding = this._padding;
		const children = this.stage.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			const child = children[i];
			if (child instanceof DBase) {
				child.onParentResize(newWidth, newHeight, padding);
			}
		}

		this.update();
	}

	protected initWheelHandling(): void {
		const global = new Point();
		const util = UtilWheelEvent.getInstance();
		const interactionManager = this.renderer.plugins.interaction;
		util.on(this.view, (e: WheelEvent | Event): void => {
			const wheelEvent = e as WheelEvent;
			UtilPointerEvent.toGlobal(wheelEvent, interactionManager, global);
			let current = interactionManager.hitTest(global);
			const deltas = util.normalize(e);
			if (deltas != null) {
				while (current != null) {
					if (isWheelable(current)) {
						if (current.onWheel(wheelEvent, deltas, global)) {
							wheelEvent.preventDefault();
							break;
						}
					}
					current = current.parent;
				}
			}
		});
	}

	protected initDoubleClickHandling(): void {
		const focusController = this.getFocusController();
		const interactionManager = this.renderer.plugins.interaction;
		UtilPointerEvent.onDblClick(this.view, (e: MouseEvent | TouchEvent): void => {
			const focused = focusController.get();
			if (focused != null) {
				let current: DFocusable | DFocusableContainer | null = focused;
				while (current != null) {
					if (isDblClickable(current)) {
						if (current.onDblClick(e, interactionManager)) {
							break;
						}
					}
					current = current.parent;
				}
			}
		});
	}

	lock(): void {
		this._isLocked = true;
	}

	unlock(): void {
		this._isLocked = false;
	}

	update(): void {
		if (!this._isLocked && this._renderId == null) {
			this._renderId = requestAnimationFrame(this._renderBound);
		}
	}

	protected onStageDirty(): void {
		// Update the visibility if this is a overlay layer.
		if (this._isOverlay) {
			if (0 < this.stage.children.length) {
				// There are more than one children,
				// therefore must be visible.
				if (!this._isVisible) {
					this._isVisible = true;
					this.view.style.display = "block";
				}
			} else {
				// There is no child,
				// therefore must not be visible.
				if (this._isVisible) {
					this._isVisible = false;
					this.view.style.display = "none";
				}
			}
		}
	}

	render(): void {
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

	reflow(): void {
		const children = this.stage.children;
		for (let ilimit = 0, limit = this._reflowLimit; ilimit < limit; ++ilimit) {
			let isDirty = false;
			for (let i = 0, imax = children.length; i < imax; ++i) {
				const child = children[i];
				if (child instanceof DBase) {
					child.reflow();
					isDirty =
						isDirty || child.isDirty() || child.hasDirty() || child.isHierarchyDirty();
				}
			}

			// If DBases are changed during the `reflow` process, need to reflow again.
			if (!isDirty) {
				break;
			}
		}
	}

	getFocusController(): DControllerFocus {
		return this.application.getFocusController();
	}

	getRootElement(): HTMLElement {
		return this._rootElement;
	}

	getElementContainer(): HTMLElement {
		return this._elementContainer;
	}

	getDynamicFontAtlases(): DynamicFontAtlases {
		if (this._dynamicFontAtlases == null) {
			this._dynamicFontAtlases = new DynamicFontAtlases(this);
		}
		return this._dynamicFontAtlases;
	}
}
