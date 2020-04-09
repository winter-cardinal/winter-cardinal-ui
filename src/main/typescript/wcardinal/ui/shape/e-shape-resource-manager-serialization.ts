/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class EShapeResourceManagerSerialization {
	resources: string[];
	tags: string[];
	protected resourceToIndex: Map<string, number>;
	protected tagToIndex: Map<string, number>;

	constructor() {
		this.resources = [];
		this.tags = [];
		this.resourceToIndex = new Map<string, number>();
		this.tagToIndex = new Map<string, number>();
	}

	addResources( resource: string ): number {
		return this.add_( resource, this.resources, this.resourceToIndex );
	}

	addTag( tag: string ): number {
		return this.add_( tag, this.tags, this.tagToIndex );
	}

	protected add_( target: string, array: string[], map: Map<string, number> ): number {
		const tagToIndex = this.tagToIndex;
		const result = tagToIndex.get( target );
		if( result != null ) {
			return result;
		}
		const index = array.length;
		array.push( target );
		map.set( target, index );
		return index;
	}
}
