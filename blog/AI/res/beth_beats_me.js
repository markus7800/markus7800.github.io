beat_me = function(){

var chess_game = [
'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
'rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 1',
'rnbqkbnr/ppp2ppp/8/3pp3/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
'rnbqkbnr/ppp2ppp/8/3pP3/2P5/8/PP2PPPP/RNBQKBNR b KQkq - 0 1',
'rnbqkbnr/ppp2ppp/8/4P3/2Pp4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
'rnbqkbnr/ppp2ppp/8/4P3/2Pp4/5N2/PP2PPPP/RNBQKB1R b KQkq - 0 1',
'r1bqkbnr/ppp2ppp/2n5/4P3/2Pp4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 1',
'r1bqkbnr/ppp2ppp/2n5/4P1B1/2Pp4/5N2/PP2PPPP/RN1QKB1R b KQkq - 0 1',
'r1bqk1nr/ppp1bppp/2n5/4P1B1/2Pp4/5N2/PP2PPPP/RN1QKB1R w KQkq - 0 1',
'r1bqk1nr/ppp1bppp/2n5/4P3/2Pp1B2/5N2/PP2PPPP/RN1QKB1R b KQkq - 0 1',
'r1bqk1nr/ppp2ppp/2n5/4P3/1bPp1B2/5N2/PP2PPPP/RN1QKB1R w KQkq - 0 1',
'r1bqk1nr/ppp2ppp/2n5/4P3/1bPp1B2/5N2/PP1NPPPP/R2QKB1R b KQkq - 0 1',
'r1bqk2r/ppp1nppp/2n5/4P3/1bPp1B2/5N2/PP1NPPPP/R2QKB1R w KQkq - 0 1',
'r1bqk2r/ppp1nppp/2n5/4P3/1bPp1B2/5N2/PPQNPPPP/R3KB1R b KQkq - 0 1',
'r2qk2r/ppp1nppp/2n5/4Pb2/1bPp1B2/5N2/PPQNPPPP/R3KB1R w KQkq - 0 1',
'r2qk2r/ppp1nppp/2n5/4Pb2/1bPp1B2/1Q3N2/PP1NPPPP/R3KB1R b KQkq - 0 1',
'r2q1rk1/ppp1nppp/2n5/4Pb2/1bPp1B2/1Q3N2/PP1NPPPP/R3KB1R w KQ - 0 1',
'r2q1rk1/ppp1nppp/2n5/4Pb2/1bPp1B2/1Q3N2/PP1NPPPP/2KR1B1R b - - 0 1',
'r2q1rk1/ppp2ppp/2n3n1/4Pb2/1bPp1B2/1Q3N2/PP1NPPPP/2KR1B1R w - - 0 1',
'r2q1rk1/ppp2ppp/2n3n1/4Pb2/1bPp1B2/1Q2PN2/PP1N1PPP/2KR1B1R b - - 0 1',
'r2q1rk1/ppp2ppp/2n5/4Pb2/1bPp1n2/1Q2PN2/PP1N1PPP/2KR1B1R w - - 0 1',
'r2q1rk1/ppp2ppp/2n5/4Pb2/1bPp1P2/1Q3N2/PP1N1PPP/2KR1B1R b - - 0 1',
'r2q1rk1/1pp2ppp/2n5/p3Pb2/1bPp1P2/1Q3N2/PP1N1PPP/2KR1B1R w - - 0 1',
'r2q1rk1/1pp2ppp/2n5/p3Pb2/1bPp1P2/1Q1B1N2/PP1N1PPP/2KR3R b - - 0 1',
'r2q1rk1/1pp2ppp/2n5/4Pb2/pbPp1P2/1Q1B1N2/PP1N1PPP/2KR3R w - - 0 1',
'r2q1rk1/1pp2ppp/2n5/4Pb2/pbPp1P2/3B1N2/PPQN1PPP/2KR3R b - - 0 1',
'r2q1rk1/1pp2ppp/2n5/4P3/pbPp1P2/3b1N2/PPQN1PPP/2KR3R w - - 0 1',
'r2q1rk1/1pp2ppp/2n5/4P3/pbPp1P2/3Q1N2/PP1N1PPP/2KR3R b - - 0 1',
'r2q1rk1/1pp2ppp/2n5/4P3/p1Pp1P2/3Q1N2/PP1b1PPP/2KR3R w - - 0 1',
'r2q1rk1/1pp2ppp/2n5/4P3/p1Pp1P2/5N2/PP1Q1PPP/2KR3R b - - 0 1',
'r4rk1/1ppq1ppp/2n5/4P3/p1Pp1P2/5N2/PP1Q1PPP/2KR3R w - - 0 1',
'r4rk1/1ppq1ppp/2n5/4P3/p1PN1P2/8/PP1Q1PPP/2KR3R b - - 0 1',
'r4rk1/1ppq1ppp/8/4P3/p1Pn1P2/8/PP1Q1PPP/2KR3R w - - 0 1',
'r4rk1/1ppq1ppp/8/4P3/p1PQ1P2/8/PP3PPP/2KR3R b - - 0 1',
'r4rk1/1pp2ppp/8/4Pq2/p1PQ1P2/8/PP3PPP/2KR3R w - - 0 1',
'r4rk1/1pp2ppp/8/4Pq2/p1PQ1P2/5P2/PP4PP/2KR3R w - - 0 1',
'r4rk1/1pp2pp1/7p/4Pq2/p1PQ1P2/5P2/PP4PP/2KR3R w - - 0 1',
'r4rk1/1pp2pp1/7p/4Pq2/p1PQ1PP1/5P2/PP5P/2KR3R b - - 0 1',
'r4rk1/1pp2pp1/6qp/4P3/p1PQ1PP1/5P2/PP5P/2KR3R w - - 0 1',
'r4rk1/1pp2pp1/6qp/4P3/p1PQ1PP1/3R1P2/PP5P/2K4R b - - 0 1',
'r4rk1/1p3pp1/2p3qp/4P3/p1PQ1PP1/3R1P2/PP5P/2K4R w - - 0 1',
'r4rk1/1p3pp1/2p3qp/4PP2/p1PQ2P1/3R1P2/PP5P/2K4R b - - 0 1',
'r4rk1/1p3pp1/2p4p/4PPq1/p1PQ2P1/3R1P2/PP5P/2K4R w - - 0 1',
'r4rk1/1p3pp1/2p4p/4PPq1/p1PQ2P1/3R1P2/PP5P/1K5R b - - 0 1',
'r2r2k1/1p3pp1/2p4p/4PPq1/p1PQ2P1/3R1P2/PP5P/1K5R w - - 0 1',
'r2r2k1/1p3pp1/2p4p/4PPq1/p1P1Q1P1/3R1P2/PP5P/1K5R b - - 0 1',
'r5k1/1p3pp1/2p4p/4PPq1/p1P1Q1P1/3r1P2/PP5P/1K5R w - - 0 1',
'r5k1/1p3pp1/2p4p/4PPq1/p1P3P1/3Q1P2/PP5P/1K5R b - - 0 1',
'r5k1/1p3pp1/2p4p/4PP2/p1P2qP1/3Q1P2/PP5P/1K5R w - - 0 1',
'r5k1/1p3pp1/2p1P2p/5P2/p1P2qP1/3Q1P2/PP5P/1K5R b - - 0 1',
'r4k2/1p3pp1/2p1P2p/5P2/p1P2qP1/3Q1P2/PP5P/1K5R w - - 0 1',
'r4k2/1p1Q1pp1/2p1P2p/5P2/p1P2qP1/5P2/PP5P/1K5R b - - 0 1',
'r4k2/1p1Q2p1/2p1p2p/5P2/p1P2qP1/5P2/PP5P/1K5R w - - 0 1',
'r4k2/1Q4p1/2p1p2p/5P2/p1P2qP1/5P2/PP5P/1K5R b - - 0 1',
'3r1k2/1Q4p1/2p1p2p/5P2/p1P2qP1/5P2/PP5P/1K5R w - - 0 1',
'3r1k2/1Q4p1/2p1P2p/8/p1P2qP1/5P2/PP5P/1K5R b - - 0 1',
'3r1k2/1Q4p1/2p1Pq1p/8/p1P3P1/5P2/PP5P/1K5R w - - 0 1',
'3r1k2/6p1/2Q1Pq1p/8/p1P3P1/5P2/PP5P/1K5R b - - 0 1',
'3r1k2/6p1/2Q1Pq1p/8/2P3P1/p4P2/PP5P/1K5R w - - 0 1',
'3r1k2/6p1/4Pq1p/2Q5/2P3P1/p4P2/PP5P/1K5R w - - 0 1',
'3r1k2/4q1p1/4P2p/2Q5/2P3P1/p4P2/PP5P/1K5R w - - 0 1',
'3r1k2/4q1p1/4P2p/5Q2/2P3P1/p4P2/PP5P/1K5R b - - 0 1',
'3r2k1/4q1p1/4P2p/5Q2/2P3P1/p4P2/PP5P/1K5R w - - 0 1',
'3r2k1/4q1p1/4P2p/5Q2/2P3P1/P4P2/P6P/1K5R b - - 0 1',
'3r2k1/1q4p1/4P2p/5Q2/2P3P1/P4P2/P6P/1K5R w - - 0 1',
'3r2k1/1q4p1/4P2p/5Q2/2P3P1/P4P2/P6P/K6R b - - 0 1',
'6k1/1q4p1/4P2p/5Q2/2P3P1/P4P2/P2r3P/K6R w - - 0 1',
'6k1/1q4p1/4P2p/5Q2/2P3P1/P4P2/P2r3P/KR6 b - - 0 1',
'2q3k1/6p1/4P2p/5Q2/2P3P1/P4P2/P2r3P/KR6 w - - 0 1',
'2q3k1/5Qp1/4P2p/8/2P3P1/P4P2/P2r3P/KR6 b - - 0 1',
'2q5/5Qpk/4P2p/8/2P3P1/P4P2/P2r3P/KR6 w - - 0 1',
'2q5/6pk/4P2p/5Q2/2P3P1/P4P2/P2r3P/KR6 b - - 0 1',
'2q4k/6p1/4P2p/5Q2/2P3P1/P4P2/P2r3P/KR6 w - - 0 1',
'2q4k/4P1p1/7p/5Q2/2P3P1/P4P2/P2r3P/KR6 b - - 0 1',
'4q2k/4P1p1/7p/5Q2/2P3P1/P4P2/P2r3P/KR6 w - - 0 1',
'4qQ1k/4P1p1/7p/8/2P3P1/P4P2/P2r3P/KR6 b - - 0 1',
'5q1k/4P1p1/7p/8/2P3P1/P4P2/P2r3P/KR6 w - - 0 1',
'5Q1k/6p1/7p/8/2P3P1/P4P2/P2r3P/KR6 b - - 0 1',
'5Q2/6pk/7p/8/2P3P1/P4P2/P2r3P/KR6 w - - 0 1',
'8/6pk/7p/5Q2/2P3P1/P4P2/P2r3P/KR6 b - - 0 1',
'6k1/6p1/7p/5Q2/2P3P1/P4P2/P2r3P/KR6 w - - 0 1',
'1R4k1/6p1/7p/5Q2/2P3P1/P4P2/P2r3P/K7 b - - 0 1',
'1R1r2k1/6p1/7p/5Q2/2P3P1/P4P2/P6P/K7 w - - 0 1',
'3R2k1/6p1/7p/5Q2/2P3P1/P4P2/P6P/K7 b - - 0 1'];



$('#chess-pgn-beat_me').text(
"1. Pd2d4 Pd7d5\n\
2. Pc2c4 Pe7e5\n\
3. Pd4e5 Pd5d4\n\
4. Ng1f3 Nb8c6\n\
5. Bc1g5 Bf8e7\n\
6. Bg5f4 Be7b4\n\
7. Nb1d2 Ng8e7\n\
8. Qd1c2 Bc8f5\n\
9. Qc2b3 O-O\n\
10. O-O-O Ne7g6\n\
11. Pe2e3 Ng6f4\n\
12. Pe3f4 Pa7a5\n\
13. Bf1d3 Pa5a4\n\
14. Qb3c2 Bf5d3\n\
15. Qc2d3 Bb4d2\n\
16. Qd3d2 Qd8d7\n\
17. Nf3d4 Nc6d4\n\
18. Qd2d4 Qd7f5\n\
19. Pf2f3 Ph7h6\n\
20. Pg2g4 Qf5g6\n\
21. Rd1d3 Pc7c6\n\
22. Pf4f5 Qg6g5\n\
23. Kc1b1 Rf8d8\n\
24. Qd4e4 Rd8d3\n\
25. Qe4d3 Qg5f4\n\
26. Pe5e6 Kg8f8\n\
27. Qd3d7 Pf7e6\n\
28. Qd7b7 Ra8d8\n\
29. Pf5e6 Qf4f6\n\
30. Qb7c6 Pa4a3\n\
31. Qc6c5 Qf6e7\n\
32. Qc5f5 Kf8g8\n\
33. Pb2a3 Qe7b7\n\
34. Kb1a1 Rd8d2\n\
35. Rh1b1 Qb7c8\n\
36. Qf5f7 Kg8h7\n\
37. Qf7f5 Kh7h8\n\
38. Pe6e7 Qc8e8\n\
39. Qf5f8 Qe8f8\n\
40. Pe7f8Q Kh8h7\n\
41. Qf8f5 Kh7g8\n\
42. Rb1b8 Rd2d8\n\
43. Rb8d8"
)

var board = Chessboard('chess-board-beat_me', {
  draggable: false,
  moveSpeed: 'medium',
  snapbackSpeed: 500,
  snapSpeed: 100,
  position: chess_game[0],
  pieceTheme: '../../res/chesspieces/wikipedia/{piece}.png',
  orientation: 'white'
})


var game_index = 0;

var chess_play = false;



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function set_position(game_index) {
  board.position(chess_game[game_index])
  $('#chess-move-beat_me').text("Move: " + (Math.floor((game_index+1)/2) + 1))
}

$('#chess-start-beat_me').on('click', function () {
  game_index = 0
  set_position(game_index)
})

$('#chess-prev-beat_me').on('click', function () {
  game_index = Math.max(0, game_index-1)
  set_position(game_index)
})
$('#chess-next-beat_me').on('click', function () {
  game_index = Math.min(chess_game.length-1, game_index+1)
  set_position(game_index)
})


$('#chess-play-beat_me').on('click', async function () {
  if (chess_play) {
    chess_play = false
    $('#chess-play-beat_me').text("Play")
  } else {
    chess_play = true
    $('#chess-play-beat_me').text("Pause")
    while (game_index < chess_game.length-1 && chess_play) {
      game_index = game_index + 1
      set_position(game_index)
      await sleep(500)
    }
  }
  
})
}();