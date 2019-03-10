import { NgModule } from '@angular/core';
import { EmpSharedComponent } from './emp-shared.component';
import { CurrentUserComponent } from './current-user/current-user.component';

@NgModule({
  declarations: [EmpSharedComponent, CurrentUserComponent],
  imports: [
  ],
  providers: [],
  exports: [EmpSharedComponent, CurrentUserComponent]
})
export class EmpSharedModule { }
