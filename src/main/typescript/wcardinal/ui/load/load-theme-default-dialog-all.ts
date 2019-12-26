/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeWhiteDialog } from "./load-theme-default-dialog";
import { loadThemeWhiteDialogColor } from "./load-theme-default-dialog-color";
import { loadThemeWhiteDialogColorGradient } from "./load-theme-default-dialog-color-gradient";
import { loadThemeWhiteDialogCommand } from "./load-theme-default-dialog-command";
import { loadThemeWhiteDialogConfirm } from "./load-theme-default-dialog-confirm";
import { loadThemeWhiteDialogConfirmDelete } from "./load-theme-default-dialog-confirm-delete";
import { loadThemeWhiteDialogConfirmDiscard } from "./load-theme-default-dialog-confirm-discard";
import { loadThemeWhiteDialogDate } from "./load-theme-default-dialog-date";
import { loadThemeWhiteDialogDatetime } from "./load-theme-default-dialog-datetime";
import { loadThemeWhiteDialogInputText } from "./load-theme-default-dialog-input-text";
import { loadThemeWhiteDialogMessage } from "./load-theme-default-dialog-message";
import { loadThemeWhiteDialogProcessing } from "./load-theme-default-dialog-processing";
import { loadThemeWhiteDialogSaveAs } from "./load-theme-default-dialog-save-as";
import { loadThemeWhiteDialogSelect } from "./load-theme-default-dialog-select";
import { loadThemeWhiteDialogTime } from "./load-theme-default-dialog-time";

export const loadThemeWhiteDialogAll = () => {
	loadThemeWhiteDialogColorGradient();
	loadThemeWhiteDialogColor();
	loadThemeWhiteDialogCommand();
	loadThemeWhiteDialogConfirmDelete();
	loadThemeWhiteDialogConfirmDiscard();
	loadThemeWhiteDialogConfirm();
	loadThemeWhiteDialogDate();
	loadThemeWhiteDialogDatetime();
	loadThemeWhiteDialogInputText();
	loadThemeWhiteDialogMessage();
	loadThemeWhiteDialogProcessing();
	loadThemeWhiteDialogSaveAs();
	loadThemeWhiteDialogSelect();
	loadThemeWhiteDialogTime();
	loadThemeWhiteDialog();
};
