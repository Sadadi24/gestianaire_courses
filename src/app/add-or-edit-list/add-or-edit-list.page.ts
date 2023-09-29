import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ArticleService, Item } from '../article.service';

@Component({
  selector: 'app-add-or-edit-list',
  templateUrl: './add-or-edit-list.page.html',
  styleUrls: ['./add-or-edit-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddOrEditListPage implements OnInit {

  items: Item[] = [];
	newItem: Item = <Item>{};

	constructor(private article: ArticleService) { }

	addPhotoToGallery() {
		this.article.takePicture();
	}

	loadItems() {
		this.items = this.article.getItems();
	}

	addItems() {
		this.newItem.id = Date.now();
		this.newItem.image = this.article.photos;
		this.article.addItem(this.newItem)
		this.newItem = <Item>{};
		this.article.photos = [];
		this.loadItems();

	}
  ngOnInit() {
  }

}
