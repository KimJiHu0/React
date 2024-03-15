import { useState } from 'react';
import '../assets/css/style.css';
import Square from './Square';
export default function Board() {
    // board에서 각각의 square가 어떤 값인지 알고 있어야하기 때문에
    // 상위에서 하위로 내려줘야한다.
    // 총 9개의 버튼 중 각 값을 배열로 가지고 있어야 한다.
    const [squares, setSquares] = useState(Array(9).fill(null));
    // 시작은 X가 먼저하기 때문에 X를 기본 세팅으로 해주고 클릭 시 X를 넘겨주고 그 다음엔 O로 바꾸어 준다.
    const [turn, setTurn] = useState('X');

    // 승자를 체크하는 함수
    const calculateWinner = function (squares) {
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
        return null;
    };

    // 빙고를 클릭해서 useState가 변경될 때마다 React는 랜더링을 다시하며 계속 호출하게 됨.
    const win = calculateWinner(squares);
    console.log('win : ', win);

    function buttonClick(index) {
        return () => {
            // 버튼클릭 시 해당 위치에 값이 존재하면 아무 행동도 할 수 없음.
            if (squares[index] || win) {
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

            // 여기서는 null이 나옴
            // console.log('함수 내 win : ', calculateWinner(squares));

            // 턴 넘기기
            setTurn(turn == 'X' ? 'O' : 'X');
        };
    }

    return (
        <>
            <p>Now Player : {turn}</p>
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
            {win != null ? <p>win {win}</p> : ''}
        </>
    );
}
