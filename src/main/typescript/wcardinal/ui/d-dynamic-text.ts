/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mesh, MeshMaterial, Renderer, Texture } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DDynamicTextGeometry } from "./d-dynamic-text-geometry";
import { DDynamicTextStyle, DDynamicTextStyleOptions } from "./d-dynamic-text-style";
import { DDynamicTextStyleWordWrap } from "./d-dynamic-text-style-word-wrap";
import { DynamicFontAtlas } from "./util/dynamic-font-atlas";

interface Clipping {
	enable: boolean;
	wordWrap: DDynamicTextStyleWordWrap;
	width: number;
	height: number;
	lineHeight: number;
	delta: {
		width: number;
		height: number;
	};
}

export class DDynamicText extends Mesh {
	protected _style: DDynamicTextStyle;
	protected _text: string;
	protected _textApproved: string;
	protected _isDirty: boolean;
	protected _isGeometryDirty: boolean;
	protected _atlas: DynamicFontAtlas | null;
	protected _atlasRevisionUpdated: number;
	protected _width: number;
	protected _height: number;
	protected _clipping: Clipping;

	readonly geometry!: DDynamicTextGeometry;

	constructor(text: string, options?: DDynamicTextStyleOptions) {
		super(new DDynamicTextGeometry(), new MeshMaterial(Texture.EMPTY));

		this._style = new DDynamicTextStyle(options, (): void => {
			this._isDirty = true;
			this._isGeometryDirty = true;
			this._atlas = null;
			this.update_();
		});
		this._text = text;
		this._textApproved = "";
		this._isDirty = true;
		this._isGeometryDirty = true;
		this._atlas = null;
		this._atlasRevisionUpdated = 0;
		this._width = 0;
		this._height = 0;
		this._clipping = {
			enable: false,
			wordWrap: DDynamicTextStyleWordWrap.NONE,
			width: 0,
			height: 0,
			lineHeight: 0,
			delta: {
				width: 0,
				height: 0
			}
		};
		this.update_();
	}

	protected update_(): void {
		const layer = DApplications.getLayer(this);
		if (layer) {
			const style = this._style;
			if (this._isDirty) {
				this._isDirty = false;

				const text = this._text;
				const textApproved = this._textApproved;
				this._textApproved = text;
				const fontId = style.fontId;
				const fontIdApproved = style.fontIdApproved;
				const fontSize = style.fontSize;
				const fill = style.fill;
				const fillApproved = style.fillApproved;
				style.approve();

				const atlases = layer.getDynamicFontAtlases();
				if (text !== textApproved || fontId !== fontIdApproved || fill !== fillApproved) {
					atlases.add(fontId, fontSize, fill, text);
					atlases.remove(fontIdApproved, fillApproved, textApproved);
				}
			}
		}
	}

	get text(): string {
		return this._text;
	}

	set text(text: string) {
		if (this._text !== text) {
			this._text = text;
			this._isDirty = true;
			this._isGeometryDirty = true;
			this.update_();
		}
	}

	// @ts-ignore
	get width(): number {
		this.update();
		return Math.abs(this.scale.x) * this.geometry.width;
	}

	set width(width: number) {
		this.update();
		const geometryWidth = this.geometry.width;
		if (+1e-4 < geometryWidth) {
			const newScale = width / geometryWidth;
			this.scale.x = 0 <= this.scale.x ? +newScale : -newScale;
		}
	}

	// @ts-ignore
	get height(): number {
		this.update();
		return Math.abs(this.scale.y) * this.geometry.height;
	}

	set height(height: number) {
		this.update();
		const geometryHeight = this.geometry.height;
		if (+1e-4 < geometryHeight) {
			const newScale = height / geometryHeight;
			this.scale.y = 0 <= this.scale.y ? +newScale : -newScale;
		}
	}

	get clipped(): boolean {
		return this.geometry.clipped;
	}

	get style(): DDynamicTextStyle {
		return this._style;
	}

	update(): void {
		this.update_();

		let atlas = this._atlas;
		if (atlas == null) {
			const layer = DApplications.getLayer(this);
			if (layer) {
				const style = this._style;
				atlas = layer.getDynamicFontAtlases().get(style.fontId, style.fill);
				if (atlas != null) {
					this._atlasRevisionUpdated = atlas.getRevisionUpdate();
					this._atlas = atlas;
					this.texture = atlas.texture;
					this._isGeometryDirty = true;
				}
			}
		} else {
			const revisionUpdate = atlas.getRevisionUpdate();
			if (revisionUpdate !== this._atlasRevisionUpdated) {
				this._atlasRevisionUpdated = revisionUpdate;
				this._isGeometryDirty = true;
			}
		}

		const style = this._style;
		const clipping = this._clipping;
		if (this.updateClipping(style, clipping)) {
			this._isGeometryDirty = true;
		}

		if (this._isGeometryDirty) {
			this._isGeometryDirty = false;
			this.geometry.update(this._text, atlas, clipping);
		}
	}

	protected updateClipping(style: DDynamicTextStyle, clipping: Clipping): boolean {
		let isChanged = false;

		const styleClipping = style.clipping;
		if (clipping.enable !== styleClipping) {
			clipping.enable = styleClipping;
			isChanged = true;
		}

		const styleWordWrap = style.wordWrap;
		if (clipping.wordWrap !== styleWordWrap) {
			clipping.wordWrap = styleWordWrap;
			isChanged = true;
		}

		const styleLineHeight = style.lineHeight;
		if (clipping.lineHeight !== styleLineHeight) {
			clipping.lineHeight = styleLineHeight;
			isChanged = true;
		}

		if (styleClipping || styleWordWrap) {
			const parent = this.parent;
			if (parent instanceof DBase) {
				const width =
					parent.width -
					parent.padding.getLeft() -
					parent.padding.getRight() -
					clipping.delta.width;
				if (clipping.width !== width) {
					clipping.width = width;
					isChanged = true;
				}

				const height =
					parent.height -
					parent.padding.getTop() -
					parent.padding.getBottom() -
					clipping.delta.height;
				if (clipping.height !== height) {
					clipping.height = height;
					isChanged = true;
				}
			}
		}

		return isChanged;
	}

	setClippingDelta(width: number, height: number): void {
		const delta = this._clipping.delta;
		delta.width = width;
		delta.height = height;
	}

	_calculateBounds(): void {
		this.update();
		super._calculateBounds();
	}

	_render(renderer?: Renderer): void {
		this.update();
		(super._render as any)(renderer);
	}
}
