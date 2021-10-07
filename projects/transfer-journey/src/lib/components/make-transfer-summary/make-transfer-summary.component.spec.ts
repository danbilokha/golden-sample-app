import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonModule } from '@backbase/ui-ang';
import { MakeTransferSummaryComponent } from './make-transfer-summary.component';

describe('MakeTransferSummaryComponent', () => {
  let fixture: ComponentFixture<MakeTransferSummaryComponent>;
  let component: MakeTransferSummaryComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonModule],
      declarations: [MakeTransferSummaryComponent]
    });

    fixture = TestBed.createComponent(MakeTransferSummaryComponent);
    component = fixture.componentInstance;
    component.transfer = {
      amount: 100,
      fromAccount: '001',
      toAccount: '002',
    };

    fixture.detectChanges();
  });

  it('should display the elements correctly', () => {
    const transferAccountDestination = fixture.debugElement.query(By.css('span[data-role="transfer-account-destination"]'));
    const transferAmount = fixture.debugElement.query(By.css('span[data-role="transfer-amount"]'));

    expect(transferAccountDestination.nativeElement.innerText).toBe('002');
    expect(transferAmount.nativeElement.innerText).toBe('100');
  });
});