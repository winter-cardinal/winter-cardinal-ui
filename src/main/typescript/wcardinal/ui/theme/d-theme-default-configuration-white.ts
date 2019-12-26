import { UtilRgb } from "../util";
import { DThemeDefaultConfiguration } from "./d-theme-default-configuration";

export class DThemeDefaultConfigurationWhite implements DThemeDefaultConfiguration {
	// d-theme-base
	getBaseBorderColor(): number | null {
		return null;
	}

	getBaseFocusedBorderColor(): number | null {
		return 0x3399ff;
	}

	getBaseBackgroundColor(): number | null {
		return null;
	}

	getBaseOutlineColor(): number | null {
		return null;
	}

	// d-theme-board
	getBoardBackgroundColor(): number | null {
		return 0xf2f2f2;
	}

	getBoardBorderColor(): number | null {
		return null;
	}

	// d-theme-button-ambient
	getButtonAmbientActiveBackgroundColor(): number | null {
		return 0x3399ff;
	}

	getButtonAmbientBackgroundColor(): number | null {
		return 0xcccccc;
	}

	getButtonAmbientBorderColor(): number | null {
		return null;
	}

	// d-theme-button-basegetButtonBaseDisabledBackgroundColor
	getButtonBaseBackgroundColor(): number | null {
		return 0xffffff;
	}

	getButtonBaseActiveBackgroundColor(): number | null {
		return 0x3399ff;
	}

	getButtonBasePressedBackgroundColor(): number | null {
		return UtilRgb.darken(0xffffff, 0.017);
	}

	getButtonBaseFocusedBackgroundColor(): number | null {
		return UtilRgb.darken(0xffffff, 0.034);
	}

	getButtonBaseDisabledBackgroundColor(): number | null {
		return null;
	}

	getButtonBaseColor(): number {
		return 0xffffff;
	}

	getButtonBaseBorderColor(): number | null {
		return null;
	}

	getButtonBaseDisabledBorderColor(): number | null {
		return 0xe5e5e5;
	}

	// d-theme-button-check
	getButtonCheckBackgroundColor(): number | null {
		return 0xcccccc;
	}

	getButtonCheckImageTintColor(): number | null {
		return 0x3399ff;
	}

	getButtonCheckImageTintDisabledColor(): number | null {
		return 0xcccccc;
	}

	getButtonCheckImageTintFocusedColor(): number | null {
		return UtilRgb.darken( 0xcccccc, 0.1 );
	}

	// d-theme-button-color
	getButtonColorNewTextColor(): number {
		return 0xffffff;
	}

	getButtonColorImageTintColor(): number | null {
		return null;
	}

	// d-theme-button-danger
	getButtonDangerBackgroundColor(): number | null {
		return 0xff5566;
	}

	getButtonDangerDisabledBackgroundColor(): number | null {
		return null;
	}

	getButtonDangerPressedBackgroundColor(): number | null {
		return UtilRgb.darken( 0xff5566, 0.2 );
	}

	getButtonDangerFocusedBackgroundColor(): number | null {
		return UtilRgb.darken( 0xff5566, 0.1 );
	}

	getButtonDangerBorderColor(): number | null {
		return null;
	}

	getButtonDangerDisabledBorderColor(): number | null {
		return 0xe5e5e5;
	}

	getButtonDangerColor(): number {
		return 0xffffff;
	}

	// e-theme-button-primary
	getButtonPrimaryBackgroundColor(): number | null {
		return 0x3399ff;
	}

	getButtonPrimaryDisabledBackgroundColor(): number | null {
		return null;
	}

	getButtonPrimaryPressedBackgroundColor(): number | null {
		return UtilRgb.darken( 0x3399ff, 0.2 );
	}

	getButtonPrimaryFocusedBackgroundColor(): number | null {
		return UtilRgb.darken( 0x3399ff, 0.1 );
	}

	getButtonPrimaryBorderColor(): number | null {
		return null;
	}

	getButtonPrimaryDisabledBorderColor(): number | null {
		return 0xe5e5e5;
	}

	getButtonPrimaryColor(): number {
		return 0xffffff;
	}

	// d-theme-button-radio
	getButtonRadioBackgroundColor(): number | null {
		return 0xcccccc;
	}

	getButtonRadioImageTintColor(): number | null {
		return 0x3399ff;
	}

	getButtonRadioDisabledImageTintColor(): number | null {
		return 0xcccccc;
	}

	getButtonRadioFocusedImageTintColor(): number | null {
		return UtilRgb.darken( 0xcccccc, 0.1 );
	}

	// d-theme-canvas-container
	getCanvasContainerBackgroundColor(): number | null {
		return null;
	}

	getCanvasContainerBorderColor(): number | null {
		return null;
	}

	// d-theme-canvas
	getCanvasBackgroundColor(): number {
		return 0xffffff;
	}

	getCanvasBorderColor(): number | null {
		return null;
	}

	// d-theme-content
	getContentBorderColor(): number | null {
		return null;
	}

	// d-theme-dialog-select-list
	getDialogSelectListBackgroundColor(): number | null {
		return null;
	}

	getDialogSelectListBorderColor(): number | null {
		return null;
	}

	// d-theme-dialog
	getDialogBackgroundColor(): number | null {
		return null;
	}

	getDialogBorderColor(): number | null {
		return 0xcccccc;
	}

	// d-theme-expandable-header
	getExpandableHeaderBackgroundColor(): number | null {
		return null;
	}

	getExpandableHeaderDisabledBackgroundColor(): number | null {
		return null;
	}

	getExpandableHeaderFocusedBackgroundColor(): number | null {
		return 0xf8f8f8;
	}

	getExpandableHeaderActiveBackgroundColor(): number | null {
		return 0xf8f8f8;
	}

	getExpandableHeaderBorderColor(): number | null {
		return null;
	}

	// d-theme-expandable
	getExpandableBackgroundColor(): number | null {
		return null;
	}

	getExpandableActiveBackgroundColor(): number | null {
		return 0xf0f8ff;
	}

	// d-theme-font
	getFontColor(): number {
		return 0x5f5f5f;
	}

	// d-theme-input
	getInputBackgroundColor(): number | null {
		return 0xffffff;
	}

	getInputDisabledBackgroundColor(): number | null {
		return null;
	}

	getInputFocusedBackgroundColor(): number | null {
		return UtilRgb.darken( 0xffffff, 0.017 );
	}

	getInputBorderColor(): number | null {
		return 0xe5e5e5;
	}

	getInputInvalidColor(): number | null {
		return 0xffaaaa;
	}

	// d-theme-layout-space
	getLayoutSpaceBackgroundColor(): number | null {
		return null;
	}

	getLayoutSpaceBorderColor(): number | null {
		return null;
	}

	// d-theme-layout
	getLayoutBackgroundColor(): number | null {
		return null;
	}

	getLayoutBorderColor(): number | null {
		return null;
	}

	// d-theme-list-item-separator
	getListItemSeparatorBorderColor(): number | null {
		return 0xcccccc;
	}

	// d-theme-list-item
	getListItemBackgroundColor(): number | null {
		return null;
	}

	getListItemDisabledBackgroundColor(): number | null {
		return null;
	}

	getListItemActiveBackgroundColor(): number | null {
		return 0x3399ff;
	}

	getListItemFocusedBackgroundColor(): number | null {
		return 0xcccccc;
	}

	getListItemBorderColor(): number | null {
		return null;
	}

	// d-theme-list
	getListBackgroundColor(): number | null {
		return 0xffffff;
	}

	// d-theme-menu-bar-item
	getMenuBarItemBackgroundColor(): number | null {
		return null;
	}

	getMenuBarItemDisabledBackgroundColor(): number | null {
		return null;
	}

	getMenuBarItemActiveBackgroundColor(): number | null {
		return 0x3399ff;
	}

	getMenuBarItemPressedBackgroundColor(): number | null {
		return UtilRgb.darken( 0xffffff, 0.034 );
	}

	getMenuBarItemFocusedBackgroundColor(): number | null {
		return UtilRgb.darken( 0xffffff, 0.017 );
	}

	getMenuBarItemBorderColor(): number | null {
		return null;
	}

	// d-theme-menu-bar
	getMenubarBackgroundColor(): number | null {
		return 0xf2f2f2;
	}

	getMenubarBorderColor(): number | null {
		return null;
	}

	// d-theme-menu-item-expandable
	getMenuItemExpandableBackgroundColor(): number | null {
		return null;
	}

	getMenuItemExpandableActiveBackgroundColor(): number | null {
		return 0xf0f8ff;
	}

	// d-theme-menu-sided
	getMenuSidedBackgroundColor(): number | null {
		return 0xffffff;
	}

	getMenuSidedBorderColor(): number | null {
		return null;
	}

	// d-theme-menu
	getMenuBackgroundColor(): number | null {
		return 0xffffff;
	}

	// d-theme-pane
	getPaneBackgroundColor(): number | null {
		return 0xf2f2f2;
	}

	// d-theme-picker
	getPickerColorGradientBackgroundColor(): number | null {
		return null;
	}

	getPickerColorGradientBorderColor(): number | null {
		return null;
	}

	// d-theme-picker-color
	getPickerColorMainPointerColor(): number {
		return 0xffffff;
	}

	getPickerColorBasePointerColor(): number {
		return 0xffffff;
	}

	getPickerColorBackgroundColor(): number | null {
		return null;
	}

	getPickerColorBorderColor(): number | null {
		return null;
	}

	// d-theme-datetime-button-back
	getPickerDatetimeButtonBackColor(): number {
		return 0x6f6f6f;
	}

	// d-theme-datetime-button-next
	getPickerDatetimeButtonNextColor(): number {
		return 0x6f6f6f;
	}

	// d-theme-picker-datetime-label-date
	getPickerDatetimeLabelDateColor(): number {
		return 0x6f6f6f;
	}

	// d-theme-picker-datetime-label
	getPickerDatetimeLabelColor(): number {
		return 0x6f6f6f;
	}

	// d-theme-picker-datetime-space
	getPickerDatetimeSpaceBackgroundColor(): number | null {
		return null;
	}

	getPickerDatetimeSpaceBorderColor(): number | null {
		return null;
	}

	// d-theme-scroll-bar-thumb
	getScrollBarThumbBackgroundColor(): number {
		return UtilRgb.darken( 0xcccccc, 0.25 );
	}

	getScrollBarThumbHoverdBackgroundColor(): number {
		return 0x3399ff;
	}

	getScrollBarThumbBorderColor(): number | null {
		return null;
	}

	// d-theme-scroll-bar
	getScrollBarBackgroundColor(): number | null {
		return 0x000000;
	}

	// d-theme-table-body-cell-input-text
	getTableBodyCellInputTextDisabledOutlineColor(): number | null {
		return null;
	}

	// d-theme-table-body-cell-input-integer
	getTableBodyCellInputIntegerDisabledOutlineColor() {
		return null;
	}

	// d-theme-table-body-cell-input-real
	getTableBodyCellInputRealDisabledOutlineColor() {
		return null;
	}

	// d-theme-table-body-cells
	getTableBodyCellsBackgroundColor(): number | null {
		return 0xcccccc;
	}

	getTableBodyCellsInvalidBackgroundColor(): number | null {
		return 0xffaaaa;
	}

	getTableBodyCellsActiveBackgroundColor(): number | null {
		return 0x3399ff;
	}

	getTableBodyCellsBorderColor(): number | null {
		return 0xf6f6f6;
	}

	getTableBodyCellsImageTintColor(): number | null {
		return 0x3399ff;
	}

	getTableBodyCellsDisabledImageTintColor(): number | null {
		return 0xcccccc;
	}

	getTableBodyCellsFocusedImageTintColor(): number | null {
		return UtilRgb.darken( 0xcccccc, 0.1 );
	}

	// d-theme-table-body-row-even
	getTableBodyRowEvenBackgroundColor(): number | null {
		return 0xffffff;
	}

	getTableBodyRowEvenDisabledBackgroundColor(): number | null {
		return 0xffffff;
	}

	getTableBodyRowEvenActiveBackgroundColor(): number | null {
		return 0xddeeff;
	}

	getTableBodyRowEvenFocusedBackgroundColor(): number | null {
		return 0xf6f6f6;
	}

	// d-theme-table-body-row-odd
	getTableBodyRowOddBackgroundColor(): number | null {
		return UtilRgb.darken( 0xffffff, 0.017 );
	}

	getTableBodyRowOddDisabledBackgroundColor(): number | null {
		return UtilRgb.darken( 0xffffff, 0.017 );
	}

	getTableBodyRowOddActiveBackgroundColor(): number | null {
		return 0xddeeff;
	}

	getTableBodyRowOddFocusedBackgroundColor(): number | null {
		return 0xf6f6f6;
	}

	// d-theme-table-body
	getTableBodyBorderColor(): number | null {
		return null;
	}

	// d-theme-table-header
	getTableHeaderBackgroundColor(): number | null {
		return 0xf9f9f9;
	}

	getTableHeaderDisableBackgroundColor(): number | null {
		return null;
	}

	getTableHeaderActiveBackgroundColor(): number | null {
		return 0x3399ff;
	}

	getTableHeaderPressedBackgroundColor(): number | null {
		return UtilRgb.darken( 0xf9f9f9, 0.034 );
	}

	getTableHeaderFocusedBackgroundColor(): number | null {
		return UtilRgb.darken( 0xf9f9f9, 0.017 );
	}

	// d-theme-table-row
	getTableRowBorderColor(): number | null {
		return null;
	}

	// d-theme-table
	getTableBackgroundColor(): number | null {
		return 0xf2f2f2;
	}

	getTableBorderColor(): number | null {
		return 0xdddddd;
	}

}
