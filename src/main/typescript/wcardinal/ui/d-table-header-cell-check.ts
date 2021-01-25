import { DTableColumn } from "./d-table-column";
import { DTableHeaderTable } from "./d-table-header";
import { DTableHeaderCellHeader } from "./d-table-header-cell";

export interface DTableHeaderCellCheckOptions {
	enable?: boolean;
	filterable?: boolean;
	emittable?: boolean;
}

export interface DTableHeaderCellCheckParent<ROW> {
	readonly column?: DTableColumn<ROW, unknown>;
	readonly columnIndex?: number;
	readonly header?: DTableHeaderCellHeader<ROW>;
}

export class DTableHeaderCellCheck<ROW> {
	protected _parent: DTableHeaderCellCheckParent<ROW>;
	protected _isEnabled: boolean;
	protected _isFilterable: boolean;
	protected _isEmittable: boolean;

	constructor( parent: DTableHeaderCellCheckParent<ROW>, options?: DTableHeaderCellCheckOptions ) {
		this._parent = parent;
		this._isEnabled = options?.enable ?? false;
		this._isFilterable = options?.filterable ?? true;
		this._isEmittable = options?.emittable ?? true;
	}

	get isEnabled(): boolean {
		return this._isEnabled;
	}

	get isFilterable(): boolean {
		return this._isFilterable;
	}

	set isFilterable( isFilterable: boolean ) {
		this._isFilterable = isFilterable;
	}

	get isEmittable(): boolean {
		return this._isEmittable;
	}

	set isEmittable( isEmittable: boolean ) {
		this._isEmittable = isEmittable;
	}

	protected newIteratee(
		table: DTableHeaderTable<ROW>,
		isChecked: boolean
	): (( row: ROW, rowIndex: number ) => boolean) | null {
		const parent = this._parent;
		const column = parent.column;
		const columnIndex = parent.columnIndex;
		if( column != null && columnIndex != null ) {
			const getter = column.getter;
			const setter = column.setter;
			if( this._isEmittable ) {
				const data = table.data;
				return ( row: ROW, rowIndex: number ): boolean => {
					if( getter( row, columnIndex ) !== isChecked ) {
						setter( row, columnIndex, isChecked );
						data.emit( "change", isChecked, ! isChecked, row, rowIndex, columnIndex, data );
						return true;
					}
					return false;
				};
			} else {
				return ( row: ROW ): boolean => {
					if( getter( row, columnIndex ) !== isChecked ) {
						setter( row, columnIndex, isChecked );
						return true;
					}
					return false;
				}
			}
		}
		return null;
	}

	public execute( isChecked: boolean ) {
		const table = this._parent.header?.table;
		if( table ) {
			const iteratee = this.newIteratee( table, isChecked );
			if( iteratee ) {
				let isChanged = false;
				if( this._isFilterable ) {
					table.data.mapped.each(( row: ROW, supplimental: unknown, index: number, unmappedIndex: number ): void => {
						if( iteratee( row, unmappedIndex ) ) {
							isChanged = true;
						}
					});
				} else {
					table.data.each(( row: ROW, index: number ): void => {
						if( iteratee( row, index ) ) {
							isChanged = true;
						}
					});
				}
				if( isChanged ) {
					table.body.update( true );
				}
			}
		}
	}
}
