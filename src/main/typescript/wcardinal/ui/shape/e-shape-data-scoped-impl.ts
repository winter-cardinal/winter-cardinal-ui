import { EShapeDataScoped } from "./e-shape-data-scoped";
import { EShapeDataValue } from "./e-shape-data-value";

export class EShapeDataScopedImpl implements EShapeDataScoped {
	protected _data?: Map<string, EShapeDataValue[]>;

	add(id: string, value: EShapeDataValue): void {
		const data = (this._data ??= new Map<string, EShapeDataValue[]>());
		const list = data.get(id);
		if (list == null) {
			data.set(id, [value]);
		} else {
			list.push(value);
		}
	}

	set(
		id: string,
		value: unknown,
		time?: number,
		from?: number | null,
		to?: number | null
	): boolean {
		const data = this._data;
		if (data == null) {
			return false;
		}
		const datum = data.get(id);
		if (datum == null) {
			return false;
		}
		const size = datum.length;
		if (size <= 0) {
			return false;
		}
		for (let i = 0; i < size; ++i) {
			const datumValue = datum[i];
			const range = datumValue.range;

			// Range
			range.set(from, to);

			// Time
			if (time !== undefined) {
				datumValue.time = time;
			}

			// Value
			datumValue.value = value;
		}
		return true;
	}
}
