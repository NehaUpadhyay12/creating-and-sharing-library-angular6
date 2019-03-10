import { NgModule } from '@angular/core';
import { EmpSharedComponent } from './emp-shared.component';
import { CurrentUserComponent } from './current-user/current-user.component';
import { UserDetailsService } from './user-details.service';

@NgModule({
  declarations: [EmpSharedComponent, CurrentUserComponent],
  imports: [
  ],
  providers: [UserDetailsService],
  exports: [EmpSharedComponent, CurrentUserComponent]
})
export class EmpSharedModule { }
