/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DDiagramDataRemoteController {
	write(id: string, value: unknown): void;
}

export interface DDiagramDataRemoteOptions {
	controller?: DDiagramDataRemoteController;
}

export class DDiagramDataRemote {
	protected _controller?: DDiagramDataRemoteController;

	constructor(options?: DDiagramDataRemoteOptions) {
		this._controller = options && options.controller;
	}

	set(id: string, value: unknown, time: number): void {
		const controller = this._controller;
		if (controller) {
			controller.write(id, value);
		}
	}
}
