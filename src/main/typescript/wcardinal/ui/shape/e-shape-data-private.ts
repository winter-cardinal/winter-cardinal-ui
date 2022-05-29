import { EShapeDataValue } from "./e-shape-data-value";

export interface EShapeDataPrivate {
	add(id: string, value: EShapeDataValue): void;
	set(
		id: string,
		value: unknown,
		time?: number,
		from?: number | null,
		to?: number | null
	): boolean;
}
