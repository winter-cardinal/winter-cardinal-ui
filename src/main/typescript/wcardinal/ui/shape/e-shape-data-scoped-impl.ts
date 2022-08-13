import { EShapeDataScoped } from "./e-shape-data-scoped";
import { EShapeDataValue } from "./e-shape-data-value";
import { EShapeDataValueState } from "./e-shape-data-value-state";

export class EShapeDataScopedImpl implements EShapeDataScoped {
	protected _data?: Map<string, EShapeDataValue[]>;

	get ids(): string[] {
		const data = this._data;
		if (data == null) {
			return [];
		}
		const result: string[] = [];
		data.forEach((value, id): void => {
			result.push(id);
		});
		return result;
	}

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
		state?: EShapeDataValueState,
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

			// State
			if (state !== undefined) {
				datumValue.state = state;
			}

			// Value
			datumValue.value = value;
		}
		return true;
	}

	toDirty(id: string): boolean {
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
			datum[i].toDirty();
		}
		return true;
	}

	each(iteratee: (id: string) => boolean | void): string | null {
		const data = this._data;
		if (data == null) {
			return null;
		}
		let result: string | null = null;
		data.forEach((values, id): void => {
			if (result == null) {
				if (iteratee(id) === false) {
					result = id;
				}
			}
		});
		return result;
	}
}
