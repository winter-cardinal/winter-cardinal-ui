/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignVertical } from "../../d-align-vertical";
import { DBaseStateSet } from "../../d-base-state-set";
import { DDynamicTextStyleWordWrap } from "../../d-dynamic-text-style-word-wrap";
import { DThemeInputTextArea } from "../../d-input-text-area";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { UtilHtmlElementCreator } from "../../util/util-html-element";
import { DThemeDarkInput } from "./d-theme-dark-input";

const CREATOR_CLASSNAME = "d-theme-dark-input-text-area";
const CREATOR_CLASSNAME_ELEMENT = `${CREATOR_CLASSNAME}-element`;
const elementCreator = (container: HTMLElement): HTMLTextAreaElement => {
	const found = container.getElementsByClassName(CREATOR_CLASSNAME_ELEMENT);
	if (0 < found.length) {
		return found[0] as HTMLTextAreaElement;
	}
	const element = document.createElement("textarea");
	element.setAttribute("spellcheck", "false");
	element.setAttribute("class", CREATOR_CLASSNAME_ELEMENT);
	container.appendChild(element);
	return element;
};

const divCreator = (container: HTMLElement, classname: string): HTMLDivElement => {
	const found = container.getElementsByClassName(classname);
	if (0 < found.length) {
		return found[0] as HTMLDivElement;
	}
	const result = document.createElement("div");
	result.setAttribute("class", classname);
	container.appendChild(result);
	return result;
};

const CREATOR_CLASSNAME_CLIPPER = `${CREATOR_CLASSNAME}-clipper`;
const clipperCreator = (container: HTMLElement): HTMLDivElement => {
	return divCreator(container, CREATOR_CLASSNAME_CLIPPER);
};

const CREATOR_CLASSNAME_BEFORE = `${CREATOR_CLASSNAME}-before`;
const beforeCreator = (container: HTMLElement): HTMLDivElement => {
	return divCreator(container, CREATOR_CLASSNAME_BEFORE);
};

const CREATOR_CLASSNAME_AFTER = `${CREATOR_CLASSNAME}-after`;
const afterCreator = (container: HTMLElement): HTMLDivElement => {
	return divCreator(container, CREATOR_CLASSNAME_AFTER);
};

export class DThemeDarkInputTextArea
	extends DThemeDarkInput<string, HTMLTextAreaElement>
	implements DThemeInputTextArea
{
	getTextAlignVertical(): DAlignVertical {
		return DAlignVertical.TOP;
	}

	getTextStyleWordWrap(): DDynamicTextStyleWordWrap {
		return DDynamicTextStyleWordWrap.NORMAL;
	}

	getElementCreator(): UtilHtmlElementCreator<HTMLTextAreaElement> {
		return elementCreator;
	}

	getClipperCreator(): UtilHtmlElementCreator<HTMLDivElement> {
		return clipperCreator;
	}

	getBeforeCreator(): UtilHtmlElementCreator<HTMLDivElement> {
		return beforeCreator;
	}

	getAfterCreator(): UtilHtmlElementCreator<HTMLDivElement> {
		return afterCreator;
	}

	newTextValue(): DStateAwareOrValueMightBe<string> {
		return "";
	}

	protected getElementStyleText(state: DBaseStateSet): string {
		return (
			super.getElementStyleText(state) +
			this.getElementStyleTextResize(state) +
			this.getElementStyleTextWordWrap(state)
		);
	}

	protected getElementStyleTextResize(state: DBaseStateSet): string {
		return "resize: none;";
	}

	protected getElementStyleTextWordWrap(state: DBaseStateSet): string {
		let result = `overflow-wrap: break-word; word-wrap: break-word;`;
		switch (this.getTextStyleWordWrap()) {
			case DDynamicTextStyleWordWrap.NORMAL:
				result += `word-break: normal;`;
				break;
			default:
				result += `word-break: break-all;`;
				break;
		}
		return result;
	}
}
