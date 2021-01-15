
var chess_game = [
'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2',
'rnbqkb1r/pppppppp/5n2/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2',
'rnbqkb1r/pppppppp/8/8/3Pn3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3',
'rnbqkb1r/pppppppp/8/8/3Pn3/3B4/PPP2PPP/RNBQK1NR b KQkq - 0 3',
'rnbqkb1r/ppp1pppp/8/3p4/3Pn3/3B4/PPP2PPP/RNBQK1NR w KQkq - 0 4',
'rnbqkb1r/ppp1pppp/8/3p4/3Pn3/3B1N2/PPP2PPP/RNBQK2R b KQkq - 0 4',
'rnbqkb1r/pp2pppp/8/2pp4/3Pn3/3B1N2/PPP2PPP/RNBQK2R w KQkq - 0 5',
'rnbqkb1r/pp2pppp/8/2pp4/3Pn3/3B1N2/PPP2PPP/RNBQ1RK1 b kq - 0 5',
'r1bqkb1r/pp2pppp/2n5/2pp4/3Pn3/3B1N2/PPP2PPP/RNBQ1RK1 w kq - 0 6',
'r1bqkb1r/pp2pppp/2n5/2Pp4/4n3/3B1N2/PPP2PPP/RNBQ1RK1 b kq - 0 6',
'r1bqkb1r/pp3ppp/2n5/2Ppp3/4n3/3B1N2/PPP2PPP/RNBQ1RK1 w kq - 0 7',
'r1bqkb1r/pp3ppp/2n5/2Ppp3/4B3/5N2/PPP2PPP/RNBQ1RK1 b kq - 0 7',
'r1bqkb1r/pp3ppp/2n5/2P1p3/4p3/5N2/PPP2PPP/RNBQ1RK1 w kq - 0 8',
'r1bQkb1r/pp3ppp/2n5/2P1p3/4p3/5N2/PPP2PPP/RNB2RK1 b kq - 0 8',
'r1bnkb1r/pp3ppp/8/2P1p3/4p3/5N2/PPP2PPP/RNB2RK1 w kq - 0 9',
'r1bnkb1r/pp3ppp/8/2P1N3/4p3/8/PPP2PPP/RNB2RK1 b kq - 0 9',
'r1b1kb1r/pp3ppp/2n5/2P1N3/4p3/8/PPP2PPP/RNB2RK1 w kq - 0 10',
'r1b1kb1r/pp3ppp/2N5/2P5/4p3/8/PPP2PPP/RNB2RK1 b kq - 0 10',
'r1b1kb1r/p4ppp/2p5/2P5/4p3/8/PPP2PPP/RNB2RK1 w kq - 0 11',
'r1b1kb1r/p4ppp/2p5/2P5/4p3/2N5/PPP2PPP/R1B2RK1 b kq - 0 11',
'r3kb1r/p4ppp/2p5/2P2b2/4p3/2N5/PPP2PPP/R1B2RK1 w kq - 0 12',
'r3kb1r/p4ppp/2p5/2P2b2/4p3/2N1B3/PPP2PPP/R4RK1 b kq - 0 12',
'1r2kb1r/p4ppp/2p5/2P2b2/4p3/2N1B3/PPP2PPP/R4RK1 w k - 0 13',
'1r2kb1r/p4ppp/2p5/2P2b2/4p3/2N1B3/PPP2PPP/1R3RK1 b k - 0 13',
'1r2k2r/p3bppp/2p5/2P2b2/4p3/2N1B3/PPP2PPP/1R3RK1 w k - 0 14',
'1r2k2r/p3bppp/2p5/2P2b2/4pB2/2N5/PPP2PPP/1R3RK1 b k - 0 14',
'4k2r/p3bppp/2p5/2P2b2/1r2pB2/2N5/PPP2PPP/1R3RK1 w k - 0 15',
'4k2r/p3bppp/2p5/2P2b2/1r2pB2/8/PPP2PPP/1R1N1RK1 b k - 0 15',
'4k2r/p3bppp/2p5/2P2b2/1r3B2/4p3/PPP2PPP/1R1N1RK1 w k - 0 16',
'4k2r/p3bppp/2p5/2P2b2/1r6/4B3/PPP2PPP/1R1N1RK1 b k - 0 16',
'4k2r/p3bppp/2p5/2P5/1r6/4B3/PPb2PPP/1R1N1RK1 w k - 0 17',
'4k2r/p3bppp/2p5/2P5/1r6/4B3/PPb2PPP/2RN1RK1 b k - 0 17',
'4k2r/p3bppp/2p5/2P5/1r6/4B3/PP3PPP/2Rb1RK1 w k - 0 18',
'4k2r/p3bppp/2p5/2P5/1r6/4B3/PP3PPP/3R1RK1 b k - 0 18',
'4k2r/p3bppp/2p5/2P5/8/4B3/Pr3PPP/3R1RK1 w k - 0 19',
'4k2r/p3bppp/2p5/2P5/3B4/8/Pr3PPP/3R1RK1 b k - 0 19',
'4k2r/p3bppp/2p5/2P5/3B4/8/P1r2PPP/3R1RK1 w k - 0 20',
'4k2r/p3bppp/2p5/2P5/3B4/8/P1r2PPP/3RR1K1 b k - 0 20',
'4k2r/p3b1pp/2p2p2/2P5/3B4/8/P1r2PPP/3RR1K1 w k - 0 21',
'4k2r/p3b1pp/2p1Rp2/2P5/3B4/8/P1r2PPP/3R2K1 b k - 0 21',
'7r/p3bkpp/2p1Rp2/2P5/3B4/8/P1r2PPP/3R2K1 w - - 0 22',
'7r/p3bkpp/2p1Rp2/2P5/3B4/8/P1r2PPP/4R1K1 b - - 0 22',
'7r/p4kpp/2p1Rp2/2b5/3B4/8/P1r2PPP/4R1K1 w - - 0 23',
'7r/p4kpp/2R2p2/2b5/3B4/8/P1r2PPP/4R1K1 b - - 0 23',
'7r/p4kpp/2R2p2/8/1b1B4/8/P1r2PPP/4R1K1 w - - 0 24',
'7r/p4kpp/5p2/8/1b1B4/8/P1R2PPP/4R1K1 b - - 0 24',
'7r/p4kpp/5p2/8/3B4/8/P1R2PPP/4b1K1 w - - 0 25',
'7r/p1R2kpp/5p2/8/3B4/8/P4PPP/4b1K1 b - - 0 25',
'7r/p1R3pp/5pk1/8/3B4/8/P4PPP/4b1K1 w - - 0 26',
'7r/B1R3pp/5pk1/8/8/8/P4PPP/4b1K1 b - - 0 26',
'3r4/B1R3pp/5pk1/8/8/8/P4PPP/4b1K1 w - - 0 27',
'3r4/B1R3pp/5pk1/8/6P1/8/P4P1P/4b1K1 b - - 0 27',
'3r4/B1R3pp/5pk1/b7/6P1/8/P4P1P/6K1 w - - 0 28',
'3r4/B5pp/5pk1/b7/2R3P1/8/P4P1P/6K1 b - - 0 28',
'8/B5pp/5pk1/b7/2R3P1/8/P4P1P/3r2K1 w - - 0 29',
'8/B5pp/5pk1/b7/2R3P1/8/P4PKP/3r4 b - - 0 29',
'8/B5pp/6k1/b4p2/2R3P1/8/P4PKP/3r4 w - - 0 30',
'8/B5pp/6k1/b4P2/2R5/8/P4PKP/3r4 b - - 0 30',
'8/B5pp/5k2/b4P2/2R5/8/P4PKP/3r4 w - - 0 31',
'8/6pp/5k2/b4P2/2RB4/8/P4PKP/3r4 b - - 0 31',
'8/6pp/8/b4k2/2RB4/8/P4PKP/3r4 w - - 0 32',
'8/6Bp/8/b4k2/2R5/8/P4PKP/3r4 b - - 0 32',
'8/6Bp/8/5k2/2R5/8/P2b1PKP/3r4 w - - 0 33',
'8/6Bp/8/5k2/3R4/8/P2b1PKP/3r4 b - - 0 33',
'8/6Bp/6k1/8/3R4/8/P2b1PKP/3r4 w - - 0 34',
'5B2/7p/6k1/8/3R4/8/P2b1PKP/3r4 b - - 0 34',
'5B2/7p/8/6k1/3R4/8/P2b1PKP/3r4 w - - 0 35',
'8/7p/3B4/6k1/3R4/8/P2b1PKP/3r4 b - - 0 35',
'8/7p/3B4/5k2/3R4/8/P2b1PKP/3r4 w - - 0 36',
'8/7p/3B4/5k2/3R3P/8/P2b1PK1/3r4 b - - 0 36',
'8/8/3B4/5k1p/3R3P/8/P2b1PK1/3r4 w - - 0 37',
'8/8/8/5k1p/3R3P/6B1/P2b1PK1/3r4 b - - 0 37',
'8/8/4k3/7p/3R3P/6B1/P2b1PK1/3r4 w - - 0 38',
'8/8/4k3/7p/3R3P/5KB1/P2b1P2/3r4 b - - 0 38',
'8/8/5k2/7p/3R3P/5KB1/P2b1P2/3r4 w - - 0 39',
'8/8/5k2/7p/3R3P/6B1/P2bKP2/3r4 b - - 0 39',
'8/8/5k2/7p/3R3P/6B1/P2bKP2/4r3 w - - 0 40',
'8/8/5k2/7p/3R3P/6B1/P2K1P2/4r3 b - - 0 40',
'8/8/5k2/7p/3R3P/6B1/P2K1P2/r7 w - - 0 41',
'8/8/5k2/7p/P2R3P/6B1/3K1P2/r7 b - - 0 41',
'8/8/8/5k1p/P2R3P/6B1/3K1P2/r7 w - - 0 42',
'8/8/8/3R1k1p/P6P/6B1/3K1P2/r7 b - - 0 42',
'8/8/4k3/3R3p/P6P/6B1/3K1P2/r7 w - - 0 43',
'8/8/4k3/4R2p/P6P/6B1/3K1P2/r7 b - - 0 43',
'8/5k2/8/4R2p/P6P/6B1/3K1P2/r7 w - - 0 44',
'8/5k2/8/P3R2p/7P/6B1/3K1P2/r7 b - - 0 44',
'8/8/5k2/P3R2p/7P/6B1/3K1P2/r7 w - - 0 45',
'8/8/5k2/P6R/7P/6B1/3K1P2/r7 b - - 0 45',
'8/8/5k2/P6R/7P/6B1/r2K1P2/8 w - - 0 46',
'8/8/5k2/P6R/7P/2K3B1/r4P2/8 b - - 0 46',
'8/8/6k1/P6R/7P/2K3B1/r4P2/8 w - - 0 47',
'8/8/6k1/P5R1/7P/2K3B1/r4P2/8 b - - 0 47',
'8/8/7k/P5R1/7P/2K3B1/r4P2/8 w - - 0 48',
'8/8/7k/P2R4/7P/2K3B1/r4P2/8 b - - 0 48',
'8/6k1/8/P2R4/7P/2K3B1/r4P2/8 w - - 0 49',
'8/6k1/8/P2RB3/7P/2K5/r4P2/8 b - - 0 49',
'8/5k2/8/P2RB3/7P/2K5/r4P2/8 w - - 0 50',
'8/5k2/8/P2RB3/5P1P/2K5/r7/8 b - - 0 50',
'8/5k2/8/P2RB3/5P1P/2K5/7r/8 w - - 0 51',
'8/5k2/P7/3RB3/5P1P/2K5/7r/8 b - - 0 51',
'4k3/8/P7/3RB3/5P1P/2K5/7r/8 w - - 0 52',
'4k3/8/P7/4B3/5P1P/2K5/3R3r/8 b - - 0 52',
'4k3/8/P7/4B3/5P1P/2K5/3R4/7r w - - 0 53',
'4k3/8/P7/4B3/5P1P/8/1K1R4/7r b - - 0 53',
'4k3/8/P7/4B3/5P1r/8/1K1R4/8 w - - 0 54',
'4k3/P7/8/4B3/5P1r/8/1K1R4/8 b - - 0 54',
'8/P4k2/8/4B3/5P1r/8/1K1R4/8 w - - 0 55',
'Q7/5k2/8/4B3/5P1r/8/1K1R4/8 b - - 0 55',
'Q7/8/4k3/4B3/5P1r/8/1K1R4/8 w - - 0 56',
'5Q2/8/4k3/4B3/5P1r/8/1K1R4/8 b - - 0 56',
'5Q2/8/4k3/4B3/5r2/8/1K1R4/8 w - - 0 57',
'5Q2/8/3Rk3/4B3/5r2/8/1K6/8 b - - 0 57',
'5Q2/8/3R4/4k3/5r2/8/1K6/8 w - - 0 58',
'8/8/3R4/4k3/5Q2/8/1K6/8 b - - 0 58',
'8/8/3R4/8/5k2/8/1K6/8 w - - 0 59',
'8/8/8/8/3R1k2/8/1K6/8 b - - 0 59',
'8/8/8/4k3/3R4/8/1K6/8 w - - 0 60',
'8/8/8/4k3/3R4/2K5/8/8 b - - 0 60',
'8/8/5k2/8/3R4/2K5/8/8 w - - 0 61',
'8/8/5k2/8/4R3/2K5/8/8 b - - 0 61',
'8/8/8/5k2/4R3/2K5/8/8 w - - 0 62',
'8/8/8/5k2/3KR3/8/8/8 b - - 0 62',
'8/8/5k2/8/3KR3/8/8/8 w - - 0 63',
'8/8/5k2/4R3/3K4/8/8/8 b - - 0 63',
'8/5k2/8/4R3/3K4/8/8/8 w - - 0 64',
'8/5k2/8/4R3/4K3/8/8/8 b - - 0 64',
'8/6k1/8/4R3/4K3/8/8/8 w - - 0 65',
'8/6k1/8/4RK2/8/8/8/8 b - - 0 65',
'6k1/8/8/4RK2/8/8/8/8 w - - 0 66',
'6k1/8/5K2/4R3/8/8/8/8 b - - 0 66',
'8/7k/5K2/4R3/8/8/8/8 w - - 0 67',
'4R3/7k/5K2/8/8/8/8/8 b - - 0 67',
'4R3/8/5K1k/8/8/8/8/8 w - - 0 68',
'7R/8/5K1k/8/8/8/8/8 b - - 0 68'
];

console.log("length", chess_game.length)

var board = Chessboard('chess-board', {
  draggable: false,
  moveSpeed: 'medium',
  snapbackSpeed: 500,
  snapSpeed: 100,
  position: chess_game[0],
  pieceTheme: 'res/chesspieces/wikipedia/{piece}.png',
})

var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));

console.log(loc);
console.log(dir);

var game_index = 0;

var chess_play = false;

$('#chess-start').on('click', function () {
  game_index = 0
  console.log(game_index)
  board.position(chess_game[game_index])
})

$('#chess-prev').on('click', function () {
  game_index = Math.max(0, game_index-1)
  console.log(game_index)
  board.position(chess_game[game_index])
})
$('#chess-next').on('click', function () {
  game_index = Math.min(chess_game.length-1, game_index+1)
  console.log(game_index)
  board.position(chess_game[game_index])
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$('#chess-play').on('click', async function () {
  if (chess_play) {
    chess_play = false
    $('#chess-play').text("Play")
  } else {
    chess_play = true
    $('#chess-play').text("Pause")
    while (game_index < chess_game.length && chess_play) {
      game_index = game_index + 1
      console.log(game_index)
      board.position(chess_game[game_index])
      await sleep(500)
    }
  }
  
})
