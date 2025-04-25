import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { QuillEditorComponent } from 'ngx-quill';

@Component({
  selector: 'notebook-dialog',
  templateUrl: './notebook-dialog.component.html',
  styleUrls: ['./notebook-dialog.component.scss']
})
export class NotebookDialogComponent implements OnInit {

  activeNoteIndex = 0;
  isContentChanged = false;
  @ViewChild(QuillEditorComponent) quillEditor!: QuillEditorComponent;

  constructor() { }

  notes: { content: string, lastUpdateTime: string }[] = [{
    content: '',
    lastUpdateTime: '2021-08-01'
  }, {
    content: 'פתק 2',
    lastUpdateTime: '2021-08-02'
  }];


  quillConfig = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        ['code-block'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'font': [] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['clean'],
        ['link'],
      ],
      theme: 'snow',
    }
  }

  ngOnInit(): void {
  }

  onSelectionChanged = () => {
    console.log("Selection Changed");
  }

  onContentChanged = () => {
    this.isContentChanged = true;
  }

  onFocus = () => {
    console.log("On Focus");
  }
  onBlur = () => {
    console.log("Blurred");
  }

  handleMenuKeydown(event: KeyboardEvent): void {
    if (this.quillEditor && this.quillEditor.quillEditor) {
      const quill = this.quillEditor.quillEditor as any;

      if (quill.getBounds && typeof quill.getBounds === 'function') {
        const bounds = quill.getBounds(0);

        if (bounds && bounds.position) {
          if (event.key === 'ArrowUp') {
            const newIndex = bounds.index != null ? bounds.index - 1 : 0;
            quill.setSelection(newIndex, 0);
          } else if (event.key === 'ArrowDown') {
            const newIndex = bounds.index != null ? bounds.index + 1 : 0;
            quill.setSelection(newIndex, 0);
          }
        }
      }
    }
  }

  _saveNotes() {
    console.log(this.notes);
  }

  removeHtmlTags(input: string): string {
    const match = input?.match(/<p>(.*?)<\/p>/i);
    const textUntilBreak = match ? match[1] : input;
    return textUntilBreak.replace(/<\/?[^>]+(>|$)/g, '');
  }

}
