/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DAlignWith } from "./d-align-with";
import { DRefitable } from "./d-base";
import { DBaseStateSet } from "./d-base-state-set";
import {
	DImageBaseThemeWrapperSecondary,
	DThemeImageBaseSecondary
} from "./d-image-base-theme-wrapper-secondary";
import {
	DImageBaseThemeWrapperTertiary,
	DThemeImageBaseTertiary
} from "./d-image-base-theme-wrapper-tertiary";
import { DImagePiece, DImagePieceOptions, DThemeImagePiece } from "./d-image-piece";
import { DImagePieceLayouter } from "./d-image-piece-layouter";
import { DOnOptions } from "./d-on-options";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { DTextBase, DTextBaseEvents, DTextBaseOptions, DThemeTextBase } from "./d-text-base";

/**
 * {@link DImageBase} events.
 */
export interface DImageBaseEvents<VALUE, EMITTER> extends DTextBaseEvents<VALUE, EMITTER> {}

/**
 * {@link DImageBase} "on" options.
 */
export interface DImageBaseOnOptions<VALUE, EMITTER>
	extends Partial<DImageBaseEvents<VALUE, EMITTER>>,
		DOnOptions {}

/**
 * {@link DImageBase} options.
 */
export interface DImageBaseOptions<
	VALUE = unknown,
	THEME extends DThemeImageBase<VALUE> = DThemeImageBase<VALUE>,
	EMITTER = any
> extends DTextBaseOptions<VALUE, THEME, EMITTER> {
	image?: DImagePieceOptions;
	on?: DImageBaseOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DImageBase} theme.
 */
export interface DThemeImageBase<VALUE = unknown> extends DThemeTextBase<VALUE>, DThemeImagePiece {
	getSecondaryImageAlignHorizontal(): DAlignHorizontal;
	getSecondaryImageAlignVertical(): DAlignVertical;
	getSecondaryImageAlignWith(): DAlignWith;
	getSecondaryImageMarginHorizontal(): number;
	getSecondaryImageMarginVertial(): number;
	getSecondaryImageTintColor(state: DBaseStateSet): number | null;
	getSecondaryImageTintAlpha(state: DBaseStateSet): number;
	getSecondaryImageSource?(state: DBaseStateSet): Texture | DisplayObject | null;

	getTertiaryImageAlignHorizontal(): DAlignHorizontal;
	getTertiaryImageAlignVertical(): DAlignVertical;
	getTertiaryImageAlignWith(): DAlignWith;
	getTertiaryImageMarginHorizontal(): number;
	getTertiaryImageMarginVertial(): number;
	getTertiaryImageTintColor(state: DBaseStateSet): number | null;
	getTertiaryImageTintAlpha(state: DBaseStateSet): number;
	getTertiaryImageSource?(state: DBaseStateSet): Texture | DisplayObject | null;
}

const hasSecondaryImageSource = <VALUE>(
	theme: DThemeImageBase<VALUE>
): theme is DThemeImageBase<VALUE> & DThemeImageBaseSecondary => {
	return !!theme.getSecondaryImageSource;
};

const hasTertiaryImageSource = <VALUE>(
	theme: DThemeImageBase<VALUE>
): theme is DThemeImageBase<VALUE> & DThemeImageBaseTertiary => {
	return !!theme.getTertiaryImageSource;
};

/**
 * A base class for UI classes with an image support.
 * See {@link DImageBaseEvents} for event details.
 */
export class DImageBase<
	VALUE = unknown,
	THEME extends DThemeImageBase<VALUE> = DThemeImageBase<VALUE>,
	OPTIONS extends DImageBaseOptions<VALUE, THEME> = DImageBaseOptions<VALUE, THEME>
> extends DTextBase<VALUE, THEME, OPTIONS> {
	protected static LAYOUTER?: DImagePieceLayouter;
	protected _images!: DImagePiece[];

	protected init(options?: OPTIONS): void {
		this._images = this.newImages(this.theme, options);
		super.init(options);
	}

	protected newImages(theme: THEME, options?: OPTIONS): DImagePiece[] {
		const images: DImagePiece[] = [];
		images.push(this.newImage(theme, this.toImageOptions(theme, options?.image)));
		if (hasSecondaryImageSource(theme)) {
			images.push(this.newImage(new DImageBaseThemeWrapperSecondary(theme)));
		}
		if (hasTertiaryImageSource(theme)) {
			images.push(this.newImage(new DImageBaseThemeWrapperTertiary(theme)));
		}
		return images;
	}

	protected toImageOptions(
		theme: THEME,
		options?: DImagePieceOptions
	): DImagePieceOptions | undefined {
		return options;
	}

	protected newImage(theme: DThemeImagePiece, options?: DImagePieceOptions): DImagePiece {
		return new DImagePiece(this, theme, this._textAlign, options);
	}

	get image(): DStateAwareOrValueMightBe<Texture | DisplayObject | null> {
		return this._images[0].source;
	}

	set image(imageSource: DStateAwareOrValueMightBe<Texture | DisplayObject | null>) {
		this._images[0].source = imageSource;
	}

	protected onStateChange(newState: DBaseStateSet, oldState: DBaseStateSet): void {
		super.onStateChange(newState, oldState);

		const images = this._images;
		for (let i = 0, imax = images.length; i < imax; ++i) {
			images[i].onStateChange(newState, oldState);
		}
	}

	protected updateText(): void {
		this.updateTextValue();
		this.updateTextAndImage();
	}

	protected updateTextAndImage(): void {
		const images = this._images;
		const layouter = (DImageBase.LAYOUTER ??= new DImagePieceLayouter());
		for (let i = 0, imax = images.length; i < imax; ++i) {
			const image = images[i];
			image.updateSource();
			image.updateTint();
			image.updateBound();
			layouter.add(image);
		}
		const text = this._text;
		if (text != null) {
			this.updateTextColor(text);
			layouter.set(text);
		}
		const auto = this._auto;
		layouter.execute(
			this._padding,
			this._textAlign,
			auto.width.isOn ? null : this.width,
			auto.height.isOn ? null : this.height
		);
		layouter.clear();
	}

	protected isRefitable(target: any): target is DRefitable {
		if (super.isRefitable(target)) {
			return true;
		}

		const images = this._images;
		for (let i = 0, imax = images.length; i < imax; ++i) {
			if (images[i].isRefitable(target)) {
				return true;
			}
		}

		return false;
	}

	protected getType(): string {
		return "DImageBase";
	}

	destroy(): void {
		const images = this._images;
		for (let i = 0, imax = images.length; i < imax; ++i) {
			images[i].destroy();
		}
		super.destroy();
	}
}
