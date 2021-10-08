/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilHtmlElementCreator } from "../../util/util-html-element";
import { DThemeDarkInput } from "./d-theme-dark-input";

const CREATOR_CLASSNAME = "d-theme-dark-input";
const CREATOR_CLASSNAME_ELEMENT = `${CREATOR_CLASSNAME}-element`;
const elementCreator = (container: HTMLElement): HTMLInputElement => {
	const found = container.getElementsByClassName(CREATOR_CLASSNAME_ELEMENT);
	if (0 < found.length) {
		return found[0] as HTMLInputElement;
	}
	const element = document.createElement("input");
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

export class DThemeDarkInputInput<VALUE = unknown> extends DThemeDarkInput<
	VALUE,
	HTMLInputElement
> {
	getElementCreator(): UtilHtmlElementCreator<HTMLInputElement> {
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
}
