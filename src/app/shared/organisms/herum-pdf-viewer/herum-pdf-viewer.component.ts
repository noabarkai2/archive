import { ElementRef, ViewChild } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerService } from 'ngx-extended-pdf-viewer';
import {
  Component,
  Input,
  OnInit,
  OnChanges,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';
import { GlobalWorkerOptions } from 'pdfjs-dist';
import { LinkAnnotationService, BookmarkViewService, MagnificationService, ThumbnailViewService, ToolbarService, TextSearchService, TextSelectionService, PrintService, AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService } from '@syncfusion/ej2-angular-pdfviewer';
import { NavigationService } from 'ag-grid-community';
GlobalWorkerOptions.workerSrc = '/assets/fff.pdf.worker.js';

@Component({
  selector: 'app-herum-pdf-viewer',
  templateUrl: './herum-pdf-viewer.component.html',
  styleUrls: ['./herum-pdf-viewer.component.scss'],
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
    ThumbnailViewService, ToolbarService, NavigationService,
    TextSearchService, TextSelectionService, PrintService,
    AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})
export class HerumPdfViewerComponent {

  public document: string = '../../../../assets/fff.pdf';
  public resource: string = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";
  pagesInDocument: number = 0;

  

  @ViewChild(PdfViewerComponent) pdfViewer!: PdfViewerComponent;
  @ViewChild('pageContainer') pageContainer!: ElementRef;

  zoomValue: number = 1;
  rotate: number = 0;
  fullscreen: boolean = false;
  searchQuery: string = '';
  jumpToPage: number = 0;

  constructor() { }

  zoomIn() {
    this.zoomValue += 0.1;
    this.zoomValue = Math.round(this.zoomValue * 100) / 100;
  }

  zoomOut() {
    this.zoomValue -= 0.1;
    this.zoomValue = Math.round(this.zoomValue * 100) / 100;
  }

  get zoomPercentage() {
    return Math.floor(this.zoomValue * 100);
  }

  toggleFullscreen() {
    this.fullscreen = !this.fullscreen;
    if (this.fullscreen) {
      // Enter fullscreen
      // Use Renderer2 to manipulate DOM elements
    } else {
      // Exit fullscreen
      // Use Renderer2 to manipulate DOM elements
    }
  }

  search() {
    const searchText = this.searchQuery;
    if (!searchText || searchText.trim() === '') {
      return;
    }

    const pdfDoc = this.pdfViewer.src;
    this.searchInPDF(pdfDoc, searchText, 1);
  }

  searchInPDF(pdfDoc:any, searchText:any, pageNumber:any) {
    const searchParams = {
      query: searchText,
      caseSensitive: false,
      wholeWord: true
    };
      pdfjsLib.getDocument(pdfDoc).promise.then(pdf => {
      pdf.getPage(pageNumber).then(async page => {
      const textContent = await page.getTextContent();
      const matches = this.performSearch(textContent, searchParams);
        if (matches.length > 0) {
          this.highlightMatches(matches);
        } else {
          console.log('No matches found.');
        }
      }).catch(error => {
        console.error('Error occurred while searching the PDF:', error);
      });
    }).catch(error => {
      console.error('Error occurred while loading the PDF:', error);
    });
  }

  performSearch(textContent: any, searchParams: any) {
    const regex = new RegExp(searchParams.query, 'gi');
    const matches = [];
    for (const item of textContent.items) {
    const match = item.str.match(regex);
    if (match) {
      matches.push(match);
    }
    }
    return matches;
  }
  highlightMatches(matches:any) {
    const pageHighlight = this.pageContainer.nativeElement;
    const currentPage = this.pdfViewer.page;

    for (let i = 0; i < matches.length; i++) {
      const match = matches[i];
      const pageNumber = match.pageIndex + 1;
   
      if (pageNumber === currentPage) {
        const highlightDiv = document.createElement('div');
        highlightDiv.className = 'highlight';
        highlightDiv.style.position = 'absolute';
        highlightDiv.style.left = `${match.left}px`;
        highlightDiv.style.top = `${match.top}px`;
        highlightDiv.style.width = `${match.width}px`;
        highlightDiv.style.height = `${match.height}px`;
        highlightDiv.style.backgroundColor = 'yellow';
        highlightDiv.style.opacity = '0.5';

        pageHighlight.appendChild(highlightDiv);
      }
    }
  }


  jumpToPageNumber() {
    // Navigate to the specified page
    // this.pdfViewer.goToPage(this.jumpToPage);
  }

  onPageChange(event:any) {
    // Update current page
    console.log('Current page:', event);
  }






  // @ViewChild(PdfViewerComponent) pdfViewer!: PdfViewerComponent;

  // pdfSrc: string = 'path/to/your/pdf/document.pdf';
  // currentPage: number = 1;
  // searchTerm: string = '';

  // constructor() {}

  // // Get the current page number
  // getCurrentPage(): void {
  //   this.currentPage = this.pdfViewer.page;
  //   console.log('Current Page:', this.currentPage);
  // }

  // // Jump to a specific page
  // goToPage(pageNumber: number): void {
  //   this.pdfViewer?.pdfViewer?.scrollPageIntoView({
  //     pageNumber: pageNumber
  //   });
  // }

  // Open full screen mode
  openFullScreen(): void {
    const viewerContainer = this.pdfViewer?.pdfViewer?.container;
    if (viewerContainer && viewerContainer.requestFullscreen) {
      viewerContainer.requestFullscreen();
    } else {
      console.error('Fullscreen API is not supported');
    }
  }

  onLoadComplete($event:any){
    console.log('Load Complete Event:', $event);
    this.pageNumber=2;
    this.pagesInDocument = $event.pageNumber;
  }

  pageNumber = 0;

  // // Search within the document
  // searchInDocument(searchTerm: string): void {
  //   this.pdfViewer.pdfViewer.findController.executeCommand('find', {
  //     caseSensitive: false,
  //     findPrevious: undefined,
  //     highlightAll: true,
  //     phraseSearch: true,
  //     query: searchTerm
  //   });
  // }
}
