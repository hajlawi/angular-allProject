import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidoPlayerComponent } from './vido-player.component';

describe('VidoPlayerComponent', () => {
  let component: VidoPlayerComponent;
  let fixture: ComponentFixture<VidoPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidoPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
