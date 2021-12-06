/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DLinkUrlValue } from "./d-link";
import {
	DListItemAccessor,
	DListItemAccessorLink,
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

const toLinkUrl = (value: any): DLinkUrlValue | Promise<DLinkUrlValue> => {
	return value.url;
};

export class DListItemAccessorImpl<VALUE> implements DListItemAccessor<VALUE> {
	toLabel: DListItemToLabel<VALUE>;
	toTitle: DListItemToTitle<VALUE>;
	toImage: DListItemToImage<VALUE>;
	toId?: DListItemToId<VALUE>;
	link?: DListItemAccessorLink<VALUE>;

	constructor(options?: DListItemAccessorOptions<VALUE>) {
		this.toLabel = options?.toLabel || toLabelDefault;
		this.toTitle = options?.toTitle || toTitle;
		this.toImage = options?.toImage || toImage;
		this.toId = options?.toId;
		this.link = this.toLink(options);
	}

	protected toLink(
		options?: DListItemAccessorOptions<VALUE>
	): DListItemAccessorLink<VALUE> | undefined {
		if (options) {
			const link = options.link;
			if (link) {
				const toUrl = link.toUrl;
				const target = link.target;
				const checker = link.checker;
				if (toUrl !== undefined || target !== undefined || checker !== undefined) {
					return {
						toUrl: toUrl || toLinkUrl,
						target,
						checker
					};
				}
			}
		}
		return undefined;
	}
}
