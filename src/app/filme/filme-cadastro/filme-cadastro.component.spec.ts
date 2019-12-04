import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeCadastroComponent } from './filme-cadastro.component';

describe('FilmeCadastroComponent', () => {
  let component: FilmeCadastroComponent;
  let fixture: ComponentFixture<FilmeCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
