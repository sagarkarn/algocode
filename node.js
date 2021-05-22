class Node{
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
    
    
  }
  // adding in node
  addNode(node){
    if(node.value < this.value){
      if(this.left == null){
        this.left = node;
      }
      else{
        this.left.addNode(node);
      }
      
    }
    else{
      if(this.right == null){
        this.right = node;
      }
      else{
        this.right.addNode(node);
      }
    }
  }
  
  nodeTraverse(){
    if(this.left != null){
      this.left.nodeTraverse();
    }
    console.log(this.value);
    if (this.right != null){
      this.right.nodeTraverse();
    }
  }
  
  find(value){
    if(this.value == value){
      return this;
    }
    else if(value < this.value && this.left != null){
      return this.left.find(value);
    }
    else if (value > this.value && this.right != null){
      return this.right.find(value);
    }
    else return null;
  }
}