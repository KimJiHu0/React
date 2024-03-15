### Tic-Tac-Toe Game

> 3 x 3 크기의 네모가 있다. 두 명의 Player는 오목과 동일한 규칙으로 게임을 진행한다.
> 선 공격은 "X"가 먼저 한다. 만일 "X" 혹은 "O"가 가로 혹은 세로 혹은 대각으로 한 줄을 잇는다면 게임에서 승리한다.
> 또한 플레이어 들이 위치를 클릭할 때마다 History가 쌓이며 클릭 시 해당 상황으로 돌아간다.

이를 만들기 전에 어떤식으로 만들지 구상을 한 번 하는 것이 좋을 것 같다.

1. 3x3 네모를 먼저 만든다.
2. 9개안에 X, O 넣기
3. 현재 순서가 누군지 판단
4. 클릭 시 비어있는 칸에만 해당 순서 값이 들어가도록
5. 특정 조건(승리조건)에 대한 처리 => 승자 결정
6. 히스토리를 쌓고 돌아가기 조건 만들기.

---

### 주의사항

-   각각의 Square Component가 O 값인지 X 값인지 그의 부모 Component인 Board.tsx가 값을 알아야 한다. React는 부모 -> 자식으로 데이터 흐름이 단반향인 라이브러리이기 때문에 각각의 값을 부모에서 자식으로 props로 내려줘야 한다.

-   게임을 만들면서 이슈가 발견되었다. useState에 값을 변경하고 나면 HTML(View)는 값이 바뀐 것으로 보이는데 실제로 해당 state를 console로 찍어보면 바뀌지 않았다. 그래서 버튼을 클릭했을 때 useState 값을 바꾸고나서 승자를 체크하는 함수 내에서는 클릭하여 변경된 값이 아닌 그 전 값이 가져와졌다. 이를 해결할 수 있는 방법은 아래와 같다.

```
function buttonClick(index) {
import { useState, useEffect } from 'react';
import '../assets/css/style.css';
import Square from './Square';
export default function Board() {
    // 3 * 3 사이즈의 총 배열 ( 9칸 )
    const [squares, setSquares] = useState(Array(9).fill(null));
    // 시작은 X가 먼저하기 때문에 X를 기본 세팅으로 해주고 클릭 시 X를 넘겨주고 그 다음엔 O로 바꾸어 준다.
    const [turn, setTurn] = useState('X');
    // 승자 State
    const win = calculateWinner(squares);

    function calculateWinner(squares) {
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
    }

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

}
```

> `buttonClick` 함수를 살펴보면 `setSquares` 후에 `squares를` `console.log()`로 찍어보면 한 박자가 느린 경우가 발생한다. 이는 `useState가` 비동기이기 때문이다. 따라서 이 이슈를 피하기 위해서는 두 가지 방법이 존재한다.
>
> 1.  `export default function Board()`상단에서 winner를 체크해주는 함수를 속 실행할 것. 이는 빙고판의 위치를 클릭할 때마다 `useState` 값이 변경되며 랜더링이 다시 되어 winner를 체크해주는 함수를 실행하게 된다. 그래서 변경이 제대로 된 값을 가져올 수 있는 것이다.
> 2.  `useEffect를` 사용하는 것. useEffect를 통해 squares의 변경값을 확인하면서 승자를 계속 체크하는 방법이다. `useEffect(() => {}, squares)` 함수 안에 `calculateWinner` 내 로직을 사용하면 된다.
