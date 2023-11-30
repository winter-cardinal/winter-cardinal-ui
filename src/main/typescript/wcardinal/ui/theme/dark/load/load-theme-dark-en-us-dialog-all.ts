/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeDarkDialog } from "./load-theme-dark-dialog";
import { loadThemeDarkDialogColor } from "./load-theme-dark-dialog-color";
import { loadThemeDarkDialogColorGradient } from "./load-theme-dark-dialog-color-gradient";
import { loadThemeDarkEnUsDialogLayered } from "./load-theme-dark-en-us-dialog-layered";
import { loadThemeDarkEnUsDialogConfirm } from "./load-theme-dark-en-us-dialog-confirm";
import { loadThemeDarkEnUsDialogConfirmDelete } from "./load-theme-dark-en-us-dialog-confirm-delete";
import { loadThemeDarkEnUsDialogConfirmDiscard } from "./load-theme-dark-en-us-dialog-confirm-discard";
import { loadThemeDarkEnUsDialogDate } from "./load-theme-dark-en-us-dialog-date";
import { loadThemeDarkEnUsDialogDatetime } from "./load-theme-dark-en-us-dialog-datetime";
import { loadThemeDarkDialogInputBoolean } from "./load-theme-dark-dialog-input-boolean";
import { loadThemeDarkDialogInputInteger } from "./load-theme-dark-dialog-input-integer";
import { loadThemeDarkDialogInputReal } from "./load-theme-dark-dialog-input-real";
import { loadThemeDarkDialogInputText } from "./load-theme-dark-dialog-input-text";
import { loadThemeDarkEnUsDialogMessage } from "./load-theme-dark-en-us-dialog-message";
import { loadThemeDarkEnUsDialogProcessing } from "./load-theme-dark-en-us-dialog-processing";
import { loadThemeDarkEnUsDialogSaveAs } from "./load-theme-dark-en-us-dialog-save-as";
import { loadThemeDarkEnUsDialogSelect } from "./load-theme-dark-en-us-dialog-select";
import { loadThemeDarkEnUsDialogTime } from "./load-theme-dark-en-us-dialog-time";
import { loadThemeDarkDialogFitted } from "./load-theme-dark-dialog-fitted";

export const loadThemeDarkEnUsDialogAll = (): void => {
	loadThemeDarkDialogColorGradient();
	loadThemeDarkDialogColor();
	loadThemeDarkEnUsDialogConfirmDelete();
	loadThemeDarkEnUsDialogConfirmDiscard();
	loadThemeDarkEnUsDialogConfirm();
	loadThemeDarkEnUsDialogDate();
	loadThemeDarkEnUsDialogDatetime();
	loadThemeDarkDialogFitted();
	loadThemeDarkDialogInputBoolean();
	loadThemeDarkDialogInputInteger();
	loadThemeDarkDialogInputReal();
	loadThemeDarkDialogInputText();
	loadThemeDarkEnUsDialogLayered();
	loadThemeDarkEnUsDialogMessage();
	loadThemeDarkEnUsDialogProcessing();
	loadThemeDarkEnUsDialogSaveAs();
	loadThemeDarkEnUsDialogSelect();
	loadThemeDarkEnUsDialogTime();
	loadThemeDarkDialog();
};
