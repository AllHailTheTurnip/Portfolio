import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, OnInit} from '@angular/core';
import { TechDemosComponent } from './tech-demos.component';


describe('TechDemosComponent', () => {
  let component: TechDemosComponent;
  let fixture: ComponentFixture<TechDemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechDemosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
