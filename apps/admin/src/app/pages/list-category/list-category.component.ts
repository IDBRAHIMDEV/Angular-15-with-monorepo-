
import { CategoryService, Category, ResCategory } from '@medcoding/shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-listcategory',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss'],
  providers: [CategoryService]
})
export class ListCategoryComponent implements OnInit {

  categories: Category[] = []

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
      this.getCategories()
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe(({success, categories}: ResCategory) => {
      if(success) {

        this.categories = categories
      }
    })
  }
}
