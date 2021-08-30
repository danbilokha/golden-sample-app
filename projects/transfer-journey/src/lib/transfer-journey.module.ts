import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { provideRoutes, Route, RouterModule } from '@angular/router';
import {
  AccountSelectorModule,
  ButtonModule,
  CurrencyInputModule,
  InputValidationMessageModule
} from '@backbase/ui-ang';
import { MakeTransferJourneyState } from './make-transfer-journey-state.service';
import { MakeTransferFormComponent } from './components/make-transfer-form.component';
import { MakeTransferSummaryComponent } from './components/make-transfer-summary.component';
import { TRANSLATIONS } from './constants/dynamic-translations';
import { MakeTransferJourneyStoreGuard } from './make-transfer-journey-store-guard';
import { TransferJourneyComponent } from './transfer-journey.component';
import { MakeTransferSuccessViewComponent } from './views/make-transfer-success-view.component';
import { MakeTransferSummaryViewComponent } from './views/make-transfer-summary-view.component';
import { MakeTransferViewComponent } from './views/make-transfer-view.component';
import { MakeTransferJourneyConfiguration } from './make-transfer-journey-config.service';

const defaultRoute: Route = {
  path: '',
  component: TransferJourneyComponent,
  children: [
    {
      path: '',
      redirectTo: 'make-transfer',
      pathMatch: 'full'
    },
    {
      path: 'make-transfer',
      component: MakeTransferViewComponent,
      data: {
        title: TRANSLATIONS.makeTransferTitle,
      },
    },
    {
      path: 'make-transfer-summary',
      component: MakeTransferSummaryViewComponent,
      data: {
        title: TRANSLATIONS.makeTransferTitle,
      },
      canActivate: [ MakeTransferJourneyStoreGuard ]
    },
    {
      path: 'make-transfer-success',
      component: MakeTransferSuccessViewComponent,
      data: {
        title: TRANSLATIONS.makeTransferTitle,
      },
      canActivate: [ MakeTransferJourneyStoreGuard ]
    }
  ]
};

@NgModule({
  declarations: [
    TransferJourneyComponent,
    MakeTransferViewComponent,
    MakeTransferFormComponent,
    MakeTransferSummaryComponent,
    MakeTransferSummaryViewComponent,
    MakeTransferSuccessViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    CurrencyInputModule,
    AccountSelectorModule,
    InputValidationMessageModule,
    ReactiveFormsModule,
  ],
  providers: [ MakeTransferJourneyStoreGuard, MakeTransferJourneyState, MakeTransferJourneyConfiguration ],
  exports: [ TransferJourneyComponent ]
})
export class TransferJourneyModule {
  static forRoot(data: { [key: string]: unknown; route: Route } = { route: defaultRoute }): ModuleWithProviders<TransferJourneyModule> {
    return {
      ngModule: TransferJourneyModule,
      providers: [ provideRoutes([ data.route ]) ],
    };
  }
}