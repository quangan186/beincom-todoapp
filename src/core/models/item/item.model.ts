export class ItemModel {
  title: string;
  description: string;
  createdAt: string;
  isLiked: boolean;

  constructor() {
    this.title = '';
    this.description = '';
    this.createdAt = '';
    this.isLiked = false;
  }
}
