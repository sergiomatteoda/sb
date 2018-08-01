import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadInstallComponent } from './download-install.component';

describe('DownloadInstallComponent', () => {
  let component: DownloadInstallComponent;
  let fixture: ComponentFixture<DownloadInstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadInstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
