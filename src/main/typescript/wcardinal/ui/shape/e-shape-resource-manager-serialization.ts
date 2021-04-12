/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class EShapeResourceManagerSerialization {
	resources: string[];
	tags: string[];
	pieces: string[];
	protected resourceToIndex: Map<string, number>;
	protected tagToIndex: Map<string, number>;
	protected pieceToIndex: Map<string, number>;
	protected uuids: Set<number>;
	protected uuidNext: number;

	constructor() {
		this.resources = [];
		this.resourceToIndex = new Map<string, number>();
		this.tags = [];
		this.tagToIndex = new Map<string, number>();
		this.pieces = [];
		this.pieceToIndex = new Map<string, number>();
		this.uuids = new Set<number>();
		this.uuidNext = 0;
	}

	addResource(resource: string): number {
		return this.add_(resource, this.resources, this.resourceToIndex);
	}

	addTag(tag: string): number {
		return this.add_(tag, this.tags, this.tagToIndex);
	}

	addPiece(piece: string): number {
		return this.add_(piece, this.pieces, this.pieceToIndex);
	}

	addUuid(uuid: number): number {
		if (uuid !== 0) {
			const uuids = this.uuids;
			if (uuids.has(uuid)) {
				return 0;
			} else {
				uuids.add(uuid);
				return uuid;
			}
		}
		return 0;
	}

	updateUuid(uuid: number): number {
		const uuids = this.uuids;
		if (uuid !== 0) {
			return uuid;
		} else {
			const newUuid = this.newUuid();
			uuids.add(newUuid);
			return newUuid;
		}
	}

	newUuid(): number {
		const uuids = this.uuids;
		let uuidNext = this.uuidNext;
		while (true) {
			uuidNext += 1;
			if (uuidNext !== 0 && !uuids.has(uuidNext)) {
				this.uuidNext = uuidNext;
				return uuidNext;
			}
		}
	}

	protected add_(target: string, array: string[], map: Map<string, number>): number {
		const result = map.get(target);
		if (result != null) {
			return result;
		}
		const index = array.length;
		array.push(target);
		map.set(target, index);
		return index;
	}
}
