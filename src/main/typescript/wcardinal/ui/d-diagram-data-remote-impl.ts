/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DDiagramDataRemote,
	DDiagramDataRemoteController,
	DDiagramDataRemoteOptions
} from "./d-diagram-data-remote";

export class DDiagramDataRemoteImpl implements DDiagramDataRemote {
	protected _controller?: DDiagramDataRemoteController;

	constructor(options?: DDiagramDataRemoteOptions) {
		this._controller = options && options.controller;
	}

	set(id: string, value: unknown): boolean {
		const controller = this._controller;
		if (controller) {
			controller.write(id, value);
			return true;
		}
		return false;
	}
}
