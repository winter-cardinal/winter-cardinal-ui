/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplications } from "../d-applications";
import { isString } from "./is-string";
import {
	UtilHtmlElement,
	UtilHtmlElementOperation,
	UtilHtmlElementOptions,
	UtilHtmlElementTarget,
	UtilThemeHtmlElement
} from "./util-html-element";
import { UtilKeyboardEvent } from "./util-keyboard-event";

export interface UtilInputTarget extends UtilHtmlElementTarget {}

export interface UtilInputOperation<VALUE, ELEMENT extends HTMLInputElement | HTMLTextAreaElement>
	extends UtilHtmlElementOperation<ELEMENT> {
	getValue(): VALUE | undefined;
	applyTitle(): void;

	onValueInput(newValue: VALUE): void;
	onValueChange(newValue: VALUE, oldValue: VALUE): void;
	onEnter(): void;
}

export interface UtilInputEditingOptions<VALUE = unknown> {
	formatter?: (value: VALUE) => string;
	unformatter?: (text: string) => VALUE;
	validator?: (value: VALUE) => string | null;
}

export interface UtilInputOptions<VALUE, ELEMENT extends HTMLInputElement | HTMLTextAreaElement>
	extends UtilHtmlElementOptions<ELEMENT> {
	description?: string;
	editing?: UtilInputEditingOptions<VALUE>;
}

export interface UtilThemeInput<VALUE, ELEMENT extends HTMLInputElement | HTMLTextAreaElement>
	extends UtilThemeHtmlElement<ELEMENT> {
	getEditingFormatter(): (value: VALUE, caller: any) => string;
	getEditingUnformatter(): (text: string, caller: any) => VALUE;
	getEditingValidator(): (value: VALUE, caller: any) => string | null;
}

export abstract class UtilInput<
	VALUE = unknown,
	ELEMENT extends HTMLInputElement | HTMLTextAreaElement = HTMLInputElement | HTMLTextAreaElement,
	TARGET extends UtilInputTarget = UtilInputTarget,
	OPERATION extends UtilInputOperation<VALUE, ELEMENT> = UtilInputOperation<VALUE, ELEMENT>,
	THEME extends UtilThemeInput<VALUE, ELEMENT> = UtilThemeInput<VALUE, ELEMENT>,
	OPTIONS extends UtilInputOptions<VALUE, ELEMENT> = UtilInputOptions<VALUE, ELEMENT>
> extends UtilHtmlElement<ELEMENT, TARGET, OPERATION, THEME, OPTIONS> {
	protected _onInputKeyDownBound: (e: KeyboardEvent) => void;
	protected _onInputChangeBound: (e: Event) => void;
	protected _onInputInputBound: (e: Event) => void;

	protected _description: string;

	protected _editingFormatter: (value: VALUE, caller: any) => string;
	protected _editingUnformatter: (text: string, caller: any) => VALUE;
	protected _editingValidator: (value: VALUE, caller: any) => string | null;
	protected _editingValidationResult?: string | null;

	constructor(target: TARGET, operation: OPERATION, theme: THEME, options?: OPTIONS) {
		super(target, operation, theme, options);

		this._operation = operation;

		this._onInputKeyDownBound = (e: KeyboardEvent): void => {
			this.onInputKeyDown(e);
		};
		this._onInputChangeBound = (): void => {
			this.onInputChange();
		};
		this._onInputInputBound = (e: Event): void => {
			this.onInputInput(e);
		};

		this._description = options?.description ?? "";

		const editing = options?.editing;
		this._editingFormatter =
			editing?.formatter ?? (options as any)?.text?.formatter ?? theme.getEditingFormatter();
		this._editingUnformatter = editing?.unformatter ?? theme.getEditingUnformatter();
		this._editingValidator = editing?.validator ?? theme.getEditingValidator();
	}

	protected onEnd(): void {
		super.onEnd();
		this.onInputChange();
	}

	protected onElementAttached(
		element: ELEMENT,
		before?: HTMLDivElement | null,
		after?: HTMLDivElement | null
	): void {
		element.value = this.fromValue(this._operation.getValue());
		element.addEventListener("change", this._onInputChangeBound);
		element.addEventListener("input", this._onInputInputBound);
		super.onElementAttached(element, before, after);
	}

	protected onElementDetached(
		element: ELEMENT,
		before?: HTMLDivElement | null,
		after?: HTMLDivElement | null
	): void {
		super.onElementDetached(element, before, after);
		element.removeEventListener("change", this._onInputChangeBound);
		element.removeEventListener("input", this._onInputInputBound);
	}

	protected onInputKeyDown(e: KeyboardEvent): void {
		if (UtilKeyboardEvent.isOkKey(e)) {
			this.end();
			this._operation.onEnter();
		} else if (UtilKeyboardEvent.isCancelKey(e)) {
			this.cancel();
		}
	}

	protected toElementFocused(element: ELEMENT): void {
		super.toElementFocused(element);
		element.scrollTop = 0;
		element.scrollLeft = 0;
	}

	protected onInputChange(): void {
		if (this.isShown()) {
			const element = this.element;
			if (element != null) {
				const operation = this._operation;
				const newValue = this.toValue(element.value);
				const oldValue = operation.getValue()!;
				if (oldValue !== newValue) {
					operation.onValueChange(newValue, oldValue);
				}
			}
		}
	}

	toValue(valueAsString: string): VALUE {
		return this._editingUnformatter(valueAsString, this);
	}

	fromValue(value: VALUE | undefined): string {
		if (value !== undefined) {
			return this._editingFormatter(value, this);
		}
		return "";
	}

	protected onInputInput(e: Event): void {
		const target = e.target;
		if (target instanceof HTMLInputElement) {
			this._operation.onValueInput(this.toValue(target.value));
		}
	}

	validate(): string | null {
		const value = this._operation.getValue();
		if (value !== undefined) {
			const result = this._editingValidator(value, this);
			if (this._editingValidationResult !== result) {
				this._editingValidationResult = result;
				const state = this._target.state;
				state.isInvalid = result != null;
				if (state.isHovered) {
					this._operation.applyTitle();
				}
			}
			return result;
		}
		return null;
	}

	applyTitle(): boolean {
		const editingValidationResult = this._editingValidationResult;
		if (isString(editingValidationResult)) {
			const layer = DApplications.getLayer(this._target);
			if (layer) {
				layer.view.title = editingValidationResult;
			}
			return true;
		}
		return false;
	}
}
