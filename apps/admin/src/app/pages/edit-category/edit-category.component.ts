import { CategoryService, Category } from '@medcoding/shared';
import { UntypedFormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'admin-editcategory',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  id: string = ""
  categoryForm = new FormGroup({
    label: new UntypedFormControl('', [Validators.required]),
    icon: new UntypedFormControl('', [Validators.required, Validators.pattern(/[a-zA-Z-]*/)]),
    color: new UntypedFormControl(),
  })

  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
      this.route.params.subscribe((params: any) => {
          this.categoryService.getCategory(params.id).subscribe(res => {
            this.id = params.id
            this.categoryForm.patchValue(res.category)
          })
      })
  }

  submit(form: FormGroup) {

    if(form.invalid) {
      return
    }

    this.updateCategory()
  
  }

  updateCategory() {
    this.categoryService.updateCategory(this.id, this.categoryForm.value).subscribe(res => {
      if(res.success) {
       this.location.back()
      }
    },
    err => console.error(err))
  }

}
