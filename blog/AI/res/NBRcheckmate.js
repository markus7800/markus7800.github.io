NBRcheckmate = function(){

var chess_game = [
'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
'rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq - 0 1',
'rnbqkbnr/pppp1ppp/8/4p3/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2',
'rnbqkbnr/pppp1ppp/8/4p3/8/4PN2/PPPP1PPP/RNBQKB1R b KQkq - 0 2',
'rnbqkbnr/pppp1ppp/8/8/4p3/4PN2/PPPP1PPP/RNBQKB1R w KQkq - 0 3',
'rnbqkbnr/pppp1ppp/8/8/3Np3/4P3/PPPP1PPP/RNBQKB1R b KQkq - 0 3',
'rnbqkbnr/ppp2ppp/8/3p4/3Np3/4P3/PPPP1PPP/RNBQKB1R w KQkq - 0 4',
'rnbqkbnr/ppp2ppp/8/3p3Q/3Np3/4P3/PPPP1PPP/RNB1KB1R b KQkq - 0 4',
'rnbqkb1r/ppp2ppp/5n2/3p3Q/3Np3/4P3/PPPP1PPP/RNB1KB1R w KQkq - 0 5',
'rnbqkb1r/ppp2ppp/5n2/3p4/3Np3/4P3/PPPPQPPP/RNB1KB1R b KQkq - 0 5',
'rnbqk2r/ppp2ppp/3b1n2/3p4/3Np3/4P3/PPPPQPPP/RNB1KB1R w KQkq - 0 6',
'rnbqk2r/ppp2ppp/3b1n2/3p4/3Np3/4P3/PPPPQPPP/RNBK1B1R b kq - 0 6',
'rnbq1rk1/ppp2ppp/3b1n2/3p4/3Np3/4P3/PPPPQPPP/RNBK1B1R w - - 0 7',
'rnbq1rk1/ppp2ppp/3b1n2/3p4/3Np3/4P3/PPPP1PPP/RNBKQB1R b - - 0 7',
'rnbq1rk1/pp3ppp/3b1n2/2pp4/3Np3/4P3/PPPP1PPP/RNBKQB1R w - - 0 8',
'rnbq1rk1/pp3ppp/3b1n2/2pp4/4p3/4P3/PPPPNPPP/RNBKQB1R b - - 0 8',
'rn1q1rk1/pp3ppp/3b1n2/2pp1b2/4p3/4P3/PPPPNPPP/RNBKQB1R w - - 0 9',
'rn1q1rk1/pp3ppp/3b1n2/2pp1b2/4p2P/4P3/PPPPNPP1/RNBKQB1R b - - 0 9',
'rn3rk1/pp1q1ppp/3b1n2/2pp1b2/4p2P/4P3/PPPPNPP1/RNBKQB1R w - - 0 10',
'rn3rk1/pp1q1ppp/3b1n2/2pp1b2/4p2P/2N1P3/PPPP1PP1/RNBKQB1R b - - 0 10',
'rn3rk1/pp1q1ppp/3b1n2/2p2b2/3pp2P/2N1P3/PPPP1PP1/RNBKQB1R w - - 0 11',
'rn3rk1/pp1q1ppp/3b1n2/2p2b2/3Pp2P/2N5/PPPP1PP1/RNBKQB1R b - - 0 11',
'rn3rk1/pp1q1ppp/3b1n2/5b2/3pp2P/2N5/PPPP1PP1/RNBKQB1R w - - 0 12',
'rn3rk1/pp1q1ppp/3b1n2/1B3b2/3pp2P/2N5/PPPP1PP1/RNBKQ2R b - - 0 12',
'rn3rk1/pp3ppp/3bqn2/1B3b2/3pp2P/2N5/PPPP1PP1/RNBKQ2R w - - 0 13',
'rn3rk1/pp3ppp/3bqn2/1B3b2/3pp2P/8/PPPPNPP1/RNBKQ2R b - - 0 13',
'rn3rk1/pp3ppp/3b1n2/1B2qb2/3pp2P/8/PPPPNPP1/RNBKQ2R w - - 0 14',
'rn3rk1/pp3ppp/3b1n2/1B2qb2/2Ppp2P/8/PP1PNPP1/RNBKQ2R b - c3 0 14',
'rn3rk1/pp3ppp/3b1n2/1B2q3/2Ppp1bP/8/PP1PNPP1/RNBKQ2R w - - 0 15',
'rn3rk1/pp3ppp/3b1n2/1B2q3/2Ppp1bP/N7/PP1PNPP1/R1BKQ2R b - - 0 15',
'rn3rk1/pp3ppp/3b1n2/1B2q3/2Ppp2P/N7/PP1PbPP1/R1BKQ2R w - - 0 16',
'rn3rk1/pp3ppp/3b1n2/1B2q3/2Ppp2P/N7/PP1PQPP1/R1BK3R b - - 0 16',
'rn3rk1/pp3ppp/3b1n2/1B2q3/2P1p2P/N2p4/PP1PQPP1/R1BK3R w - - 0 17',
'rn3rk1/pp3ppp/3b1n2/1B2q3/2P1p2P/N2pQ3/PP1P1PP1/R1BK3R b - - 0 17',
'rn3rk1/pp3ppp/5n2/1B2q3/2P1p2P/b2pQ3/PP1P1PP1/R1BK3R w - - 0 18',
'rn3rk1/pp3ppp/5n2/1B2q3/2P1p2P/b2p2Q1/PP1P1PP1/R1BK3R b - - 0 18',
'rn3rk1/pp3ppp/5n2/1B2q3/2P1p2P/3p2Q1/Pb1P1PP1/R1BK3R w - - 0 19',
'rn3rk1/pp3ppp/5n2/1B2q3/2P1p2P/3p2Q1/Pb1P1PP1/1RBK3R b - - 0 19',
'rn3rk1/pp3ppp/5n2/1B5q/2P1p2P/3p2Q1/Pb1P1PP1/1RBK3R w - - 0 20',
'rn3rk1/pp3ppp/5n2/1B5q/2P1p2P/3p1PQ1/Pb1P2P1/1RBK3R b - - 0 20',
'rn3rk1/pp3ppp/5n2/1B5q/2P4P/3p1pQ1/Pb1P2P1/1RBK3R w - - 0 21',
'rn3rk1/pp3ppp/5n2/1B5q/2P4P/3p1Q2/Pb1P2P1/1RBK3R b - - 0 21',
'rn3rk1/pp3ppp/5n2/1B6/2P4P/3p1q2/Pb1P2P1/1RBK3R w - - 0 22',
'rn3rk1/pp3ppp/5n2/1B6/2P4P/3p1P2/Pb1P4/1RBK3R b - - 0 22',
'rn3rk1/pp3ppp/5n2/1B6/2Pb3P/3p1P2/P2P4/1RBK3R w - - 0 23',
'rn3rk1/pp3ppp/5n2/1B6/2Pb3P/1R1p1P2/P2P4/2BK3R b - - 0 23',
'rn3rk1/1p3ppp/p4n2/1B6/2Pb3P/1R1p1P2/P2P4/2BK3R w - - 0 24',
'rn3rk1/1p3ppp/p4n2/8/B1Pb3P/1R1p1P2/P2P4/2BK3R b - - 0 24',
'rn3rk1/5ppp/p4n2/1p6/B1Pb3P/1R1p1P2/P2P4/2BK3R w - - 0 25',
'rn3rk1/5ppp/p4n2/1P6/B2b3P/1R1p1P2/P2P4/2BK3R b - - 0 25',
'rn3rk1/5ppp/5n2/1p6/B2b3P/1R1p1P2/P2P4/2BK3R w - - 0 26',
'rn3rk1/5ppp/5n2/1B6/3b3P/1R1p1P2/P2P4/2BK3R b - - 0 26',
'1n3rk1/5ppp/5n2/1B6/3b3P/1R1p1P2/r2P4/2BK3R w - - 0 27',
'1n3rk1/5ppp/5n2/1B6/1R1b3P/3p1P2/r2P4/2BK3R b - - 0 27',
'1n1r2k1/5ppp/5n2/1B6/1R1b3P/3p1P2/r2P4/2BK3R w - - 0 28',
'1n1r2k1/5ppp/5n2/1B6/3b3P/1R1p1P2/r2P4/2BK3R b - - 0 28',
'3r2k1/3n1ppp/5n2/1B6/3b3P/1R1p1P2/r2P4/2BK3R w - - 0 29',
'3r2k1/3n1ppp/5n2/1B6/3b3P/R2p1P2/r2P4/2BK3R b - - 0 29',
'3r2k1/3n1ppp/5n2/1B6/3b3P/r2p1P2/3P4/2BK3R w - - 0 30',
'3r2k1/3n1ppp/5n2/1B6/3b3P/B2p1P2/3P4/3K3R b - - 0 30',
'3r2k1/5ppp/5n2/1B2n3/3b3P/B2p1P2/3P4/3K3R w - - 0 31',
'3r2k1/5ppp/5n2/1B2n3/3b1P1P/B2p4/3P4/3K3R b - - 0 31',
'3r2k1/5ppp/8/1B2n3/3bnP1P/B2p4/3P4/3K3R w - - 0 32',
'3r2k1/5ppp/8/1B2n3/3bnP1P/B2p4/3P4/3K1R2 b - - 0 32',
'r5k1/5ppp/8/1B2n3/3bnP1P/B2p4/3P4/3K1R2 w - - 0 33',
'r5k1/5ppp/8/1B2n3/3bnP1P/3p4/3P4/2BK1R2 b - - 0 33',
'r5k1/5ppp/8/1B6/3bnPnP/3p4/3P4/2BK1R2 w - - 0 34',
'r5k1/5ppp/2B5/8/3bnPnP/3p4/3P4/2BK1R2 b - - 0 34',
'r5k1/5ppp/2B5/8/3bnP1P/3p4/3P1n2/2BK1R2 w - - 0 35',
'r5k1/5ppp/2B5/8/3bnP1P/3p4/3P1R2/2BK4 b - - 0 35',
'r5k1/5ppp/2B5/8/3b1P1P/3p4/3P1n2/2BK4 w - - 0 36',
'r5k1/5ppp/2B5/8/3b1P1P/3p4/3P1n2/2B1K3 b - - 0 36',
'6k1/5ppp/2B5/8/3b1P1P/3p4/3P1n2/r1B1K3 w - - 0 37',
'6k1/5ppp/2B5/8/3b1P1P/3p4/3P1n2/r1B2K2 b - - 0 37',
'6k1/5ppp/2B5/8/3b1P1P/3p4/3P1n2/2r2K2 w - - 0 38',
'6k1/5ppp/2B5/8/3b1P1P/3p4/3P1nK1/2r5 b - - 0 38',
'6k1/5ppp/2r5/8/3b1P1P/3p4/3P1nK1/8 w - - 0 39',
'6k1/5ppp/2r5/8/3b1P1P/3p1K2/3P1n2/8 b - - 0 39',
'6k1/6pp/2r5/5p2/3b1P1P/3p1K2/3P1n2/8 w - - 0 40',
'6k1/6pp/2r5/5p2/3b1P1P/3p2K1/3P1n2/8 b - - 0 40',
'6k1/6pp/2r5/5p2/3bnP1P/3p2K1/3P4/8 w - - 0 41',
'6k1/6pp/2r5/5p2/3bnP1P/3p4/3P3K/8 b - - 0 41',
'6k1/6pp/7r/5p2/3bnP1P/3p4/3P3K/8 w - - 0 42',
'6k1/6pp/7r/5p2/3bnP1P/3p3K/3P4/8 b - - 0 42',
'6k1/6pp/6r1/5p2/3bnP1P/3p3K/3P4/8 w - - 0 43',
'6k1/6pp/6r1/5p1P/3bnP2/3p3K/3P4/8 b - - 0 43',
'6k1/6pp/8/5p1P/3bnP2/3p2rK/3P4/8 w - - 0 44',
'6k1/6pp/8/5p1P/3bnP2/3p2r1/3P3K/8 b - - 0 44',
'6k1/6pp/8/5p1P/4nP2/3p2r1/3P3K/6b1 w - - 0 45',
'6k1/6pp/8/5p1P/4nP2/3p2r1/3P4/6bK b - - 0 45',
'6k1/6pp/8/5p1P/5P2/3p2r1/3P1n2/6bK w - - 0 46'
];



$('#chess-pgn-NBRcheckmate').text(
"1. Ng1f3 Pe7e5\n\
2. Pe2e3 Pe5e4\n\
3. Nf3d4 Pd7d5\n\
4. Qd1h5 Ng8f6\n\
5. Qh5e2 Bf8d6\n\
6. Ke1d1 O-O\n\
7. Qe2e1 Pc7c5\n\
8. Nd4e2 Bc8f5\n\
9. Ph2h4 Qd8d7\n\
10. Ne2c3 Pd5d4\n\
11. Pe3d4 Pc5d4\n\
12. Bf1b5 Qd7e6\n\
13. Nc3e2 Qe6e5\n\
14. Pc2c4 Bf5g4\n\
15. Nb1a3 Bg4e2\n\
16. Qe1e2 Pd4d3\n\
17. Qe2e3 Bd6a3\n\
18. Qe3g3 Ba3b2\n\
19. Ra1b1 Qe5h5\n\
20. Pf2f3 Pe4f3\n\
21. Qg3f3 Qh5f3\n\
22. Pg2f3 Bb2d4\n\
23. Rb1b3 Pa7a6\n\
24. Bb5a4 Pb7b5\n\
25. Pc4b5 Pa6b5\n\
26. Ba4b5 Ra8a2\n\
27. Rb3b4 Rf8d8\n\
28. Rb4b3 Nb8d7\n\
29. Rb3a3 Ra2a3\n\
30. Bc1a3 Nd7e5\n\
31. Pf3f4 Nf6e4\n\
32. Rh1f1 Rd8a8\n\
33. Ba3c1 Ne5g4\n\
34. Bb5c6 Ng4f2\n\
35. Rf1f2 Ne4f2\n\
36. Kd1e1 Ra8a1\n\
37. Ke1f1 Ra1c1\n\
38. Kf1g2 Rc1c6\n\
39. Kg2f3 Pf7f5\n\
40. Kf3g3 Nf2e4\n\
41. Kg3h2 Rc6h6\n\
42. Kh2h3 Rh6g6\n\
43. Ph4h5 Rg6g3\n\
44. Kh3h2 Bd4g1\n\
45. Kh2h1 Ne4f2"
)

var board = Chessboard('chess-board-NBRcheckmate', {
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
  $('#chess-move-NBRcheckmate').text("Move: " + (Math.floor((game_index+1)/2) + 1))
}

$('#chess-start-NBRcheckmate').on('click', function () {
  game_index = 0
  set_position(game_index)
})

$('#chess-prev-NBRcheckmate').on('click', function () {
  game_index = Math.max(0, game_index-1)
  set_position(game_index)
})
$('#chess-next-NBRcheckmate').on('click', function () {
  game_index = Math.min(chess_game.length-1, game_index+1)
  set_position(game_index)
})


$('#chess-play-NBRcheckmate').on('click', async function () {
  if (chess_play) {
    chess_play = false
    $('#chess-play-NBRcheckmate').text("Play")
  } else {
    chess_play = true
    $('#chess-play-NBRcheckmate').text("Pause")
    while (game_index < chess_game.length-1 && chess_play) {
      game_index = game_index + 1
      set_position(game_index)
      await sleep(500)
    }
  }
  
})
}();