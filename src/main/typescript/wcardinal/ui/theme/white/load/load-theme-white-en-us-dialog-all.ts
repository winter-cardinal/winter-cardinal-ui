/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeWhiteDialog } from "./load-theme-white-dialog";
import { loadThemeWhiteEnUsDialogColor } from "./load-theme-white-en-us-dialog-color";
import { loadThemeWhiteEnUsDialogColorGradient } from "./load-theme-white-en-us-dialog-color-gradient";
import { loadThemeWhiteEnUsDialogLayered } from "./load-theme-white-en-us-dialog-layered";
import { loadThemeWhiteEnUsDialogConfirm } from "./load-theme-white-en-us-dialog-confirm";
import { loadThemeWhiteEnUsDialogConfirmDelete } from "./load-theme-white-en-us-dialog-confirm-delete";
import { loadThemeWhiteEnUsDialogConfirmDiscard } from "./load-theme-white-en-us-dialog-confirm-discard";
import { loadThemeWhiteEnUsDialogDate } from "./load-theme-white-en-us-dialog-date";
import { loadThemeWhiteEnUsDialogDatetime } from "./load-theme-white-en-us-dialog-datetime";
import { loadThemeWhiteDialogInputBoolean } from "./load-theme-white-dialog-input-boolean";
import { loadThemeWhiteDialogInputInteger } from "./load-theme-white-dialog-input-integer";
import { loadThemeWhiteDialogInputReal } from "./load-theme-white-dialog-input-real";
import { loadThemeWhiteDialogInputText } from "./load-theme-white-dialog-input-text";
import { loadThemeWhiteEnUsDialogMessage } from "./load-theme-white-en-us-dialog-message";
import { loadThemeWhiteEnUsDialogProcessing } from "./load-theme-white-en-us-dialog-processing";
import { loadThemeWhiteEnUsDialogSaveAs } from "./load-theme-white-en-us-dialog-save-as";
import { loadThemeWhiteEnUsDialogSelect } from "./load-theme-white-en-us-dialog-select";
import { loadThemeWhiteEnUsDialogTime } from "./load-theme-white-en-us-dialog-time";
import { loadThemeWhiteDialogFitted } from "./load-theme-white-dialog-fitted";

export const loadThemeWhiteEnUsDialogAll = (): void => {
	loadThemeWhiteEnUsDialogColorGradient();
	loadThemeWhiteEnUsDialogColor();
	loadThemeWhiteEnUsDialogConfirmDelete();
	loadThemeWhiteEnUsDialogConfirmDiscard();
	loadThemeWhiteEnUsDialogConfirm();
	loadThemeWhiteEnUsDialogDate();
	loadThemeWhiteEnUsDialogDatetime();
	loadThemeWhiteDialogFitted();
	loadThemeWhiteDialogInputBoolean();
	loadThemeWhiteDialogInputInteger();
	loadThemeWhiteDialogInputReal();
	loadThemeWhiteDialogInputText();
	loadThemeWhiteEnUsDialogLayered();
	loadThemeWhiteEnUsDialogMessage();
	loadThemeWhiteEnUsDialogProcessing();
	loadThemeWhiteEnUsDialogSaveAs();
	loadThemeWhiteEnUsDialogSelect();
	loadThemeWhiteEnUsDialogTime();
	loadThemeWhiteDialog();
};
