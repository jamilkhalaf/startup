import React from "react";

import "../styles/leaderboard.css";

const Leaderboard = () => {
    return (
        <main class="leaderboard">
        <h2>🏆 Leaderboards 🏆</h2>
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Player Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Player 1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Player 2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Player 3</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Player 4</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Player 5</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Player 6</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Player 7</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Player 8</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Player 9</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Player 10</td>
                </tr>
            </tbody>
        </table>
    </main>
    );
  };
  
  export default Leaderboard;