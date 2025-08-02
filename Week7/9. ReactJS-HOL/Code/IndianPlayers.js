import React from 'react';

function IndianPlayers() {
    const players = [
        "Player A", "Player B", "Player C", "Player D", 
        "Player E", "Player F", "Player G", "Player H"
    ];

    // Destructure into odd and even team players
    const [first, second, third, fourth, fifth, sixth, seventh, eighth] = players;
    const oddTeam = [first, third, fifth, seventh];
    const evenTeam = [second, fourth, sixth, eighth];

    // Two separate arrays
    const T20players = ["Player X", "Player Y", "Player Z"];
    const RanjiTrophyplayers = ["Player P", "Player Q", "Player R"];

    // Merge the two arrays
    const allPlayers = [...T20players, ...RanjiTrophyplayers];

    return (
        <div>
            <h2>Odd Team Players</h2>
            <ul>
                {oddTeam.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h2>Even Team Players</h2>
            <ul>
                {evenTeam.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h2>All Indian Players (Merged)</h2>
            <ul>
                {allPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
        </div>
    );
}

export default IndianPlayers;