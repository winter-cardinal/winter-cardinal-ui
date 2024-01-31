export interface DImagePieceMarginOptions {
	vertical?: number;
	horizontal?: number;
}

export interface DImagePieceMargin {
	vertical: number;
	horizontal: number;
	set(vertical?: number, horizontal?: number): this;
}
