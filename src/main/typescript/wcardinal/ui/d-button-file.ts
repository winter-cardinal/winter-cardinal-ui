/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DButton, DButtonEvents, DButtonOptions, DThemeButton } from "./d-button";
import { DOnOptions } from "./d-on-options";
import { toEnum } from "./util/to-enum";
import { UtilFileAs, UtilFileEvents, UtilFileOpener } from "./util/util-file-opener";

export import DButtonFileAs = UtilFileAs;

/**
 * {@link DButtonFile} events.
 */
export interface DButtonFileEvents<VALUE, EMITTER>
	extends DButtonEvents<VALUE, EMITTER>,
		UtilFileEvents<EMITTER> {}

/**
 * {@link DButtonFile} "on" options.
 */
export interface DButtonFileOnOptions<VALUE, EMITTER>
	extends Partial<DButtonFileEvents<VALUE, EMITTER>>,
		DOnOptions {}

export type DButtonFileChecker = () => Promise<unknown> | boolean;

/**
 * {@link DButtonFile} options.
 */
export interface DButtonFileOptions<
	VALUE = unknown,
	THEME extends DThemeButtonFile<VALUE> = DThemeButtonFile<VALUE>,
	EMITTER = any
> extends DButtonOptions<VALUE, THEME, EMITTER> {
	/**
	 * An output format.
	 */
	as?: keyof typeof UtilFileAs | UtilFileAs;

	/**
	 * A checker called before opening a file.
	 * If the checker returns false or the returned promise object is rejected,
	 * files will not be opened.
	 */
	checker?: DButtonFileChecker;

	on?: DButtonFileOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DButtonFile} theme.
 */
export interface DThemeButtonFile<VALUE = unknown> extends DThemeButton<VALUE> {}

/**
 * A file selector.
 */
export class DButtonFile<
	VALUE = unknown,
	THEME extends DThemeButtonFile<VALUE> = DThemeButtonFile<VALUE>,
	OPTIONS extends DButtonFileOptions<VALUE, THEME> = DButtonFileOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected _checker?: DButtonFileChecker | null;
	protected _opener?: UtilFileOpener;

	protected getChecker(): DButtonFileChecker | null {
		let result = this._checker;
		if (result === undefined) {
			result = this._options?.checker ?? null;
			this._checker = result;
		}
		return result;
	}

	protected getOpener(): UtilFileOpener {
		let result = this._opener;
		if (result == null) {
			result = this.newOpener();
			this._opener = result;
		}
		return result;
	}

	protected newOpener(): UtilFileOpener {
		return new UtilFileOpener(
			toEnum(this._options?.as ?? DButtonFileAs.TEXT, DButtonFileAs),
			this
		);
	}

	protected onActivate(
		e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent
	): void {
		super.onActivate(e);
		this.check((): void => {
			this.open();
		});
	}

	protected check(onResolve: () => void): void {
		const checker = this.getChecker();
		if (checker != null) {
			const result = checker();
			if (result === true) {
				onResolve();
			} else if (result === false) {
				// DO NOTHING
			} else {
				result.then((): void => {
					onResolve();
				});
			}
		} else {
			onResolve();
		}
	}

	open(): void {
		this.getOpener().open();
	}

	protected getType(): string {
		return "DButtonFile";
	}
}
