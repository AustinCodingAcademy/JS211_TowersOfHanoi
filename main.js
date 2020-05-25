"use strict";

var towerSelected = false;
var selectedTowerId;
var $selectedPiece;
var countMoves = 0;

$(document).ready(init);

function init(){
    var $towers = $('.towerBase');
    $towers.on('click', towerClicked);
}

function towerClicked(event){
    var currentTowerId = this.id;
    //unselect the piece
    if (towerSelected){
        if (this.id === selectedTowerId){
        towerClicked = false;
        $selectedPiece.removeClass('selected');

      } else{
        var topPieceId = $selectedPiece.attr('id');
        var bottomPieceId = $(this).children(":first").attr('id');

        // piece gets moved to new tower
        if (!bottomPieceId || validMove(topPieceId, bottomPieceId)){
            $selectedPiece.remove();
            $(this).prepend($selectedPiece);
            towerSelected = false;
            $selectedPiece.removeClass('selected');
            countMoves += 1;
            $('#displayMoves').text("Moves: " + countMoves);

        // invalid move
        } else {
            towerSelected = false;
            $selectedPiece.removeClass('selected');
        }
      }
// first tower gets selected
    } else {
      $selectedPiece = $(this).children(":first");
      $selectedPiece.addClass("selected");
      towerSelected = true;
      selectedTowerId = this.id;
  }
  checkGameWon();
}

function validMove(topPieceId, bottomPieceId){
    return parseInt(topPieceId[5]) < parseInt(bottomPieceId[5])
}

function checkGameWon(){
    var count = $("#tower3").children().length;
    if (count === 4)
        return youWin();
}

function youWin(){
    $('body').css("background-color", "LightSalmon");
    $('#displayOutput').text("You win!");
}