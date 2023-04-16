/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container, utils } from "pixi.js";
import { DControllerFocus, DFocusable, DFocusableContainer } from "./d-controller-focus";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";

export class DControllerKeyboardImpl extends utils.EventEmitter {
	init(element: HTMLElement, stage: Container, focusController: DControllerFocus): void {
		element.addEventListener("keydown", (e: KeyboardEvent): void => {
			this.emit("keydown", e);

			const focused = focusController.get();
			if (focused != null) {
				let current: DFocusable | DFocusableContainer | null = focused;
				while (current != null) {
					if (this.hasOnKeyDown(current)) {
						if (current.onKeyDown(e)) {
							return;
						}
					}
					current = current.parent;
				}
			}

			if (UtilKeyboardEvent.isFocusKey(e)) {
				const direction = UtilKeyboardEvent.getFocusDirection(e);
				const next =
					focused != null
						? focusController.find(
								focused,
								false,
								focused.state.isFocusRoot || direction,
								direction
						  )
						: focusController.find(stage, false, true, direction);
				if (next != null) {
					focusController.focus(next);
					e.preventDefault();
					e.stopImmediatePropagation();
				}
			}
		});

		element.addEventListener("keyup", (e: KeyboardEvent): void => {
			this.emit("keyup", e);

			const focused = focusController.get();
			if (focused != null) {
				let current: DFocusable | DFocusableContainer | null = focused;
				while (current != null) {
					if (this.hasOnKeyUp(current)) {
						if (current.onKeyUp(e)) {
							return;
						}
					}
					current = current.parent;
				}
			}
		});
	}

	protected hasOnKeyDown(target: any): target is { onKeyDown(e: KeyboardEvent): boolean } {
		return "onKeyDown" in target;
	}

	protected hasOnKeyUp(target: any): target is { onKeyUp(e: KeyboardEvent): boolean } {
		return "onKeyUp" in target;
	}
}
