/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mesh, MeshMaterial, Renderer, Texture } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DDynamicTextGeometry } from "./d-dynamic-text-geometry";
import { DDynamicTextStyle } from "./d-dynamic-text-style";
import { DDynamicTextStyleWordWrap } from "./d-dynamic-text-style-word-wrap";
import { DynamicFontAtlas } from "./util/dynamic-font-atlas";
import { UtilFont } from "./util/util-font";

export interface DDynamicTextClippingDelta {
	width: number;
	height: number;
}

export interface DDynamicTextModifier {
	clipping: boolean;
	fitting: boolean;
	wordWrap: DDynamicTextStyleWordWrap;
	width: number;
	height: number;
	lineHeight: number;
	delta: DDynamicTextClippingDelta;
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
	protected _modifier: DDynamicTextModifier;

	readonly geometry!: DDynamicTextGeometry;

	constructor(style: DDynamicTextStyle) {
		super(new DDynamicTextGeometry(), new MeshMaterial(Texture.EMPTY));

		this._style = style;
		style.on("change", () => {
			this.onStyleChange();
		});
		this._text = "";
		this._textApproved = "";
		this._isDirty = true;
		this._isGeometryDirty = true;
		this._atlas = null;
		this._atlasRevisionUpdated = 0;
		this._width = 0;
		this._height = 0;
		this._modifier = {
			clipping: false,
			fitting: false,
			wordWrap: DDynamicTextStyleWordWrap.NONE,
			width: 0,
			height: 0,
			lineHeight: 0,
			delta: {
				width: 0,
				height: 0
			}
		};
	}

	protected onStyleChange(): void {
		this._isDirty = true;
		this._isGeometryDirty = true;
		this._atlas = null;
		this.update_();
	}

	protected update_(): void {
		const layer = DApplications.getLayer(this);
		if (layer) {
			if (this._isDirty) {
				this._isDirty = false;

				const text = this._text;
				const textApproved = this._textApproved;
				this._textApproved = text;
				const style = this._style;
				const fontId = style.fontId;
				const fontIdApproved = style.fontIdApproved;
				const fontIdFontSize = style.fontIdFontSize;
				const fill = style.fill;
				const fillApproved = style.fillApproved;
				style.approve();

				const atlases = layer.getDynamicFontAtlases();
				if (text !== textApproved || fontId !== fontIdApproved || fill !== fillApproved) {
					atlases.add(fontId, fontIdFontSize, fill, text);
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
			if (!this._style.unfit()) {
				this._isDirty = true;
				this._isGeometryDirty = true;
				this.update_();
			}
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

		const style = this._style;
		let atlas = this._atlas;
		if (atlas == null) {
			const layer = DApplications.getLayer(this);
			if (layer) {
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

		const modifier = this._modifier;
		if (this.updateClipping(style, modifier)) {
			this._isGeometryDirty = true;
		}

		if (this._isGeometryDirty) {
			this._isGeometryDirty = false;
			const geometry = this.geometry;
			geometry.update(this._text, atlas, modifier);

			if (modifier.fitting && !style.isFontFitted && geometry.scaled) {
				const oldScale = geometry.scale;
				const oldFontSize = style.fontSize;
				const newFontId = style.toFontId(Math.ceil(oldFontSize * oldScale * 1000) / 1000);
				const newFontSize = UtilFont.toSize(newFontId);
				const newScale = newFontSize / oldFontSize;
				const newLineHeight = style.lineHeight * newScale;
				if (style.fit(newFontSize, newLineHeight)) {
					setTimeout(() => {
						DApplications.update(this);
					}, 0);
				}
			}
		}
	}

	protected updateClipping(style: DDynamicTextStyle, modifier: DDynamicTextModifier): boolean {
		let isChanged = false;

		const styleClipping = style.clipping;
		if (modifier.clipping !== styleClipping) {
			modifier.clipping = styleClipping;
			isChanged = true;
		}

		const styleFitting = style.fitting;
		if (modifier.fitting !== styleFitting) {
			modifier.fitting = styleFitting;
			isChanged = true;
		}

		const styleWordWrap = style.wordWrap;
		if (modifier.wordWrap !== styleWordWrap) {
			modifier.wordWrap = styleWordWrap;
			isChanged = true;
		}

		const styleLineHeight = styleFitting ? style.lineHeightFitted : style.lineHeight;
		if (modifier.lineHeight !== styleLineHeight) {
			modifier.lineHeight = styleLineHeight;
			isChanged = true;
		}

		if (styleClipping || styleFitting || styleWordWrap) {
			const parent = this.parent;
			if (parent instanceof DBase) {
				const width =
					parent.width -
					parent.padding.getLeft() -
					parent.padding.getRight() -
					modifier.delta.width;
				if (modifier.width !== width) {
					modifier.width = width;
					isChanged = true;
				}

				const height =
					parent.height -
					parent.padding.getTop() -
					parent.padding.getBottom() -
					modifier.delta.height;
				if (modifier.height !== height) {
					modifier.height = height;
					isChanged = true;
				}
			}
		}

		return isChanged;
	}

	setClippingDelta(width: number, height: number): void {
		const delta = this._modifier.delta;
		delta.width = width;
		delta.height = height;
	}

	protected _calculateBounds(): void {
		this.update();
		const geometry = this.geometry;
		this._bounds.addFrame(this.transform, 0, 0, geometry.width, geometry.height);
	}

	protected _render(renderer?: Renderer): void {
		this.update();
		super._render(renderer!);
	}
}
