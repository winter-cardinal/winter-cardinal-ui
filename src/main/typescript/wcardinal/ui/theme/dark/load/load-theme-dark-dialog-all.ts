/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeDarkDialog } from "./load-theme-dark-dialog";
import { loadThemeDarkDialogColor } from "./load-theme-dark-dialog-color";
import { loadThemeDarkDialogColorGradient } from "./load-theme-dark-dialog-color-gradient";
import { loadThemeDarkDialogLayered } from "./load-theme-dark-dialog-layered";
import { loadThemeDarkDialogConfirm } from "./load-theme-dark-dialog-confirm";
import { loadThemeDarkDialogConfirmDelete } from "./load-theme-dark-dialog-confirm-delete";
import { loadThemeDarkDialogConfirmDiscard } from "./load-theme-dark-dialog-confirm-discard";
import { loadThemeDarkDialogDate } from "./load-theme-dark-dialog-date";
import { loadThemeDarkDialogDatetime } from "./load-theme-dark-dialog-datetime";
import { loadThemeDarkDialogInputBoolean } from "./load-theme-dark-dialog-input-boolean";
import { loadThemeDarkDialogInputInteger } from "./load-theme-dark-dialog-input-integer";
import { loadThemeDarkDialogInputReal } from "./load-theme-dark-dialog-input-real";
import { loadThemeDarkDialogInputText } from "./load-theme-dark-dialog-input-text";
import { loadThemeDarkDialogMessage } from "./load-theme-dark-dialog-message";
import { loadThemeDarkDialogProcessing } from "./load-theme-dark-dialog-processing";
import { loadThemeDarkDialogSaveAs } from "./load-theme-dark-dialog-save-as";
import { loadThemeDarkDialogSelect } from "./load-theme-dark-dialog-select";
import { loadThemeDarkDialogTime } from "./load-theme-dark-dialog-time";
import { loadThemeDarkDialogFitted } from "./load-theme-dark-dialog-fitted";

export const loadThemeDarkDialogAll = (): void => {
	loadThemeDarkDialogColorGradient();
	loadThemeDarkDialogColor();
	loadThemeDarkDialogConfirm();
	loadThemeDarkDialogConfirmDelete();
	loadThemeDarkDialogConfirmDiscard();
	loadThemeDarkDialogDate();
	loadThemeDarkDialogDatetime();
	loadThemeDarkDialogFitted();
	loadThemeDarkDialogInputBoolean();
	loadThemeDarkDialogInputInteger();
	loadThemeDarkDialogInputReal();
	loadThemeDarkDialogInputText();
	loadThemeDarkDialogLayered();
	loadThemeDarkDialogMessage();
	loadThemeDarkDialogProcessing();
	loadThemeDarkDialogSaveAs();
	loadThemeDarkDialogSelect();
	loadThemeDarkDialogTime();
	loadThemeDarkDialog();
};
