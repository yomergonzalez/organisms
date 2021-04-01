import { Organism } from '../services/organism.service';

export class Node {
  public id: string;
  public name: string;
  public children: Node[];
  public parent: string;

  constructor(data: Organism) {
    this.name = data.Name;
    this.id = data.ID;
    this.children = [];
    this.parent = data.Parent.toString();
   }
}

export class Tree {
  private children: Node[];

  constructor(data: Organism[]){
    this.children = [];
    this.setData(data);
  }

  getChildren() {
    return this.children;
  }


  setData(data: Organism[]){
    data.forEach((element) => {
       this.addChild(element);
    });
  }


  addChild(organism: Organism){
    if(organism.Parent==0){
      this.children.push(new Node(organism));
    } else {
      this.addSubChilds(this.children, new Node(organism));
    }
  }

  addSubChilds(children: Node[], node: Node){
    for(let i=0; i<children.length; i++){
      if(children[i].id== node.parent){
        children[i].children.push(node);
      } else {
        this.addSubChilds(children[i].children, node);
      }
    }
  }




}


