import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from '../jQuery.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string;
  @Input() elementId: string;
  @ViewChild('modalContainer') containerEl: ElementRef;
  // @ViewChildren can be used for list of elements (eg with *ngFor)
  @Input() closeOnBodyClick: string;

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() {
  }

  closeModal() {
    if (this.closeOnBodyClick.toLocaleLowerCase() === "true") {
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }
}
