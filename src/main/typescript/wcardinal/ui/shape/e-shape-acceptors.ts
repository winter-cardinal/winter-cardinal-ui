/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeAcceptor } from "./e-shape-acceptor";
import { EShapeAcceptorEdgeType } from "./e-shape-acceptor-edge-type";
import { EShapeAcceptorImpl } from "./e-shape-acceptor-impl";
import { EShapeType } from "./e-shape-type";
import { EShapeEmbeddedAcceptor } from "./variant/e-shape-embedded-acceptor";

export class EShapeAcceptors {
	protected static _defaults?: Map<EShapeType | null, EShapeAcceptor>;
	protected static _acceptors?: Map<EShapeType, EShapeAcceptor>;

	static set(type: EShapeType, acceptor: EShapeAcceptor): void {
		let acceptors = this._acceptors;
		if (acceptors == null) {
			acceptors = new Map<EShapeType, EShapeAcceptor>();
			this._acceptors = acceptors;
		}
		acceptors.set(type, acceptor);
	}

	static get(type: EShapeType): EShapeAcceptor {
		const acceptors = this._acceptors;
		if (acceptors != null) {
			const acceptor = acceptors.get(type);
			if (acceptor != null) {
				return acceptor;
			}
		}
		const defaults = (this._defaults ??= new Map<EShapeType, EShapeAcceptor>());
		switch (type) {
			case EShapeType.EMBEDDED:
				let embedded = defaults.get(type);
				if (embedded == null) {
					embedded = this.newDefaultEmbedded();
					defaults.set(type, embedded);
				}
				return embedded;
			case EShapeType.EMBEDDED_ACCEPTOR_EDGE:
				let edge = defaults.get(type);
				if (edge == null) {
					edge = this.newDefaultEmbeddedAcceptorEdge();
					defaults.set(type, edge);
				}
				return edge;
			default:
				let other = defaults.get(null);
				if (other == null) {
					other = this.newDefaultOther();
					defaults.set(null, other);
				}
				return other;
		}
	}

	protected static newDefaultEmbedded(): EShapeAcceptor {
		return this.initDefault(new EShapeEmbeddedAcceptor());
	}

	protected static newDefaultEmbeddedAcceptorEdge(): EShapeAcceptor {
		const result = new EShapeAcceptorImpl();
		result.add("CENTER", EShapeAcceptorEdgeType.ALL, 0, 0, 0, 0);
		return result;
	}

	protected static newDefaultOther(): EShapeAcceptor {
		return this.initDefault(new EShapeAcceptorImpl());
	}

	protected static initDefault(result: EShapeAcceptorImpl): EShapeAcceptor {
		const s = 1 / Math.sqrt(2);
		result.add("TOP", EShapeAcceptorEdgeType.ALL, 0, -0.5, 0, -1);
		result.add("LEFT", EShapeAcceptorEdgeType.ALL, -0.5, 0, -1, 0);
		result.add("RIGHT", EShapeAcceptorEdgeType.ALL, 0.5, 0, 1, 0);
		result.add("BOTTOM", EShapeAcceptorEdgeType.ALL, 0, 0.5, 0, 1);
		result.add("CENTER", EShapeAcceptorEdgeType.ALL, 0, 0, 0, 0);
		result.add("TOP_LEFT", EShapeAcceptorEdgeType.ALL, -0.5, -0.5, -s, -s);
		result.add("TOP_RIGHT", EShapeAcceptorEdgeType.ALL, 0.5, -0.5, s, -s);
		result.add("BOTTOM_LEFT", EShapeAcceptorEdgeType.ALL, -0.5, 0.5, -s, s);
		result.add("BOTTOM_RIGHT", EShapeAcceptorEdgeType.ALL, 0.5, 0.5, s, s);
		return result;
	}
}
