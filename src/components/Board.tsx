import '../assets/css/style.css';
import Square from './Square';
export default function Board() {
    return (
        <>
            <div className="board-row">
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </div>
            <div className="board-row">
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </div>
            <div className="board-row">
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </div>
        </>
    );
}
