/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";

const getSelection = (element: Element): Selection | null => {
	const selection = document.getSelection();
	if (selection) {
		const range = document.createRange();
		range.selectNodeContents(element);
		selection.removeAllRanges();
		selection.addRange(range);
	}
	return selection;
};

const toClipboardData = (e: ClipboardEvent): DataTransfer => {
	return e.clipboardData || (window as any).clipboardData;
};

const copyUsingDiv = (text: string): boolean => {
	const div = document.createElement("div");
	div.setAttribute("style", "-webkit-user-select: text !important");
	div.textContent = "Dummy";
	document.body.appendChild(div);
	const selection = getSelection(div);
	let result = false;
	if (selection) {
		const handler = (e: ClipboardEvent): void => {
			if (e.target === div) {
				const clipboardData = toClipboardData(e);
				clipboardData.setData("text/plain", text);
				result = clipboardData.getData("text/plain") === text;
				e.preventDefault();
			}
		};
		document.addEventListener("copy", handler);
		try {
			document.execCommand("copy");
		} finally {
			document.removeEventListener("copy", handler);
		}
		selection.removeAllRanges();
	}
	document.body.removeChild(div);
	return result;
};

const copyUsingSpan = (text: string): boolean => {
	const div = document.createElement("div");
	div.setAttribute("style", "-webkit-user-select: text !important");
	const span = document.createElement("span");
	span.innerText = text;
	const root: Node = div.attachShadow ? div.attachShadow({ mode: "open" }) : div;
	root.appendChild(span);
	document.body.appendChild(div);
	let result = false;
	const selection = getSelection(div);
	if (selection) {
		result = document.execCommand("copy");
		selection.removeAllRanges();
	}
	document.body.removeChild(div);
	return result;
};

const copyUsingWindow = (window: Window, text: string): boolean => {
	if (typeof ClipboardEvent === "undefined") {
		const clipboardData = (window as any).clipboardData;
		if (typeof clipboardData !== "undefined" && typeof clipboardData.setData !== "undefined") {
			clipboardData.setData("Text", text);
			return true;
		}
	}
	return false;
};

export class UtilClipboard extends utils.EventEmitter {
	constructor() {
		super();

		const element = document.body;
		element.addEventListener("copy", (e: ClipboardEvent): void => {
			if (e.target === element) {
				e.preventDefault();
				e.stopPropagation();
				this.emit("copy", toClipboardData(e));
			}
		});

		element.addEventListener("cut", (e: ClipboardEvent): void => {
			if (e.target === element) {
				e.preventDefault();
				e.stopPropagation();
				this.emit("cut", toClipboardData(e));
			}
		});

		element.addEventListener("paste", (e: ClipboardEvent): void => {
			if (e.target === element) {
				e.preventDefault();
				e.stopPropagation();
				this.emit("paste", toClipboardData(e));
			}
		});
	}

	static copy(text: string): void {
		const clipboard = navigator.clipboard;
		if (clipboard && clipboard.writeText) {
			clipboard.writeText(text);
		} else {
			if (!copyUsingWindow(window, text)) {
				if (!copyUsingDiv(text)) {
					if (navigator.userAgent.indexOf("Edge") < 0) {
						copyUsingSpan(text);
					}
				}
			}
		}
	}
}
