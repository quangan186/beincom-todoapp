export class ItemModel {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  isLiked: boolean;

  titleErr?: string;

  constructor() {
    this.id = '';
    this.title = '';
    this.description = '';
    this.createdAt = '';
    this.isLiked = false;
  }
}
