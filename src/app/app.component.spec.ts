import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AppComponent]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });


  it ('should bind the configured value', async(() => {
    let select:HTMLSelectElement = fixture.debugElement.query(By.css('.select-profile')).nativeElement;
    let p = fixture.debugElement.nativeElement.querySelector('p');
    fixture.detectChanges();
    component.selectedProfile = new FormControl(component.profiles[1]);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let text = select.options[select.selectedIndex].label;
      expect(text).toBe('Manager');
      expect(p.textContent).toBe('Manager');
    })
  }));

});