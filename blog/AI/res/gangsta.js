gangsta = function(){

var chess_game = [
'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1',
'rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2',
'rnbqkbnr/ppp1pppp/8/3P4/8/8/PPPP1PPP/RNBQKBNR b KQkq - 0 2',
'rnb1kbnr/ppp1pppp/8/3q4/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 3',
'rnb1kbnr/ppp1pppp/8/3q4/8/2N5/PPPP1PPP/R1BQKBNR b KQkq - 0 3',
'rnb1kbnr/ppp1pppp/4q3/8/8/2N5/PPPP1PPP/R1BQKBNR w KQkq - 0 4',
'rnb1kbnr/ppp1pppp/4q3/8/8/2N5/PPPPBPPP/R1BQK1NR b KQkq - 0 4',
'rnb1kbnr/ppp1pppp/6q1/8/8/2N5/PPPPBPPP/R1BQK1NR w KQkq - 0 5',
'rnb1kbnr/ppp1pppp/6q1/8/8/2N2B2/PPPP1PPP/R1BQK1NR b KQkq - 0 5',
'r1b1kbnr/ppp1pppp/2n3q1/8/8/2N2B2/PPPP1PPP/R1BQK1NR w KQkq - 0 6',
'r1b1kbnr/ppp1pppp/2n3q1/8/8/2N2B2/PPPPNPPP/R1BQK2R b KQkq - 0 6',
'r3kbnr/pppbpppp/2n3q1/8/8/2N2B2/PPPPNPPP/R1BQK2R w KQkq - 0 7',
'r3kbnr/pppbpppp/2n3q1/8/8/2N2B2/PPPPNPPP/R1BQ1RK1 b kq - 0 7',
'2kr1bnr/pppbpppp/2n3q1/8/8/2N2B2/PPPPNPPP/R1BQ1RK1 w - - 0 8',
'2kr1bnr/pppbpppp/2n3q1/8/8/2N2B2/PPPPNPPP/R1BQR1K1 b - - 0 8',
'2kr1bnr/pppb1ppp/2n3q1/4p3/8/2N2B2/PPPPNPPP/R1BQR1K1 w - - 0 9',
'2kr1bnr/pppb1ppp/2n3q1/4p3/3P4/2N2B2/PPP1NPPP/R1BQR1K1 b - - 0 9',
'2kr1bnr/ppp2ppp/2n3q1/4pb2/3P4/2N2B2/PPP1NPPP/R1BQR1K1 w - - 0 10',
'2kr1bnr/ppp2ppp/2n3q1/3Ppb2/8/2N2B2/PPP1NPPP/R1BQR1K1 b - - 0 10',
'2kr1bnr/ppp2ppp/2n3q1/3Pp3/8/2N2B2/PPb1NPPP/R1BQR1K1 w - - 0 11',
'2kr1bnr/ppp2ppp/2n3q1/3Pp3/8/2N2B2/PPbQNPPP/R1B1R1K1 b - - 0 11',
'2kr2nr/ppp2ppp/2n3q1/2bPp3/8/2N2B2/PPbQNPPP/R1B1R1K1 w - - 0 12',
'2kr2nr/ppp2ppp/2n3q1/2bPp3/8/2N2BN1/PPbQ1PPP/R1B1R1K1 b - - 0 12',
'2kr3r/ppp2ppp/2n2nq1/2bPp3/8/2N2BN1/PPbQ1PPP/R1B1R1K1 w - - 0 13',
'2kr3r/ppp2ppp/2n2nq1/2bPp3/4N3/2N2B2/PPbQ1PPP/R1B1R1K1 b - - 0 13',
'2kr3r/ppp2ppp/5nq1/2bPp3/3nN3/2N2B2/PPbQ1PPP/R1B1R1K1 w - - 0 14',
'2kr3r/ppp2ppp/5nq1/2bPp3/3nN3/2N5/PPbQ1PPP/R1BBR1K1 b - - 0 14',
'2kr3r/ppp2ppp/6q1/2bPp3/3nn3/2N5/PPbQ1PPP/R1BBR1K1 w - - 0 15',
'2kr3r/ppp2ppp/6q1/2bPp3/3nn3/2N5/PPBQ1PPP/R1B1R1K1 b - - 0 15',
'2kr3r/ppp2ppp/6q1/2bPp3/4n3/2N2n2/PPBQ1PPP/R1B1R1K1 w - - 0 16',
'2kr3r/ppp2ppp/6q1/2bPp3/4n3/2N2n2/PPBQ1PPP/R1B1R2K b - - 0 16',
'2kr3r/ppp2ppp/8/2bPp2q/4n3/2N2n2/PPBQ1PPP/R1B1R2K w - - 0 17',
'2kr3r/ppp2ppp/8/2bPp2q/4n3/2N2P2/PPBQ1P1P/R1B1R2K b - - 0 17',
'2kr3r/ppp2ppp/8/2bPp3/4n3/2N2q2/PPBQ1P1P/R1B1R2K w - - 0 18',
'2kr3r/ppp2ppp/8/2bPp3/4n3/2N2q2/PPBQ1P1P/R1B1R1K1 b - - 0 18',
'2kr3r/ppp2ppp/8/3Pp3/4n3/2N2q2/PPBQ1b1P/R1B1R1K1 w - - 0 19',
'2kr3r/ppp2ppp/8/3Pp3/4n3/2N2q2/PPB2Q1P/R1B1R1K1 b - - 0 19',
'2kr3r/ppp2ppp/8/3Pp3/4n3/2N5/PPB2q1P/R1B1R1K1 w - - 0 20',
'2kr3r/ppp2ppp/8/3Pp3/4n3/2N5/PPB2q1P/R1B1R2K b - - 0 20',
'2kr3r/ppp2ppp/8/3Pp3/4n3/2N5/PPB4P/R1B1q2K w - - 0 21'
];



$('#chess-pgn-gangsta').text(
"1. Pe2e4 Pd7d5\n\
2. Pe4d5 Qd8d5\n\
3. Nb1c3 Qd5e6\n\
4. Bf1e2 Qe6g6\n\
5. Be2f3 Nb8c6\n\
6. Ng1e2 Bc8d7\n\
7. O-O O-O-O\n\
8. Rf1e1 Pe7e5\n\
9. Pd2d4 Bd7f5\n\
10. Pd4d5 Bf5c2\n\
11. Qd1d2 Bf8c5\n\
12. Ne2g3 Ng8f6\n\
13. Ng3e4 Nc6d4\n\
14. Bf3d1 Nf6e4\n\
15. Bd1c2 Nd4f3\n\
16. Kg1h1 Qg6h5\n\
17. Pg2f3 Qh5f3\n\
18. Kh1g1 Bc5f2\n\
19. Qd2f2 Qf3f2\n\
20. Kg1h1 Qf2e1\n\
white resigns"
)

var board = Chessboard('chess-board-gangsta', {
  draggable: false,
  moveSpeed: 'medium',
  snapbackSpeed: 500,
  snapSpeed: 100,
  position: chess_game[0],
  pieceTheme: '../../res/chesspieces/wikipedia/{piece}.png',
  orientation: 'black'
})


var game_index = 0;

var chess_play = false;



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function set_position(game_index) {
  board.position(chess_game[game_index])
  $('#chess-move-gangsta').text("Move: " + (Math.floor((game_index+1)/2) + 1))
}

$('#chess-start-gangsta').on('click', function () {
  game_index = 0
  set_position(game_index)
})

$('#chess-prev-gangsta').on('click', function () {
  game_index = Math.max(0, game_index-1)
  set_position(game_index)
})
$('#chess-next-gangsta').on('click', function () {
  game_index = Math.min(chess_game.length-1, game_index+1)
  set_position(game_index)
})


$('#chess-play-gangsta').on('click', async function () {
  if (chess_play) {
    chess_play = false
    $('#chess-play-gangsta').text("Play")
  } else {
    chess_play = true
    $('#chess-play-gangsta').text("Pause")
    while (game_index < chess_game.length-1 && chess_play) {
      game_index = game_index + 1
      set_position(game_index)
      await sleep(500)
    }
  }
  
})
}();