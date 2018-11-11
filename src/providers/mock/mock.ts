// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

/*
  Generated class for the MockProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
// @Injectable()
export class MockProvider {

  constructor() {
  }

  /*
    戻り値：[{"name":"string", "items":[string[]]}]
  */
  getSegmentItems() {
    let segments = [];
    for (let i = 0; i < 10; i++) {
      let item = this.getItem("menu" + i, 15);
      segments.push(item);
    }
    return segments;
  }

  /*
    戻り値：{"name":"string", "items":[string[]]}
  */
  getItem(name, num) {
    let item = {
      "name": name,
      "items": []
    };
    for (let i = 0; i < num; i++) {
      item.items.push("item" + i);
    }
    return item;
  }

}
