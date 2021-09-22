import {Component, OnInit, ViewChild} from '@angular/core'

import {Item} from './item'
import {ItemService} from './item.service'
import {RadListViewComponent} from "nativescript-ui-listview/angular";

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>
  @ViewChild('myListView', {static: false}) myListView: RadListViewComponent;

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.items = this.itemService.getItems()
  }

  onPullToRefreshInitiated() {
    setTimeout(() => {
      this.myListView.listView.notifyPullToRefreshFinished();

    }, 1500);

  }
}
