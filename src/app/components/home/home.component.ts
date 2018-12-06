import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    // this.elementRef.nativeElement.ownerDocument.body.style.height = '100%';
  }
}
