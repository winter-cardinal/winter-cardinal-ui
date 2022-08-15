/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDataMapper } from "./e-shape-data-mapper";
import { EShapeDataValue } from "./e-shape-data-value";

export class EShapeDataMapperImpl implements EShapeDataMapper {
	protected static WILDCARD = "*";
	protected static SPANS: number[] = [];
	protected _sources: string[] | null;

	constructor(source?: string | null) {
		this._sources = this.newSources(source);
	}

	map(value: EShapeDataValue, destinations: string[] | null, initial: string): boolean {
		const sources = this._sources;
		if (sources == null) {
			return false;
		}

		const valueId = value.id;
		const target = valueId.toLowerCase();
		const first = sources[0];
		const firstLength = first.length;
		if (firstLength !== 0 && target.indexOf(first) !== 0) {
			return false;
		}

		const spans = EShapeDataMapperImpl.SPANS;
		spans[0] = 0;
		spans[1] = firstLength;
		const sourcesLength = sources.length;
		const targetLength = target.length;
		for (let i = 1; i < sourcesLength; ++i) {
			const ispan = i << 1;
			const source = sources[i];
			const sourceLength = source.length;
			if (sourceLength === 0) {
				spans[ispan] = targetLength;
				spans[ispan + 1] = targetLength;
			} else {
				const index = target.indexOf(source, spans[ispan - 1]);
				if (index < 0) {
					return false;
				}
				spans[ispan] = index;
				spans[ispan + 1] = index + sourceLength;
			}
		}

		// Update the ID
		if (destinations != null) {
			const destinationsLength = destinations.length;
			let id = "";
			for (let i = 0, imax = sourcesLength; i < imax; ++i) {
				const id0 = i < destinationsLength ? destinations[i] : sources[i];
				const ispan = i << 1;
				const s0 = spans[ispan + 1];
				const s1 = spans[ispan + 2];
				const id1 = target.substring(s0, i + 1 < imax ? s1 : targetLength);
				id += id0 + id1;
			}
			value.id = id;
		}

		// Update the initial value
		if (0 < initial.length) {
			value.initial = initial;
		}
		return true;
	}

	protected newSources(source?: string | null): string[] | null {
		if (source == null) {
			return null;
		}
		const trimmed = source.trim();
		if (trimmed.length <= 0) {
			return null;
		}
		return trimmed.toLowerCase().split(EShapeDataMapperImpl.WILDCARD);
	}

	public static split(target?: string | null): string[] | null {
		if (target == null) {
			return null;
		}
		const trimmed = target.trim();
		if (trimmed.length <= 0) {
			return null;
		}
		return trimmed.split(this.WILDCARD);
	}
}
