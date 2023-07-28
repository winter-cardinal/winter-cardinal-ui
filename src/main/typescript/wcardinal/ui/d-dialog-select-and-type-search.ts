/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * {@link DDialogSelectWithType} search object.
 */
export interface DDialogSelectAndTypeSearch<VALUE> {
	create(args: [string, number]): void;
	on(event: "success", handler: (e: unknown, searchResults: VALUE[]) => void): void;
	on(event: "fail", handler: () => void): void;
	on(event: "change", handler: () => void): void;
	isDone(): boolean;
}
