import { DBaseStateSet } from "./d-base-state-set";
import { DStateAwareOrValueMightBe } from "./d-state-aware";

export interface DImagePieceTintOptions {
	color?: DStateAwareOrValueMightBe<number | null>;
	alpha?: DStateAwareOrValueMightBe<number>;
}

export interface DImagePieceTint {
	color: DStateAwareOrValueMightBe<number | null>;
	alpha: DStateAwareOrValueMightBe<number>;
	set(
		color?: DStateAwareOrValueMightBe<number | null>,
		alpha?: DStateAwareOrValueMightBe<number>
	): this;
	getColor(state: DBaseStateSet): number | null;
	getAlpha(state: DBaseStateSet): number;
}
