/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeWhiteDialog } from "./load-theme-white-dialog";
import { loadThemeWhiteDialogColor } from "./load-theme-white-dialog-color";
import { loadThemeWhiteDialogColorGradient } from "./load-theme-white-dialog-color-gradient";
import { loadThemeWhiteDialogLayered } from "./load-theme-white-dialog-layered";
import { loadThemeWhiteDialogConfirm } from "./load-theme-white-dialog-confirm";
import { loadThemeWhiteDialogConfirmDelete } from "./load-theme-white-dialog-confirm-delete";
import { loadThemeWhiteDialogConfirmDiscard } from "./load-theme-white-dialog-confirm-discard";
import { loadThemeWhiteDialogDate } from "./load-theme-white-dialog-date";
import { loadThemeWhiteDialogDatetime } from "./load-theme-white-dialog-datetime";
import { loadThemeWhiteDialogInputBoolean } from "./load-theme-white-dialog-input-boolean";
import { loadThemeWhiteDialogInputInteger } from "./load-theme-white-dialog-input-integer";
import { loadThemeWhiteDialogInputReal } from "./load-theme-white-dialog-input-real";
import { loadThemeWhiteDialogInputText } from "./load-theme-white-dialog-input-text";
import { loadThemeWhiteDialogMessage } from "./load-theme-white-dialog-message";
import { loadThemeWhiteDialogProcessing } from "./load-theme-white-dialog-processing";
import { loadThemeWhiteDialogSaveAs } from "./load-theme-white-dialog-save-as";
import { loadThemeWhiteDialogSelect } from "./load-theme-white-dialog-select";
import { loadThemeWhiteDialogTime } from "./load-theme-white-dialog-time";
import { loadThemeWhiteDialogFitted } from "./load-theme-white-dialog-fitted";

export const loadThemeWhiteDialogAll = (): void => {
	loadThemeWhiteDialogColorGradient();
	loadThemeWhiteDialogColor();
	loadThemeWhiteDialogConfirmDelete();
	loadThemeWhiteDialogConfirmDiscard();
	loadThemeWhiteDialogConfirm();
	loadThemeWhiteDialogDate();
	loadThemeWhiteDialogDatetime();
	loadThemeWhiteDialogFitted();
	loadThemeWhiteDialogInputBoolean();
	loadThemeWhiteDialogInputInteger();
	loadThemeWhiteDialogInputReal();
	loadThemeWhiteDialogInputText();
	loadThemeWhiteDialogLayered();
	loadThemeWhiteDialogMessage();
	loadThemeWhiteDialogProcessing();
	loadThemeWhiteDialogSaveAs();
	loadThemeWhiteDialogSelect();
	loadThemeWhiteDialogTime();
	loadThemeWhiteDialog();
};
