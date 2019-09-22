console.log("he");

function adder(num1, num2) {
  console.log(num1 + num2);
}
adder(5, 10);

var name = "Benjamin";
var town = "San-Francisco";

function makeBig(text) {
  console.log(text.toUpperCase());
}
makeBig(name);
makeBig(town);

const makeLettersBig = function(text) {
  console.log(text.toUpperCase());
};
makeLettersBig("funny");

const toUpper = text => {
  console.log(text.toUpperCase());
};

toUpper("how dare you?");
/////////////
$("button").on("click", function() {
  $("p").css("opacity", 0);
});
