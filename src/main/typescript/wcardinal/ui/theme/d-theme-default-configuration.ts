export interface DThemeDefaultConfiguration {
	/**
	 * Get hex color code of d-theme base border in default.
	 * @returns d-theme base border color.
	 */
	getBaseBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme base border in focused.
	 * @returns d-theme base border color.
	 */
	getBaseFocusedBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme base background in default.
	 * @returns d-theme base background color.
	 */
	getBaseBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme base outline in default.
	 * @returns d-theme base outline color.
	 */
	getBaseOutlineColor(): number | null;

	/**
	 * Get hex color code of d-theme board background in default.
	 * @returns d-theme board background color.
	 */
	getBoardBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme board border in default.
	 * @returns d-theme board border color.
	 */
	getBoardBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme button ambient when active.
	 * @returns d-theme button ambient background color.
	 */
	getButtonAmbientActiveBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme button ambient background in active.
	 * @returns d-theme button ambient background color.
	 */
	getButtonAmbientBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme button ambient border in default.
	 * @returns d-theme button ambient border color.
	 */
	getButtonAmbientBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme button base background in default.
	 * @returns d-theme button base background color.
	 */
	getButtonBaseBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme button base background in disabled.
	 * @returns d-theme button base background color.
	 */
	getButtonBaseDisabledBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme button base background in active.
	 * @returns d-theme button base background color.
	 */
	getButtonBaseActiveBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme button base background in pressed.
	 * @returns d-theme button base background color.
	 */
	getButtonBasePressedBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme button base background in focused.
	 * @returns d-theme button base background color.
	 */
	getButtonBaseFocusedBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme button base in active.
	 * @returns d-theme button base color.
	 */
	getButtonBaseColor(): number;

	/**
	 * Get hex color code of d-theme button base border in default.
	 * @returns d-theme button base border color.
	 */
	getButtonBaseBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme button base border in disabled.
	 * @returns d-theme button base border color.
	 */
	getButtonBaseDisabledBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme button check background in default.
	 * @returns d-theme button check background color.
	 */
	getButtonCheckBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme button check image tint in default.
	 * @returns d-theme button check image tint color.
	 */
	getButtonCheckImageTintColor(): number | null;

	/**
	 * Get hex color code of d-theme button check image tint in disabled.
	 * @returns d-theme button check image tint color.
	 */
	getButtonCheckImageTintDisabledColor(): number | null;

	/**
	 * Get hex color code of d-theme button check image tint in focused.
	 * @returns d-theme button check image tint color.
	 */
	getButtonCheckImageTintFocusedColor(): number | null;

	/**
	 * Get hex color code of d-theme button color new text in default.
	 * @returns d-theme button color new text tint color.
	 */
	getButtonColorNewTextColor(): number;

	/**
	 * Get hex color code of d-theme button color image tint in default.
	 * @returns d-theme button color image tint color.
	 */
	getButtonColorImageTintColor(): number | null;

	/**
	 * Get hex color code of d-theme button danger background in default.
	 * @returns d-theme button danger background color.
	 */
	getButtonDangerBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme button danger background in disabled.
	 * @returns d-theme button danger background color.
	 */
	getButtonDangerDisabledBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme button danger background in pressed.
	 * @returns d-theme button danger background color.
	 */
	getButtonDangerPressedBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme button danger background in focused.
	 * @returns d-theme button danger background color.
	 */
	getButtonDangerFocusedBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme button danger border in default.
	 * @returns d-theme button danger border color.
	 */
	getButtonDangerBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme button danger border in disabled.
	 * @returns d-theme button danger border color.
	 */
	getButtonDangerDisabledBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme button danger in default.
	 * @returns d-theme button danger color.
	 */
	getButtonDangerColor(): number;

	/**
	 * Get hex color code of d-theme button primary background in default.
	 * @returns d-theme button danger primary background color.
	 */
	getButtonPrimaryBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme button primary background in disabled.
	 * @returns d-theme button danger primary background color.
	 */
	getButtonPrimaryDisabledBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme button primary background in pressed.
	 * @returns d-theme button danger primary background color.
	 */
	getButtonPrimaryPressedBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme button primary background in focused.
	 * @returns d-theme button danger primary background color.
	 */
	getButtonPrimaryFocusedBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme button primary border in default.
	 * @returns d-theme button danger primary border color.
	 */
	getButtonPrimaryBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme button primary border in disabled.
	 * @returns d-theme button danger primary border color.
	 */
	getButtonPrimaryDisabledBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme button primary in default.
	 * @returns d-theme button danger primary color.
	 */
	getButtonPrimaryColor(): number;

	/**
	 * Get hex color code of d-theme button radio background in default.
	 * @returns d-theme button radio background color.
	 */
	getButtonRadioBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme button radio image tint in default.
	 * @returns d-theme button radio image tint color.
	 */
	getButtonRadioImageTintColor(): number | null;

	/**
	 * Get hex color code of d-theme button radio image tint in disabled.
	 * @returns d-theme button radio image tint color.
	 */
	getButtonRadioDisabledImageTintColor(): number | null;

	/**
	 * Get hex color code of d-theme button radio image tint in focused.
	 * @returns d-theme button radio image tint color.
	 */
	getButtonRadioFocusedImageTintColor(): number | null;

	/**
	 * Get hex color code of d-theme canvas container background in default.
	 * @returns d-theme canvas container background color.
	 */
	getCanvasContainerBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme canvas container border in default.
	 * @returns d-theme canvas container border color.
	 */
	getCanvasContainerBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme canvas background in default.
	 * @returns d-theme canvas background color.
	 */
	getCanvasBackgroundColor(): number;

	/**
	 * Get hex color code of d-theme canvas border in default.
	 * @returns d-theme canvas border color.
	 */
	getCanvasBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme content border in default.
	 * @returns d-theme content border color.
	 */
	getContentBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme dialog select list background in default.
	 * @returns d-theme dialog select list background color.
	 */
	getDialogSelectListBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme dialog select list border in default.
	 * @returns d-theme dialog select list border color.
	 */
	getDialogSelectListBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme dialog background in default.
	 * @returns d-theme dialog background color.
	 */
	getDialogBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme dialog border in default.
	 * @returns d-theme dialog border color.
	 */
	getDialogBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme expandable header background in default.
	 * @returns d-theme expandable header background color.
	 */
	getExpandableHeaderBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme expandable header background in disabled.
	 * @returns d-theme expandable header background color.
	 */
	getExpandableHeaderDisabledBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme expandable header background in focused.
	 * @returns d-theme expandable header background color.
	 */
	getExpandableHeaderFocusedBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme expandable header background in active.
	 * @returns d-theme expandable header background color.
	 */
	getExpandableHeaderActiveBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme expandable header border in default.
	 * @returns d-theme expandable header border color.
	 */
	getExpandableHeaderBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme expandable background in default.
	 * @returns d-theme expandable background color.
	 */
	getExpandableBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme expandable background in active.
	 * @returns d-theme expandable background color.
	 */
	getExpandableActiveBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme font in default.
	 * @returns d-theme font color.
	 */
	getFontColor(): number;

	/**
	 * Get hex color code of d-theme input background in default.
	 * @returns d-theme input background color.
	 */
	getInputBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme input background in disabled.
	 * @returns d-theme input background color.
	 */
	getInputDisabledBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme input background in focused.
	 * @returns d-theme input background color.
	 */
	getInputFocusedBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme input border in default.
	 * @returns d-theme input border color.
	 */
	getInputBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme input in invalid.
	 * @returns d-theme input color.
	 */
	getInputInvalidColor(): number | null;

	/**
	 * Get hex color code of d-theme layout space background in default.
	 * @returns d-theme layout space background color.
	 */
	getLayoutSpaceBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme layout space border in default.
	 * @returns d-theme layout space border color.
	 */
	getLayoutSpaceBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme layout background in default.
	 * @returns d-theme layout background color.
	 */
	getLayoutBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme layout border in default.
	 * @returns d-theme layout border color.
	 */
	getLayoutBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme list item separator border in default.
	 * @returns d-theme list item separator border color.
	 */
	getListItemSeparatorBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme list item background in default.
	 * @returns d-theme list item background color.
	 */
	getListItemBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme list item background in disabled.
	 * @returns d-theme list item background color.
	 */
	getListItemDisabledBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme list item background in active.
	 * @returns d-theme list item background color.
	 */
	getListItemActiveBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme list item background in focused.
	 * @returns d-theme list item background color.
	 */
	getListItemFocusedBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme list item border in default.
	 * @returns d-theme list item border color.
	 */
	getListItemBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme list background in default.
	 * @returns d-theme list background color.
	 */
	getListBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme menu bar item background in default.
	 * @returns d-theme menu bar item background color.
	 */
	getMenuBarItemBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme menu bar item background in disabled.
	 * @returns d-theme menu bar item background color.
	 */
	getMenuBarItemDisabledBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme menu bar item background in active.
	 * @returns d-theme menu bar item background color.
	 */
	getMenuBarItemActiveBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme menu bar item background in pressed.
	 * @returns d-theme menu bar item background color.
	 */
	getMenuBarItemPressedBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme menu bar item background in focused.
	 * @returns d-theme menu bar item background color.
	 */
	getMenuBarItemFocusedBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme menu bar item border in default.
	 * @returns d-theme menu bar item border color.
	 */
	getMenuBarItemBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme menu bar background in default.
	 * @returns d-theme menu bar background color.
	 */
	getMenubarBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme menu bar border in default.
	 * @returns d-theme menu bar border color.
	 */
	getMenubarBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme menu item expandable background in default.
	 * @returns d-theme menu item expandable background color.
	 */
	getMenuItemExpandableBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme menu item expandable background in active.
	 * @returns d-theme menu item expandable background color.
	 */
	getMenuItemExpandableActiveBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme menu sided background in default.
	 * @returns d-theme menu sided background color.
	 */
	getMenuSidedBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme menu sided border in default.
	 * @returns d-theme menu sided border color.
	 */
	getMenuSidedBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme menu background in default.
	 * @returns d-theme menu background color.
	 */
	getMenuBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme pane background in default.
	 * @returns d-theme pane background color.
	 */
	getPaneBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme picker color gradient background in default.
	 * @returns d-theme picker color gradient background color.
	 */
	getPickerColorGradientBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme picker color gradient border in default.
	 * @returns d-theme picker color gradient border color.
	 */
	getPickerColorGradientBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme picker color main pointer in default.
	 * @returns d-theme picker color main pointer color.
	 */
	getPickerColorMainPointerColor(): number;

	/**
	 * Get hex color code of d-theme picker color base pointer in default.
	 * @returns d-theme picker color base pointer color.
	 */
	getPickerColorBasePointerColor(): number;

	/**
	 * Get hex color code of d-theme picker color background in default.
	 * @returns d-theme picker color background color.
	 */
	getPickerColorBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme picker color border in default.
	 * @returns d-theme picker color border color.
	 */
	getPickerColorBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme picker datetime button back in default.
	 * @returns d-theme picker datetime button back color.
	 */
	getPickerDatetimeButtonBackColor(): number;

	/**
	 * Get hex color code of d-theme picker datetime button next in default.
	 * @returns d-theme picker datetime button next color.
	 */
	getPickerDatetimeButtonNextColor(): number;

	/**
	 * Get hex color code of d-theme picker datetime label date in default.
	 * @returns d-theme picker datetime label date color.
	 */
	getPickerDatetimeLabelDateColor(): number;

	/**
	 * Get hex color code of d-theme picker datetime label in default.
	 * @returns d-theme picker datetime label color.
	 */
	getPickerDatetimeLabelColor(): number;

	/**
	 * Get hex color code of d-theme picker datetime space background in default.
	 * @returns d-theme picker datetime space background color.
	 */
	getPickerDatetimeSpaceBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme picker datetime space border in default.
	 * @returns d-theme picker datetime space border color.
	 */
	getPickerDatetimeSpaceBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme scroll bar thumb background in default.
	 * @returns d-theme scroll bar thumb background color.
	 */
	getScrollBarThumbBackgroundColor(): number;

	/**
	 * Get hex color code of d-theme scroll bar thumb background in hover.
	 * @returns d-theme scroll bar thumb background color.
	 */
	getScrollBarThumbHoverdBackgroundColor(): number;

	/**
	 * Get hex color code of d-theme scroll bar thumb border in default.
	 * @returns d-theme scroll bar thumb border color.
	 */
	getScrollBarThumbBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme scroll bar background in default.
	 * @returns d-theme scroll bar background color.
	 */
	getScrollBarBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme table body cell input integer outline in disabled.
	 * @returns d-theme table body cell input integer outline color.
	 */
	getTableBodyCellInputIntegerDisabledOutlineColor(): number | null;

	/**
	 * Get hex color code of d-theme table body cell input real outline in disabled.
	 * @returns d-theme table body cell input real outline color.
	 */
	getTableBodyCellInputRealDisabledOutlineColor(): number | null;

	/**
	 * Get hex color code of d-theme table body cell input text outline in disabled.
	 * @returns d-theme table body cell input text outline color.
	 */
	getTableBodyCellInputTextDisabledOutlineColor(): number | null;

	/**
	 * Get hex color code of d-theme table body cells background in default.
	 * @returns d-theme table body cells background color.
	 */
	getTableBodyCellsBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme table body cells background in invalid.
	 * @returns d-theme table body cells background color.
	 */
	getTableBodyCellsInvalidBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme table body cells background in active.
	 * @returns d-theme table body cells background color.
	 */
	getTableBodyCellsActiveBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme table body cells border in default.
	 * @returns d-theme table body cells botder color.
	 */
	getTableBodyCellsBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme table body cells image tint in default.
	 * @returns d-theme table body cells image tint color.
	 */
	getTableBodyCellsImageTintColor(): number | null;

	/**
	 * Get hex color code of d-theme table body cells image tint in disabled.
	 * @returns d-theme table body cells image tint color.
	 */
	getTableBodyCellsDisabledImageTintColor(): number | null;

	/**
	 * Get hex color code of d-theme table body cells image tint in focused.
	 * @returns d-theme table body cells image tint color.
	 */
	getTableBodyCellsFocusedImageTintColor(): number | null;

	/**
	 * Get hex color code of d-theme table body row even background in default.
	 * @returns d-theme table body row even background color.
	 */
	getTableBodyRowEvenBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme table body row even background in disabled.
	 * @returns d-theme table body row even background color.
	 */
	getTableBodyRowEvenDisabledBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme table body row even background in active.
	 * @returns d-theme table body row even background color.
	 */
	getTableBodyRowEvenActiveBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme table body row even background in focused.
	 * @returns d-theme table body row even background color.
	 */
	getTableBodyRowEvenFocusedBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme table body row odd background in default.
	 * @returns d-theme table body row odd background color.
	 */
	getTableBodyRowOddBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme table body row odd background in disabled.
	 * @returns d-theme table body row odd background color.
	 */
	getTableBodyRowOddDisabledBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme table body row odd background in active.
	 * @returns d-theme table body row odd background color.
	 */
	getTableBodyRowOddActiveBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme table body row odd background in focused.
	 * @returns d-theme table body row odd background color.
	 */
	getTableBodyRowOddFocusedBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme table body border in default.
	 * @returns d-theme table body border color.
	 */
	getTableBodyBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme table header background in default.
	 * @returns d-theme table header background color.
	 */
	getTableHeaderBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme table header background in disabled.
	 * @returns d-theme table header background color.
	 */
	getTableHeaderDisableBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme table header background in active.
	 * @returns d-theme table header background color.
	 */
	getTableHeaderActiveBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme table header background in pressed.
	 * @returns d-theme table header background color.
	 */
	getTableHeaderPressedBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme table header background in focused.
	 * @returns d-theme table header background color.
	 */
	getTableHeaderFocusedBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme table row border in default.
	 * @returns d-theme table row border color.
	 */
	getTableRowBorderColor(): number | null;

	/**
	 * Get hex color code of d-theme table background in default.
	 * @returns d-theme table background color.
	 */
	getTableBackgroundColor(): number | null;

	/**
	 * Get hex color code of d-theme table border in default.
	 * @returns d-theme table border color.
	 */
	getTableBorderColor(): number | null;
}
