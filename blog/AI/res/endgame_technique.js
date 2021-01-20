
var chess_game = [
'8/8/8/4k3/8/3K4/4P3/8 w - - 0 1',
'8/8/8/4k3/8/4K3/4P3/8 b - - 0 1',
'8/8/8/3k4/8/4K3/4P3/8 w - - 0 2',
'8/8/8/3k4/5K2/8/4P3/8 b - - 0 2',
'8/8/4k3/8/5K2/8/4P3/8 w - - 0 3',
'8/8/4k3/8/4K3/8/4P3/8 b - - 0 3',
'8/8/3k4/8/4K3/8/4P3/8 w - - 0 4',
'8/8/3k4/5K2/8/8/4P3/8 b - - 0 4',
'8/4k3/8/5K2/8/8/4P3/8 w - - 0 5',
'8/4k3/8/5K2/8/4P3/8/8 b - - 0 5',
'8/8/3k4/5K2/8/4P3/8/8 w - - 0 6',
'8/8/3k4/5K2/4P3/8/8/8 b - - 0 6',
'8/4k3/8/5K2/4P3/8/8/8 w - - 0 7',
'8/4k3/8/4K3/4P3/8/8/8 b - - 0 7',
'8/3k4/8/4K3/4P3/8/8/8 w - - 0 8',
'8/3k4/5K2/8/4P3/8/8/8 b - - 0 8',
'3k4/8/5K2/8/4P3/8/8/8 w - - 0 9',
'3k4/5K2/8/8/4P3/8/8/8 b - - 0 9',
'8/2k2K2/8/8/4P3/8/8/8 w - - 0 10',
'8/2k2K2/8/4P3/8/8/8/8 b - - 0 10',
'8/5K2/1k6/4P3/8/8/8/8 w - - 0 11',
'8/5K2/1k2P3/8/8/8/8/8 b - - 0 11',
'8/5K2/4P3/1k6/8/8/8/8 w - - 0 12',
'8/4PK2/8/1k6/8/8/8/8 b - - 0 12',
'8/4PK2/8/8/2k5/8/8/8 w - - 0 13',
'4Q3/5K2/8/8/2k5/8/8/8 b - - 0 13',
'4Q3/5K2/8/8/8/3k4/8/8 w - - 0 14',
'8/3Q1K2/8/8/8/3k4/8/8 b - - 0 14',
'8/3Q1K2/8/8/8/8/2k5/8 w - - 0 15',
'8/5K2/8/8/3Q4/8/2k5/8 b - - 0 15',
'8/5K2/8/8/3Q4/8/8/1k6 w - - 0 16',
'8/8/4K3/8/3Q4/8/8/1k6 b - - 0 16',
'8/8/4K3/8/3Q4/8/8/2k5 w - - 0 17',
'8/8/8/3K4/3Q4/8/8/2k5 b - - 0 17',
'8/8/8/3K4/3Q4/8/8/1k6 w - - 0 18',
'8/8/8/8/2KQ4/8/8/1k6 b - - 0 18',
'8/8/8/8/2KQ4/8/k7/8 w - - 0 19',
'8/8/8/8/2K5/8/k2Q4/8 b - - 0 19',
'8/8/8/8/2K5/8/3Q4/k7 w - - 0 20',
'8/8/8/8/8/2K5/3Q4/k7 b - - 0 20',
'8/8/8/8/8/2K5/3Q4/1k6 w - - 0 21',
'8/8/8/8/8/2K5/1Q6/1k6 b - - 0 21'
];

var board = Chessboard('chess-board-endgame-technique', {
  draggable: false,
  moveSpeed: 'medium',
  snapbackSpeed: 500,
  snapSpeed: 100,
  position: chess_game[0],
  pieceTheme: '../../res/chesspieces/wikipedia/{piece}.png',
})


var game_index = 0;

var chess_play = false;

$('#chess-start-endgame-technique').on('click', function () {
  game_index = 0
  board.position(chess_game[game_index])
})

$('#chess-prev-endgame-technique').on('click', function () {
  game_index = Math.max(0, game_index-1)
  board.position(chess_game[game_index])
})
$('#chess-next-endgame-technique').on('click', function () {
  game_index = Math.min(chess_game.length-1, game_index+1)
  board.position(chess_game[game_index])
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$('#chess-play-endgame-technique').on('click', async function () {
  if (chess_play) {
    chess_play = false
    $('#chess-play-endgame-technique').text("Play")
  } else {
    chess_play = true
    $('#chess-play-endgame-technique').text("Pause")
    while (game_index < chess_game.length && chess_play) {
      game_index = game_index + 1
      board.position(chess_game[game_index])
      await sleep(500)
    }
  }
  
})
