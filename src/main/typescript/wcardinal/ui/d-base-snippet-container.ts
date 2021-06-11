/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container, Renderer } from "pixi.js";
import { DBaseSnippet } from "./d-base-snippet";

export class DBaseSnippetContainer {
	protected _parent: Container;
	protected _befores: DBaseSnippet[];
	protected _afters: DBaseSnippet[];
	protected _renderable: boolean;

	constructor(parent: Container) {
		this._parent = parent;
		this._befores = [];
		this._afters = [];
		this._renderable = true;
	}

	get renderable(): boolean {
		return this._renderable;
	}

	set renderable(renderable: boolean) {
		this._renderable = renderable;
	}

	add(snippet: DBaseSnippet, phase: boolean): void {
		const list = phase ? this._befores : this._afters;
		list.push(snippet);
		if ("parent" in snippet) {
			snippet.parent = this._parent;
		}
	}

	addAt(snippet: DBaseSnippet, phase: boolean, index: number): void {
		const list = phase ? this._befores : this._afters;
		if (index === 0) {
			list.unshift(snippet);
		} else if (0 < index && index < list.length) {
			list.splice(index, 0, snippet);
		} else {
			list.push(snippet);
		}
		if ("parent" in snippet) {
			snippet.parent = this._parent;
		}
	}

	remove(snippet: DBaseSnippet, phase: boolean): void {
		const list = phase ? this._befores : this._afters;
		const index = list.indexOf(snippet);
		if (0 <= index) {
			list.splice(index, 1);
			if ("parent" in snippet) {
				snippet.parent = null;
			}
		}
	}

	render(renderer: Renderer, phase: boolean): void {
		if (this._renderable) {
			const list = phase ? this._befores : this._afters;
			for (let i = 0, imax = list.length; i < imax; ++i) {
				const snippet = list[i];
				snippet.updateTransform();
				snippet.render(renderer);
			}
		}
	}
}
