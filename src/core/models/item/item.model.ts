export class ItemModel {
  title: string;
  description: string;
  createdAt: string;
  isLiked: boolean;

  titleErr?: string;

  constructor() {
    this.title = '';
    this.description = '';
    this.createdAt = '';
    this.isLiked = false;
  }
}
