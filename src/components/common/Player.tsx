export default function Player({ player, winner }) {
    return <>{winner ? <p>Winner : {winner}</p> : <p>Player : {player}</p>}</>;
}
