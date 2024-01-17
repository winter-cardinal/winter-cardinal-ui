/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Renderer } from "pixi.js";
import { DBaseReflowable } from "./d-base-reflowable";

export interface DShadow extends DisplayObject, DBaseReflowable {
	render(renderer: Renderer): void;
}
