/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeDarkDialog } from "./load-theme-dark-dialog";
import { loadThemeDarkJaJpDialogColor } from "./load-theme-dark-ja-jp-dialog-color";
import { loadThemeDarkJaJpDialogColorGradient } from "./load-theme-dark-ja-jp-dialog-color-gradient";
import { loadThemeDarkJaJpDialogLayered } from "./load-theme-dark-ja-jp-dialog-layered";
import { loadThemeDarkJaJpDialogConfirm } from "./load-theme-dark-ja-jp-dialog-confirm";
import { loadThemeDarkJaJpDialogConfirmDelete } from "./load-theme-dark-ja-jp-dialog-confirm-delete";
import { loadThemeDarkJaJpDialogConfirmDiscard } from "./load-theme-dark-ja-jp-dialog-confirm-discard";
import { loadThemeDarkJaJpDialogDate } from "./load-theme-dark-ja-jp-dialog-date";
import { loadThemeDarkJaJpDialogDatetime } from "./load-theme-dark-ja-jp-dialog-datetime";
import { loadThemeDarkDialogInputBoolean } from "./load-theme-dark-dialog-input-boolean";
import { loadThemeDarkDialogInputInteger } from "./load-theme-dark-dialog-input-integer";
import { loadThemeDarkDialogInputReal } from "./load-theme-dark-dialog-input-real";
import { loadThemeDarkDialogInputText } from "./load-theme-dark-dialog-input-text";
import { loadThemeDarkJaJpDialogMessage } from "./load-theme-dark-ja-jp-dialog-message";
import { loadThemeDarkJaJpDialogProcessing } from "./load-theme-dark-ja-jp-dialog-processing";
import { loadThemeDarkJaJpDialogSaveAs } from "./load-theme-dark-ja-jp-dialog-save-as";
import { loadThemeDarkJaJpDialogSelect } from "./load-theme-dark-ja-jp-dialog-select";
import { loadThemeDarkJaJpDialogTime } from "./load-theme-dark-ja-jp-dialog-time";
import { loadThemeDarkDialogFitted } from "./load-theme-dark-dialog-fitted";

export const loadThemeDarkJaJpDialogAll = (): void => {
	loadThemeDarkJaJpDialogColorGradient();
	loadThemeDarkJaJpDialogColor();
	loadThemeDarkJaJpDialogConfirmDelete();
	loadThemeDarkJaJpDialogConfirmDiscard();
	loadThemeDarkJaJpDialogConfirm();
	loadThemeDarkJaJpDialogDate();
	loadThemeDarkJaJpDialogDatetime();
	loadThemeDarkDialogFitted();
	loadThemeDarkDialogInputBoolean();
	loadThemeDarkDialogInputInteger();
	loadThemeDarkDialogInputReal();
	loadThemeDarkDialogInputText();
	loadThemeDarkJaJpDialogLayered();
	loadThemeDarkJaJpDialogMessage();
	loadThemeDarkJaJpDialogProcessing();
	loadThemeDarkJaJpDialogSaveAs();
	loadThemeDarkJaJpDialogSelect();
	loadThemeDarkJaJpDialogTime();
	loadThemeDarkDialog();
};
