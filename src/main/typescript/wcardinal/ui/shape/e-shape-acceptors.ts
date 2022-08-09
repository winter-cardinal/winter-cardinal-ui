/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeAcceptor } from "./e-shape-acceptor";
import { EShapeAcceptorImpl } from "./e-shape-acceptor-impl";
import { EShapeAcceptorType } from "./e-shape-acceptor-type";
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
		result.add("TOP", EShapeAcceptorType.ALL, 0, -0.5, 0, -1);
		result.add("LEFT", EShapeAcceptorType.ALL, -0.5, 0, -1, 0);
		result.add("RIGHT", EShapeAcceptorType.ALL, 0.5, 0, 1, 0);
		result.add("BOTTOM", EShapeAcceptorType.ALL, 0, 0.5, 0, 1);
		result.add("CENTER", EShapeAcceptorType.ALL, 0, 0, -1, 0);
		result.add("TOP_LEFT", EShapeAcceptorType.ALL, -0.5, -0.5, -1, 0);
		result.add("TOP_RIGHT", EShapeAcceptorType.ALL, 0.5, -0.5, 0, 1);
		result.add("BOTTOM_LEFT", EShapeAcceptorType.ALL, -0.5, 0.5, -1, 0);
		result.add("BOTTOM_RIGHT", EShapeAcceptorType.ALL, 0.5, 0.5, 0, 1);
		return result;
	}
}
