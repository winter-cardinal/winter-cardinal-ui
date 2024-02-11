import { DisplayObject, Texture } from "pixi.js";
import { DBaseStateSet } from "./d-base-state-set";
import { DImageBaseThemeWrapperOther } from "./d-image-base-theme-wrapper-other";
import { DImageBaseThemeWrapperSecondary } from "./d-image-base-theme-wrapper-secondary";
import { DImageBaseThemeWrapperTertiary } from "./d-image-base-theme-wrapper-tertiary";
import { DImagePiece, DImagePieceOptions, DThemeImagePiece } from "./d-image-piece";
import { DImagePieceContainer, DThemeImagePieceContainer } from "./d-image-piece-container";
import { DImagePieceImpl, DImagePieceImplParent } from "./d-image-piece-impl";
import { DImagePieceLayouter } from "./d-image-piece-layouter";
import { DImagePieceAlign } from "./d-image-piece-align";
import { DImagePieceMargin } from "./d-image-piece-margin";
import { DImagePieceTint } from "./d-image-piece-tint";
import { DStateAwareOrValueMightBe } from "./d-state-aware";

export interface DImagePieceContainerImplOptions {
	image?: DImagePieceOptions;
	images?: DImagePieceOptions[];
}

export class DImagePieceContainerImpl implements DImagePieceContainer {
	protected _parent: DImagePieceImplParent;
	protected _theme: DThemeImagePieceContainer;
	protected _pieces: DImagePieceImpl[];

	constructor(
		parent: DImagePieceImplParent,
		theme: DThemeImagePieceContainer,
		options?: DImagePieceContainerImplOptions
	) {
		this._parent = parent;
		this._theme = theme;
		const pieces: DImagePieceImpl[] = [];
		this._pieces = pieces;

		if (options != null) {
			const images = options.images;
			if (images != null) {
				pieces.push(this.newImage(theme, 0 < images.length ? images[0] : undefined));
				if (theme.getSecondaryImageSource != null || 1 < images.length) {
					pieces.push(
						this.newImage(new DImageBaseThemeWrapperSecondary(theme), images[1])
					);
				}
				if (theme.getTertiaryImageSource != null || 2 < images.length) {
					pieces.push(
						this.newImage(new DImageBaseThemeWrapperTertiary(theme), images[2])
					);
				}
				if (3 < images.length) {
					const other = new DImageBaseThemeWrapperOther(theme);
					for (let i = 3, imax = images.length; i < imax; ++i) {
						pieces.push(this.newImage(other, images[i]));
					}
				}
			} else {
				pieces.push(this.newImage(theme, options.image));
				if (theme.getSecondaryImageSource != null) {
					pieces.push(this.newImage(new DImageBaseThemeWrapperSecondary(theme)));
				}
				if (theme.getTertiaryImageSource != null) {
					pieces.push(this.newImage(new DImageBaseThemeWrapperTertiary(theme)));
				}
			}
		} else {
			pieces.push(this.newImage(theme));
			if (theme.getSecondaryImageSource != null) {
				pieces.push(this.newImage(new DImageBaseThemeWrapperSecondary(theme)));
			}
			if (theme.getTertiaryImageSource != null) {
				pieces.push(this.newImage(new DImageBaseThemeWrapperTertiary(theme)));
			}
		}
	}

	protected newImage(theme: DThemeImagePiece, options?: DImagePieceOptions): DImagePieceImpl {
		return new DImagePieceImpl(this._parent, theme, options);
	}

	onStateChange(newState: DBaseStateSet, oldState: DBaseStateSet): void {
		const pieces = this._pieces;
		for (let i = 0, imax = pieces.length; i < imax; ++i) {
			pieces[i].onStateChange(newState, oldState);
		}
	}

	isRefitable(target: any): boolean {
		const pieces = this._pieces;
		for (let i = 0, imax = pieces.length; i < imax; ++i) {
			if (pieces[i].isRefitable(target)) {
				return true;
			}
		}
		return false;
	}

	updateTextAndImage(layouter: DImagePieceLayouter): void {
		const pieces = this._pieces;
		for (let i = 0, imax = pieces.length; i < imax; ++i) {
			const piece = pieces[i];
			piece.updateSource();
			piece.updateTint();
			piece.updateRotation();
			layouter.add(piece);
		}
	}

	get object(): DisplayObject | null {
		return this._pieces[0].object;
	}

	get align(): DImagePieceAlign {
		return this._pieces[0].align;
	}

	get margin(): DImagePieceMargin {
		return this._pieces[0].margin;
	}

	get tint(): DImagePieceTint {
		return this._pieces[0].tint;
	}

	get source(): DStateAwareOrValueMightBe<Texture | DisplayObject | null> {
		return this._pieces[0].source;
	}

	set source(source: DStateAwareOrValueMightBe<Texture | DisplayObject | null>) {
		this._pieces[0].source = source;
	}

	get rotation(): DStateAwareOrValueMightBe<number> {
		return this._pieces[0].rotation;
	}

	set rotation(rotation: DStateAwareOrValueMightBe<number>) {
		this._pieces[0].rotation = rotation;
	}

	add(options?: DImagePieceOptions): DImagePiece {
		const result = this.newImage(this._theme, options);
		this._pieces.push(result);
		return result;
	}

	get(index: number): DImagePiece | null {
		const pieces = this._pieces;
		if (0 <= index && index < pieces.length) {
			return pieces[index];
		}
		return null;
	}

	remove(index: number): boolean {
		const pieces = this._pieces;
		if (0 <= index && index < pieces.length) {
			pieces[index].destroy();
			return true;
		}
		return false;
	}

	size(): number {
		return this._pieces.length;
	}

	destroy(): void {
		const pieces = this._pieces;
		for (let i = 0, imax = pieces.length; i < imax; ++i) {
			pieces[i].destroy();
		}
	}
}
