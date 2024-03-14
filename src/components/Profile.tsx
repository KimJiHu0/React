// Component에 Data 뿌려주는 방법 및 조건부 랜더링
// React function에서 데이터를 사용하기 위헤서는 {} 을 사용해야한다.
export default function Profile({ user }) {
    // 조건부 랜더링 영역, 삼항연산자로도 가능
    if (user.name) {
        return (
            <>
                <h1>{user.name}</h1>
                <div
                    className="avatar"
                    style={{
                        width: user.size,
                        height: user.size,
                        backgroundColor: user.backgroundColor,
                        borderRadius: user.radius,
                    }}
                ></div>
            </>
        );
    } else {
        return (
            <>
                <p>이름이 없습니다.</p>
            </>
        );
    }
}
