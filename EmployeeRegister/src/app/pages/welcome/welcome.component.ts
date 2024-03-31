import { ApplicationConfig, Component, OnInit } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { GenderService } from '../../app.services/gender.service';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BasicInfoComponent } from "../../app.employeeInfo/basic-info/basic-info.component";
import { PersonalInfoComponent } from "../../app.employeeInfo/personal-info/personal-info.component";
import { NomineeInfoComponent } from "../../app.employeeInfo/nominee-info/nominee-info.component";
import { ContactInfoComponent } from "../../app.employeeInfo/contact-info/contact-info.component";
import { EducationInfoComponent } from "../../app.employeeInfo/education-info/education-info.component";
import { TrainingInfoComponent } from "../../app.employeeInfo/training-info/training-info.component";
import { PassportInfoComponent } from "../../app.employeeInfo/passport-info/passport-info.component";
import { DrivingLicenseInfoComponent } from "../../app.employeeInfo/driving-license-info/driving-license-info.component";
import { ReferencesInfoComponent } from "../../app.employeeInfo/references-info/references-info.component";
import { EmployeePhotoComponent } from "../../app.employeeInfo/employee-photo/employee-photo.component";
export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()), provideRouter(routes), provideClientHydration()]
};
@Component({
    selector: 'app-welcome',
    standalone: true,
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    imports: [NzTabsModule, NzSelectModule, NzGridModule, NzFormModule, NzInputModule, ReactiveFormsModule, BasicInfoComponent, PersonalInfoComponent, NomineeInfoComponent, ContactInfoComponent, EducationInfoComponent, TrainingInfoComponent, PassportInfoComponent, DrivingLicenseInfoComponent, ReferencesInfoComponent, EmployeePhotoComponent]
})
export class WelcomeComponent implements OnInit {

  GenderList : any
  selectedUser = null
  // constructor(private fb : NonNullableFormBuilder, private GenderService: GenderService) 
  // {

  // }

  ngOnInit() 
  {
    // this.getGender();
   }

  // getGender()
  // {
  //   this.GenderService.GetGenders().subscribe(
  //       (response) => 
  //       {
  //         console.log('response received')
  //         this.GenderList = response; 
  //       },
  //       (error) => 
  //       {                             
  //         console.error('Request failed with error')
  //       })
  // }
}
