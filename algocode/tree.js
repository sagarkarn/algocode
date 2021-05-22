class Tree{
  root = null;
  
  //add to root`
  addValue(value){
    var node = new Node(value);
    if (this.root == null){
      this.root = node;
    }
    else{
      this.root.addNode(node);
    }
  }
  // traversing
  traverse(){
    this.root.nodeTraverse();
  }
  
  // search
  search(value){
    if (this.root.value == value){
      return this.root;
    }
    else{
      return this.root.find(value);
    }
  }
}