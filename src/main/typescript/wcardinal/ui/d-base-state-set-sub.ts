export interface DBaseStateSetSub {
	add(state: string, interval: number): this;
	remove(state: string): this;
	has(state: string): boolean;
	clear(): this;
}
