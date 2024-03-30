import { Component, OnInit } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { GenderService } from '../../app.services/gender.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports:[NzTabsModule,NzSelectModule,NzGridModule,NzFormModule,NzInputModule, ReactiveFormsModule]
})
export class WelcomeComponent implements OnInit {

  GenderList : any
  selectedUser = null
  constructor(private fb : NonNullableFormBuilder, private GenderService: GenderService) 
  {

  }

  ngOnInit() 
  {
    this.getGender();
   }

  getGender()
  {
    this.GenderService.GetGenders().subscribe(
        (response) => 
        {
          console.log('response received')
          this.GenderList = response; 
        },
        (error) => 
        {                             
          console.error('Request failed with error')
        })
  }
  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  });

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }


}
