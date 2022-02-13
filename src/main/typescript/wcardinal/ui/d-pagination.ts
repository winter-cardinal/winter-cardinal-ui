/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton } from "./d-button";
import {
	DLayoutHorizontal,
	DLayoutHorizontalOptions,
	DThemeLayoutHorizontal
} from "./d-layout-horizontal";
import { DPaginationDots } from "./d-pagination-dots";
import { DPaginationButtonLast, DPaginationButtonLastOptions } from "./d-pagination-button-last";
import { DPaginationButtonNext, DPaginationButtonNextOptions } from "./d-pagination-button-next";
import { DPaginationButtonPage, DPaginationButtonPageOptions } from "./d-pagination-button-page";
import {
	DPaginationButtonPrevious,
	DPaginationButtonPreviousOptions
} from "./d-pagination-button-previous";
import { DPaginationButtonTop, DPaginationButtonTopOptions } from "./d-pagination-button-top";
import { isNumber } from "./util/is-number";
import { DPaginationPage, DPaginationPageOptions } from "./d-pagination-page";
import { DLayoutSpace } from "./d-layout-space";

export interface DPaginationButtonOptions {
	/**
	 * {@link DPagination} top button options.
	 */
	top?: DPaginationButtonTopOptions | boolean | null;

	/**
	 * {@link DPagination} previous button options.
	 */
	previous?: DPaginationButtonPreviousOptions | boolean | null;

	/**
	 * {@link DPagination} page button options.
	 */
	page?: DPaginationButtonPageOptions;

	/**
	 * {@link DPagination} next button options.
	 */
	next?: DPaginationButtonNextOptions | boolean | null;

	/**
	 * {@link DPagination} last button options.
	 */
	last?: DPaginationButtonLastOptions | boolean | null;

	/**
	 * A space between page buttons and next / previous buttons.
	 */
	space?: number;
}

export interface DPaginationOptions<THEME extends DThemePagination>
	extends DLayoutHorizontalOptions<THEME> {
	/**
	 * An index number of a selected page.
	 */
	value?: number;

	/**
	 * An index number of a selected page.
	 *
	 * @deprecated in favor of {@link value}.
	 */
	selected?: number;

	/**
	 * A total number of pages.
	 */
	size?: number;

	/**
	 * A total number of pages.
	 *
	 * @deprecated in favor of {@link size};
	 */
	total?: number;

	/**
	 * {@link DPagination} button options.
	 */
	button?: DPaginationButtonOptions;

	/**
	 * {@link DPagination} page options.
	 */
	page?: DPaginationPageOptions;
}

export interface DThemePagination extends DThemeLayoutHorizontal {
	getButtonSpace(): number;
}

export class DPagination<
	THEME extends DThemePagination = DThemePagination,
	OPTIONS extends DPaginationOptions<THEME> = DPaginationOptions<THEME>
> extends DLayoutHorizontal<THEME, OPTIONS> {
	protected _size: number;
	protected _value: number;

	protected _buttonTop?: DButton<string> | null;
	protected _buttonPrevious?: DButton<string> | null;
	protected _dots0?: DPaginationDots;
	protected _buttonPages0?: DButton<number>[];
	protected _page?: DPaginationPage;
	protected _buttonPages1?: DButton<number>[];
	protected _dots1?: DPaginationDots;
	protected _buttonNext?: DButton<string> | null;
	protected _buttonLast?: DButton<string> | null;

	constructor(options?: OPTIONS) {
		super(options);

		if (options != null) {
			this._size = options.size ?? options.total ?? 10;
			this._value = options.value ?? options.selected ?? 0;
		} else {
			this._size = 10;
			this._value = 0;
		}

		const buttonTop = this.buttonTop;
		const buttonPrevious = this.buttonPrevious;
		if (buttonTop != null) {
			this.addChild(buttonTop);
		}
		if (buttonPrevious != null) {
			this.addChild(buttonPrevious);
		}
		if (buttonTop != null || buttonPrevious != null) {
			this.addChild(this.newSpace());
		}
		const buttonPages0 = this.buttonPages0;
		const buttonPages0Length = buttonPages0.length;
		this.addChild(buttonPages0[buttonPages0Length - 1]);
		this.addChild(this.dots0);
		for (let i = buttonPages0Length - 2; 0 <= i; --i) {
			this.addChild(buttonPages0[i]);
		}
		this.addChild(this.page);
		const buttonPages1 = this.buttonPages1;
		const buttonPages1Length = buttonPages1.length;
		for (let i = 0, imax = buttonPages1Length - 1; i < imax; ++i) {
			this.addChild(buttonPages1[i]);
		}
		this.addChild(this.dots1);
		this.addChild(buttonPages1[buttonPages1Length - 1]);
		const buttonNext = this.buttonNext;
		const buttonLast = this.buttonLast;
		if (buttonNext != null || buttonLast != null) {
			this.addChild(this.newSpace());
		}
		if (buttonNext != null) {
			this.addChild(buttonNext);
		}
		if (buttonLast != null) {
			this.addChild(buttonLast);
		}

		this.update();
	}

	protected newSpace(): DLayoutSpace {
		return new DLayoutSpace({
			width: this._options?.button?.space ?? this.theme.getButtonSpace()
		});
	}

	/**
	 * Sets a value that is an index of a current page.
	 *
	 * @param value a value that is an index of a page
	 */
	set value(value: number) {
		if (0 <= value && value < this._size && this._value !== value) {
			this._value = value;
			this.update();
		}
	}

	/**
	 * Returns a value that is an index of a current page.
	 *
	 * @returns a value that is an index of a selected page.
	 */
	get value(): number {
		return this._value;
	}

	/**
	 * Selects a page.
	 *
	 * @param index an index of a page
	 * @deprecated in favor of {@link #value}.
	 */
	set selected(index: number) {
		this.value = index;
	}

	/**
	 * Returns an index of the selected page.
	 *
	 * @returns an index of the selected page.
	 * @deprecated in favor of {@link value}.
	 */
	get selected(): number {
		return this.value;
	}

	/**
	 * Sets a number of total pages.
	 *
	 * @param size a number of pages
	 */
	set size(size: number) {
		if (0 <= size && this._size !== size) {
			this._size = size;
			if (size === 0) {
				this._value = -1;
			} else {
				this._value = Math.max(0, Math.min(this._size - 1, this._value));
			}
			this.update();
		}
	}

	/**
	 * Returns a number of total pages.
	 *
	 * @returns a number of total pages.
	 */
	get size(): number {
		return this._size;
	}

	/**
	 * Sets a number of total pages.
	 *
	 * @param total a number of pages
	 * @deprecated in favor of {@link size}
	 */
	set total(total: number) {
		this.size = total;
	}

	/**
	 * Returns a number of total pages.
	 *
	 * @returns a number of total pages.
	 * @deprecated in favor of {@link size}
	 */
	get total(): number {
		return this.size;
	}

	protected get dots0(): DPaginationDots {
		let result = this._dots0;
		if (result == null) {
			result = this.newDots();
			this._dots0 = result;
		}
		return result;
	}

	protected get dots1(): DPaginationDots {
		let result = this._dots1;
		if (result == null) {
			result = this.newDots();
			this._dots1 = result;
		}
		return result;
	}

	protected newDots(): DPaginationDots {
		return new DPaginationDots();
	}

	protected get buttonLast(): DButton<string> | null {
		let result = this._buttonLast;
		if (result === undefined) {
			result = this.newButtonLast();
			this._buttonLast = result;
		}
		return result;
	}

	protected newButtonLast(): DButton<string> | null {
		const last = this._options?.button?.last;
		if (last !== null && last !== false && last !== undefined) {
			const result = new DPaginationButtonLast(last !== true ? last : undefined);
			result.on("active", () => {
				this.onButtonLastActive();
			});
			return result;
		}
		return null;
	}

	protected onButtonLastActive(): void {
		this.moveTo(this._size - 1);
	}

	protected moveTo(index: number): void {
		if (0 <= index && index < this._size && this._value !== index) {
			const oldIndex = this._value;
			this._value = index;
			this.emit("change", index, oldIndex, this);
			this.update();
		}
	}

	protected get buttonNext(): DButton<string> | null {
		let result = this._buttonNext;
		if (result === undefined) {
			result = this.newButtonNext();
			this._buttonNext = result;
		}
		return result;
	}

	protected newButtonNext(): DButton<string> | null {
		const next = this._options?.button?.next;
		if (next !== null && next !== false) {
			const result = new DPaginationButtonNext(next !== true ? next : undefined);
			result.on("active", (): void => {
				this.onButtonNextActive();
			});
			return result;
		}
		return null;
	}

	protected onButtonNextActive(): void {
		this.moveTo(this._value + 1);
	}

	protected get buttonPrevious(): DButton<string> | null {
		let result = this._buttonPrevious;
		if (result === undefined) {
			result = this.newButtonPrevious();
			this._buttonPrevious = result;
		}
		return result;
	}

	protected newButtonPrevious(): DButton<string> | null {
		const previous = this._options?.button?.previous;
		if (previous !== null && previous !== false) {
			const result = new DPaginationButtonPrevious(previous !== true ? previous : undefined);
			result.on("active", (): void => {
				this.onButtonPreviousActive();
			});
			return result;
		}
		return null;
	}

	protected onButtonPreviousActive(): void {
		this.moveTo(this._value - 1);
	}

	protected get buttonTop(): DButton<string> | null {
		let result = this._buttonTop;
		if (result === undefined) {
			result = this.newButtonTop();
			this._buttonTop = result;
		}
		return result;
	}

	protected newButtonTop(): DButton<string> | null {
		const top = this._options?.button?.top;
		if (top !== null && top !== false && top !== undefined) {
			const result = new DPaginationButtonTop(top !== true ? top : undefined);
			result.on("active", (): void => {
				this.onButtonTopActive();
			});
			return result;
		}
		return null;
	}

	protected onButtonTopActive(): void {
		this.moveTo(0);
	}

	protected newButtonPage(): DButton<number> {
		const result = new DPaginationButtonPage(this._options?.button?.page);
		result.on("active", (): void => {
			this.onButtonPageActive(result);
		});
		return result;
	}

	protected get buttonPages0(): DButton<number>[] {
		let result = this._buttonPages0;
		if (result == null) {
			result = this.newButtonPages0();
			this._buttonPages0 = result;
		}
		return result;
	}

	protected newButtonPages0(): DButton<number>[] {
		return [
			this.newButtonPage(),
			this.newButtonPage(),
			this.newButtonPage(),
			this.newButtonPage()
		];
	}

	protected get buttonPages1(): DButton<number>[] {
		let result = this._buttonPages1;
		if (result == null) {
			result = this.newButtonPages1();
			this._buttonPages1 = result;
		}
		return result;
	}

	protected newButtonPages1(): DButton<number>[] {
		return [
			this.newButtonPage(),
			this.newButtonPage(),
			this.newButtonPage(),
			this.newButtonPage()
		];
	}

	protected get page(): DPaginationPage {
		let result = this._page;
		if (result == null) {
			result = this.newPage();
			this._page = result;
		}
		return result;
	}

	protected newPage(): DPaginationPage {
		return new DPaginationPage(this._options?.page);
	}

	protected onButtonPageActive(button: DButton<number>): void {
		const text = button.text;
		if (isNumber(text)) {
			this.moveTo(text - 1);
			if (button.state.isFocused) {
				button.state.isHovered = false;
				this.page.focus();
			}
		}
	}

	protected update(): void {
		const size = this._size;
		const value = this._value;
		if (size <= 0) {
			const buttonTop = this.buttonTop;
			if (buttonTop != null) {
				buttonTop.state.isEnabled = false;
			}
			const buttonPrevious = this.buttonPrevious;
			if (buttonPrevious != null) {
				buttonPrevious.state.isEnabled = false;
			}

			this.dots0.hide();

			const buttonPages0 = this.buttonPages0;
			for (let i = 0, imax = buttonPages0.length; i < imax; ++i) {
				buttonPages0[i].hide();
			}

			this.page.hide();

			const buttonPages1 = this.buttonPages1;
			for (let i = 0, imax = buttonPages1.length; i < imax; ++i) {
				buttonPages1[i].hide();
			}

			this.dots1.hide();

			const buttonNext = this.buttonNext;
			if (buttonNext != null) {
				buttonNext.state.isEnabled = false;
			}
			const buttonLast = this.buttonLast;
			if (buttonLast) {
				buttonLast.state.isEnabled = false;
			}
		} else {
			let from = value - 2;
			let to = value + 2;
			if (from < 0) {
				to = to - from;
				from = 0;
			} else if (size <= to) {
				const delta = to - size + 1;
				to -= delta;
				from -= delta;
			}
			let top = false;
			if (0 < from) {
				top = true;
				from = Math.min(from + 1, value);
			}
			let last = false;
			if (to < size - 1) {
				last = true;
				to = Math.max(to - 1, value);
			}

			const buttonTop = this.buttonTop;
			if (buttonTop != null) {
				buttonTop.state.isEnabled = 0 < value;
			}
			const buttonPrevious = this.buttonPrevious;
			if (buttonPrevious != null) {
				buttonPrevious.state.isEnabled = 0 < value;
			}

			if (top) {
				this.dots0.show();
			} else {
				this.dots0.hide();
			}

			const buttonPages0 = this.buttonPages0;
			for (let i = 0, imax = buttonPages0.length; i < imax; ++i) {
				const index = value - i - 1;
				const buttonPage = buttonPages0[i];
				if (from <= index && index <= to) {
					buttonPage.text = index + 1;
					buttonPage.show();
				} else {
					if (top && i === imax - 1) {
						buttonPage.text = 1;
						buttonPage.show();
					} else {
						buttonPage.hide();
					}
				}
			}

			this.page.text = value + 1;

			const buttonPages1 = this.buttonPages1;
			for (let i = 0, imax = buttonPages1.length; i < imax; ++i) {
				const index = value + i + 1;
				const buttonPage = buttonPages1[i];
				if (from <= index && index <= to) {
					buttonPage.text = index + 1;
					buttonPage.show();
				} else {
					if (last && i === imax - 1) {
						buttonPage.text = size;
						buttonPage.show();
					} else {
						buttonPage.hide();
					}
				}
			}

			if (last) {
				this.dots1.show();
			} else {
				this.dots1.hide();
			}

			const buttonNext = this.buttonNext;
			if (buttonNext != null) {
				buttonNext.state.isEnabled = value < size - 1;
			}
			const buttonLast = this.buttonLast;
			if (buttonLast != null) {
				buttonLast.state.isEnabled = value < size - 1;
			}
		}
	}

	protected getType(): string {
		return "DPagination";
	}
}
