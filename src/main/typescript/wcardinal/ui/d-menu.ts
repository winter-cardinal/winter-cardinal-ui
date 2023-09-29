/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Point, Rectangle } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DFocusable } from "./d-controller-focus";
import { DLayoutVertical, DLayoutVerticalOptions, DThemeLayoutVertical } from "./d-layout-vertical";
import { DMenuAlign } from "./d-menu-align";
import { DMenuContext } from "./d-menu-context";
import { DMenuItem } from "./d-menu-item";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";
import { DMenus } from "./d-menus";
import { toEnum } from "./util/to-enum";
import { UtilAttach } from "./util/util-attach";
import { UtilClickOutside } from "./util/util-click-outside";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilOverlay } from "./util/util-overlay";
import { DMenuOpener } from "./d-menu-opener";
import { DMenuCloseable } from "./d-menu-closeable";

export interface DMenuOptions<VALUE = unknown, THEME extends DThemeMenu = DThemeMenu>
	extends DLayoutVerticalOptions<THEME> {
	align?: keyof typeof DMenuAlign | DMenuAlign;
	fit?: boolean;
	sticky?: boolean;
	items?: Array<DMenuItemOptionsUnion<VALUE> | DisplayObject | null | undefined>;
}

export interface DThemeMenu extends DThemeLayoutVertical {
	getOffsetX(): number;
	getOffsetY(): number;
}

export class DMenu<
	VALUE,
	THEME extends DThemeMenu = DThemeMenu,
	OPTIONS extends DMenuOptions<VALUE, THEME> = DMenuOptions<VALUE, THEME>
> extends DLayoutVertical<THEME, OPTIONS> {
	protected static WORK_BOUNDS?: Rectangle;

	protected _align!: DMenuAlign;
	protected _fit!: boolean;
	protected _sticky!: boolean;
	protected _sub!: boolean;
	protected _owner!: DMenuOpener | null;
	protected _context!: DMenuContext | null;
	protected _overlay!: UtilOverlay;
	protected _onPrerenderBound!: () => void;
	protected _focused?: DFocusable | null;

	protected init(options?: OPTIONS): void {
		super.init(options);

		this._onPrerenderBound = (): void => {
			this.onPrerender();
		};

		this._align = toEnum(options?.align ?? DMenuAlign.BOTTOM, DMenuAlign);
		this._fit = options?.fit ?? false;
		this._sticky = options?.sticky ?? false;
		this._sub = false;
		this._owner = null;
		this._context = null;
		this.visible = false;

		// Event handlers
		UtilClickOutside.apply(this, (): void => {
			this.close();
		});

		this.on("select", (): void => {
			this.close();
		});

		// Items
		const items = options?.items;
		if (items) {
			DMenus.newItems(this, items, this._sticky);
		}

		// Overlay
		this._overlay = new UtilOverlay(options);
	}

	findItem(value: VALUE): DMenuItem<VALUE> | null {
		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			const child = children[i];
			if (child instanceof DMenuItem && child.value === value) {
				return child;
			}
		}
		return null;
	}

	protected getType(): string {
		return "DMenu";
	}

	getContext(): DMenuContext | null {
		return this._context;
	}

	getCloseable(): DMenuCloseable | null {
		return this;
	}

	open(
		owner: DMenuOpener,
		closeable?: DMenuCloseable | null,
		context?: DMenuContext | null
	): this {
		if (this.isHidden()) {
			const layer = this._overlay.pick(this);
			this._owner = owner;

			// States
			const children = this.children;
			for (let i = 0, imax = children.length; i < imax; ++i) {
				const child = children[i];
				if (child instanceof DBase) {
					child.state.removeAll(DBaseState.FOCUSED, DBaseState.HOVERED);
				}
			}

			// Position & size
			const renderer = layer.renderer;
			const onPrerenderBound = this._onPrerenderBound;
			if (this._sticky) {
				renderer.on("prerender", onPrerenderBound);
			} else {
				renderer.once("prerender", onPrerenderBound);
			}
			if (this._fit) {
				const bounds = owner.getBounds(false, (DMenu.WORK_BOUNDS ??= new Rectangle()));
				if (bounds != null) {
					this.width = bounds.width;
				}
			}

			// Target
			this._sub = context != null;
			context = context || new DMenuContext(owner);
			if (closeable != null) {
				context.trim(closeable);
			}
			context.add(this);
			this._context = context;

			// Stage
			layer.stage.addChild(this);

			// Focus
			this._focused = layer.getFocusController().get();
			this.focus();

			// Show
			super.show();

			// Event
			this.emit("open", this);
		}
		return this;
	}

	protected onPrerender(): void {
		const owner = this._owner;
		if (owner) {
			const bounds = owner.getBounds(false, (DMenu.WORK_BOUNDS ??= new Rectangle()));
			if (bounds) {
				if (this._fit) {
					this.width = bounds.width;
				}
				const layer = this._overlay.picked;
				if (layer) {
					const theme = this.theme;
					UtilAttach.attach(
						this,
						bounds,
						theme.getOffsetX(),
						theme.getOffsetY(),
						layer.width,
						layer.height,
						this._align
					);
				}
			}
		}
	}

	close(): this {
		if (this.isShown()) {
			// Remove from the context
			const context = this._context;
			if (context) {
				context.remove(this);
			}

			// Remove the prerender event handler
			const layer = this._overlay.picked;
			if (layer) {
				layer.renderer.off("prerender", this._onPrerenderBound);
			}

			// Forget the owner
			this._owner = null;

			// Restore the focus
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

			// Visibility
			super.hide();

			// Remove from the tree
			const parent = this.parent;
			if (parent) {
				parent.removeChild(this);
			}

			// Emit the event
			this.emit("close", this);
		}
		return this;
	}

	protected onKeyDown(e: KeyboardEvent): boolean {
		UtilKeyboardEvent.moveFocusVertically(e, this, this._overlay);
		if (
			this.state.isActionable &&
			(UtilKeyboardEvent.isArrowLeftKey(e) || UtilKeyboardEvent.isCancelKey(e))
		) {
			this.close();
		}
		return super.onKeyDown(e);
	}

	protected containsGlobalPoint(point: Point): boolean {
		return !this._sub;
	}
}

DMenus.setMenuCreator((options?: DMenuOptions<any>) => new DMenu<any>(options));
