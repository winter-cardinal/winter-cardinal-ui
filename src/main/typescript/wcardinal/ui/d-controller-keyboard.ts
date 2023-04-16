/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container, utils } from "pixi.js";
import { DControllerFocus } from "./d-controller-focus";

export interface DControllerKeyboard extends utils.EventEmitter {
	init(element: HTMLElement, stage: Container, focusController: DControllerFocus): void;
}
