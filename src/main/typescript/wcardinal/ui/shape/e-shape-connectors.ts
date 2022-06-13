/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "./e-shape";
import { EShapeConnector } from "./e-shape-connector";
import { EShapeConnectorLine } from "./variant/e-shape-connector-line";

export class EShapeConnectors {
	protected static _MAPPING?: Map<EShape, EShape>;

	protected static isConnector(target: EShape | null): target is EShapeConnector {
		return target instanceof EShapeConnectorLine;
	}

	protected static newMapping(
		sources: EShape[],
		destinations: EShape[],
		result?: Map<EShape, EShape>
	): Map<EShape, EShape> {
		if (result == null) {
			result = EShapeConnectors._MAPPING ??= new Map<EShape, EShape>();
			result.clear();
		}
		for (let i = 0, imax = sources.length; i < imax; ++i) {
			const fromChild = sources[i];
			const toChild = destinations[i];
			result.set(fromChild, toChild);
			this.newMapping(fromChild.children, toChild.children, result);
		}
		return result;
	}

	static moveAll(
		rootSources: EShape[],
		rootDestinations: EShape[],
		sources: EShape[],
		destinations: EShape[],
		mapping?: Map<EShape, EShape>
	): Map<EShape, EShape> | undefined {
		for (let i = 0, imax = sources.length; i < imax; ++i) {
			const source = sources[i];
			const destination = destinations[i];
			if (this.isConnector(source)) {
				if (this.isConnector(destination)) {
					const sourceEdge = source.edge;
					const destEdge = destination.edge;
					const sourceHead = sourceEdge.head;
					const sourceHeadShape = sourceHead.acceptor.shape;
					if (sourceHeadShape) {
						if (mapping == null) {
							mapping = this.newMapping(rootSources, rootDestinations);
						}
						const destHeadShape = mapping.get(sourceHeadShape);
						if (destHeadShape) {
							const destHead = destEdge.head;
							destHead.detach();
							destHead.set(destHeadShape);
							destHead.attach();

							destHeadShape.connector.remove(sourceHead);
						}
					}

					const sourceTail = sourceEdge.tail;
					const sourceTailShape = sourceTail.acceptor.shape;
					if (sourceTailShape) {
						if (mapping == null) {
							mapping = this.newMapping(rootSources, rootDestinations);
						}
						const destTailShape = mapping.get(sourceTailShape);
						if (destTailShape) {
							const destTail = destEdge.tail;
							destTail.detach();
							destTail.set(destTailShape);
							destTail.attach();

							destTailShape.connector.remove(sourceTail);
						}
					}
				}
			}
			mapping = this.moveAll(
				rootSources,
				rootDestinations,
				source.children,
				destination.children,
				mapping
			);
		}
		return mapping;
	}

	static move(from: EShape, to: EShape): void {
		const fromChildren = from.children;
		const toChildren = to.children;
		this.moveAll(fromChildren, toChildren, fromChildren, toChildren);
	}
}
