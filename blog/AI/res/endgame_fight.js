endgame_fight = function(){

var chess_game = [
'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1',
'rnbqkbnr/pppppp1p/6p1/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2',
'rnbqkbnr/pppppp1p/6p1/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2',
'rnbqk1nr/ppppppbp/6p1/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3',
'rnbqk1nr/ppppppbp/6p1/8/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3',
'rnbqk1nr/ppp1ppbp/3p2p1/8/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4',
'rnbqk1nr/ppp1ppbp/3p2p1/8/2BPP3/5N2/PPP2PPP/RNBQK2R b KQkq - 0 4',
'rnbqk2r/ppp1ppbp/3p1np1/8/2BPP3/5N2/PPP2PPP/RNBQK2R w KQkq - 0 5',
'rnbqk2r/ppp1ppbp/3p1np1/8/2BPP3/5N2/PPP2PPP/RNBQ1RK1 b kq - 0 5',
'rnbqk2r/ppp1ppbp/5np1/3p4/2BPP3/5N2/PPP2PPP/RNBQ1RK1 w kq - 0 6',
'rnbqk2r/ppp1ppbp/5np1/3B4/3PP3/5N2/PPP2PPP/RNBQ1RK1 b kq - 0 6',
'rnbqk2r/ppp1ppbp/6p1/3n4/3PP3/5N2/PPP2PPP/RNBQ1RK1 w kq - 0 7',
'rnbqk2r/ppp1ppbp/6p1/3P4/3P4/5N2/PPP2PPP/RNBQ1RK1 b kq - 0 7',
'rnb1k2r/ppp1ppbp/6p1/3q4/3P4/5N2/PPP2PPP/RNBQ1RK1 w kq - 0 8',
'rnb1k2r/ppp1ppbp/6p1/3q4/3P1B2/5N2/PPP2PPP/RN1Q1RK1 b kq - 0 8',
'rnb2rk1/ppp1ppbp/6p1/3q4/3P1B2/5N2/PPP2PPP/RN1Q1RK1 w - - 0 9',
'rnb2rk1/ppB1ppbp/6p1/3q4/3P4/5N2/PPP2PPP/RN1Q1RK1 b - - 0 9',
'r1b2rk1/ppB1ppbp/n5p1/3q4/3P4/5N2/PPP2PPP/RN1Q1RK1 w - - 0 10',
'r1b2rk1/ppB1ppbp/n5p1/3q4/3P4/2N2N2/PPP2PPP/R2Q1RK1 b - - 0 10',
'r1b2rk1/ppB1ppbp/n5p1/5q2/3P4/2N2N2/PPP2PPP/R2Q1RK1 w - - 0 11',
'r1b2rk1/pp2ppbp/n5p1/4Bq2/3P4/2N2N2/PPP2PPP/R2Q1RK1 b - - 0 11',
'r1b2rk1/pp2p1bp/n4pp1/4Bq2/3P4/2N2N2/PPP2PPP/R2Q1RK1 w - - 0 12',
'r1b2rk1/pp2p1bp/n4pp1/4Bq2/3P3N/2N5/PPP2PPP/R2Q1RK1 b - - 0 12',
'r1b2rk1/pp1qp1bp/n4pp1/4B3/3P3N/2N5/PPP2PPP/R2Q1RK1 w - - 0 13',
'r1b2rk1/pp1qp1bp/n4pp1/8/3P3N/2N3B1/PPP2PPP/R2Q1RK1 b - - 0 13',
'r1bq1rk1/pp2p1bp/n4pp1/8/3P3N/2N3B1/PPP2PPP/R2Q1RK1 w - - 0 14',
'r1bq1rk1/pp2p1bp/n4pp1/8/3P3N/2NQ2B1/PPP2PPP/R4RK1 b - - 0 14',
'r2q1rk1/pp1bp1bp/n4pp1/8/3P3N/2NQ2B1/PPP2PPP/R4RK1 w - - 0 15',
'r2q1rk1/pp1bp1bp/n4pN1/8/3P4/2NQ2B1/PPP2PPP/R4RK1 b - - 0 15',
'r2q1rk1/pp1bp1b1/n4pp1/8/3P4/2NQ2B1/PPP2PPP/R4RK1 w - - 0 16',
'r2q1rk1/pp1bp1b1/n4pQ1/8/3P4/2N3B1/PPP2PPP/R4RK1 b - - 0 16',
'r2q1rk1/pp1b2b1/n4pQ1/4p3/3P4/2N3B1/PPP2PPP/R4RK1 w - - 0 17',
'r2q1rk1/pp1b2b1/n4pQ1/4P3/8/2N3B1/PPP2PPP/R4RK1 b - - 0 17',
'r4rk1/pp1bq1b1/n4pQ1/4P3/8/2N3B1/PPP2PPP/R4RK1 w - - 0 18',
'r4rk1/pp1bq1b1/n4pQ1/3NP3/8/6B1/PPP2PPP/R4RK1 b - - 0 18',
'r3qrk1/pp1b2b1/n4pQ1/3NP3/8/6B1/PPP2PPP/R4RK1 w - - 0 19',
'r3qrk1/pp1b2b1/n4NQ1/4P3/8/6B1/PPP2PPP/R4RK1 b - - 0 19',
'r3q1k1/pp1b2b1/n4rQ1/4P3/8/6B1/PPP2PPP/R4RK1 w - - 0 20',
'r3Q1k1/pp1b2b1/n4r2/4P3/8/6B1/PPP2PPP/R4RK1 b - - 0 20',
'4r1k1/pp1b2b1/n4r2/4P3/8/6B1/PPP2PPP/R4RK1 w - - 0 21',
'4r1k1/pp1b2b1/n4P2/8/8/6B1/PPP2PPP/R4RK1 b - - 0 21',
'4r1k1/pp1b4/n4b2/8/8/6B1/PPP2PPP/R4RK1 w - - 0 22',
'4r1k1/pp1b4/n4b2/8/8/2P3B1/PP3PPP/R4RK1 b - - 0 22',
'6k1/pp1b4/n4b2/8/8/2P3B1/PP2rPPP/R4RK1 w - - 0 23',
'6k1/pp1b4/n4b2/8/8/2P3B1/PP2rPPP/1R3RK1 b - - 0 23',
'6k1/pp6/n4b2/5b2/8/2P3B1/PP2rPPP/1R3RK1 w - - 0 24',
'6k1/pp6/n4b2/5b2/8/2P3B1/PP2rPPP/1R2R1K1 b - - 0 24',
'6k1/pp6/n4b2/5b2/8/2P3B1/PP1r1PPP/1R2R1K1 w - - 0 25',
'6k1/pp6/n4b2/5b2/5B2/2P5/PP1r1PPP/1R2R1K1 b - - 0 25',
'6k1/pp6/n4b2/5b2/5B2/2P5/PPr2PPP/1R2R1K1 w - - 0 26',
'6k1/pp6/n4b2/5b2/8/2P1B3/PPr2PPP/1R2R1K1 b - - 0 26',
'6k1/pp6/n3bb2/8/8/2P1B3/PPr2PPP/1R2R1K1 w - - 0 27',
'6k1/pp6/n3bb2/8/8/P1P1B3/1Pr2PPP/1R2R1K1 b - - 0 27',
'6k1/ppn5/4bb2/8/8/P1P1B3/1Pr2PPP/1R2R1K1 w - - 0 28',
'6k1/Bpn5/4bb2/8/8/P1P5/1Pr2PPP/1R2R1K1 b - - 0 28',
'6k1/Bpn5/5b2/8/8/P1P5/bPr2PPP/1R2R1K1 w - - 0 29',
'6k1/Bpn5/5b2/8/8/P1P5/bPr2PPP/2R1R1K1 b - - 0 29',
'6k1/Bpn5/5b2/8/8/P1P5/br3PPP/2R1R1K1 w - - 0 30',
'6k1/1pn5/5b2/8/3B4/P1P5/br3PPP/2R1R1K1 b - - 0 30',
'8/1pn2k2/5b2/8/3B4/P1P5/br3PPP/2R1R1K1 w - - 0 31',
'8/1pn2k2/5b2/8/3B4/P1P1R3/br3PPP/2R3K1 b - - 0 31',
'8/1pn2k2/8/6b1/3B4/P1P1R3/br3PPP/2R3K1 w - - 0 32',
'8/1pn2k2/8/6b1/3B4/P1P2R2/br3PPP/2R3K1 b - - 0 32',
'6k1/1pn5/8/6b1/3B4/P1P2R2/br3PPP/2R3K1 w - - 0 33',
'6k1/1pn5/8/6b1/3B4/P1P3R1/br3PPP/2R3K1 b - - 0 33',
'6k1/1p6/4n3/6b1/3B4/P1P3R1/br3PPP/2R3K1 w - - 0 34',
'6k1/1p6/4n3/6b1/8/P1P1B1R1/br3PPP/2R3K1 b - - 0 34',
'6k1/1p6/4n3/1r4b1/8/P1P1B1R1/b4PPP/2R3K1 w - - 0 35',
'6k1/1p6/4n3/1r4b1/5P2/P1P1B1R1/b5PP/2R3K1 b - - 0 35',
'6k1/1p6/4n3/r5b1/5P2/P1P1B1R1/b5PP/2R3K1 w - - 0 36',
'6k1/1p6/4n3/r5P1/8/P1P1B1R1/b5PP/2R3K1 b - - 0 36',
'6k1/1p6/4n3/r5P1/2b5/P1P1B1R1/6PP/2R3K1 w - - 0 37',
'6k1/1p6/4n3/r5P1/2b5/P1P1B1R1/6PP/R5K1 b - - 0 37',
'r5k1/1p6/4n3/6P1/2b5/P1P1B1R1/6PP/R5K1 w - - 0 38',
'r5k1/1p6/4n3/6P1/2b3R1/P1P1B3/6PP/R5K1 b - - 0 38',
'r5k1/8/4n3/1p4P1/2b3R1/P1P1B3/6PP/R5K1 w - - 0 39',
'r5k1/8/4n3/1p4P1/2b1R3/P1P1B3/6PP/R5K1 b - - 0 39',
'r7/6k1/4n3/1p4P1/2b1R3/P1P1B3/6PP/R5K1 w - - 0 40',
'r7/6k1/4n3/1p4P1/2b1R3/P1P1B1P1/7P/R5K1 b - - 0 40',
'r7/8/4n1k1/1p4P1/2b1R3/P1P1B1P1/7P/R5K1 w - - 0 41',
'r7/8/4n1k1/1p2R1P1/2b5/P1P1B1P1/7P/R5K1 b - - 0 41',
'4r3/8/4n1k1/1p2R1P1/2b5/P1P1B1P1/7P/R5K1 w - - 0 42',
'4r3/8/4n1k1/1p2R1P1/2b5/P1P1B1P1/7P/4R1K1 b - - 0 42',
'r7/8/4n1k1/1p2R1P1/2b5/P1P1B1P1/7P/4R1K1 w - - 0 43',
'r7/8/4n1k1/1p2R1P1/2b5/P1P1B1P1/7P/R5K1 b - - 0 43',
'r7/6n1/6k1/1p2R1P1/2b5/P1P1B1P1/7P/R5K1 w - - 0 44',
'r7/6n1/6k1/1p2R1P1/2b2B2/P1P3P1/7P/R5K1 b - - 0 44',
'5r2/6n1/6k1/1p2R1P1/2b2B2/P1P3P1/7P/R5K1 w - - 0 45',
'5r2/6n1/6k1/1p2R1P1/2b2B2/P1P3P1/7P/3R2K1 b - - 0 45',
'5r2/8/6k1/1p2RnP1/2b2B2/P1P3P1/7P/3R2K1 w - - 0 46',
'5r2/8/6k1/1p2RnP1/2b2B2/P1P3PP/8/3R2K1 b - - 0 46',
'r7/8/6k1/1p2RnP1/2b2B2/P1P3PP/8/3R2K1 w - - 0 47',
'r7/8/6k1/1p2RnP1/2b2B2/P1P3PP/8/R5K1 b - - 0 47',
'r7/8/3n2k1/1p2R1P1/2b2B2/P1P3PP/8/R5K1 w - - 0 48',
'r7/8/3n2k1/1p2R1P1/2b2B2/P1P3PP/6K1/R7 b - - 0 48',
'r7/5n2/6k1/1p2R1P1/2b2B2/P1P3PP/6K1/R7 w - - 0 49',
'r7/5n2/6k1/1pR3P1/2b2B2/P1P3PP/6K1/R7 b - - 0 49',
'4r3/5n2/6k1/1pR3P1/2b2B2/P1P3PP/6K1/R7 w - - 0 50',
'4r3/5n2/6k1/1pR3P1/P1b2B2/2P3PP/6K1/R7 b - - 0 50',
'8/5n2/6k1/1pR3P1/P1b2B2/2P3PP/4r1K1/R7 w - - 0 51',
'8/5n2/6k1/1pR3P1/P1b2B2/2P3PP/4r3/R5K1 b - - 0 51',
'8/5n2/4b1k1/1pR3P1/P4B2/2P3PP/4r3/R5K1 w - - 0 52',
'8/5n2/4b1k1/1PR3P1/5B2/2P3PP/4r3/R5K1 b - - 0 52',
'8/5n2/6k1/1PR3P1/5B2/2P3Pb/4r3/R5K1 w - - 0 53',
'8/5n2/R5k1/1PR3P1/5B2/2P3Pb/4r3/6K1 b - - 0 53',
'8/5n2/R3b1k1/1PR3P1/5B2/2P3P1/4r3/6K1 w - - 0 54',
'8/5n2/RP2b1k1/2R3P1/5B2/2P3P1/4r3/6K1 b - - 0 54',
'3n4/8/RP2b1k1/2R3P1/5B2/2P3P1/4r3/6K1 w - - 0 55',
'3n4/8/RP2b1k1/2R3P1/2P2B2/6P1/4r3/6K1 b - - 0 55',
'3n4/8/RP2b1k1/2R3P1/2P2B2/6P1/1r6/6K1 w - - 0 56',
'R2n4/8/1P2b1k1/2R3P1/2P2B2/6P1/1r6/6K1 b - - 0 56',
'R7/1n6/1P2b1k1/2R3P1/2P2B2/6P1/1r6/6K1 w - - 0 57',
'R7/1n6/1PR1b1k1/6P1/2P2B2/6P1/1r6/6K1 b - - 0 57',
'R7/1n6/1PR1b1k1/6P1/2P2B2/6P1/8/1r4K1 w - - 0 58',
'R7/1n6/1PR1b1k1/6P1/2P2B2/6P1/5K2/1r6 b - - 0 58',
'R7/8/1PR1b1k1/2n3P1/2P2B2/6P1/5K2/1r6 w - - 0 59',
'R7/8/1P2b1k1/2R3P1/2P2B2/6P1/5K2/1r6 b - - 0 59',
'R7/8/1r2b1k1/2R3P1/2P2B2/6P1/5K2/8 w - - 0 60',
'3R4/8/1r2b1k1/2R3P1/2P2B2/6P1/5K2/8 b - - 0 60',
'3R4/8/4b1k1/2R3P1/2P2B2/6P1/1r3K2/8 w - - 0 61',
'3R4/8/4b1k1/2R3P1/2P2B2/6P1/1r6/6K1 b - - 0 61',
'3R4/8/4b1k1/2R3P1/2P2B2/6P1/8/1r4K1 w - - 0 62',
'3R4/8/4b1k1/2R3P1/2P2B2/6P1/6K1/1r6 b - - 0 62',
'3R4/8/4b1k1/2R3P1/2P2B2/6P1/1r4K1/8 w - - 0 63',
'3R4/8/4b1k1/2R3P1/2P5/6P1/1r1B2K1/8 b - - 0 63',
'3R4/8/4b1k1/2R3P1/2P5/6P1/2rB2K1/8 w - - 0 64',
'8/8/4b1k1/2R3P1/2PR4/6P1/2rB2K1/8 b - - 0 64',
'8/5k2/4b3/2R3P1/2PR4/6P1/2rB2K1/8 w - - 0 65',
'8/2R2k2/4b3/6P1/2PR4/6P1/2rB2K1/8 b - - 0 65',
'4k3/2R5/4b3/6P1/2PR4/6P1/2rB2K1/8 w - - 0 66',
'4k3/8/2R1b3/6P1/2PR4/6P1/2rB2K1/8 b - - 0 66',
'4k1b1/8/2R5/6P1/2PR4/6P1/2rB2K1/8 w - - 0 67',
'2R1k1b1/8/8/6P1/2PR4/6P1/2rB2K1/8 b - - 0 67',
'2R3b1/5k2/8/6P1/2PR4/6P1/2rB2K1/8 w - - 0 68',
'2R3b1/5k2/6P1/8/2PR4/6P1/2rB2K1/8 b - - 0 68',
'2R3b1/6k1/6P1/8/2PR4/6P1/2rB2K1/8 w - - 0 69',
'6b1/6k1/2R3P1/8/2PR4/6P1/2rB2K1/8 b - - 0 69',
'6bk/8/2R3P1/8/2PR4/6P1/2rB2K1/8 w - - 0 70',
'6bk/2R5/6P1/8/2PR4/6P1/2rB2K1/8 b - - 0 70',
'6bk/2R5/6P1/8/2rR4/6P1/3B2K1/8 w - - 0 71',
'6bk/2R5/6P1/8/2r4R/6P1/3B2K1/8 b - - 0 71',
'7k/2R4b/6P1/8/2r4R/6P1/3B2K1/8 w - - 0 72',
'7k/2R4R/6P1/8/2r5/6P1/3B2K1/8 b - - 0 72',
'6k1/2R4R/6P1/8/2r5/6P1/3B2K1/8 w - - 0 73',
'6k1/7R/6P1/8/2R5/6P1/3B2K1/8 b - - 0 73',
'5k2/7R/6P1/8/2R5/6P1/3B2K1/8 w - - 0 74',
'2R2k2/7R/6P1/8/8/6P1/3B2K1/8 b - - 0 74'

];



$('#chess-pgn-endgame_fight').text(
"1. Pd2d4 Pg7g6\n\
2. Pe2e4 Bf8g7\n\
3. Ng1f3 Pd7d6\n\
4. Bf1c4 Ng8f6\n\
5. O-O Pd6d5\n\
6. Bc4d5 Nf6d5\n\
7. Pe4d5 Qd8d5\n\
8. Bc1f4 O-O\n\
9. Bf4c7 Nb8a6\n\
10. Nb1c3 Qd5f5\n\
11. Bc7e5 Pf7f6\n\
12. Nf3h4 Qf5d7\n\
13. Be5g3 Qd7d8\n\
14. Qd1d3 Bc8d7\n\
15. Nh4g6 Ph7g6\n\
16. Qd3g6 Pe7e5\n\
17. Pd4e5 Qd8e7\n\
18. Nc3d5 Qe7e8\n\
19. Nd5f6 Rf8f6\n\
20. Qg6e8 Ra8e8\n\
21. Pe5f6 Bg7f6\n\
22. Pc2c3 Re8e2\n\
23. Ra1b1 Bd7f5\n\
24. Rf1e1 Re2d2\n\
25. Bg3f4 Rd2c2\n\
26. Bf4e3 Bf5e6\n\
27. Pa2a3 Na6c7\n\
28. Be3a7 Be6a2\n\
29. Rb1c1 Rc2b2\n\
30. Ba7d4 Kg8f7\n\
31. Re1e3 Bf6g5\n\
32. Re3f3 Kf7g8\n\
33. Rf3g3 Nc7e6\n\
34. Bd4e3 Rb2b5\n\
35. Pf2f4 Rb5a5\n\
36. Pf4g5 Ba2c4\n\
37. Rc1a1 Ra5a8\n\
38. Rg3g4 Pb7b5\n\
39. Rg4e4 Kg8g7\n\
40. Pg2g3 Kg7g6\n\
41. Re4e5 Ra8e8\n\
42. Ra1e1 Re8a8\n\
43. Re1a1 Ne6g7\n\
44. Be3f4 Ra8f8\n\
45. Ra1d1 Ng7f5\n\
46. Ph2h3 Rf8a8\n\
47. Rd1a1 Nf5d6\n\
48. Kg1g2 Nd6f7\n\
49. Re5c5 Ra8e8\n\
50. Pa3a4 Re8e2\n\
51. Kg2g1 Bc4e6\n\
52. Pa4b5 Be6h3\n\
53. Ra1a6 Bh3e6\n\
54. Pb5b6 Nf7d8\n\
55. Pc3c4 Re2b2\n\
56. Ra6a8 Nd8b7\n\
57. Rc5c6 Rb2b1\n\
58. Kg1f2 Nb7c5\n\
59. Rc6c5 Rb1b6\n\
60. Ra8d8 Rb6b2\n\
61. Kf2g1 Rb2b1\n\
62. Kg1g2 Rb1b2\n\
63. Bf4d2 Rb2c2\n\
64. Rd8d4 Kg6f7\n\
65. Rc5c7 Kf7e8\n\
66. Rc7c6 Be6g8\n\
67. Rc6c8 Ke8f7\n\
68. Pg5g6 Kf7g7\n\
69. Rc8c6 Kg7h8\n\
70. Rc6c7 Rc2c4\n\
71. Rd4h4 Bg8h7\n\
72. Rh4h7 Kh8g8\n\
73. Rc7c4 Kg8f8\n\
74. Rc4c8"
)

var board = Chessboard('chess-board-endgame_fight', {
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
  $('#chess-move-endgame_fight').text("Move: " + (Math.floor((game_index+1)/2) + 1))
}

$('#chess-start-endgame_fight').on('click', function () {
  game_index = 0
  set_position(game_index)
})

$('#chess-prev-endgame_fight').on('click', function () {
  game_index = Math.max(0, game_index-1)
  set_position(game_index)
})
$('#chess-next-endgame_fight').on('click', function () {
  game_index = Math.min(chess_game.length-1, game_index+1)
  set_position(game_index)
})


$('#chess-play-endgame_fight').on('click', async function () {
  if (chess_play) {
    chess_play = false
    $('#chess-play-endgame_fight').text("Play")
  } else {
    chess_play = true
    $('#chess-play-endgame_fight').text("Pause")
    while (game_index < chess_game.length-1 && chess_play) {
      game_index = game_index + 1
      set_position(game_index)
      await sleep(500)
    }
  }
  
})
}();