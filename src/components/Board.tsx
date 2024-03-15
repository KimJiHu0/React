import { useState, useEffect, useRef } from 'react';
import '../assets/css/style.css';
import Square from './Square';
export default function Board() {
    // board에서 각각의 square가 어떤 값인지 알고 있어야하기 때문에
    // 상위에서 하위로 내려줘야한다.
    // 총 9개의 버튼 중 각 값을 배열로 가지고 있어야 한다.
    const [squares, setSquares] = useState(Array(9).fill(null));
    // 현재 턴이 누군지 확인하는 변수
    const [turn, setTurn] = useState('X');
    // 승자를 담는 변수
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        const calculateWinner = function () {
            const lines = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ];
            for (let i = 0; i < lines.length; i++) {
                const [a, b, c] = lines[i];
                if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                    return squares[a];
                }
            }
            // setTurn(turn == 'X' ? 'O' : 'X');
            return null;
        };
        setWinner(calculateWinner());
    }, [squares]);

    function buttonClick(index) {
        return () => {
            // 버튼클릭 시 해당 위치에 값이 존재하면 아무 행동도 할 수 없음.
            if (squares[index] || winner) {
                return false;
            }

            // length가 9인 배열을 그대로 복사하는 행위
            // JS는 객체 내부의 프로퍼티가 수정되어도 객체 자체가 수정되었다고 판단되지 않기 때문에
            // 동작하지 않는다. : 불변성때문
            // 그래서 새로운 배열을 반환해야한다.
            const list = squares.slice();
            // 복사한 배열에서 클릭한 index의 값을 바꿔주고
            list[index] = turn;
            // 값 그 자체를 통째로 담아주는 것
            setSquares(list);
            // 턴 변경
            setTurn(turn == 'X' ? 'O' : 'X');
        };
    }

    return (
        <>
            {winner != null ? <p>winner {winner}</p> : <p>Now Player : {turn}</p>}
            <div className="board-row">
                <Square value={squares[0]} buttonClick={buttonClick(0)}></Square>
                <Square value={squares[1]} buttonClick={buttonClick(1)}></Square>
                <Square value={squares[2]} buttonClick={buttonClick(2)}></Square>
            </div>
            <div className="board-row">
                <Square value={squares[3]} buttonClick={buttonClick(3)}></Square>
                <Square value={squares[4]} buttonClick={buttonClick(4)}></Square>
                <Square value={squares[5]} buttonClick={buttonClick(5)}></Square>
            </div>
            <div className="board-row">
                <Square value={squares[6]} buttonClick={buttonClick(6)}></Square>
                <Square value={squares[7]} buttonClick={buttonClick(7)}></Square>
                <Square value={squares[8]} buttonClick={buttonClick(8)}></Square>
            </div>
        </>
    );
}
