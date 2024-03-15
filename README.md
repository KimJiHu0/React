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
