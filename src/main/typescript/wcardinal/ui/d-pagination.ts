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
import { DLayoutSpace, DLayoutSpaceOptions } from "./d-layout-space";
import { DImageBase } from "./d-image-base";
import { DApplications } from "./d-applications";

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
	space?: DLayoutSpaceOptions | boolean | number | null;
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
	protected _spaceLeft?: DLayoutSpace | null;
	protected _dots0?: DPaginationDots;
	protected _buttonPages0?: DButton<number>[];
	protected _page?: DPaginationPage;
	protected _buttonPages1?: DButton<number>[];
	protected _dots1?: DPaginationDots;
	protected _spaceRight?: DLayoutSpace | null;
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
		if (buttonTop != null) {
			this.addChild(buttonTop);
		}
		const buttonPrevious = this.buttonPrevious;
		if (buttonPrevious != null) {
			this.addChild(buttonPrevious);
		}
		const spaceLeft = this.spaceLeft;
		if (spaceLeft != null) {
			this.addChild(spaceLeft);
		}
		const buttonPages0 = this.buttonPages0;
		const buttonPages0Length = buttonPages0.length;
		this.addChild(buttonPages0[0]);
		this.addChild(this.dots0);
		for (let i = 1; i < buttonPages0Length; ++i) {
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
		const spaceRight = this.spaceRight;
		if (spaceRight != null) {
			this.addChild(spaceRight);
		}
		const buttonNext = this.buttonNext;
		if (buttonNext != null) {
			this.addChild(buttonNext);
		}
		const buttonLast = this.buttonLast;
		if (buttonLast != null) {
			this.addChild(buttonLast);
		}
	}

	/**
	 * Sets a value that is an index of a current page.
	 *
	 * @param value a value that is an index of a page
	 */
	set value(value: number) {
		if (0 <= value && value < this._size && this._value !== value) {
			this._value = value;
			this.toDirty();
			DApplications.update(this);
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
			this.toDirty();
			DApplications.update(this);
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
			this.toDirty();
			DApplications.update(this);
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

	protected allocButtonPages0(size: number): void {
		const buttonPages0 = this.buttonPages0;
		const buttonPages0Length = buttonPages0.length;
		const index = this.getChildIndex(buttonPages0[buttonPages0Length - 1]) + 1;
		for (let i = 0, imax = size - buttonPages0Length; i < imax; ++i) {
			const buttonPage = this.newButtonPage();
			this.addChildAt(buttonPage, index + i);
			buttonPages0.push(buttonPage);
		}
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

	protected allocButtonPages1(size: number): void {
		const buttonPages1 = this.buttonPages1;
		const buttonPages1Length = buttonPages1.length;
		const index = this.getChildIndex(buttonPages1[0]);
		for (let i = 0, imax = size - buttonPages1Length; i < imax; ++i) {
			const buttonPage = this.newButtonPage();
			this.addChildAt(buttonPage, index);
			buttonPages1.unshift(buttonPage);
		}
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

	protected get spaceLeft(): DLayoutSpace | null {
		let result = this._spaceLeft;
		if (result === undefined) {
			result = this.newSpaceLeft();
			this._spaceLeft = result;
		}
		return result;
	}

	protected newSpaceLeft(): DLayoutSpace | null {
		if (this.buttonTop != null || this.buttonPrevious != null) {
			return this.newSpace();
		}
		return null;
	}

	protected get spaceRight(): DLayoutSpace | null {
		let result = this._spaceRight;
		if (result === undefined) {
			result = this.newSpaceRight();
			this._spaceRight = result;
		}
		return result;
	}

	protected newSpaceRight(): DLayoutSpace | null {
		if (this.buttonLast != null || this.buttonNext != null) {
			return this.newSpace();
		}
		return null;
	}

	protected newSpace(): DLayoutSpace | null {
		const space = this._options?.button?.space;
		if (space !== null && space !== false) {
			if (space === true || space === undefined) {
				return new DLayoutSpace({
					weight: 1
				});
			} else if (isNumber(space)) {
				return new DLayoutSpace({
					width: space
				});
			} else {
				return new DLayoutSpace(space);
			}
		}
		return null;
	}

	protected onReflow(): void {
		this.update();
		super.onReflow();
	}

	protected update(): void {
		const size = this._size;
		const value = this._value;
		if (size <= 0) {
			this.doUpdate0(value, size);
		} else {
			if (this._auto.width.isOn) {
				this.doUpdate2(value, size, 0, 0, 0, 0);
			} else {
				this.doUpdate1(value, size);
			}
		}
	}

	protected doUpdate0(value: number, size: number): void {
		const buttonTop = this.buttonTop;
		if (buttonTop != null) {
			buttonTop.state.isEnabled = false;
		}
		const buttonPrevious = this.buttonPrevious;
		if (buttonPrevious != null) {
			buttonPrevious.state.isEnabled = false;
		}

		this.hideDots(this.dots0);

		const buttonPages0 = this.buttonPages0;
		for (let i = 0, imax = buttonPages0.length; i < imax; ++i) {
			this.hidePage(buttonPages0[i]);
		}

		this.hidePage(this.page);

		const buttonPages1 = this.buttonPages1;
		for (let i = 0, imax = buttonPages1.length; i < imax; ++i) {
			this.hidePage(buttonPages1[i]);
		}

		this.hideDots(this.dots1);

		const buttonNext = this.buttonNext;
		if (buttonNext != null) {
			buttonNext.state.isEnabled = false;
		}
		const buttonLast = this.buttonLast;
		if (buttonLast) {
			buttonLast.state.isEnabled = false;
		}
	}

	protected doUpdate1(value: number, size: number): void {
		let required = 0;
		let nrequired = 0;

		const buttonTop = this.buttonTop;
		if (buttonTop != null) {
			required += buttonTop.width;
			nrequired += 1;
		}
		const buttonPrevious = this.buttonPrevious;
		if (buttonPrevious != null) {
			required += buttonPrevious.width;
			nrequired += 1;
		}

		const spaceLeft = this.spaceLeft;
		if (spaceLeft != null) {
			if (spaceLeft.weight < 0) {
				required += spaceLeft.width;
			}
			nrequired += 1;
		}

		const page = this.page;
		required += page.width;
		nrequired += 1;

		const spaceRight = this.spaceRight;
		if (spaceRight != null) {
			if (spaceRight.weight < 0) {
				required += spaceRight.width;
			}
			nrequired += 1;
		}

		const buttonNext = this.buttonNext;
		if (buttonNext != null) {
			required += buttonNext.width;
			nrequired += 1;
		}
		const buttonLast = this.buttonLast;
		if (buttonLast) {
			required += buttonLast.width;
			nrequired += 1;
		}

		const marginHorizontal = this._margin.horizontal;
		if (2 <= nrequired) {
			required += (nrequired - 1) * marginHorizontal;
		}

		const padding = this.padding;
		const space = this.width - (padding.getLeft() + padding.getRight());
		if (space <= required) {
			this.doUpdate2(value, size, 4, 4, 0, 0);
		} else {
			const buttonPages0 = this.buttonPages0;
			const buttonPage0Width = buttonPages0[0].width;
			const nrequired0 = value;
			const required0 = nrequired0 * (buttonPage0Width + marginHorizontal);

			const buttonPages1 = this.buttonPages1;
			const buttonPage1Width = buttonPages1[0].width;
			const nrequired1 = size - (value + 1);
			const required1 = nrequired1 * (buttonPage1Width + marginHorizontal);

			if (required + required0 + required1 <= space) {
				this.doUpdate2(value, size, 0, 0, 0, 0);
			} else {
				const dots1 = this.dots1;
				const dots1Width = dots1.width;
				const dots0 = this.dots0;
				const dots0Width = dots0.width;
				const m0 = marginHorizontal + buttonPage0Width;
				const m1 = marginHorizontal + buttonPage1Width;
				const required0n = dots0Width + m0;
				const required1n = dots1Width + m1;
				const required0m = required0n + m0;
				const required1m = required1n + m1;
				if (required0 <= required1) {
					if (3 <= nrequired1 && required + required0 + required1m <= space) {
						const n1 = Math.floor((space - (required + required0 + required1m)) / m1);
						this.doUpdate2(value, size, 0, 1, 0, n1);
					} else if (2 <= nrequired1 && required + required0 + required1n <= space) {
						this.doUpdate2(value, size, 0, 2, 0, 0);
					} else if (
						3 <= nrequired0 &&
						2 <= nrequired1 &&
						required + required0m + required1n <= space
					) {
						this.doUpdate2(value, size, 1, 2, 0, 0);
					} else if (
						2 <= nrequired0 &&
						2 <= nrequired1 &&
						required + required0n + required1n <= space
					) {
						this.doUpdate2(value, size, 2, 2, 0, 0);
					} else if (
						1 <= nrequired0 &&
						1 <= nrequired1 &&
						required + dots0Width + dots1Width <= space
					) {
						this.doUpdate2(value, size, 3, 3, 0, 0);
					} else {
						this.doUpdate2(value, size, 4, 4, 0, 0);
					}
				} else {
					if (3 <= nrequired0 && required + required0m + required1 <= space) {
						const n0 = Math.floor((space - (required + required0m + required1)) / m0);
						this.doUpdate2(value, size, 1, 0, n0, 0);
					} else if (2 <= nrequired0 && required + required0n + required1 <= space) {
						this.doUpdate2(value, size, 2, 0, 0, 0);
					} else if (
						2 <= nrequired0 &&
						3 <= nrequired1 &&
						required + required0n + required1m <= space
					) {
						this.doUpdate2(value, size, 2, 1, 0, 0);
					} else if (
						2 <= nrequired0 &&
						2 <= nrequired1 &&
						required + required0n + required1n <= space
					) {
						this.doUpdate2(value, size, 2, 2, 0, 0);
					} else if (
						1 <= nrequired0 &&
						1 <= nrequired1 &&
						required + dots0Width + dots1Width <= space
					) {
						this.doUpdate2(value, size, 3, 3, 0, 0);
					} else {
						this.doUpdate2(value, size, 4, 4, 0, 0);
					}
				}
			}
		}
	}

	protected doUpdate2(
		value: number,
		size: number,
		left: 0 | 1 | 2 | 3 | 4,
		right: 0 | 1 | 2 | 3 | 4,
		nleft1: number,
		nright1: number
	): void {
		const buttonTop = this.buttonTop;
		if (buttonTop != null) {
			buttonTop.state.isEnabled = 0 < value;
		}
		const buttonPrevious = this.buttonPrevious;
		if (buttonPrevious != null) {
			buttonPrevious.state.isEnabled = 0 < value;
		}

		const buttonPages0 = this.buttonPages0;
		switch (left) {
			case 0:
				this.hideDots(this.dots0);
				this.allocButtonPages0(value);
				for (let i = 0, imax = buttonPages0.length; i < imax; ++i) {
					if (i < value) {
						this.showPage(buttonPages0[i], i);
					} else {
						this.hidePage(buttonPages0[i]);
					}
				}
				break;
			case 1:
				this.showDots(this.dots0, 1, value - 2 - nleft1);
				this.allocButtonPages0(2 + nleft1);
				this.showPage(buttonPages0[0], 0);
				for (let i = 1, imax = buttonPages0.length - nleft1 - 1; i < imax; ++i) {
					this.hidePage(buttonPages0[i]);
				}
				for (let i = 0, imax = 1 + nleft1; i < imax; ++i) {
					this.showPage(
						buttonPages0[buttonPages0.length - imax + i],
						value - 1 - (imax - 1) + i
					);
				}
				break;
			case 2:
				this.showDots(this.dots0, 0, value - 2);
				for (let i = 0, imax = buttonPages0.length - 1; i < imax; ++i) {
					this.hidePage(buttonPages0[i]);
				}
				this.showPage(buttonPages0[buttonPages0.length - 1], value - 1);
				break;
			case 3:
				this.showDots(this.dots0, 0, value - 1);
				for (let i = 0, imax = buttonPages0.length; i < imax; ++i) {
					this.hidePage(buttonPages0[i]);
				}
				break;
			case 4:
				this.hideDots(this.dots0);
				for (let i = 0, imax = buttonPages0.length; i < imax; ++i) {
					this.hidePage(buttonPages0[i]);
				}
				break;
		}

		this.showPage(this.page, value);

		const buttonPages1 = this.buttonPages1;
		switch (right) {
			case 0:
				this.allocButtonPages1(size - (value + 1));
				for (let i = 0, imax = buttonPages1.length; i < imax; ++i) {
					const j = value + 1 + i;
					if (j < size) {
						this.showPage(buttonPages1[i], j);
					} else {
						this.hidePage(buttonPages1[i]);
					}
				}
				this.hideDots(this.dots1);
				break;
			case 1:
				this.allocButtonPages1(2 + nright1);
				for (let i = 0, imax = 1 + nright1; i < imax; ++i) {
					this.showPage(buttonPages1[i], value + 1 + i);
				}
				for (let i = 1 + nright1, imax = buttonPages1.length - 1; i < imax; ++i) {
					this.hidePage(buttonPages1[i]);
				}
				this.showPage(buttonPages1[buttonPages1.length - 1], size - 1);
				this.showDots(this.dots1, value + 2 + nright1, size - 2);
				break;
			case 2:
				this.showPage(buttonPages1[0], value + 1);
				for (let i = 1, imax = buttonPages1.length; i < imax; ++i) {
					this.hidePage(buttonPages1[i]);
				}
				this.showDots(this.dots1, value + 2, size - 1);
				break;
			case 3:
				for (let i = 0, imax = buttonPages1.length; i < imax; ++i) {
					this.hidePage(buttonPages1[i]);
				}
				this.showDots(this.dots1, value + 1, size - 1);
				break;
			case 4:
				for (let i = 0, imax = buttonPages1.length; i < imax; ++i) {
					this.hidePage(buttonPages1[i]);
				}
				this.hideDots(this.dots1);
				break;
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

	protected showPage(button: DImageBase<number>, index: number): void {
		button.text = index + 1;
		button.show();
	}

	protected hidePage(button: DImageBase<number>): void {
		button.hide();
	}

	protected showDots(dots: DPaginationDots, from: number, to: number): void {
		dots.show();
	}

	protected hideDots(dots: DPaginationDots): void {
		dots.hide();
	}

	protected getType(): string {
		return "DPagination";
	}
}
