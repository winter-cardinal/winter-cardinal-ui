/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * {@link DDialogSelect} search object.
 */
export interface DDialogSelectSearch<VALUE> {
	create(args: [string]): void;
	on(event: "success", handler: (e: unknown, searchResults: VALUE[]) => void): void;
	on(event: "fail", handler: () => void): void;
	on(event: "change", handler: () => void): void;
	isDone(): boolean;
}
