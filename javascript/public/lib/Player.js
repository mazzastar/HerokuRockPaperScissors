function Player(name) {
  this.name = name;
  this.choices =[];
  this.metrics = {};


  var player = this;
  this.PAIRS.forEach(function(pick){
	  player.metrics[pick] = 0;
  }); 

  this.scores = {win:0, lose:0, draw:0};
}

Player.prototype.picks = function(pick) {
  this.pick = pick;
  this.metrics[pick]+=1;
  // this.choices.push(pick);
};

Player.prototype.PAIRS = ["rock", "paper", "scissors", "spock", "lizard"];

Player.prototype.sum = function(){
	var met2 = this.metrics;
	var value = Object.keys(met2).reduce(function(previous, key){
		return previous+met2[key];
	},0);
	return value;
};

Player.prototype.distribution = function(){
	var total = this.sum().toFixed(10);
	var output = {};
	var player = this;
	Object.keys(this.metrics).forEach(function(pick) {
		output[pick] = player.metrics[pick]/total;
	});

	return output;
};

Player.prototype.score_update = function(result){
	this.scores[result]+=1;
};