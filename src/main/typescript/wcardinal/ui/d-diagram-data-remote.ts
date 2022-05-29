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

export interface DDiagramDataRemote {
	set(id: string, value: unknown, time: number): boolean;
}
