/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeAcceptor } from "./e-shape-acceptor";
import { EShapeAcceptorEdgeType } from "./e-shape-acceptor-edge-type";
import { EShapeAcceptorImpl } from "./e-shape-acceptor-impl";
import { EShapeType } from "./e-shape-type";

export class EShapeAcceptors {
	protected static _default?: EShapeAcceptor;
	protected static _typeToAcceptor?: Map<EShapeType, EShapeAcceptor>;

	static set(type: EShapeType, acceptor: EShapeAcceptor): void {
		let typeToAcceptor = this._typeToAcceptor;
		if (typeToAcceptor == null) {
			typeToAcceptor = new Map<EShapeType, EShapeAcceptor>();
			this._typeToAcceptor = typeToAcceptor;
		}
		typeToAcceptor.set(type, acceptor);
	}

	static get(type: EShapeType): EShapeAcceptor {
		return this._typeToAcceptor?.get(type) || this.getDefault();
	}

	protected static getDefault(): EShapeAcceptor {
		let result = this._default;
		if (result == null) {
			result = this.newDefault();
			this._default = result;
		}
		return result;
	}

	protected static newDefault(): EShapeAcceptor {
		const result = new EShapeAcceptorImpl();
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
