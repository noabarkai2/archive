import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HerumChipComponent } from './atoms/herum-chip/herum-chip.component';
import { HerumToolTipDirective } from './directives/herum-tool-tip.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HerumChipsComponent } from './atoms/herum-chips/herum-chips.component';
import { HerumButtonComponent } from './atoms/herum-button/herum-button.component';
import { HerumSelectComponent } from './atoms/herum-select/herum-select.component';
import { HerumSwitchComponent } from './atoms/herum-switch/herum-switch.component';
import { HerumTableComponent } from './organisms/herum-table/herum-table.component';
import { HerumCheckboxComponent } from './atoms/herum-checkbox/herum-checkbox.component';
import { HerumMatSelectComponent } from './atoms/herum-mat-select/herum-mat-select.component';
import { HerumInputFieldComponent } from './atoms/herum-input-field/herum-input-field.component';
import { HerumProgressBarComponent } from './atoms/herum-progress-bar/herum-progress-bar.component';
import { HerumMultiSelectComponent } from './atoms/herum-multi-select/herum-multi-select.component';
import { HerumPageHeaderComponent } from './organisms/herum-page-header/herum-page-header.component';
import { HerumToggleButtonComponent } from './atoms/herum-toggle-button/herum-toggle-button.component';
import { HerumIndeterminateComponent } from './atoms/herum-indeterminate/herum-indeterminate.component';
import { HerumVideoPlayerComponent } from './organisms/herum-video-player/herum-video-player.component';
import { HerumCircularProgressBarComponent } from './atoms/herum-circular-progress-bar/herum-circular-progress-bar.component';
import { EditRowComponent } from './organisms/herum-table/edit-row/edit-row.component';
import { HerumStepperComponent } from './molecules/herum-stepper/herum-stepper.component';
import { TDSetFilterComponent } from './organisms/herum-table/td-set-filter.component';
import { HerumQuizComponent } from './organisms/herum-quiz/herum-quiz.component';
import { QuizHeaderComponent } from './organisms/herum-quiz/quiz-header/quiz-header.component';
import { QuizTwoAnswersQuestionComponent } from './organisms/herum-quiz/quiz-two-answers-question/quiz-two-answers-question.component';
import { QuizFourAnswersQuestionComponent } from './organisms/herum-quiz/quiz-four-answers-question/quiz-four-answers-question.component';
import { QuizSubmissionComponent } from './organisms/herum-quiz/quiz-submission/quiz-submission.component';
import { QuizIntroComponent } from './organisms/herum-quiz/quiz-intro/quiz-intro.component';
import { QuizGradeSheetComponent } from './organisms/herum-quiz/quiz-grade-sheet/quiz-grade-sheet.component';
import { QuizMultiAnswerQuestionComponent } from './organisms/herum-quiz/quiz-multi-answer-question/quiz-multi-answer-question.component';
import { HerumPdfViewerComponent } from './organisms/herum-pdf-viewer/herum-pdf-viewer.component';
import { PdfViewerComponent, PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CollectionHorizontalOverviewComponent } from './molecules/collection-horizontal-overview/collection-horizontal-overview.component';
import { KeyValueListComponent } from './molecules/key-value-list/key-value-list.component';
import { LabelsWithIconsListComponent } from './molecules/labels-with-icons-list/labels-with-icons-list.component';
import { HerumUserProgressComponent } from './molecules/herum-user-progress/herum-user-progress.component';
import { AudioPlayerComponent } from './organisms/audio-player/audio-player.component';
import { TimeFormatPipe } from './organisms/audio-player/time-format.pipe';

@NgModule({
  declarations: [
    HerumButtonComponent,
    HerumCheckboxComponent,
    HerumToggleButtonComponent,
    HerumInputFieldComponent,
    TDSetFilterComponent,
    HerumToolTipDirective,
    HerumSelectComponent,
    HerumMultiSelectComponent,
    HerumMatSelectComponent,
    HerumSwitchComponent,
    HerumIndeterminateComponent,
    HerumChipComponent,
    HerumChipsComponent,
    HerumPageHeaderComponent,
    HerumVideoPlayerComponent,
    HerumProgressBarComponent,
    HerumCircularProgressBarComponent,
    HerumTableComponent,
    EditRowComponent,
    HerumStepperComponent,
    HerumQuizComponent,
    QuizHeaderComponent,
    QuizTwoAnswersQuestionComponent,
    QuizFourAnswersQuestionComponent,
    QuizSubmissionComponent,
    QuizIntroComponent,
    QuizGradeSheetComponent,
    QuizMultiAnswerQuestionComponent,
    HerumPdfViewerComponent,
    CollectionHorizontalOverviewComponent,
    KeyValueListComponent,
    LabelsWithIconsListComponent,
    HerumUserProgressComponent,
    AudioPlayerComponent,
    TimeFormatPipe
  ],
  exports:[
    HerumPdfViewerComponent,
    HerumButtonComponent,
    AudioPlayerComponent,
    HerumCheckboxComponent,
    HerumToggleButtonComponent,
    HerumInputFieldComponent,
    HerumToolTipDirective,
    HerumSelectComponent,
    HerumQuizComponent,
    CollectionHorizontalOverviewComponent,
    HerumMultiSelectComponent,
    HerumMatSelectComponent,
    HerumSwitchComponent,
    HerumIndeterminateComponent,
    HerumChipComponent,
    HerumChipsComponent,
    HerumPageHeaderComponent,
    HerumProgressBarComponent,
    HerumVideoPlayerComponent,
    HerumCircularProgressBarComponent,
    HerumTableComponent,
    HerumStepperComponent,
    KeyValueListComponent,
    LabelsWithIconsListComponent,
    HerumUserProgressComponent,
  ],
  imports: [
    CommonModule,
    PdfViewerModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    AgGridModule,//.withComponents([]),

    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,

  ],
  providers: [],
})
export class SharedModule { }