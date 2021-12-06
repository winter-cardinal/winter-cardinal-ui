/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DLinkTargetValue, DLinkUrlValue } from "./d-link";

export type DListItemToLabel<VALUE> = (value: VALUE) => string | undefined;

export type DListItemToTitle<VALUE> = (value: VALUE) => string | undefined;

export type DListItemToImage<VALUE> = (value: VALUE) => DisplayObject | Texture | null | undefined;

export type DListItemToId<VALUE> = (value: VALUE) => unknown;

export type DListItemToLinkUrl<VALUE> = (value: VALUE) => DLinkUrlValue | Promise<DLinkUrlValue>;

export type DListItemLinkChecker<VALUE> = (value: VALUE) => boolean | Promise<boolean>;

export interface DListItemAccessorLinkOptions<VALUE> {
	toUrl?: DListItemToLinkUrl<VALUE>;
	target?: DLinkTargetValue;
	checker?: DListItemLinkChecker<VALUE>;
}

export interface DListItemAccessorLink<VALUE> {
	toUrl: DListItemToLinkUrl<VALUE>;
	target: DLinkTargetValue;
	checker?: DListItemLinkChecker<VALUE>;
}

export interface DListItemAccessorOptions<VALUE> {
	toLabel?: DListItemToLabel<VALUE>;
	toTitle?: DListItemToTitle<VALUE>;
	toImage?: DListItemToImage<VALUE>;
	toId?: DListItemToId<VALUE>;
	link?: DListItemAccessorLinkOptions<VALUE>;
}

export interface DListItemAccessor<VALUE> {
	toLabel: DListItemToLabel<VALUE>;
	toTitle: DListItemToTitle<VALUE>;
	toImage: DListItemToImage<VALUE>;
	toId?: DListItemToId<VALUE>;
	link?: DListItemAccessorLink<VALUE>;
}
