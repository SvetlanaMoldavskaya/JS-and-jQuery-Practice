$(document).ready(function() {
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
  $("#button1").on("click", function() {
    $("#p1").css("opacity", 0);
  });

  ///////////////////

  $("#hide").click(function() {
    $("p").hide();
  });
  $("#show").click(function() {
    $("p").show();
  });
});
/////////////////////////

const schedule = ["wake up", "eat", "watch smth", "clean"];

console.log(schedule);
console.log(schedule[0]);
schedule.push("boom");
console.log(schedule);

schedule.pop();
console.log(schedule);
console.log(schedule.indexOf("eat"));

const watch = schedule.indexOf("watch smth");
console.log(watch);
console.log(schedule[watch]);
