import { Component, OnInit } from '@angular/core';
import { OrganismService } from '../../services/organism.service';
import { Tree } from '../../models/organism-tree.model';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  tree: Tree;

  constructor(private service: OrganismService) { }

  ngOnInit(): void {
    this.getOrganisms();
  }

  getOrganisms(){
    this.service.getAll().subscribe({
      next: (response) => {
        this.tree = new Tree(response.data);
      }
    })
  }

}
