import { EShapeType } from "../e-shape-type";
import { EShapeActionRuntime } from "./e-shape-action-runtime";

export class EShapeActionRuntimes {
	static _typeToRuntimes?: Map<EShapeType, EShapeActionRuntime[]>;

	static add(type: EShapeType, runtime: EShapeActionRuntime): void {
		let typeToRuntimes = this._typeToRuntimes;
		if (typeToRuntimes == null) {
			typeToRuntimes = new Map<EShapeType, EShapeActionRuntime[]>();
			this._typeToRuntimes = typeToRuntimes;
		}
		let runtimes = typeToRuntimes.get(type);
		if (runtimes == null) {
			runtimes = [runtime];
			typeToRuntimes.set(type, runtimes);
		} else {
			runtimes.push(runtime);
		}
	}

	static get(type: EShapeType): EShapeActionRuntime[] | null | undefined {
		const typeToRuntimes = this._typeToRuntimes;
		if (typeToRuntimes != null) {
			return typeToRuntimes.get(type);
		}
	}
}
