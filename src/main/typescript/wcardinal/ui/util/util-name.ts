/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class UtilName {
	protected static _mapping: { [ key: string]: number } = {};

	static create( type: string ) {
		const mapping = this._mapping;
		if( type in mapping ) {
			return `${type} ${++mapping[ type ]}`;
		} else {
			mapping[ type ] = 1;
			return `${type} 1`;
		}
	}
}
