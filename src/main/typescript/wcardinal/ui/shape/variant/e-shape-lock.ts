export class EShapeLock {
	protected _count: number;
	protected _flag: number;

	constructor() {
		this._count = 0;
		this._flag = 0;
	}

	lock(): boolean {
		this._count += 1;
		if (this._count === 1) {
			this._flag = 0;
			return true;
		}
		return false;
	}

	unlock(): boolean {
		this._count -= 1;
		return this._count <= 0 && this._flag !== 0;
	}

	isLocked(high?: boolean): boolean {
		if (0 < this._count) {
			this._flag |= high ? 3 : 1;
			return true;
		}
		return false;
	}

	isHigh(): boolean {
		return 1 < this._flag;
	}
}
