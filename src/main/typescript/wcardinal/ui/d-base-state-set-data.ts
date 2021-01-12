/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSetDataLike } from "./d-base-state-set-data-like";

/**
 * A storage for state-related data.
 * The changes to this storage do not emit state change events.
 */
export interface DBaseStateSetData {
	set( key: string, data: unknown ): this;
	get( key: string ): undefined | unknown;
	delete( key: string ): boolean;
	clear(): this;
	each( iteratee: ( data: unknown, key: unknown ) => void ): this;
	size(): number;
	copy( other: DBaseStateSetData ): this;
	toArray(): DBaseStateSetDataLike;
	toString(): string;
}
