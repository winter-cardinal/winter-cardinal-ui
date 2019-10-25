/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class EShapeResourceManagerSerialization {
	protected resources: string[];
	protected resourceToIndex: Map<string, number>;

	constructor() {
		this.resources = [];
		this.resourceToIndex = new Map<string, number>();
	}

	add( resource: string ): number {
		const resources = this.resources;
		const resourceToIndex = this.resourceToIndex;
		const result = resourceToIndex.get( resource );
		if( result != null ) {
			return result;
		}
		const index = resources.length;
		resources.push( resource );
		resourceToIndex.set( resource, index );
		return index;
	}

	serialize(): string[] {
		return this.resources;
	}
}
