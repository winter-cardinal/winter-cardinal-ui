/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container, Renderer } from "pixi.js";

export interface DBaseSnippet {
	parent?: Container | null;
	render(renderer: Renderer): void;
	updateTransform(): void;
}
