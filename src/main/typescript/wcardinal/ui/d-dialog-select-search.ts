import { utils } from "pixi.js";

export class DDialogSelectSearh<SEARCH_RESULT> extends utils.EventEmitter {
	protected _search: ( word: string ) => Promise<SEARCH_RESULT[]>;
	protected _id: number;
	protected _idCompleted: number;
	protected _result: SEARCH_RESULT[] | null;

	constructor( search: ( word: string ) => Promise<SEARCH_RESULT[]> ) {
		super();

		this._search = search;
		this._id = 0;
		this._idCompleted = 0;
		this._result = null;
	}

	create( args: [ string ] ): void {
		const id = ++this._id;
		this._search( args[ 0 ] ).then(( searchResult: SEARCH_RESULT[] ) => {
			if( this._id === id ) {
				this._idCompleted = id;
				this._result = searchResult;
				this.emit( "success", this, searchResult );
				this.emit( "change", this );
			}
		}, () => {
			if( this._id === id ) {
				this._idCompleted = id;
				this._result = null;
				this.emit( "fail", this );
				this.emit( "change", this );
			}
		});
		this.emit( "change", this );
	}

	isDone(): boolean {
		return this._id === this._idCompleted;
	}

	getResult(): SEARCH_RESULT[] | null {
		return this._result;
	}
}
