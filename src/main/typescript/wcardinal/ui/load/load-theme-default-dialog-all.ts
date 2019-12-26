/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeDefaultDialog } from "./load-theme-default-dialog";
import { loadThemeDefaultDialogColor } from "./load-theme-default-dialog-color";
import { loadThemeDefaultDialogColorGradient } from "./load-theme-default-dialog-color-gradient";
import { loadThemeDefaultDialogCommand } from "./load-theme-default-dialog-command";
import { loadThemeDefaultDialogConfirm } from "./load-theme-default-dialog-confirm";
import { loadThemeDefaultDialogConfirmDelete } from "./load-theme-default-dialog-confirm-delete";
import { loadThemeDefaultDialogConfirmDiscard } from "./load-theme-default-dialog-confirm-discard";
import { loadThemeDefaultDialogDate } from "./load-theme-default-dialog-date";
import { loadThemeDefaultDialogDatetime } from "./load-theme-default-dialog-datetime";
import { loadThemeDefaultDialogInputText } from "./load-theme-default-dialog-input-text";
import { loadThemeDefaultDialogMessage } from "./load-theme-default-dialog-message";
import { loadThemeDefaultDialogProcessing } from "./load-theme-default-dialog-processing";
import { loadThemeDefaultDialogSaveAs } from "./load-theme-default-dialog-save-as";
import { loadThemeDefaultDialogSelect } from "./load-theme-default-dialog-select";
import { loadThemeDefaultDialogTime } from "./load-theme-default-dialog-time";

export const loadThemeDefaultDialogAll = () => {
	loadThemeDefaultDialogColorGradient();
	loadThemeDefaultDialogColor();
	loadThemeDefaultDialogCommand();
	loadThemeDefaultDialogConfirmDelete();
	loadThemeDefaultDialogConfirmDiscard();
	loadThemeDefaultDialogConfirm();
	loadThemeDefaultDialogDate();
	loadThemeDefaultDialogDatetime();
	loadThemeDefaultDialogInputText();
	loadThemeDefaultDialogMessage();
	loadThemeDefaultDialogProcessing();
	loadThemeDefaultDialogSaveAs();
	loadThemeDefaultDialogSelect();
	loadThemeDefaultDialogTime();
	loadThemeDefaultDialog();
};
