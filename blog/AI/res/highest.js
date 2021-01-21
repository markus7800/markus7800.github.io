highest = function() {

var chess_game = [
'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
'rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq - 0 1',
'rnbqkbnr/pppp1ppp/8/4p3/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2',
'rnbqkbnr/pppp1ppp/8/4N3/8/8/PPPPPPPP/RNBQKB1R b KQkq - 0 2',
'rnbqkb1r/pppp1ppp/5n2/4N3/8/8/PPPPPPPP/RNBQKB1R w KQkq - 0 3',
'rnbqkb1r/pppp1ppp/5n2/4N3/3P4/8/PPP1PPPP/RNBQKB1R b KQkq - 0 3',
'rnbqkb1r/ppp2ppp/3p1n2/4N3/3P4/8/PPP1PPPP/RNBQKB1R w KQkq - 0 4',
'rnbqkb1r/ppp2ppp/3p1n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq - 0 4',
'r1bqkb1r/ppp2ppp/2np1n2/8/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq - 0 5',
'r1bqkb1r/ppp2ppp/2np1n2/3P4/8/5N2/PPP1PPPP/RNBQKB1R b KQkq - 0 5',
'r1bqkb1r/ppp2ppp/3p1n2/3Pn3/8/5N2/PPP1PPPP/RNBQKB1R w KQkq - 0 6',
'r1bqkb1r/ppp2ppp/3p1n2/3Pn3/8/2N2N2/PPP1PPPP/R1BQKB1R b KQkq - 0 6',
'r1bqk2r/ppp1bppp/3p1n2/3Pn3/8/2N2N2/PPP1PPPP/R1BQKB1R w KQkq - 0 7',
'r1bqk2r/ppp1bppp/3p1n2/3Pn3/3Q4/2N2N2/PPP1PPPP/R1B1KB1R b KQkq - 0 7',
'r1bqk2r/pp2bppp/3p1n2/2pPn3/3Q4/2N2N2/PPP1PPPP/R1B1KB1R w KQkq c6 0 8',
'r1bqk2r/pp2bppp/3p1n2/2pPn3/5Q2/2N2N2/PPP1PPPP/R1B1KB1R b KQkq - 0 8',
'r1bqk2r/pp2bppp/3p1n2/2pP4/5Q2/2N2n2/PPP1PPPP/R1B1KB1R w KQkq - 0 9',
'r1bqk2r/pp2bppp/3p1n2/2pP4/5Q2/2N2P2/PPP2PPP/R1B1KB1R b KQkq - 0 9',
'r1bq1rk1/pp2bppp/3p1n2/2pP4/5Q2/2N2P2/PPP2PPP/R1B1KB1R w KQ - 0 10',
'r1bq1rk1/pp2bppp/3p1n2/2pP4/5Q2/2NB1P2/PPP2PPP/R1B1K2R b KQ - 0 10',
'r1bq1rk1/p3bppp/3p1n2/1ppP4/5Q2/2NB1P2/PPP2PPP/R1B1K2R w KQ - 0 11',
'r1bq1rk1/p3bppp/3p1n2/1BpP4/5Q2/2N2P2/PPP2PPP/R1B1K2R b KQ - 0 11',
'r2q1rk1/pb2bppp/3p1n2/1BpP4/5Q2/2N2P2/PPP2PPP/R1B1K2R w KQ - 0 12',
'r2q1rk1/pb2bppp/2Bp1n2/2pP4/5Q2/2N2P2/PPP2PPP/R1B1K2R b KQ - 0 12',
'r2q1rk1/p3bppp/2bp1n2/2pP4/5Q2/2N2P2/PPP2PPP/R1B1K2R w KQ - 0 13',
'r2q1rk1/p3bppp/2Pp1n2/2p5/5Q2/2N2P2/PPP2PPP/R1B1K2R b KQ - 0 13',
'2rq1rk1/p3bppp/2Pp1n2/2p5/5Q2/2N2P2/PPP2PPP/R1B1K2R w KQ - 0 14',
'2rq1rk1/p3bppp/2Pp1n2/2p5/5Q2/2N2P2/PPP2PPP/R1B2RK1 b - - 0 14',
'3q1rk1/p3bppp/2rp1n2/2p5/5Q2/2N2P2/PPP2PPP/R1B2RK1 w - - 0 15',
'3q1rk1/p3bppp/2rp1n2/2p5/Q7/2N2P2/PPP2PPP/R1B2RK1 b - - 0 15',
'5rk1/p3bppp/1qrp1n2/2p5/Q7/2N2P2/PPP2PPP/R1B2RK1 w - - 0 16',
'5rk1/p3bppp/1qrp1n2/2p5/Q7/2N2P2/PPP2PPP/R1B1R1K1 b - - 0 16',
'3b1rk1/p4ppp/1qrp1n2/2p5/Q7/2N2P2/PPP2PPP/R1B1R1K1 w - - 0 17',
'3b1rk1/p4ppp/1qrp1n2/2p5/8/1QN2P2/PPP2PPP/R1B1R1K1 b - - 0 17',
'3b1rk1/p4ppp/2rp1n2/2p5/1q6/1QN2P2/PPP2PPP/R1B1R1K1 w - - 0 18',
'3b1rk1/p4ppp/2rp1n2/2p5/1q6/1QN1BP2/PPP2PPP/R3R1K1 b - - 0 18',
'3b1rk1/p4ppp/2rp1n2/2p5/8/1qN1BP2/PPP2PPP/R3R1K1 w - - 0 19',
'3b1rk1/p4ppp/2rp1n2/2p5/8/1PN1BP2/1PP2PPP/R3R1K1 b - - 0 19',
'3b1rk1/5ppp/2rp1n2/p1p5/8/1PN1BP2/1PP2PPP/R3R1K1 w - - 0 20',
'3b1rk1/5ppp/2rp1n2/pNp5/8/1P2BP2/1PP2PPP/R3R1K1 b - - 0 20',
'5rk1/5ppp/1brp1n2/pNp5/8/1P2BP2/1PP2PPP/R3R1K1 w - - 0 21',
'5rk1/5ppp/1brp1n2/pNp5/8/1P3P2/1PPB1PPP/R3R1K1 b - - 0 21',
'r5k1/5ppp/1brp1n2/pNp5/8/1P3P2/1PPB1PPP/R3R1K1 w - - 0 22',
'r5k1/5ppp/1brp1n2/pNp5/6P1/1P3P2/1PPB1P1P/R3R1K1 b - - 0 22',
'r3n1k1/5ppp/1brp4/pNp5/6P1/1P3P2/1PPB1P1P/R3R1K1 w - - 0 23',
'r3n1k1/5ppp/1brp4/BNp5/6P1/1P3P2/1PP2P1P/R3R1K1 b - - 0 23',
'r3n1k1/6pp/1brp1p2/BNp5/6P1/1P3P2/1PP2P1P/R3R1K1 w - - 0 24',
'r3n1k1/6pp/1brp1p2/1Np5/6P1/1P3P2/1PPB1P1P/R3R1K1 b - - 0 24',
'4n1k1/6pp/1brp1p2/1Np5/6P1/1P3P2/1PPB1P1P/r3R1K1 w - - 0 25',
'4n1k1/6pp/1brp1p2/1Np5/6P1/1P3P2/1PPB1P1P/R5K1 b - - 0 25',
'6k1/2n3pp/1brp1p2/1Np5/6P1/1P3P2/1PPB1P1P/R5K1 w - - 0 26',
'6k1/2n3pp/1brp1p2/1Np5/2P3P1/1P3P2/1P1B1P1P/R5K1 b - - 0 26',
'6k1/6pp/1brp1p2/1np5/2P3P1/1P3P2/1P1B1P1P/R5K1 w - - 0 27',
'R5k1/6pp/1brp1p2/1np5/2P3P1/1P3P2/1P1B1P1P/6K1 b - - 0 27',
'R7/5kpp/1brp1p2/1np5/2P3P1/1P3P2/1P1B1P1P/6K1 w - - 0 28',
'R7/5kpp/1brp1p2/1Pp5/6P1/1P3P2/1P1B1P1P/6K1 b - - 0 28',
'R7/2r2kpp/1b1p1p2/1Pp5/6P1/1P3P2/1P1B1P1P/6K1 w - - 0 29',
'3R4/2r2kpp/1b1p1p2/1Pp5/6P1/1P3P2/1P1B1P1P/6K1 b - - 0 29',
'3R4/2r3pp/1b1pkp2/1Pp5/6P1/1P3P2/1P1B1P1P/6K1 w - - 0 30',
'1R6/2r3pp/1b1pkp2/1Pp5/6P1/1P3P2/1P1B1P1P/6K1 b - - 0 30',
'1R6/b1r3pp/3pkp2/1Pp5/6P1/1P3P2/1P1B1P1P/6K1 w - - 0 31',
'4R3/b1r3pp/3pkp2/1Pp5/6P1/1P3P2/1P1B1P1P/6K1 b - - 0 31',
'4R3/b1r3pp/3p1p2/1Ppk4/6P1/1P3P2/1P1B1P1P/6K1 w - - 0 32',
'7R/b1r3pp/3p1p2/1Ppk4/6P1/1P3P2/1P1B1P1P/6K1 b - - 0 32',
'7R/b1r4p/3p1pp1/1Ppk4/6P1/1P3P2/1P1B1P1P/6K1 w - - 0 33',
'7R/b1r4p/3p1pp1/1Ppk4/6P1/1PB2P2/1P3P1P/6K1 b - - 0 33',
'7R/b4r1p/3p1pp1/1Ppk4/6P1/1PB2P2/1P3P1P/6K1 w - - 0 34',
'4R3/b4r1p/3p1pp1/1Ppk4/6P1/1PB2P2/1P3P1P/6K1 b - - 0 34',
'4R3/b4r1p/3p2p1/1Ppk1p2/6P1/1PB2P2/1P3P1P/6K1 w - - 0 35',
'8/b4r1p/3p2p1/1Ppk1p2/6P1/1PB2P2/1P3P1P/4R1K1 b - - 0 35',
'8/b4r1p/3p2p1/1Ppk4/6p1/1PB2P2/1P3P1P/4R1K1 w - - 0 36',
'8/b4r1p/3p2p1/1Ppk4/6P1/1PB5/1P3P1P/4R1K1 b - - 0 36',
'8/br5p/3p2p1/1Ppk4/6P1/1PB5/1P3P1P/4R1K1 w - - 0 37',
'8/br5p/3p2p1/1Ppk4/5PP1/1PB5/1P5P/4R1K1 b - - 0 37',
'8/br5p/3p2p1/1P1k4/2p2PP1/1PB5/1P5P/4R1K1 w - - 0 38',
'8/br5p/3p2p1/1P1k4/2p2PP1/1PB5/1P5P/4RK2 b - - 0 38',
'8/br5p/3p2p1/1P1k4/5PP1/1pB5/1P5P/4RK2 w - - 0 39',
'8/br5p/3p2p1/1P1k1P2/6P1/1pB5/1P5P/4RK2 b - - 0 39',
'8/br5p/3p4/1P1k1p2/6P1/1pB5/1P5P/4RK2 w - - 0 40',
'8/br5p/3p4/1P1k1P2/8/1pB5/1P5P/4RK2 b - - 0 40',
'8/br5p/3p4/1P3P2/2k5/1pB5/1P5P/4RK2 w - - 0 41',
'8/br5p/3p1P2/1P6/2k5/1pB5/1P5P/4RK2 b - - 0 41',
'8/b6p/3p1P2/1r6/2k5/1pB5/1P5P/4RK2 w - - 0 42',
'8/b6p/3p1P2/1r6/2k1R3/1pB5/1P5P/5K2 b - - 0 42',
'8/b6p/3p1P2/1r6/4R3/1pBk4/1P5P/5K2 w - - 0 43',
'8/b6p/3p1P2/1r6/5R2/1pBk4/1P5P/5K2 b - - 0 43',
'8/b6p/3p1P2/6r1/5R2/1pBk4/1P5P/5K2 w - - 0 44',
'8/b6p/3p1P2/6r1/5R2/1pBk4/1P5P/4K3 b - - 0 44',
'8/7p/3p1P2/6r1/5R2/1pBkb3/1P5P/4K3 w - - 0 45',
'8/5P1p/3p4/6r1/5R2/1pBkb3/1P5P/4K3 b - - 0 45',
'8/5P1p/3p4/6r1/5b2/1pBk4/1P5P/4K3 w - - 0 46',
'5Q2/7p/3p4/6r1/5b2/1pBk4/1P5P/4K3 b - - 0 46',
'5Q2/7p/3p4/8/5b2/1pBk4/1P5P/4K1r1 w - - 0 47',
'5Q2/7p/3p4/8/5b2/1pBk4/1P3K1P/6r1 b - - 0 47',
'5Q2/7p/3p4/8/8/1pBkb3/1P3K1P/6r1 w - - 0 48',
'5Q2/7p/3p4/8/8/1pBkbK2/1P5P/6r1 b - - 0 48',
'5Q2/7p/3p4/8/8/1pBkbK2/1P5P/5r2 w - - 0 49',
'5Q2/7p/3p4/8/8/1pBkb1K1/1P5P/5r2 b - - 0 49',
'5r2/7p/3p4/8/8/1pBkb1K1/1P5P/8 w - - 0 50',
'5r2/7p/3p4/8/7P/1pBkb1K1/1P6/8 b - - 0 50',
'5r2/7p/3p4/8/7P/1pBk2K1/1P1b4/8 w - - 0 51',
'5r2/7p/3p4/8/7P/1p1k2K1/1P1B4/8 b - - 0 51',
'5r2/7p/3p4/8/7P/1p4K1/1P1k4/8 w - - 0 52',
'5r2/7p/3p4/8/6KP/1p6/1P1k4/8 b - - 0 52',
'5r2/7p/3p4/8/6KP/1p1k4/1P6/8 w - - 0 53',
'5r2/7p/3p4/6K1/7P/1p1k4/1P6/8 b - - 0 53',
'5r2/7p/3p4/6K1/4k2P/1p6/1P6/8 w - - 0 54',
'5r2/7p/3p3K/8/4k2P/1p6/1P6/8 b - - 0 54',
'6r1/7p/3p3K/8/4k2P/1p6/1P6/8 w - - 0 55',
'6r1/7K/3p4/8/4k2P/1p6/1P6/8 b - - 0 55',
'8/7K/3p4/8/4k2P/1p6/1P4r1/8 w - - 0 56',
'7K/8/3p4/8/4k2P/1p6/1P4r1/8 b - - 0 56',
'7K/8/3p4/8/4k2P/1p6/1r6/8 w - - 0 57',
'8/6K1/3p4/8/4k2P/1p6/1r6/8 b - - 0 57',
'8/6K1/3p4/8/4k2P/1p6/3r4/8 w - - 0 58',
'8/6K1/3p4/7P/4k3/1p6/3r4/8 b - - 0 58',
'8/6K1/3p4/7P/4k3/8/1p1r4/8 w - - 0 59',
'8/6K1/3p3P/8/4k3/8/1p1r4/8 b - - 0 59',
'8/6K1/3p3P/8/4k3/8/3r4/1q6 w - - 0 60',
'8/8/3p2KP/8/4k3/8/3r4/1q6 b - - 0 60',
'8/8/3p2KP/8/4k3/8/6r1/1q6 w - - 0 61',
'8/5K2/3p3P/8/4k3/8/6r1/1q6 b - - 0 61',
'8/1q3K2/3p3P/8/4k3/8/6r1/8 w - - 0 62',
'5K2/1q6/3p3P/8/4k3/8/6r1/8 b - - 0 62',
'5K2/1q6/3p3P/8/4k3/8/r7/8 w - - 0 63',
'5K2/1q5P/3p4/8/4k3/8/r7/8 b - - 0 63',
'r4K2/1q5P/3p4/8/4k3/8/8/8 w - - 0 64'];

$('#chess-pgn-highest').text(
"1. Ng1f3 Pe7e5\n\
2. Nf3e5 Ng8f6\n\
3. Pd2d4 Pd7d6\n\
4. Ne5f3 Nb8c6\n\
5. Pd4d5 Nc6e5\n\
6. Nb1c3 Bf8e7\n\
7. Qd1d4 Pc7c5\n\
8. Qd4f4 Ne5f3\n\
9. Pe2f3 O-O\n\
10. Bf1d3 Pb7b5\n\
11. Bd3b5 Bc8b7\n\
12. Bb5c6 Bb7c6\n\
13. Pd5c6 Ra8c8\n\
14. O-O Rc8c6\n\
15. Qf4a4 Qd8b6\n\
16. Rf1e1 Be7d8\n\
17. Qa4b3 Qb6b4\n\
18. Bc1e3 Qb4b3\n\
19. Pa2b3 Pa7a5\n\
20. Nc3b5 Bd8b6\n\
21. Be3d2 Rf8a8\n\
22. Pg2g4 Nf6e8\n\
23. Bd2a5 Pf7f6\n\
24. Ba5d2 Ra8a1\n\
25. Re1a1 Ne8c7\n\
26. Pc2c4 Nc7b5\n\
27. Ra1a8 Kg8f7\n\
28. Pc4b5 Rc6c7\n\
29. Ra8d8 Kf7e6\n\
30. Rd8b8 Bb6a7\n\
31. Rb8e8 Ke6d5\n\
32. Re8h8 Pg7g6\n\
33. Bd2c3 Rc7f7\n\
34. Rh8e8 Pf6f5\n\
35. Re8e1 Pf5g4\n\
36. Pf3g4 Rf7b7\n\
37. Pf2f4 Pc5c4\n\
38. Kg1f1 Pc4b3\n\
39. Pf4f5 Pg6f5\n\
40. Pg4f5 Kd5c4\n\
41. Pf5f6 Rb7b5\n\
42. Re1e4 Kc4d3\n\
43. Re4f4 Rb5g5\n\
44. Kf1e1 Ba7e3\n\
45. Pf6f7 Be3f4\n\
46. Pf7f8Q Rg5g1\n\
47. Ke1f2 Bf4e3\n\
48. Kf2f3 Rg1f1\n\
49. Kf3g3 Rf1f8\n\
50. Ph2h4 Be3d2\n\
51. Bc3d2 Kd3d2\n\
52. Kg3g4 Kd2d3\n\
53. Kg4g5 Kd3e4\n\
54. Kg5h6 Rf8g8\n\
55. Kh6h7 Rg8g2\n\
56. Kh7h8 Rg2b2\n\
57. Kh8g7 Rb2d2\n\
58. Ph4h5 Pb3b2\n\
59. Ph5h6 Pb2b1Q\n\
60. Kg7g6 Rd2g2\n\
61. Kg6f7 Qb1b7\n\
62. Kf7f8 Rg2a2\n\
63. Ph6h7 Ra2a8"
)

var board = Chessboard('chess-board-highest', {
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
  $('#chess-move-highest').text("Move: " + (Math.floor((game_index+1)/2) + 1))
}

$('#chess-start-highest').on('click', function () {
  game_index = 0
  set_position(game_index)
})

$('#chess-prev-highest').on('click', function () {
  game_index = Math.max(0, game_index-1)
  set_position(game_index)
})
$('#chess-next-highest').on('click', function () {
  game_index = Math.min(chess_game.length-1, game_index+1)
  set_position(game_index)
})


$('#chess-play-highest').on('click', async function () {
  if (chess_play) {
    chess_play = false
    $('#chess-play-highest').text("Play")
  } else {
    chess_play = true
    $('#chess-play-highest').text("Pause")
    while (game_index < chess_game.length-1 && chess_play) {
      game_index = game_index + 1
      set_position(game_index)
      await sleep(500)
    }
  }
  
})

}();