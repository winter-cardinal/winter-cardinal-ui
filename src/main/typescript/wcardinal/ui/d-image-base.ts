/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DRefitable } from "./d-base";
import { DBaseStateSet } from "./d-base-state-set";
import { DThemeImageBaseSecondary } from "./d-image-base-theme-wrapper-secondary";
import { DThemeImageBaseTertiary } from "./d-image-base-theme-wrapper-tertiary";
import { DImagePieceOptions, DThemeImagePiece } from "./d-image-piece";
import { DImagePieceLayouter } from "./d-image-piece-layouter";
import { DOnOptions } from "./d-on-options";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { DTextBase, DTextBaseEvents, DTextBaseOptions, DThemeTextBase } from "./d-text-base";
import { DImagePieceContainer } from "./d-image-piece-container";
import { DImagePieceContainerImpl } from "./d-image-piece-container-impl";

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
	images?: DImagePieceOptions[];
	on?: DImageBaseOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DImageBase} theme.
 */
export interface DThemeImageBase<VALUE = unknown>
	extends DThemeTextBase<VALUE>,
		DThemeImagePiece,
		DThemeImageBaseSecondary,
		DThemeImageBaseTertiary {}

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
	protected _image?: DImagePieceContainerImpl;

	protected init(options?: OPTIONS): void {
		this.getImage();
		super.init(options);
	}

	get image(): DImagePieceContainer {
		return (this._image ??= this.newImage());
	}

	protected getImage(): DImagePieceContainerImpl {
		return (this._image ??= this.newImage());
	}

	protected newImage(): DImagePieceContainerImpl {
		return new DImagePieceContainerImpl(this, this.theme, this.options);
	}

	set image(imageSource: DStateAwareOrValueMightBe<Texture | DisplayObject | null>) {
		const image = this.image.get(0);
		if (image != null) {
			image.source = imageSource;
		}
	}

	protected onStateChange(newState: DBaseStateSet, oldState: DBaseStateSet): void {
		super.onStateChange(newState, oldState);
		this.getImage().onStateChange(newState, oldState);
	}

	protected updateText(): void {
		this.updateTextValue();
		this.updateTextAndImage();
	}

	protected updateTextAndImage(): void {
		const layouter = (DImageBase.LAYOUTER ??= new DImagePieceLayouter());
		this.getImage().updateTextAndImage(layouter);
		const text = this._text;
		if (text != null) {
			this.updateTextColor(text);
			layouter.set(text);
		} else {
			layouter.set(null);
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
		if (this.getImage().isRefitable(target)) {
			return true;
		}
		return false;
	}

	protected getType(): string {
		return "DImageBase";
	}

	destroy(): void {
		const image = this._image;
		if (image != null) {
			image.destroy();
		}
		super.destroy();
	}
}
