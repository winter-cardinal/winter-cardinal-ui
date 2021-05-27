/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import {
	DListItemAccessor,
	DListItemAccessorOptions,
	DListItemToId,
	DListItemToImage,
	DListItemToLabel,
	DListItemToTitle
} from "./d-list-item-accessor";
import { toLabel as toLabelDefault } from "./util/to-label";

const toImage = (value: any): DisplayObject | Texture | null | undefined => {
	return value.image;
};

const toTitle = (value: any): string | undefined => {
	return value.title;
};

export class DListItemAccessorImpl<VALUE> implements DListItemAccessor<VALUE> {
	toLabel: DListItemToLabel<VALUE>;
	toTitle: DListItemToTitle<VALUE>;
	toImage: DListItemToImage<VALUE>;
	toId?: DListItemToId<VALUE>;

	constructor(options?: DListItemAccessorOptions<VALUE>) {
		this.toLabel = options?.toLabel || toLabelDefault;
		this.toTitle = options?.toTitle || toTitle;
		this.toImage = options?.toImage || toImage;
		this.toId = options?.toId;
	}
}
