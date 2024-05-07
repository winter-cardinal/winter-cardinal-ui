/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { DDiagramSerializedText } from "../../d-diagram-serialized";
import { DeepPartial } from "../../util/deep-partial";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import {
	EShapeText,
	EShapeTextAtlas,
	EShapeTextLike,
	EShapeTextStyle,
	EShapeTextWeight
} from "../e-shape-text";
import { EShapeTextAlign } from "../e-shape-text-align";
import { EShapeTextAlignHorizontal } from "../e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "../e-shape-text-align-vertical";
import { EShapeTextDirection } from "../e-shape-text-direction";
import { EShapeTextOffset } from "../e-shape-text-offset";
import { EShapeTextOutline } from "../e-shape-text-outline";
import { EShapeTextAlignImpl } from "./e-shape-text-align-impl";
import { EShapeTextImplParent } from "./e-shape-text-impl-parent";
import { EShapeTextOffsetImpl } from "./e-shape-text-offset-impl";
import { EShapeTextOutlineImpl } from "./e-shape-text-outline-impl";

export class EShapeTextImpl implements EShapeText {
	protected _parent: EShapeTextImplParent;
	protected _enable: boolean;
	protected _value: string;
	protected _length: number;
	protected _plength: number;
	protected _family: string;
	protected _color: number;
	protected _alpha: number;
	protected _size: number;
	protected _weight: EShapeTextWeight;
	readonly align: EShapeTextAlign;
	readonly offset: EShapeTextOffset;
	protected _style: EShapeTextStyle;
	readonly outline: EShapeTextOutline;
	readonly spacing: EShapeTextOffset;
	protected _direction: EShapeTextDirection;
	readonly padding: EShapeTextOffset;
	protected _clipping: boolean;
	protected _fitting: boolean;

	texture?: Texture; // Used for rendering and updated when rendered
	atlas?: EShapeTextAtlas; // Used for rendering and updated when rendered
	protected _characters: string[];
	protected _nacharacters: string[];
	world?: number[]; // Updated when rendered

	constructor(
		parent: EShapeTextImplParent,
		value: string,
		color: number,
		alpha: number,
		family: string,
		size: number
	) {
		this._parent = parent;
		this._enable = true;
		this._value = value;
		this._plength = this._length = value.length;
		this._color = color;
		this._alpha = alpha;
		this._family = family;
		this._size = size;
		this._weight = EShapeTextWeight.NORMAL;
		this.align = new EShapeTextAlignImpl(
			parent,
			EShapeTextAlignHorizontal.CENTER,
			EShapeTextAlignVertical.MIDDLE
		);
		this.offset = new EShapeTextOffsetImpl(parent, 0, 0);
		this._style = EShapeTextStyle.NORMAL;
		this.spacing = new EShapeTextOffsetImpl(parent, 0, 0);
		this.outline = new EShapeTextOutlineImpl(parent, false, 0xffffff, 1.0, 0.5);
		this._direction = EShapeTextDirection.LEFT_TO_RIGHT;
		this.padding = new EShapeTextOffsetImpl(parent, 10, 10);
		this._clipping = false;
		this._fitting = false;
		this._characters = [];
		this._nacharacters = [];
		this.updateCharacters(value);
	}

	get enable(): boolean {
		return this._enable;
	}

	set enable(enable: boolean) {
		if (this._enable !== enable) {
			this._enable = enable;
			this._parent.updateUploaded();
		}
	}

	get value(): string {
		return this._value;
	}

	set value(value: string) {
		if (this._value !== value) {
			this._value = value;
			const length = value.length;
			this._length = length;
			if (this._plength < length) {
				this._plength = length;
			}
			this.updateCharacters(value);
			if (this.isCompatible()) {
				this._parent.updateUploaded();
			} else {
				this.atlas = undefined;
				this._parent.toDirty();
			}
		}
	}

	get characters(): string[] {
		return this._characters;
	}

	get nacharacters(): string[] {
		return this._nacharacters;
	}

	protected updateCharacters(value: string): void {
		const characters = this._characters;
		const charactersLength = characters.length;
		let icharacters = 0;
		const nacharacters = this._nacharacters;
		const nacharactersLength = nacharacters.length;
		let inacharacters = 0;
		for (let i = 0, imax = value.length; i < imax; ) {
			if (value.charCodeAt(i) <= 0xff) {
				// Add an ASCII character
				const ac = value.substring(i, i + 1);
				if (icharacters < charactersLength) {
					characters[icharacters] = ac;
				} else {
					characters.push(ac);
				}
				icharacters += 1;
				i += 1;
				continue;
			}
			let j = i + 1;
			for (; j < imax; ++j) {
				const cc = value.charCodeAt(j);
				if ((0xdc00 <= cc && cc <= 0xdfff) || (0xfe00 <= cc && cc <= 0xfe0f)) {
					// Low surrogate
					// Variation selector
					continue;
				}
				break;
			}
			// Add an non-ascii character
			const nac = value.substring(i, j);
			if (icharacters < charactersLength) {
				characters[icharacters] = nac;
			} else {
				characters.push(nac);
			}
			icharacters += 1;
			if (inacharacters < nacharactersLength) {
				nacharacters[inacharacters] = nac;
			} else {
				nacharacters.push(nac);
			}
			inacharacters += 1;
			// Go to the next
			i = j;
		}
		if (icharacters < charactersLength) {
			characters.length = icharacters;
		}
		if (inacharacters < nacharactersLength) {
			nacharacters.length = inacharacters;
		}
	}

	protected isCompatible(): boolean {
		// Compatibility check
		const parent = this._parent;
		const uploaded = parent.uploaded;
		if (uploaded == null || !uploaded.isCompatible(parent)) {
			return false;
		}

		// Character code check
		const atlas = this.atlas;
		if (atlas == null) {
			return false;
		}
		const atlasCharacters = atlas.characters;
		const nacharacters = this._nacharacters;
		for (let i = 0, imax = nacharacters.length; i < imax; ++i) {
			if (!atlasCharacters.has(nacharacters[i])) {
				return false;
			}
		}

		// Done
		return true;
	}

	get length(): number {
		return this._length;
	}

	get plength(): number {
		return this._plength;
	}

	get family(): string {
		return this._family;
	}

	set family(family: string) {
		if (this._family !== family) {
			this._family = family;
			this._parent.toDirty();
		}
	}

	get color(): number {
		return this._color;
	}

	set color(color: number) {
		if (this._color !== color) {
			this._color = color;
			this._parent.updateUploaded();
		}
	}

	get alpha(): number {
		return this._alpha;
	}

	set alpha(alpha: number) {
		if (this._alpha !== alpha) {
			this._alpha = alpha;
			this._parent.updateUploaded();
		}
	}

	get size(): number {
		return this._size;
	}

	set size(size: number) {
		if (this._size !== size) {
			this._size = size;
			this._parent.updateUploaded();
		}
	}

	get weight(): EShapeTextWeight {
		return this._weight;
	}

	set weight(weight: EShapeTextWeight) {
		if (this._weight !== weight) {
			this._weight = weight;
			this._parent.updateUploaded();
		}
	}

	get style(): EShapeTextStyle {
		return this._style;
	}

	set style(style: EShapeTextStyle) {
		if (this._style !== style) {
			this._style = style;
			this._parent.updateUploaded();
		}
	}

	get direction(): EShapeTextDirection {
		return this._direction;
	}

	set direction(direction: EShapeTextDirection) {
		if (this._direction !== direction) {
			this._direction = direction;
			this._parent.updateUploaded();
		}
	}

	get clipping(): boolean {
		return this._clipping;
	}

	set clipping(clipping: boolean) {
		if (this._clipping !== clipping) {
			this._clipping = clipping;
			this._parent.updateUploaded();
		}
	}

	get fitting(): boolean {
		return this._fitting;
	}

	set fitting(fitting: boolean) {
		if (this._fitting !== fitting) {
			this._fitting = fitting;
			this._parent.updateUploaded();
		}
	}

	copy(target?: DeepPartial<EShapeTextLike>): this {
		if (target) {
			this.set(
				target.value,
				target.color,
				target.alpha,
				target.family,
				target.size,
				target.weight,
				target.style,
				target.direction,
				target.clipping,
				target.fitting
			);
			this.align.copy(target.align);
			this.offset.copy(target.offset);
			this.outline.copy(target.outline);
			this.spacing.copy(target.spacing);
			this.padding.copy(target.padding);
		}
		return this;
	}

	set(
		value?: string,
		color?: number,
		alpha?: number,
		family?: string,
		size?: number,
		weight?: EShapeTextWeight,
		style?: EShapeTextStyle,
		direction?: EShapeTextDirection,
		clipping?: boolean,
		fitting?: boolean
	): this {
		let isChangedDirty = false;
		let isChangedUploaded = false;

		if (value != null && this._value !== value) {
			this._value = value;
			const length = value.length;
			this._length = length;
			if (this._plength < length) {
				this._plength = length;
			}
			this.updateCharacters(value);
			if (this.isCompatible()) {
				isChangedUploaded = true;
			} else {
				this.atlas = undefined;
				isChangedDirty = true;
			}
		}

		if (color != null && this._color !== color) {
			this._color = color;
			isChangedUploaded = true;
		}

		if (alpha != null && this._alpha !== alpha) {
			this._alpha = alpha;
			isChangedUploaded = true;
		}

		if (family != null && this._family !== family) {
			this._family = family;
			isChangedDirty = true;
		}

		if (size != null && this._size !== size) {
			this._size = size;
			isChangedUploaded = true;
		}

		if (weight != null && this._weight !== weight) {
			this._weight = weight;
			isChangedUploaded = true;
		}

		if (style != null && this._style !== style) {
			this._style = style;
			isChangedUploaded = true;
		}

		if (direction != null && this._direction !== direction) {
			this._direction = direction;
			isChangedUploaded = true;
		}

		if (clipping != null && this._clipping !== clipping) {
			this._clipping = clipping;
			isChangedUploaded = true;
		}

		if (fitting != null && this._fitting !== fitting) {
			this._fitting = fitting;
			isChangedUploaded = true;
		}

		if (isChangedDirty) {
			this._parent.toDirty();
		} else if (isChangedUploaded) {
			this._parent.updateUploaded();
		}

		return this;
	}

	toObject(): EShapeTextLike {
		return {
			value: this._value,
			color: this._color,
			alpha: this._alpha,
			family: this._family,
			size: this._size,
			weight: this._weight,
			align: this.align.toObject(),
			offset: this.offset.toObject(),
			style: this._style,
			outline: this.outline.toObject(),
			direction: this._direction,
			spacing: this.spacing.toObject(),
			padding: this.padding.toObject(),
			clipping: this._clipping,
			fitting: this._fitting
		};
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const valueId = manager.addResource(this._value);
		const familyId = manager.addResource(this._family);
		const alignId = this.align.serialize(manager);
		const offsetId = this.offset.serialize(manager);
		const outlineId = this.outline.serialize(manager);
		const spacingId = this.spacing.serialize(manager);
		const paddingId = this.padding.serialize(manager);
		const clipping = this._clipping ? 1 : 0;
		const fitting = this._fitting ? 1 : 0;
		const serialized =
			`[${valueId},${this._color},${this._alpha},${familyId},${this._size},` +
			`${this._weight},${alignId},${offsetId},${this._style},${outlineId},` +
			`${spacingId},${this._direction},${paddingId},${clipping},${fitting}]`;
		return manager.addResource(serialized);
	}

	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void {
		const resources = manager.resources;
		if (0 <= target && target < resources.length) {
			let parsed = manager.getText(target);
			if (parsed == null) {
				parsed = JSON.parse(resources[target]) as DDiagramSerializedText;
				manager.setText(target, parsed);
			}
			this.set(
				resources[parsed[0]] || "",
				parsed[1],
				parsed[2],
				resources[parsed[3]] || "auto",
				parsed[4],
				parsed[5],
				parsed[8],
				parsed[11],
				!!parsed[13],
				!!parsed[14]
			);
			this.align.deserialize(parsed[6], manager);
			this.offset.deserialize(parsed[7], manager);
			this.outline.deserialize(parsed[9], manager);
			this.spacing.deserialize(parsed[10], manager);
			this.padding.deserialize(parsed[12], manager);
		}
	}
}
