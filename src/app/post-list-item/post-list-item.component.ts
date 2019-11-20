import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() itemdate;
  @Input() itemtitle:string;
  @Input() itemcontent:string;
  @Input() itemloveIt:number;
  @Input() itemimg;

  counter:number = 0;

  constructor() { }

  ngOnInit() {
  }

  addLove(){
    this.itemloveIt = this.itemloveIt +1;
  }

  removeLove(){
    this.itemloveIt = this.itemloveIt -1;
  }

  getColor(){
    if(this.itemloveIt > 0){
      return 'green';
    }else if(this.itemloveIt < 0){
      return 'red';
    }
  }

}
