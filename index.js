var tree = new Tree();

// add random value in tree
for(let i = 0; i <10; i++){
  let value = Math.floor((Math.random(100) * 100) + 1);
  tree.addValue(value);
}
tree.addValue(10);


// traversing 
tree.traverse();

// searching
let found = tree.search(10);

if (found){
  console.log("found ");
  console.log(found);
}
else{
  console.log("not found");
}


// printing tree
console.log(tree);