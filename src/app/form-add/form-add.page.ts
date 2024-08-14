import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PageInformationService  } from '../services/page-information.service';


@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.page.html',
  styleUrls: ['./form-add.page.scss'],
})
export class FormAddPage implements OnInit {
  items: Array<any> = [];
  titleValue: string = '';
  descriptionValue: string = '';
  colorValue: string = '';
  currentDate: string = '';

  get title(){
    return this.formAdd.get('title');
  }

  get description(){
    return this.formAdd.get('description');
  }

  get color(){
    return this.formAdd.get('color');
  }

  public titleExceptionMessage = {
    title: [
      { type: 'required', message: 'Title is required' },
      { type: 'minlength', message: 'The title must have at least 3 characters'}
    ]
  }

  public descriptionExceptionMessage = {
    description: [
      { type: 'required', message: 'Description is required' },
      { type: 'minlength', message: 'The description must have at least 10 characters'}
    ]
  }

  formAdd = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    color: ['']
  });
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private pageInformation: PageInformationService 
  ) { }

  public save(){

    const formData = {
      title: this.formAdd.value.title,
      description: this.formAdd.value.description,
      currentDate: this.currentDate,
      color: this.formAdd.value.color,
      done: false 
    };

    this.items.push(formData);

    console.log(this.items);

    this.formAdd.reset();
    this.pageInformation.senObjectSouces(this.items);
    this.router.navigate(['/home']);
  }
  

  ngOnInit() {
    this.pageInformation.$getObjectSouces.subscribe(items => {
      if (Array.isArray(items) && items.length > 0) {
        this.items = items;
      } else {
        this.items = []; 
      }
    });
    this.formAdd.valueChanges.subscribe(values => {
      this.titleValue = values.title || '';
      this.descriptionValue = values.description || ''; 
      this.colorValue = values.color || ''; 
      this.currentDate = new Date().toLocaleString(); 
    });
  }

}
