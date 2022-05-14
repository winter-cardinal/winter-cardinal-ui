/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point, Rectangle } from "pixi.js";
import { DAnimation } from "./d-animation";
import { DApplicationLayerLike } from "./d-application-layer-like";
import { DApplications } from "./d-applications";
import { DBase, DBaseEvents, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DFocusable } from "./d-controller-focus";
import { DDialogAlign } from "./d-dialog-align";
import { DDialogCloseOn } from "./d-dialog-close-on";
import { DDialogGesture, DDialogGestureOptions } from "./d-dialog-gesture";
import { DDialogGestureImpl } from "./d-dialog-gesture-impl";
import { DDialogMode } from "./d-dialog-mode";
import { DDialogState } from "./d-dialog-state";
import { DOnOptions } from "./d-on-options";
import { DPadding } from "./d-padding";
import { toEnum } from "./util/to-enum";
import { UtilAttach } from "./util/util-attach";
import { UtilClickOutside } from "./util/util-click-outside";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilOverlay } from "./util/util-overlay";

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
	closeOn?: DDialogCloseOn;
	animation?: DAnimation<DBase>;

	/**
	 * A dialog mode.
	 */
	mode?: DDialogMode | keyof typeof DDialogMode;

	sticky?: boolean;

	gesture?: boolean | DDialogGestureOptions;

	align?: DDialogAlign | null;

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
	isGestureEnabled(mode: DDialogMode): boolean;
	getOffsetX(mode: DDialogMode): number;
	getOffsetY(mode: DDialogMode): number;
	getAlign(mode: DDialogMode): DDialogAlign | null;
	newAnimation(mode: DDialogMode): DAnimation<DBase> | null;
}

/**
 * A dialog class.
 *
 * If multiple application instances are there, better to set the constructor
 * option `parent` to an `application.stage` so that the dialog picks a right
 * application. By default, the dialog assumes the last created application is
 * the one it belongs to at the time when it is created.
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
	protected _sticky!: boolean;
	protected _onPrerenderBound!: () => void;
	protected _align!: DDialogAlign | null;
	protected _owner?: DBase<any, any> | null;

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

		// Sticky
		this._sticky = options?.sticky ?? theme.isSticky(mode);

		// Close On
		const closeOn = options?.closeOn ?? theme.closeOn(mode);
		this._closeOn = closeOn;

		// Align
		this._align = toEnum(options?.align ?? theme.getAlign(mode), DDialogAlign);

		// Overlay
		const overlay = new UtilOverlay();
		this._overlay = overlay;

		// Gesture
		this._gesture = new DDialogGestureImpl(
			this,
			mode,
			overlay,
			options?.gesture ?? theme.isGestureEnabled(mode)
		);

		// State
		switch (mode) {
			case DDialogMode.MODAL:
				this.visible = false;
				this.state.addAll(DBaseState.FOCUS_ROOT, DDialogState.MODAL);
				break;
			case DDialogMode.MODELESS:
				this.state.add(DDialogState.MODELESS);
				break;
			case DDialogMode.MENU:
				this.visible = false;
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

	get mode(): DDialogMode {
		return this._mode;
	}

	get gesture(): DDialogGesture<this> {
		return this._gesture;
	}

	get layer(): DApplicationLayerLike | null {
		return this._layer;
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
			const parent = this.parent;
			if (parent) {
				parent.removeChild(this);
			}
		} else {
			const layer = DApplications.getLayer(this);
			if (layer) {
				const focusController = layer.getFocusController();
				this._focused = focusController.get();
				const firstFocusable = focusController.find(this, false, true, true);
				focusController.focus(firstFocusable || this);
			}
		}
	}

	open(owner?: DBase<any, any>): Promise<VALUE> {
		let result = this._promise;
		if (result == null) {
			result = new Promise<VALUE>((resolve, reject): void => {
				this._resolve = resolve;
				this._reject = reject;
			});
			this._promise = result;

			this._owner = owner;

			// Attach to a layer
			let layer: DApplicationLayerLike | null = null;
			switch (this._mode) {
				case DDialogMode.MODAL:
				case DDialogMode.MENU:
					layer = this._overlay.pick(this);
					layer.stage.addChild(this);
					break;
				case DDialogMode.MODELESS:
					break;
			}

			// Position & size
			const align = this._align;
			if (align != null && !this._gesture.isDirty()) {
				layer = layer ?? DApplications.getLayer(this);
				if (layer != null) {
					const renderer = layer.renderer;
					const onPrerenderBound = this._onPrerenderBound;
					if (this._sticky) {
						renderer.on("prerender", onPrerenderBound);
					} else {
						renderer.once("prerender", onPrerenderBound);
					}
				}
			}

			// Layer
			this._layer = layer;

			// Done
			this.onOpen();
		}
		return result;
	}

	protected onPrerender(): void {
		const align = this._align;
		if (align == null) {
			return;
		}

		const layer = this._layer;
		if (layer == null) {
			return;
		}

		const owner = this._owner;
		if (owner) {
			const mode = this._mode;
			const bounds = owner.getBounds(false, (DDialog.WORK_BOUNDS ??= new Rectangle()));
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

		// Forget the owner
		this._owner = null;

		// Animation
		const animation = this.getAnimation();
		if (animation) {
			animation.start(true);
		} else if (this._mode === DDialogMode.MENU) {
			this.visible = false;
			this.onAnimationEnd(true);
		}

		this.emit("close", this);
	}

	onKeyDown(e: KeyboardEvent): boolean {
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
