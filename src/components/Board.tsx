import { useState, useEffect } from 'react';
import '../assets/css/style.css';
import Square from './common/Square';
import History from './common/History';
import Player from './common/Player';
export default function Board() {
    // board에서 각각의 square가 어떤 값인지 알고 있어야하기 때문에
    // 상위에서 하위로 내려줘야한다.
    // 총 9개의 버튼 중 각 값을 배열로 가지고 있어야 한다.
    const [squares, setSquares] = useState(Array(9).fill(null));
    // 현재 턴이 누군지 확인하는 변수
    const [player, setPlayer] = useState('X');
    // 승자를 담는 변수
    const [winner, setWinner] = useState(null);
    // History
    const [history, setHistory] = useState([]);

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
            return null;
        };
        setWinner(calculateWinner());
    }, [squares]);

    // 빙고를 클릭했을 때
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
            // 복사한 배열의 index에 현재 턴의 데이터 넣어주기.
            list[index] = player;
            // 값 그 자체를 통째로 담아주는 것
            setSquares(list);
            // 턴 변경
            setPlayer(player == 'X' ? 'O' : 'X');
            // 히스토리 쌓기
            /*
            [
                [], [], []
            ]
            */
            setHistory([...history, list]);
        };
    }

    function historyBack(index) {
        return () => {
            // 만일 승리자가 생길 결우 아무것도 못하게 막아야함.
            if (winner) {
                return false;
            }
            console.log(index, '번지로 이동');
            // 이동 시 턴 바꿔줘야함.
            setPlayer(index % 2 == 0 ? 'O' : 'X');
            // 만일 5번째 히스토리까지 쌓였는데, 2번째 히스토리를 클릭했다면 3,4,5 번째 히스토리는 삭제.
            // 현재 배열도 해당 인덱스의 값으로 바꿔줘야함.
            setSquares(history[index]);
            // console.log(history[index]);
            setHistory(history.slice(0, index + 1));
        };
    }

    return (
        <>
            <Player player={player} winner={winner} />
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
            <History history={history} historyBack={historyBack} />
        </>
    );
}
