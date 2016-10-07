import { RouterModule }   from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { IndexComponent } from './index.component';

let comp:    IndexComponent;
let fixture: ComponentFixture<IndexComponent>;
let de:      any;
let el:      HTMLElement;

describe('IndexComponent', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [IndexComponent]});
    fixture = TestBed.createComponent(IndexComponent);
    comp = fixture.componentInstance;
  });
  
  it ('logo should have proper class', () => {
    de = fixture.debugElement.query(By.css('img'));
    expect(de.attributes['class']).toBe('angular-logo', 'class should be angular-logo');
  });
    
});
