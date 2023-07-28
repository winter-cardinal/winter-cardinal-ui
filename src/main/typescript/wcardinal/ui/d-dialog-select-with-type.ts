import { DDialogSelectAndTypeSearch } from "./d-dialog-select-and-type-search";
import { DDialogSelectAndTypeSearhDismissableImpl } from "./d-dialog-select-and-type-search-dismissable-impl";
import { DDialogSelectAndTypeSearhImpl } from "./d-dialog-select-and-type-search-impl";
import { DDialogSelectBase, DDialogSelectBaseOptions, DThemeDialogSelectBase } from "./d-dialog-select-base";
import { DInputSearch } from "./d-input-search";
import { DLayoutHorizontalOptions } from "./d-layout-horizontal";
import { DLayoutSpace } from "./d-layout-space";
import { DSelect, DSelectOptions } from "./d-select";
import { UtilTransition } from "./util/util-transition";

export declare type DDialogSelectWithTypeSearchFunction<VALUE> = (
	word: string,
	type: number
) => Promise<VALUE[]>;

export interface DDialogSelectWithTypeController<VALUE> {
	search: DDialogSelectAndTypeSearch<VALUE> | DDialogSelectWithTypeSearchFunction<VALUE>;
}
export interface DDialogSelectWithTypeOptions<
	VALUE,
	THEME extends DThemeDialogSelectBase<VALUE> = DThemeDialogSelectBase<VALUE>
> extends DDialogSelectBaseOptions<VALUE, THEME> {
	controller?: DDialogSelectWithTypeController<VALUE>;
	type?: DSelectOptions<number>;
}

export class DDialogSelectWithType<
	VALUE = unknown,
	THEME extends DThemeDialogSelectBase<VALUE> = DThemeDialogSelectBase<VALUE>,
	OPTIONS extends DDialogSelectWithTypeOptions<VALUE, THEME> = DDialogSelectWithTypeOptions<
		VALUE,
		THEME
	>
> extends DDialogSelectBase<VALUE, THEME, OPTIONS> {
	protected _typeSelection?: DSelect<number>;
	protected _search?: DDialogSelectAndTypeSearch<VALUE>;

	constructor(options?: OPTIONS) {
		super(options);
		// Controller binding
		const search = this.search;
		const transition = new UtilTransition();
		search.on("success", (e: unknown, results: VALUE[]): void => {
			if (0 < results.length) {
				transition.hide();
			} else {
				transition.show(this.noteNoItemsFound);
			}
			this.onSearched(results);
		});
		search.on("fail", (): void => {
			transition.show(this.noteError);
			this.onSearched([]);
		});
		search.on("change", (): void => {
			if (!search.isDone()) {
				const noteSearching = this.noteSearching;
				if (noteSearching) {
					transition.show(noteSearching);
				}
			}
		});
	}

	protected override toInputLayoutOptions(
		input: DInputSearch,
		theme: THEME,
		options: OPTIONS | undefined
	): DLayoutHorizontalOptions {
		const margin = this.toInputMargin(theme, options);
		return {
			width: "padding",
			height: "auto",
			children: [
				new DLayoutSpace({ width: margin }),
				this.typeSelection ?? null,
				input,
				new DLayoutSpace({ width: margin })
			]
		};
	}

	protected get typeSelection(): DSelect<number> | undefined {
		let result = this._typeSelection;
		if (result == null) {
			result = this.newTypeSelection();
			this._typeSelection = result;
		}
		return result;
	}

	protected newTypeSelection(): DSelect<number> | undefined {
		const typeOptions = this.options?.type;
		let result: DSelect<number> | undefined = undefined;
		if (typeOptions != null) {
			result = new DSelect(typeOptions);
			result.on("change", (value: number) => {
				this.search.create([this.input.value, value]);
			});
			return result;
		}
		return result;
	}

	protected override newInput(): DInputSearch {
		const result = new DInputSearch(this.toInputOptions(this.theme, this._options));
		result.on("input", (value: string): void => {
			this.search.create([value, this.typeSelection?.value ?? 0]);
		});
		return result;
	}

	protected get search(): DDialogSelectAndTypeSearch<VALUE> {
		let result = this._search;
		if (result == null) {
			result = this.newSearch();
			this._search = result;
		}
		return result;
	}

	protected newSearch(): DDialogSelectAndTypeSearch<VALUE> {
		const options = this._options;
		if (options) {
			const controller = options.controller;
			if (controller) {
				const dismiss = options.dismiss;
				const search = controller.search;
				if ("create" in search) {
					if (dismiss != null) {
						return new DDialogSelectAndTypeSearhDismissableImpl(search, dismiss);
					} else {
						return search;
					}
				} else {
					if (dismiss != null) {
						return new DDialogSelectAndTypeSearhDismissableImpl(
							new DDialogSelectAndTypeSearhImpl(search),
							dismiss
						);
					} else {
						return new DDialogSelectAndTypeSearhImpl(search);
					}
				}
			}
		}
		return new DDialogSelectAndTypeSearhImpl();
	}

	protected override onOpen(): void {
		super.onOpen();
		this.list.selection.clear();
		this.search.create([this.input.value, this.typeSelection?.value ?? 0]);
	}
}
