/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container, utils } from "pixi.js";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DMenu } from "./d-menu";
import { DMenuItemBase } from "./d-menu-item-base";
import { DOnOptions } from "./d-on-options";
import { toEnum } from "./util/to-enum";

export const DMenuSidedSelectionType = {
	NONE: 0,
	SINGLE: 1,
	SINGLE_ONCE: 2
} as const;

export type DMenuSidedSelectionType =
	typeof DMenuSidedSelectionType[keyof typeof DMenuSidedSelectionType];

/**
 * {@link DMenuSidedSelection} events.
 */
export interface DMenuSidedSelectionEvents<EMITTER> {
	/**
	 * Triggered when a selection is changed.
	 *
	 * @param emitter an emitter
	 */
	change(emitter: EMITTER): void;
}

/**
 * {@link DMenuSidedSelection} "on" options.
 */
export interface DMenuSidedSelectionOnOptions<EMITTER>
	extends Partial<DMenuSidedSelectionEvents<EMITTER>>,
		DOnOptions {}

/**
 * {@link DMenuSidedSelection} options.
 */
export interface DMenuSidedSelectionOptions<EMITTER = any> {
	/**
	 * @deprecated in favor of {@link type}
	 */
	mode?: DMenuSidedSelectionType | keyof typeof DMenuSidedSelectionType;

	/**
	 * A selection type.
	 */
	type?: DMenuSidedSelectionType | keyof typeof DMenuSidedSelectionType;

	on?: DMenuSidedSelectionOnOptions<EMITTER>;

	filter?: (item: DBase | null) => boolean;
}

const defaultFilter = () => true;

export class DMenuSidedSelection<VALUE> extends utils.EventEmitter {
	protected _content: Container;
	protected _item: DMenuItemBase<VALUE> | null;
	protected _isDirty: boolean;
	protected _type: DMenuSidedSelectionType;
	protected _filter: (item: DMenuItemBase<VALUE> | null) => boolean;

	constructor(content: Container, options?: DMenuSidedSelectionOptions) {
		super();

		this._content = content;
		this._item = null;
		this._isDirty = true;
		this._type = toEnum(
			options?.mode ?? options?.type ?? DMenuSidedSelectionType.SINGLE_ONCE,
			DMenuSidedSelectionType
		);
		this._filter = options?.filter ?? this.getFilterDefault();

		// Events
		const on = options?.on;
		if (on) {
			for (const name in on) {
				const handler = on[name];
				if (handler) {
					this.on(name, handler);
				}
			}
		}
	}

	first(): DMenuItemBase<VALUE> | null {
		return this._item;
	}

	toDirty(): void {
		this._isDirty = true;
	}

	update(): void {
		if (this._isDirty) {
			this._isDirty = false;
			this.update_(this._content);
		}
	}

	protected hasMenu(child: any): child is { menu: DMenu<any> } {
		return child && child.menu instanceof DMenu;
	}

	protected update_(root: Container): void {
		const children = root.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			const child = children[i];
			if (child instanceof DMenuItemBase) {
				if (child.state.isActive) {
					this.set_(child, false);
				}
			}

			if (child instanceof Container) {
				this.update_(child);
			}

			if (this.hasMenu(child)) {
				this.update_(child.menu);
			}
		}
	}

	add(item: DMenuItemBase<VALUE>): void {
		this.update();
		this.set_(item, true);
	}

	set(item: DMenuItemBase<VALUE>): void {
		this.update();
		this.set_(item, true);
	}

	get(index: number): DMenuItemBase<VALUE> | null {
		this.update();
		return this._item;
	}

	getIndex(index: number): number | null {
		return null;
	}

	size(): number {
		return this._item ? 1 : 0;
	}

	isEmpty(): boolean {
		return this._item == null;
	}

	remove(item: DBase): void {
		this.update();
		if (this._item === item) {
			this.set_(null, true);
		}
	}

	clear(): void {
		this.update();
		this.set_(null, true);
	}

	protected getFilterDefault(): (item: DMenuItemBase<VALUE> | null) => boolean {
		return defaultFilter;
	}

	protected set_(item: DMenuItemBase<VALUE> | null, emit: boolean): void {
		const oldItem = this._item;
		const mode = this._type;
		if (mode !== DMenuSidedSelectionType.NONE && this._filter(item) && oldItem !== item) {
			this.setState(oldItem, mode, false);
			this._item = item;
			this.setState(item, mode, true);
			if (emit) {
				this.emit("change", this);
			}
		}
	}

	protected setState(item: DBase | null, mode: DMenuSidedSelectionType, isOn: boolean): void {
		if (item) {
			if (mode === DMenuSidedSelectionType.SINGLE) {
				item.state.isActive = isOn;
			} else {
				if (isOn) {
					item.state.addAll(DBaseState.ACTIVE, DBaseState.READ_ONLY);
				} else {
					item.state.removeAll(DBaseState.ACTIVE, DBaseState.READ_ONLY);
				}
			}
		}
	}
}
