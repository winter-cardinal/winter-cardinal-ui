/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { isString } from "../../util/is-string";
import { EShape } from "../e-shape";
import { EShapeGradientLike, EShapeGradientPointLike } from "../e-shape-gradient";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";

const parse = (target: string): number[] | null => {
	try {
		return JSON.parse(target) as number[];
	} catch (e) {
		return null;
	}
};

const toGradientLike = (target: string): EShapeGradientLike | undefined => {
	const parsed = parse(target);
	if (parsed == null || parsed.length < 7) {
		return undefined;
	} else {
		const direction = parsed[0];
		const points: EShapeGradientPointLike[] = [];
		for (let i = 1, imax = parsed.length; i < imax; i += 3) {
			points.push({
				color: parsed[i + 0],
				alpha: parsed[i + 1],
				position: parsed[i + 2]
			});
		}
		return {
			points,
			direction
		};
	}
};

export const deserializeGradient = (
	index: number,
	manager: EShapeResourceManagerDeserialization,
	result: EShape
): void => {
	const resources = manager.resources;
	if (0 <= index && index < resources.length) {
		const serialized = resources[index];
		if (isString(serialized)) {
			result.gradient = toGradientLike(serialized);
		}
	}
};
