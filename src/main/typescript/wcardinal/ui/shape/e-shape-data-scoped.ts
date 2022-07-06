import { EShapeDataValue } from "./e-shape-data-value";

export interface EShapeDataScoped {
	readonly ids: string[];

	add(id: string, value: EShapeDataValue): void;
	set(
		id: string,
		value: unknown,
		time?: number,
		from?: number | null,
		to?: number | null
	): boolean;
	toDirty(id: string): boolean;
	each(iteratee: (id: string) => boolean | void): string | null;
}
