import { RegistrationComponent } from './registration.component';
import { Company } from './company';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('1st tests', () => {
  it('true is true', () => expect(true).toBe(true));

  let comp:    RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(RegistrationComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('company valid email', () => {
    let company = new Company();
    company.calculateMoneyOwed("resumeBook");
    let _150 = company.moneyOwed;
    expect(_150).toBe(150);
    });

});
