import { Injectable } from '@angular/core';
import { Articles } from './article';
import { Camera, CameraResultType } from '@capacitor/camera';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Articles[] = [];
  public items: Item[] = [];

	public photos: Photo[] = [];


  constructor() { }

  addItem(item: Item) {
		this.items.push(item);
		return this.items;
	}

	getItems() {
		return this.items;
	}

	getItemById(id: Number) {
		return this.items.find(x => x.id === id);
	}

  AddArticle(index:number){
    return this.articles[index];
  }
  public async takePicture() {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: true,
			resultType: CameraResultType.Uri
		});
		var data =image.webPath?.toString();
        console.log(data);
		
		
		this.photos.unshift(
			{
				filepath: "img-" + Date.now(),
				webviewPath: image.webPath
			}
		)
	}
  
  

}
export interface Photo {
	filepath: string;
	webviewPath:any ;
}

export interface Item {
	id: number,
	title: string,
	description: string,
	location: string,
	image: Photo[]
}