import React, { useState } from 'react';
import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer';
import { TicTacToe } from './Game';
import { TicTacToeBoard } from './Board';

const TicTacToeClient = Client({
    game: TicTacToe,
    board: TicTacToeBoard,
    multiplayer: SocketIO({
        server: 'localhost:8000'
    }),
});

const App = () => {
    const [playerID, setPlayerID] = useState(null);

    return playerID === null ? (
        <div>
            <p>Play as</p>
            <button onClick={() => setPlayerID("0")}>
                Player 0
            </button>
            <button onClick={() => setPlayerID("1")}>
                Player 1
            </button>
        </div>
    ) : (
        <div>
            <TicTacToeClient playerID={playerID} />
        </div>
    );
};

export default App;