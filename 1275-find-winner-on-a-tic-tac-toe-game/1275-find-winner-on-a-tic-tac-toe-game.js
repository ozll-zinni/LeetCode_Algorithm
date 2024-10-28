/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    let row = Array.from({ length: 2 }, () => [0, 0, 0]);
    let col = Array.from({ length: 2 }, () => [0, 0, 0]);
    let diag1 = [0, 0];
    let diag2 = [0, 0];
    let i = 0; 

    for(const [r,c] of moves){
        row[i][r] += 1;
        col[i][c] += 1;
        diag1[i] += (r === c) ? 1: 0;
        diag2[i] += (r + c === 2) ? 1 : 0;

        if(row[i][r] === 3 || col[i][c] === 3 || diag1[i] === 3 || diag2[i] === 3) {
            return i === 0 ? 'A' : 'B';
        }        
        i ^= 1;
    }
    return moves.length === 9 ? 'Draw' : 'Pending';
};
