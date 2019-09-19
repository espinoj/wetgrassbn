var jsbayes = require('jsbayes');

function welcome(inputs){

 var g = jsbayes.newGraph();
 var n1 = g.addNode('n1', ['true', 'false']);
 var n2 = g.addNode('n2', ['true', 'false']);
 var n3 = g.addNode('n3', ['true', 'false']);

 n2.addParent(n1);
 n3.addParent(n2);

 g.reinit()
 .then(function(r) {
  return g.sample(10000); //likelihood weight sampling aka the inference
 })
 .then(function(r) {
  //do something like console.log(g);
 });

 g.observe('n1', 'true');
 g.sample(10000);

 name = inputs.name; 
  return "Welcome to Knowledge Grid!!!, " + name + ", " + inputs.last_name;

 }