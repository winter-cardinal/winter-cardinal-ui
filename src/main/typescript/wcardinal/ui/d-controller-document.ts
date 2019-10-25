/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDocument } from "./d-document";

export interface DControllerDocument<DOCUMENT extends DDocument> {
	isChanged(): boolean;
	isNew(): boolean;
	get(): DOCUMENT | null;
	getName(): string | null;
	save(): Promise<unknown> | boolean;
	saveAs( name: string ): Promise<unknown> | boolean;
	delete(): Promise<unknown> | boolean;
}
