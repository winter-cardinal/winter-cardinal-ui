/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeWhiteDialog } from "./load-theme-white-dialog";
import { loadThemeWhiteDialogColor } from "./load-theme-white-dialog-color";
import { loadThemeWhiteDialogColorGradient } from "./load-theme-white-dialog-color-gradient";
import { loadThemeWhiteDialogCommand } from "./load-theme-white-dialog-command";
import { loadThemeWhiteDialogConfirm } from "./load-theme-white-dialog-confirm";
import { loadThemeWhiteDialogConfirmDelete } from "./load-theme-white-dialog-confirm-delete";
import { loadThemeWhiteDialogConfirmDiscard } from "./load-theme-white-dialog-confirm-discard";
import { loadThemeWhiteDialogDate } from "./load-theme-white-dialog-date";
import { loadThemeWhiteDialogDatetime } from "./load-theme-white-dialog-datetime";
import { loadThemeWhiteDialogInputText } from "./load-theme-white-dialog-input-text";
import { loadThemeWhiteDialogMessage } from "./load-theme-white-dialog-message";
import { loadThemeWhiteDialogProcessing } from "./load-theme-white-dialog-processing";
import { loadThemeWhiteDialogSaveAs } from "./load-theme-white-dialog-save-as";
import { loadThemeWhiteDialogSelect } from "./load-theme-white-dialog-select";
import { loadThemeWhiteDialogTime } from "./load-theme-white-dialog-time";

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
