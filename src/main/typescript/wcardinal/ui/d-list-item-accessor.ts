/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";

export type DListItemToLabel<VALUE> = (result: VALUE) => string | undefined;

export type DListItemToTitle<VALUE> = (result: VALUE) => string | undefined;

export type DListItemToImage<VALUE> = (result: VALUE) => DisplayObject | Texture | null | undefined;

export type DListItemToId<VALUE> = (a: VALUE) => unknown;

export interface DListItemAccessorOptions<VALUE> {
	toLabel?: DListItemToLabel<VALUE>;
	toTitle?: DListItemToTitle<VALUE>;
	toImage?: DListItemToImage<VALUE>;
	toId?: DListItemToId<VALUE>;
}

export interface DListItemAccessor<VALUE> {
	toLabel: DListItemToLabel<VALUE>;
	toTitle: DListItemToTitle<VALUE>;
	toImage: DListItemToImage<VALUE>;
	toId?: DListItemToId<VALUE>;
}
