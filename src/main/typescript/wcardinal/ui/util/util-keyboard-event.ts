/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplicationLayerLike } from "../d-application-layer-like";
import { DApplications } from "../d-applications";
import { DBase } from "../d-base";
import { DBaseStateSet } from "../d-base-state-set";
import { isString } from "./is-string";

export interface UtilKeyboardEventLayerPicker {
	picked: DApplicationLayerLike | null;
}

export interface UtilKeyboardEventShortcut {
	alt: boolean;
	ctrl: boolean;
	shift: boolean;
	key: string;
	which: number;
	event?: string;
}

export interface UtilKeyboardEventShortcutTarget {
	state: DBaseStateSet;
	emit(eventName: string): void;
}

const setShortcutKeyAndWhich = (shortcut: UtilKeyboardEventShortcut): UtilKeyboardEventShortcut => {
	const key = shortcut.key;
	if (key.length <= 1) {
		if (shortcut.shift) {
			shortcut.key = key.toUpperCase();
		}
		const code = key.charCodeAt(0);
		shortcut.which = 97 <= code && code <= 122 ? code - 32 : code;
	} else {
		switch (key) {
			case "enter":
				shortcut.key = "Enter";
				shortcut.which = 13;
				break;
			case "space":
				shortcut.key = " ";
				shortcut.which = 32;
				break;
			case "escape":
				shortcut.key = "Escape";
				shortcut.which = 27;
				break;
			case "f1":
				shortcut.key = "F1";
				shortcut.which = 112;
				break;
			case "f2":
				shortcut.key = "F2";
				shortcut.which = 113;
				break;
			case "f3":
				shortcut.key = "F3";
				shortcut.which = 114;
				break;
			case "f4":
				shortcut.key = "F4";
				shortcut.which = 115;
				break;
			case "f5":
				shortcut.key = "F5";
				shortcut.which = 116;
				break;
			case "f6":
				shortcut.key = "F6";
				shortcut.which = 117;
				break;
			case "f7":
				shortcut.key = "F7";
				shortcut.which = 118;
				break;
			case "f8":
				shortcut.key = "F8";
				shortcut.which = 119;
				break;
			case "f9":
				shortcut.key = "F9";
				shortcut.which = 120;
				break;
			case "f10":
				shortcut.key = "F10";
				shortcut.which = 121;
				break;
			case "f11":
				shortcut.key = "F11";
				shortcut.which = 122;
				break;
			case "f12":
				shortcut.key = "F12";
				shortcut.which = 123;
				break;
			case "capslock":
				shortcut.key = "CapsLock";
				if (shortcut.shift) {
					shortcut.which = 20;
				} else {
					shortcut.which = 240;
				}
				break;
			case "arrowup":
				shortcut.key = "ArrowUp";
				shortcut.which = 38;
				break;
			case "arrowdown":
				shortcut.key = "ArrowDown";
				shortcut.which = 40;
				break;
			case "arrowleft":
				shortcut.key = "ArrowLeft";
				shortcut.which = 37;
				break;
			case "arrowright":
				shortcut.key = "ArrowRight";
				shortcut.which = 39;
				break;
			case "insert":
				shortcut.key = "Insert";
				shortcut.which = 45;
				break;
			case "delete":
				shortcut.key = "Delete";
				shortcut.which = 46;
				break;
			case "pageup":
				shortcut.key = "PageUp";
				shortcut.which = 33;
				break;
			case "pagedown":
				shortcut.key = "PageDown";
				shortcut.which = 34;
				break;
			case "backspace":
				shortcut.key = "Backspace";
				shortcut.which = 8;
				break;
			case "colon":
				shortcut.key = ":";
				shortcut.which = 186;
				break;
			case "semicolon":
				shortcut.key = ";";
				shortcut.which = 187;
				break;
			case "pause":
				shortcut.key = "Pause";
				shortcut.which = 19;
				break;
			case "scrolllock":
				shortcut.key = "ScrollLock";
				shortcut.which = 145;
				break;
			case "tab":
				shortcut.key = "Tab";
				shortcut.which = 9;
				break;
			case "plus":
				shortcut.key = "+";
				shortcut.which = 187;
				break;
			case "minus":
				shortcut.key = "-";
				shortcut.which = 189;
				break;
		}
	}
	return shortcut;
};

export class UtilKeyboardEvent {
	static isActivateKey(e: KeyboardEvent): boolean {
		return e.key === "Space" || e.key === "Enter" || e.which === 32 || e.which === 13;
	}

	static isArrowUpKey(e: KeyboardEvent): boolean {
		return e.key === "ArrowUp" || e.which === 38;
	}

	static isArrowDownKey(e: KeyboardEvent): boolean {
		return e.key === "ArrowDown" || e.which === 40;
	}

	static isArrowLeftKey(e: KeyboardEvent): boolean {
		return e.key === "ArrowLeft" || e.which === 37;
	}

	static isArrowRightKey(e: KeyboardEvent): boolean {
		return e.key === "ArrowRight" || e.which === 39;
	}

	static isCancelKey(e: KeyboardEvent): boolean {
		return e.key === "Esc" || e.which === 27;
	}

	static isFocusKey(e: KeyboardEvent): boolean {
		return e.key === "Tab" || e.which === 9;
	}

	static isUndoKey(e: KeyboardEvent): boolean {
		return e.ctrlKey && (e.key === "z" || e.which === 90);
	}

	static isRedoKey(e: KeyboardEvent): boolean {
		return e.ctrlKey && (e.key === "y" || e.which === 89);
	}

	static isSaveKey(e: KeyboardEvent): boolean {
		return e.ctrlKey && !e.shiftKey && (e.key === "s" || e.which === 83);
	}

	static isSaveAsKey(e: KeyboardEvent): boolean {
		return e.ctrlKey && e.shiftKey && (e.key === "S" || e.which === 83);
	}

	static isDeleteKey(e: KeyboardEvent): boolean {
		return e.key === "Delete" || e.which === 46;
	}

	static isSelectAllKey(e: KeyboardEvent): boolean {
		return e.ctrlKey && !e.shiftKey && (e.key === "a" || e.which === 65);
	}

	static isOkKey(e: KeyboardEvent): boolean {
		return e.key === "Enter" || e.which === 13;
	}

	static getFocusDirection(e: KeyboardEvent): boolean {
		return e.shiftKey !== true;
	}

	static toShortcut(
		expressionOrShortcut: string | UtilKeyboardEventShortcut
	): UtilKeyboardEventShortcut {
		if (!isString(expressionOrShortcut)) {
			return expressionOrShortcut;
		} else {
			const expression = expressionOrShortcut;
			const arrowIndex = expression.indexOf("->");
			let keyExpression: string;
			let event: string | undefined;
			if (0 <= arrowIndex) {
				keyExpression = expression.substring(0, arrowIndex).trim().toLowerCase();
				event = expression.substring(arrowIndex + 2).trim();
			} else {
				keyExpression = expression.trim().toLowerCase();
			}
			let alt = false;
			let ctrl = false;
			let shift = false;
			let key = "a";
			const length = keyExpression.length;
			let i = 0;
			let j = 1;
			for (; j < length; ++j) {
				const c = keyExpression.charAt(j);
				if (c === "+") {
					const part = keyExpression.substring(i, j);
					switch (part) {
						case "alt":
							alt = true;
							break;
						case "ctrl":
							ctrl = true;
							break;
						case "shift":
							shift = true;
							break;
						default:
							key = part;
							break;
					}
					j += 1;
					i = j;
				}
			}
			if (i !== j) {
				key = keyExpression.substring(i, j);
			}
			return setShortcutKeyAndWhich({
				alt,
				ctrl,
				shift,
				key,
				which: 0,
				event
			});
		}
	}

	static toString(shortcut: UtilKeyboardEventShortcut): string {
		const parts = [];
		if (shortcut.ctrl) {
			parts.push("Ctrl");
		}
		if (shortcut.shift) {
			parts.push("Shift");
		}
		if (shortcut.alt) {
			parts.push("Alt");
		}
		parts.push(shortcut.key.toUpperCase());
		return parts.join("+");
	}

	static on(
		target: UtilKeyboardEventShortcutTarget,
		expressionOrShortcut: string | UtilKeyboardEventShortcut,
		handler?: (e: KeyboardEvent) => void
	): void {
		const shortcut = this.toShortcut(expressionOrShortcut);
		document.body.addEventListener("keydown", (e: KeyboardEvent): void => {
			if (
				e.altKey === shortcut.alt &&
				e.ctrlKey === shortcut.ctrl &&
				e.shiftKey === shortcut.shift &&
				(e.key === shortcut.key || e.which === shortcut.which)
			) {
				if (target.state.isActionable) {
					if (shortcut.event != null) {
						target.emit(shortcut.event);
					} else if (handler != null) {
						handler(e);
					}
				}
				e.preventDefault();
			}
		});
	}

	static moveFocusVertically(
		e: KeyboardEvent,
		target: DBase,
		picker?: UtilKeyboardEventLayerPicker
	): boolean {
		if (target.state.isActionable) {
			const isBackward = UtilKeyboardEvent.isArrowUpKey(e);
			const isForward = UtilKeyboardEvent.isArrowDownKey(e);
			if (isBackward || isForward) {
				return this.moveFocus(isForward, target, picker);
			}
		}
		return false;
	}

	static moveFocusHorizontally(
		e: KeyboardEvent,
		target: DBase,
		picker?: UtilKeyboardEventLayerPicker
	): boolean {
		if (target.state.isActionable) {
			const isBackward = UtilKeyboardEvent.isArrowLeftKey(e);
			const isForward = UtilKeyboardEvent.isArrowRightKey(e);
			if (isBackward || isForward) {
				return this.moveFocus(isForward, target, picker);
			}
		}
		return false;
	}

	static moveFocus(
		direction: boolean,
		target: DBase,
		picker?: UtilKeyboardEventLayerPicker
	): boolean {
		const layer = picker?.picked ?? DApplications.getLayer(target);
		if (layer) {
			const focusController = layer.getFocusController();
			const focused = focusController.get();
			if (focused != null) {
				const next = focusController.find(
					focused,
					false,
					focused.state.isFocusRoot || direction,
					direction,
					target
				);
				if (next != null) {
					focusController.focus(next);
					return true;
				}
			}
		}
		return false;
	}
}
