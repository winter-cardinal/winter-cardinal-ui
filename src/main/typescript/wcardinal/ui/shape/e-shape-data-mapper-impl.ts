/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDataMapper } from "./e-shape-data-mapper";
import { EShapeDataValue } from "./e-shape-data-value";

export class EShapeDataMapperImpl implements EShapeDataMapper {
	protected static SEPARATOR = ".";
	protected static WILDCARD = "*";

	protected _sources: string[] | null;
	protected _sourceIndices: number[];
	protected _targetIndices: number[];
	protected _targetIndicesLength: number;

	constructor(source?: string | null) {
		const sources = this.newSources(source);
		this._sources = sources;
		this._sourceIndices = this.newSourceIndices(sources);
		this._targetIndices = [];
		this._targetIndicesLength = 0;
	}

	map(value: EShapeDataValue, destinations: string[] | null, initial: string): void {
		const sources = this._sources;
		if (sources == null) {
			return;
		}
		const valueId = value.id;
		const target = valueId.toLowerCase();
		this.calcTargetIndices(target);
		const targetIndices = this._targetIndices;
		const targetIndicesLength = this._targetIndicesLength;
		const sourcesLength = sources.length;
		if (sourcesLength + 1 !== targetIndicesLength) {
			return;
		}

		for (let i = 0; i < sourcesLength; ++i) {
			const source = sources[i];
			const targetIndex0 = targetIndices[i];
			const targetIndex1 = targetIndices[i + 1];
			if (
				source !== EShapeDataMapperImpl.WILDCARD &&
				source !== target.substring(targetIndex0 + 1, targetIndex1)
			) {
				return;
			}
		}

		// Destination
		if (destinations != null) {
			const id = this.newValueId(destinations, valueId, targetIndices);
			if (id != null) {
				value.id = id;
			}
		}

		// Initial
		if (0 < initial.length) {
			value.initial = initial;
		}
	}

	protected newSources(source?: string | null): string[] | null {
		if (source == null || source.length <= 0) {
			return null;
		}
		return source.toLowerCase().split(EShapeDataMapperImpl.SEPARATOR);
	}

	protected newValueId(
		destinations: string[],
		target: string,
		targetIndices: number[]
	): string | null {
		let result: string = "";
		let delimiter = "";
		const wildcard = EShapeDataMapperImpl.WILDCARD;
		const separator = EShapeDataMapperImpl.SEPARATOR;
		const sourceIndices = this._sourceIndices;
		const sourceIndicesLength = sourceIndices.length;
		let index = sourceIndicesLength;
		for (let i = 0, imax = destinations.length; i < imax; ++i) {
			const d = destinations[imax - 1 - i];
			if (d === wildcard) {
				index -= 1;
				if (0 <= index) {
					const sourceIndex = sourceIndices[index];
					const targetIndex0 = targetIndices[sourceIndex];
					const targetIndex1 = targetIndices[sourceIndex + 1];
					result = target.substring(targetIndex0 + 1, targetIndex1) + delimiter + result;
				} else {
					return null;
				}
			} else {
				result = d + delimiter + result;
			}
			delimiter = separator;
		}
		return result;
	}

	protected calcTargetIndices(target: string): void {
		const targetIndices = this._targetIndices;
		let size = 1;
		targetIndices[0] = -1;
		let index0 = -1;
		let index1 = -1;
		while (0 <= (index1 = target.indexOf(EShapeDataMapperImpl.SEPARATOR, index0 + 1))) {
			targetIndices[size] = index1;
			index0 = index1;
			size += 1;
		}
		targetIndices[size] = target.length;
		size += 1;
		this._targetIndicesLength = size;
	}

	protected newSourceIndices(sources: string[] | null): number[] {
		const result: number[] = [];
		if (sources != null) {
			const wildcard = EShapeDataMapperImpl.WILDCARD;
			for (let i = 0, imax = sources.length; i < imax; ++i) {
				const s = sources[i];
				if (s === wildcard) {
					result.push(i);
				}
			}
		}
		return result;
	}

	public static split(target?: string | null): string[] | null {
		if (target == null || target.length <= 0) {
			return null;
		}
		return target.split(this.SEPARATOR);
	}
}
