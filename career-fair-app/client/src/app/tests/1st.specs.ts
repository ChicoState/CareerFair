import { Component, OnInit } from '@angular/core';
import { Company } from '../registration/company';
import { RegistrationComponent } from '../registration/registration.component';

import { CompaniesService } from '../services/companies.service';
import { Http, Headers } from '@angular/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('Sanity Test', () => {
  it('should be true', () => expect(true).toBe(true));

  it('2 + 2', () => expect(2 + 2).toBe(4));
});

describe('Company Tests', () => {

  it('money owed is 150', function () {
    let x = new Company();
    x.calculateMoneyOwed('resumeBook');
    let money = x.moneyOwed;
    expect(money).toBe(150);
  });

  it('money owed is 450', function () {
    let x = new Company();
    x.calculateMoneyOwed('table');
    let money = x.moneyOwed;
    expect(money).toBe(450);
  });

  it('money owed is 550', function () {
    let x = new Company();
    x.calculateMoneyOwed('resumeBookAndTable');
    let money = x.moneyOwed;
    expect(money).toBe(550);
  });

  it('convert to single string', function () {
    let x = new Company();
    let arr = ["it", "is", "super", "late"];
    let p = "it, is, super, late";
    expect(x.convertToSingleString(arr)).toBe(p);
  });

  it('testing adding major', function () {
    let x = new Company();
    x.AddMajor("hello");
    x.AddMajor("there");
    let r = x.convertToSingleString(x.majorsSelected);
    let expected = "hello, there";
    expect(r).toBe(expected);
  });

  it('adding 3 different words should be length of 3', function () {
    let x = new Company();
    x.AddMajor("hello");
    x.AddMajor("there");
    x.AddMajor("hell");
    expect(x.majorsSelected.length).toBe(3);
  });

  it('same word added should result in 0', function () {
    let x = new Company();
    x.AddMajor("hello");
    x.AddMajor("hello");
    expect(x.majorsSelected.length).toBe(0);
  });

  it('testing adding position', function () {
    let x = new Company();
    x.AddPosition("hello");
    x.AddPosition("there");
    let r = x.convertToSingleString(x.positionsSelected);
    let expected = "hello, there";
    expect(r).toBe(expected);
  });

  it('adding 3 different words should be length of 3 (position)', function () {
    let x = new Company();
    x.AddPosition("hello");
    x.AddPosition("there");
    x.AddPosition("hell");
    expect(x.positionsSelected.length).toBe(3);
  });

  it('same word added should result in 0 (position)', function () {
    let x = new Company();
    x.AddPosition("hello");
    x.AddPosition("hello");
    expect(x.positionsSelected.length).toBe(0);
  });

  it('testing displaying major', function () {
    let x = new Company();
    let expected = "Computer Animation and Game Development";
    let test_ = x.toDisplay("cagd ");
    expect(expected).toBe(test_);
  });

  it('testing displaying position type', function () {
    let x = new Company();
    let expected = "CO OP";
    let test_ = x.toDisplay("co_op");
    expect(expected).toBe(test_);
  });

  it('testing displaying registration type', function () {
    let x = new Company();
    let expected = "Table";
    let test_ = x.toDisplay("table");
    expect(expected).toBe(test_);
  });

  it('testing resumeBook (first) vs resumeBookAndTable', function () {
    let x = new Company();
    let expected = "Resume Book Package";
    let test_ = x.toDisplay("resumeBook");
    expect(expected).toBe(test_);
  });

  it('testing resumeBook vs resumeBookAndTable (first)', function () {
    let x = new Company();
    let expected = "Resume Book and Table";
    let test_ = x.toDisplay("resumeBookAndTable");
    expect(expected).toBe(test_);
  });

});