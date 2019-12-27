import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pagination-component',
  templateUrl: 'pagination.component.html'
})

export class Pagination implements OnInit {
  private _itemsPerPage = 5;
  private _count: number;

  public pageCount: number;

  @Input()
  set count(count: number) {
    this._count = count;
    this.pageCount = this.countPages(count, this._itemsPerPage);
  }

  get count() { return this._count; }

  constructor() {
    this._count = 0;
  }

  private countPages(count: number, itemsPerPage: number): number {
    let pages = count / itemsPerPage;
    if (pages % 1) {
      return pages + 1;
    }
    return pages;
  }

  ngOnInit() { }
}