/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeWhiteDialog } from "./load-theme-white-dialog";
import { loadThemeWhiteDialogColor } from "./load-theme-white-dialog-color";
import { loadThemeWhiteDialogColorGradient } from "./load-theme-white-dialog-color-gradient";
import { loadThemeWhiteJaJpDialogLayered } from "./load-theme-white-ja-jp-dialog-layered";
import { loadThemeWhiteJaJpDialogConfirm } from "./load-theme-white-ja-jp-dialog-confirm";
import { loadThemeWhiteJaJpDialogConfirmDelete } from "./load-theme-white-ja-jp-dialog-confirm-delete";
import { loadThemeWhiteJaJpDialogConfirmDiscard } from "./load-theme-white-ja-jp-dialog-confirm-discard";
import { loadThemeWhiteJaJpDialogDate } from "./load-theme-white-ja-jp-dialog-date";
import { loadThemeWhiteJaJpDialogDatetime } from "./load-theme-white-ja-jp-dialog-datetime";
import { loadThemeWhiteDialogInputBoolean } from "./load-theme-white-dialog-input-boolean";
import { loadThemeWhiteDialogInputInteger } from "./load-theme-white-dialog-input-integer";
import { loadThemeWhiteDialogInputReal } from "./load-theme-white-dialog-input-real";
import { loadThemeWhiteDialogInputText } from "./load-theme-white-dialog-input-text";
import { loadThemeWhiteJaJpDialogMessage } from "./load-theme-white-ja-jp-dialog-message";
import { loadThemeWhiteJaJpDialogProcessing } from "./load-theme-white-ja-jp-dialog-processing";
import { loadThemeWhiteJaJpDialogSaveAs } from "./load-theme-white-ja-jp-dialog-save-as";
import { loadThemeWhiteJaJpDialogSelect } from "./load-theme-white-ja-jp-dialog-select";
import { loadThemeWhiteJaJpDialogTime } from "./load-theme-white-ja-jp-dialog-time";
import { loadThemeWhiteDialogFitted } from "./load-theme-white-dialog-fitted";

export const loadThemeWhiteJaJpDialogAll = (): void => {
	loadThemeWhiteDialogColorGradient();
	loadThemeWhiteDialogColor();
	loadThemeWhiteJaJpDialogConfirmDelete();
	loadThemeWhiteJaJpDialogConfirmDiscard();
	loadThemeWhiteJaJpDialogConfirm();
	loadThemeWhiteJaJpDialogDate();
	loadThemeWhiteJaJpDialogDatetime();
	loadThemeWhiteDialogFitted();
	loadThemeWhiteDialogInputBoolean();
	loadThemeWhiteDialogInputInteger();
	loadThemeWhiteDialogInputReal();
	loadThemeWhiteDialogInputText();
	loadThemeWhiteJaJpDialogLayered();
	loadThemeWhiteJaJpDialogMessage();
	loadThemeWhiteJaJpDialogProcessing();
	loadThemeWhiteJaJpDialogSaveAs();
	loadThemeWhiteJaJpDialogSelect();
	loadThemeWhiteJaJpDialogTime();
	loadThemeWhiteDialog();
};
