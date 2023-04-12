/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DApplications } from "./d-applications";
import { DButtonBaseWhen } from "./d-button-base-when";
import { DButtonGroup } from "./d-button-group";
import { DImageBase, DImageBaseEvents, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
import { DOnOptions } from "./d-on-options";
import { toEnum } from "./util/to-enum";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";
import { DBaseStateSet } from "./d-base-state-set";

/**
 * {@link DButtonBase} events.
 */
export interface DButtonBaseEvents<VALUE, EMITTER> extends DImageBaseEvents<VALUE, EMITTER> {
	/**
	 * Triggered when the button is activated.
	 *
	 * @param emitter an emitter
	 */
	active(emitter: EMITTER): void;

	/**
	 * Triggered when the button is inactivated.
	 *
	 * @param emitter an emitter
	 */
	inactive(emitter: EMITTER): void;

	/**
	 * Triggered when the button is pressed.
	 *
	 * @param emitter an emitter
	 */
	press(emitter: EMITTER): void;

	/**
	 * Triggered when the button is released.
	 *
	 * @param emitter an emitter
	 */
	unpress(emitter: EMITTER): void;
}

/**
 * {@link DButtonBase} "on" options.
 */
export interface DButtonBaseOnOptions<VALUE, EMITTER>
	extends Partial<DButtonBaseEvents<VALUE, EMITTER>>,
		DOnOptions {}

/**
 * {@link DButtonBase} options.
 */
export interface DButtonBaseOptions<
	VALUE = unknown,
	THEME extends DThemeButtonBase<VALUE> = DThemeButtonBase<VALUE>,
	EMITTER = any
> extends DImageBaseOptions<VALUE, THEME, EMITTER> {
	/**
	 * True to turn a toggle mode on.
	 */
	toggle?: boolean;

	/**
	 * A button group.
	 */
	group?: DButtonGroup;

	/**
	 * An option when to activate a button.
	 */
	when?: DButtonBaseWhen | keyof typeof DButtonBaseWhen;

	/**
	 * Mappings of event names and handlers.
	 */
	on?: DButtonBaseOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DButtonBase} theme.
 */
export interface DThemeButtonBase<VALUE = unknown> extends DThemeImageBase<VALUE> {
	/**
	 * Returns true to turn a toggle mode on.
	 */
	isToggle(): boolean;

	/**
	 * Returns when to activate a button.
	 */
	getWhen(): DButtonBaseWhen;
}

/**
 * A base class for button classes.
 * See {@link DButtonBaseEvents} for event details.
 */
export class DButtonBase<
	VALUE = unknown,
	THEME extends DThemeButtonBase<VALUE> = DThemeButtonBase<VALUE>,
	OPTIONS extends DButtonBaseOptions<VALUE, THEME> = DButtonBaseOptions<VALUE, THEME>
> extends DImageBase<VALUE, THEME, OPTIONS> {
	protected _isToggle?: boolean;
	protected _isGrouped?: boolean;
	protected _when?: DButtonBaseWhen;

	protected init(options?: OPTIONS): void {
		super.init(options);

		const theme = this.theme;
		this._isToggle = options?.toggle ?? theme.isToggle();
		this._when = toEnum(options?.when ?? theme.getWhen(), DButtonBaseWhen);

		// Event handlers
		this.on(UtilPointerEvent.tap, (e: interaction.InteractionEvent): void => {
			this.onClick(e);
		});
		this.initOnPress();

		// Group
		const group = options?.group;
		if (group) {
			group.add(this);
		}
	}

	protected onShortcut(e: KeyboardEvent): void {
		if (this.state.isActionable) {
			this.activate(e);
		}
		super.onShortcut(e);
	}

	get isToggle(): boolean {
		return !!this._isToggle;
	}

	get isGrouped(): boolean {
		return !!this._isGrouped;
	}

	set isGrouped(isGrouped: boolean) {
		this._isGrouped = isGrouped;
	}

	protected initOnPress(): void {
		let interactionManager: interaction.InteractionManager | null = null;

		const onUp = (): void => {
			this.state.isPressed = false;
			if (interactionManager != null) {
				interactionManager.off(UtilPointerEvent.up, onUp);
				interactionManager.off(UtilPointerEvent.upoutside, onUp);
				interactionManager.off(UtilPointerEvent.cancel, onUp);
				interactionManager = null;
			}
		};

		this.on(UtilPointerEvent.down, (): void => {
			if (this.state.isActionable) {
				this.state.isPressed = true;
				const layer = DApplications.getLayer(this);
				if (layer) {
					interactionManager = layer.renderer.plugins.interaction;
					interactionManager.on(UtilPointerEvent.up, onUp);
					interactionManager.on(UtilPointerEvent.upoutside, onUp);
					interactionManager.on(UtilPointerEvent.cancel, onUp);
				}
			}
		});
	}

	protected getType(): string {
		return "DButton";
	}

	protected onClick(e: interaction.InteractionEvent): void {
		if (this._when === DButtonBaseWhen.CLICKED && this.state.isActionable) {
			this.activate(e);
		}
	}

	protected onDblClick(
		e: MouseEvent | TouchEvent,
		interactionManager: interaction.InteractionManager
	): boolean {
		if (this._when === DButtonBaseWhen.DOUBLE_CLICKED && this.state.isActionable) {
			this.activate(e);
		}
		return super.onDblClick(e, interactionManager);
	}

	activate(e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void {
		if (this._isToggle) {
			if (this._isGrouped) {
				if (!this.state.isActive) {
					this.onToggleStart(e);
					this.onToggleEnd(e);
				}
			} else {
				this.onToggleStart(e);
				this.onToggleEnd(e);
			}
		} else {
			this.onActivate(e);
		}
	}

	protected onActivate(
		e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent
	): void {
		this.emit("active", this);
	}

	protected onInactivate(
		e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent
	): void {
		this.emit("inactive", this);
	}

	toggle(): void {
		if (this.state.isActionable) {
			if (this._isToggle) {
				this.onToggleStart();
				this.onToggleEnd();
			}
		}
	}

	protected onToggleStart(
		e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent
	): void {
		this.state.isActive = !this.state.isActive;
	}

	protected onToggleEnd(
		e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent
	): void {
		if (this.state.isActive) {
			this.onActivate(e);
		} else {
			this.onInactivate(e);
		}
	}

	protected onActivateKeyDown(e: KeyboardEvent): void {
		if (this.state.isActionable) {
			if (this._isToggle) {
				this.onToggleStart(e);
			} else {
				this.state.isPressed = true;
			}
		}
	}

	protected onActivateKeyUp(e: KeyboardEvent): void {
		if (this.state.isActionable) {
			if (this._isToggle) {
				this.onToggleEnd(e);
			} else {
				if (this.state.isPressed) {
					this.onActivate(e);
				}
				this.state.isPressed = false;
			}
		}
	}

	protected onKeyDown(e: KeyboardEvent): boolean {
		if (UtilKeyboardEvent.isActivateKey(e)) {
			this.onActivateKeyDown(e);
		}

		return super.onKeyDown(e);
	}

	protected onKeyUp(e: KeyboardEvent): boolean {
		if (UtilKeyboardEvent.isActivateKey(e)) {
			this.onActivateKeyUp(e);
		}

		return super.onKeyUp(e);
	}

	protected onStateChange(newState: DBaseStateSet, oldState: DBaseStateSet): void {
		super.onStateChange(newState, oldState);

		if (newState.isPressed) {
			if (!oldState.isPressed) {
				this.onPress();
			}
		} else if (oldState.isPressed) {
			this.onUnpress();
		}
	}

	protected onPress(): void {
		this.emit("press", this);
	}

	protected onUnpress(): void {
		this.emit("unpress", this);
	}

	destroy(): void {
		this._options?.group?.remove(this);
		super.destroy();
	}
}
