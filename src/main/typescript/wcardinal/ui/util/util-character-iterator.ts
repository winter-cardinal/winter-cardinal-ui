
export class UtilCharacterIterator {
	protected static _instance: UtilCharacterIterator | null = null;
	protected _target: string;
	protected _position: number;

	constructor() {
		this._target = "";
		this._position = 0;
	}

	get position(): number {
		return this._position;
	}

	set position( position: number ) {
		this._position = position;
	}

	init( target: string ): void {
		this._target = target;
		this._position = 0;
	}

	hasNext(): boolean {
		return this._position < this._target.length;
	}

	protected findNextBreak( target: string, istart: number ): number {
		const iend = target.length;
		for( let i = istart; i < iend; ++i ) {
			const code = target.charCodeAt( i );
			if( ! this.isLowSurrogate( code ) && ! this.isVariationSelector( code ) ) {
				return i;
			}
		}
		return iend;
	}

	protected isHighSurrogate( code: number ): boolean {
		return ( 0xd800 <= code && code <= 0xdbff );
	}

	protected isLowSurrogate( code: number ): boolean {
		return ( 0xdc00 <= code && code <= 0xdfff );
	}

	protected isVariationSelector( code: number ): boolean {
		return ( 0xfe00 <= code && code <= 0xfe0f );
	}

	next(): string {
		const target = this._target;
		const position = this._position;
		const nextBreak = this.findNextBreak( target, position + 1 );
		const result = target.substring( position, nextBreak );
		this._position = nextBreak;
		return result;
	}

	/**
	 * Advances the position if the next character is not equal to
	 * the given `except`.
	 *
	 * @param except
	 * @return true if the position is advanced
	 */
	advance( except?: string ): boolean {
		const target = this._target;
		const position = this._position;
		const nextBreak = this.findNextBreak( target, position + 1 );
		if( target.substring( position, nextBreak ) !== except ) {
			this._position = nextBreak;
			return true;
		}
		return false;
	}

	static from( target: string ): UtilCharacterIterator {
		if( UtilCharacterIterator._instance == null ) {
			UtilCharacterIterator._instance = new UtilCharacterIterator();
		}
		const instance = UtilCharacterIterator._instance;
		instance.init( target );
		return instance;
	}
}
