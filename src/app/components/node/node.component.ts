import { Component, Input, OnInit } from '@angular/core';
import { Node } from 'src/app/models/organism-tree.model';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  @Input() nodes: Node[];
  constructor() { }

  ngOnInit(): void {
  }

}
