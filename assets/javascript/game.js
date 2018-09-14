  // Declare all global variables here (Anything I might need to keep track of globally)
  var wins = 0;
  var losses = 0;
  var targetNumber = 0;
  var currentScore = 0;
  var crystal1Math;
  var crystal2Math;
  var crystal3Math;
  var crystal4Math;

  // Function to generate the targetNumber and randomize crystal numbers
  function generator() {
    targetNumber = Math.floor(Math.random() * 140) + 1
    $("#target-number").text("Target Number: " + targetNumber);
    crystal1Math = Math.floor(Math.random() * 12) + 1
    crystal2Math = Math.floor(Math.random() * 12) + 1
    crystal3Math = Math.floor(Math.random() * 12) + 1
    crystal4Math = Math.floor(Math.random() * 12) + 1
  }

  // All on-click functions for the crystal buttons and button to start game
  $("#crystal1").on("click", function () {
    currentScore = crystal1Math + currentScore;
    $("#current-score").text("Current Score: " + currentScore);
    if (currentScore === targetNumber) {
      wins++;
      $("#win-loss").html("Wins: " + wins + "<br>" + "Losses: " + losses);
      generator();
      currentScore = 0;
    }
    if (currentScore > targetNumber) {
      losses--;
      $("#win-loss").html("Wins: " + wins + "<br>" + "Losses: " + losses);
      generator();
      currentScore = 0;
    }
  });
  $("#crystal2").on("click", function () {
    currentScore = crystal2Math + currentScore;
    $("#current-score").text("Current Score: " + currentScore);
    if (currentScore === targetNumber) {
      wins++;
      $("#win-loss").html("Wins: " + wins + "<br>" + "Losses: " + losses);
      generator();
      currentScore = 0;
    }
    if (currentScore > targetNumber) {
      losses--;
      $("#win-loss").html("Wins: " + wins + "<br>" + "Losses: " + losses);
      generator();
      currentScore = 0;
    }
  });
  $("#crystal3").on("click", function () {
    currentScore = crystal3Math + currentScore;
    $("#current-score").text("Current Score: " + currentScore);
    if (currentScore === targetNumber) {
      wins++;
      $("#win-loss").html("Wins: " + wins + "<br>" + "Losses: " + losses);
      generator();
      currentScore = 0;
    }
    if (currentScore > targetNumber) {
      losses--;
      $("#win-loss").html("Wins: " + wins + "<br>" + "Losses: " + losses);
      generator();
      currentScore = 0;
    }
  });
  $("#crystal4").on("click", function () {
    currentScore = crystal4Math + currentScore;
    $("#current-score").text("Current Score: " + currentScore);
    if (currentScore === targetNumber) {
      wins++;
      $("#win-loss").html("Wins: " + wins + "<br>" + "Losses: " + losses);
      generator();
      currentScore = 0;
    }
    if (currentScore > targetNumber) {
      losses--;
      $("#win-loss").html("Wins: " + wins + "<br>" + "Losses: " + losses);
      generator();
      currentScore = 0;
    }
  });
  $("#start-game").on("click", function () {
    generator();
  });

  




