/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Point, Rectangle } from "pixi.js";
import { DAnimation } from "./d-animation";
import { DApplicationLayerLike } from "./d-application-layer-like";
import { DApplications } from "./d-applications";
import { DBase, DBaseEvents, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DControllerFocus, DFocusable } from "./d-controller-focus";
import { DDialogAlign } from "./d-dialog-align";
import { DDialogCloseOn } from "./d-dialog-close-on";
import { DDialogGesture, DDialogGestureOptions } from "./d-dialog-gesture";
import { DDialogGestureImpl } from "./d-dialog-gesture-impl";
import { DDialogGestureMode } from "./d-dialog-gesture-mode";
import { DDialogMode } from "./d-dialog-mode";
import { DDialogState } from "./d-dialog-state";
import { DOnOptions } from "./d-on-options";
import { DPadding } from "./d-padding";
import { isArray } from "./util/is-array";
import { isString } from "./util/is-string";
import { toEnum } from "./util/to-enum";
import { UtilAttach } from "./util/util-attach";
import { UtilClickOutside } from "./util/util-click-outside";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilOverlay } from "./util/util-overlay";
import { DApplicationTarget } from "./d-application-like";

/**
 * {@link DDialog} events.
 */
export interface DDialogEvents<EMITTER> extends DBaseEvents<EMITTER> {
	/**
	 * Triggered when a dialog is opened.
	 *
	 * @param emitter this
	 */
	open(emitter: EMITTER): void;

	/**
	 * Triggered when a dialog is closed.
	 *
	 * @param emitter this
	 */
	close(emitter: EMITTER): void;
}

/**
 * {@link DDialog} `on` options.
 */
export interface DDialogOnOptions<EMITTER> extends Partial<DDialogEvents<EMITTER>>, DOnOptions {}

/**
 * {@link DDialog} options.
 */
export interface DDialogOptions<THEME extends DThemeDialog = DThemeDialog, EMITTER = any>
	extends DBaseOptions<THEME> {
	closeOn?: DDialogCloseOn | Array<keyof typeof DDialogCloseOn> | keyof typeof DDialogCloseOn;

	animation?: DAnimation<DBase>;

	/**
	 * A dialog mode.
	 */
	mode?: DDialogMode | keyof typeof DDialogMode;

	alwaysOnTop?: boolean;

	sticky?: boolean;

	gesture?: boolean | DDialogGestureOptions;

	align?: DDialogAlign | null | keyof typeof DDialogAlign;

	/**
	 * Mappings of event names and handlers.
	 */
	on?: DDialogOnOptions<EMITTER>;
}

/**
 * {@link DDialog} theme.
 */
export interface DThemeDialog extends DThemeBase {
	getMode(): DDialogMode;
	closeOn(mode: DDialogMode): DDialogCloseOn;
	isSticky(mode: DDialogMode): boolean;
	isAlwaysOnTop(): boolean;
	isGestureEnabled(mode: DDialogMode): boolean;
	getGestureMode(mode: DDialogMode): DDialogGestureMode;
	getOffsetX(mode: DDialogMode): number;
	getOffsetY(mode: DDialogMode): number;
	getAlign(mode: DDialogMode): DDialogAlign | null;
	newAnimation(mode: DDialogMode): DAnimation<DBase> | null;
}

export interface DDialogOpener extends DApplicationTarget {
	getBounds(skipUpdate?: boolean, rect?: Rectangle): Rectangle;
}

/**
 * A dialog class.
 *
 * If multiple application instances are there, better to set the constructor
 * option `parent` to an `application.stage` so that the dialog picks a right
 * application. `DDialog` searches applications in a following order:
 *
 * * To begin, `DDialog` tries to find applications which it belongs to.
 * * If `DDialog` can't find applications, then `DDialog` tries to find applications which openers belong to.
 * * If openers are not given, `DDialog` assumes the last created application at the very moment `DDialog` is instantiated is the one it belongs to.
 */
export class DDialog<
	VALUE = void,
	THEME extends DThemeDialog = DThemeDialog,
	OPTIONS extends DDialogOptions<THEME> = DDialogOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected static WORK_BOUNDS?: Rectangle;

	protected _promise?: Promise<VALUE>;
	protected _resolve?: (value: VALUE | PromiseLike<VALUE>) => void;
	protected _reject?: (reason?: any) => void;

	protected _animation?: DAnimation<DBase> | null;
	protected _closeOn!: DDialogCloseOn;
	protected _focused?: DFocusable | null;
	protected _overlay!: UtilOverlay;
	protected _mode!: DDialogMode;
	protected _alwaysOnTop!: boolean;
	protected _onParentChildAddedBound?: () => void;
	protected _sticky!: boolean;
	protected _onPrerenderBound!: () => void;
	protected _align!: DDialogAlign | null;
	protected _opener?: DDialogOpener | null;

	protected _gesture!: DDialogGesture<this>;
	protected _layer!: DApplicationLayerLike | null;

	protected init(options?: OPTIONS): void {
		super.init(options);

		this._onPrerenderBound = (): void => {
			this.onPrerender();
		};
		this._layer = null;

		// Mode
		const theme = this.theme;
		const mode = toEnum(options?.mode ?? theme.getMode(), DDialogMode);
		this._mode = mode;

		// Always On Top
		this._alwaysOnTop = options?.alwaysOnTop ?? theme.isAlwaysOnTop();

		// Sticky
		this._sticky = options?.sticky ?? theme.isSticky(mode);

		// Close On
		const closeOn = this.toCloseOn(mode, theme, options);
		this._closeOn = closeOn;

		// Align
		this._align = this.toAlign(mode, theme, options);

		// Overlay
		this._overlay = new UtilOverlay();

		// Gesture
		this._gesture = new DDialogGestureImpl(this, this.toGestureOptions(mode, theme, options));

		// Visibility
		this.visible = false;

		// State
		switch (mode) {
			case DDialogMode.MODAL:
				this.state.addAll(DBaseState.FOCUS_ROOT, DDialogState.MODAL);
				break;
			case DDialogMode.MODELESS:
				this.state.add(DDialogState.MODELESS);
				break;
			case DDialogMode.MENU:
				this.state.addAll(DBaseState.FOCUS_ROOT, DDialogState.MENU);
				break;
		}

		// Outside-click handling
		if (closeOn & DDialogCloseOn.CLICK_OUTSIDE) {
			UtilClickOutside.apply(this, (): void => {
				this.onCloseOn();
			});
		}
	}

	protected toCloseOn(mode: DDialogMode, theme: THEME, options?: OPTIONS): DDialogCloseOn {
		const closeOn = options?.closeOn;
		if (closeOn == null) {
			return theme.closeOn(mode);
		} else if (isArray(closeOn)) {
			let result = DDialogCloseOn.NONE;
			for (let i = 0, imax = closeOn.length; i < imax; ++i) {
				result |= DDialogCloseOn[closeOn[i]];
			}
			return result;
		} else if (isString(closeOn)) {
			return DDialogCloseOn[closeOn];
		}
		return closeOn;
	}

	protected toAlign(mode: DDialogMode, theme: THEME, options?: OPTIONS): DDialogAlign | null {
		const align = options?.align;
		if (align === null) {
			return null;
		} else if (align === undefined) {
			return theme.getAlign(mode);
		} else {
			return toEnum(align, DDialogAlign);
		}
	}

	get mode(): DDialogMode {
		return this._mode;
	}

	get align(): DDialogAlign | null {
		return this._align;
	}

	set algin(align: DDialogAlign | null) {
		this._align = align;
	}

	get alwaysOnTop(): boolean {
		return this._alwaysOnTop;
	}

	set alwaysOnTop(alwaysOnTop: boolean) {
		this._alwaysOnTop = alwaysOnTop;
	}

	get gesture(): DDialogGesture<this> {
		return this._gesture;
	}

	get layer(): DApplicationLayerLike | null {
		return this._layer;
	}

	protected toGestureOptions(
		mode: DDialogMode,
		theme: THEME,
		options?: OPTIONS
	): DDialogGestureOptions {
		const gesture = options?.gesture;
		if (gesture === true) {
			return {
				enable: true,
				mode: theme.getGestureMode(mode)
			};
		} else if (gesture === false) {
			return {
				enable: false,
				mode: theme.getGestureMode(mode)
			};
		} else if (gesture != null) {
			if (gesture.enable === undefined) {
				gesture.enable = theme.isGestureEnabled(mode);
			}
			if (gesture.mode === undefined) {
				gesture.mode = theme.getGestureMode(mode);
			}
			return gesture;
		}
		return {
			enable: theme.isGestureEnabled(mode),
			mode: theme.getGestureMode(mode)
		};
	}

	onParentResize(parentWidth: number, parentHeight: number, parentPadding: DPadding): void {
		if (this.isOpened()) {
			const layer = this._layer;
			if (layer != null) {
				const gesture = this._gesture;
				if (gesture.isDirty()) {
					const position = this.position;
					gesture.constraint(this, layer, position.x, position.y);
				}
			}
		}
		super.onParentResize(parentWidth, parentHeight, parentPadding);
	}

	protected getAnimation(): DAnimation | null {
		let result = this._animation;
		if (result === undefined) {
			result = this._options?.animation ?? this.theme.newAnimation(this._mode);
			if (result) {
				result.target = this;
				result.on("end", (isReverse: boolean): void => {
					this.onAnimationEnd(isReverse);
				});
			}
			this._animation = result;
		}
		return result;
	}

	protected onAnimationEnd(isReverse: boolean): void {
		if (isReverse) {
			if (this._mode === DDialogMode.MODELESS) {
				this.hide();
			} else {
				const parent = this.parent;
				if (parent) {
					parent.removeChild(this);
				}
			}
		} else {
			const layer = DApplications.getLayer(this);
			if (layer) {
				const focusController = layer.getFocusController();
				this._focused = focusController.get();
				focusController.focus(this.findFirstFocusable(focusController) || this);
			}
		}
	}

	protected findFirstFocusable(focusController: DControllerFocus): DFocusable | null {
		return focusController.find(this, false, true, true);
	}

	/**
	 * Opens a dialog.
	 *
	 * @param opener An opener of a dialog.
	 * The dialog position is determined based on a position and a size of the opener.
	 * If the opener is undefined, the dialog is placed at the center of the screen.
	 *
	 * @returns a value of this dialog
	 */
	open(opener?: DDialogOpener): Promise<VALUE> {
		let result = this._promise;
		if (result == null) {
			result = new Promise<VALUE>((resolve, reject): void => {
				this._resolve = resolve;
				this._reject = reject;
			});
			this._promise = result;

			this._opener = opener;

			// Attach to a layer
			let layer: DApplicationLayerLike | null = null;
			switch (this._mode) {
				case DDialogMode.MODAL:
				case DDialogMode.MENU:
					layer = this._overlay.pick(this, opener);
					layer.stage.addChild(this);
					break;
				case DDialogMode.MODELESS:
					layer = DApplications.getLayer(this);
					this.show();
					break;
			}
			this._layer = layer;

			// Position & size
			const gesture = this._gesture;
			if (gesture.mode === DDialogGestureMode.CLEAN) {
				gesture.toClean();
			}
			if (layer != null) {
				if (gesture.isClean()) {
					const renderer = layer.renderer;
					const onPrerenderBound = this._onPrerenderBound;
					if (this._sticky) {
						renderer.on("prerender", onPrerenderBound);
					} else {
						renderer.once("prerender", onPrerenderBound);
					}
				} else {
					const position = this.position;
					gesture.constraint(this, layer, position.x, position.y);
				}
			}

			// Always On Top
			if (this._alwaysOnTop) {
				const parent = this.parent;
				if (parent != null) {
					parent.on(
						"childAdded",
						(this._onParentChildAddedBound ??= (): void => {
							this.onParentChildAdded();
						})
					);
					this.onParentChildAdded();
				}
			}

			// Done
			this.onOpen();
		}
		return result;
	}

	protected onParentChildAdded(): void {
		const parent = this.parent;
		if (parent != null) {
			parent.children.sort(this.compareAlwaysOnTop);
		}
	}

	protected compareAlwaysOnTop(this: unknown, a: DisplayObject, b: DisplayObject): number {
		const at = a instanceof DDialog && a.alwaysOnTop;
		const bt = b instanceof DDialog && b.alwaysOnTop;
		if (at) {
			return bt ? 0 : +1;
		} else {
			return bt ? -1 : 0;
		}
	}

	protected onPrerender(): void {
		const layer = this._layer;
		if (layer == null) {
			return;
		}
		const align = this._align;
		if (align === DDialogAlign.NONE) {
			return;
		}
		const opener = this._opener;
		if (align != null && opener != null) {
			const mode = this._mode;
			const bounds = opener.getBounds(false, (DDialog.WORK_BOUNDS ??= new Rectangle()));
			const theme = this.theme;
			UtilAttach.attach(
				this,
				bounds,
				theme.getOffsetX(mode),
				theme.getOffsetY(mode),
				layer.width,
				layer.height,
				align
			);
		} else {
			this.position.set((layer.width - this.width) * 0.5, (layer.height - this.height) * 0.5);
		}
	}

	protected onOpen(): void {
		this.emit("open", this);

		// Animation
		const animation = this.getAnimation();
		if (animation) {
			animation.start();
		} else if (this._mode === DDialogMode.MENU) {
			this.visible = true;
			this.onAnimationEnd(false);
		}
	}

	isOpened(): boolean {
		return this._promise != null;
	}

	close(): void {
		this.doReject();
	}

	protected doResolve(value: VALUE | PromiseLike<VALUE>): void {
		const resolve = this._resolve;
		if (resolve) {
			this._promise = undefined;
			this._resolve = undefined;
			this._reject = undefined;

			this.onClose();

			resolve(value);
		}
	}

	protected doReject(reason?: any): void {
		const reject = this._reject;
		if (reject) {
			this._promise = undefined;
			this._resolve = undefined;
			this._reject = undefined;

			this.onClose();

			reject(reason);
		}
	}

	protected onClose(): void {
		// Focus
		const layer = this._layer;
		const focused = this._focused;
		if (focused != null) {
			this._focused = null;
			if (layer) {
				const focusedLayer = DApplications.getLayer(focused);
				if (focusedLayer != null && layer !== focusedLayer) {
					focusedLayer.view.focus();
				}
				layer.getFocusController().focus(focused);
			} else {
				this.blur(true);
			}
		} else {
			this.blur(true);
		}

		// Remove the prerender event handler and forget the layer
		if (layer) {
			layer.renderer.off("prerender", this._onPrerenderBound);
			this._layer = null;
		}

		// Forget the opener
		this._opener = null;

		// Animation
		const animation = this.getAnimation();
		if (animation) {
			animation.start(true);
		} else {
			this.visible = false;
			this.onAnimationEnd(true);
		}

		// Always On Top
		if (this._alwaysOnTop) {
			const parent = this.parent;
			if (parent != null) {
				parent.off("childAdded", this._onParentChildAddedBound);
			}
		}

		this.emit("close", this);
	}

	protected onKeyDown(e: KeyboardEvent): boolean {
		if (this._closeOn & DDialogCloseOn.ESC) {
			if (UtilKeyboardEvent.isCancelKey(e)) {
				this.onCloseOn();
			}
		}
		return super.onKeyDown(e);
	}

	protected onCloseOn(): void {
		this.close();
	}

	protected containsGlobalPoint(point: Point): boolean {
		switch (this._mode) {
			case DDialogMode.MODAL:
			case DDialogMode.MENU:
				return true;
			case DDialogMode.MODELESS:
				return super.containsGlobalPoint(point);
		}
	}

	protected getType(): string {
		return "DDialog";
	}
}
