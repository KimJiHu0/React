// React function에서 데이터를 사용하기 위헤서는 {} 을 사용해야한다.
const user = {
    name: 'LEE',
    backgroundColor: 'black',
    size: 90,
    radius: 50,
};

export default function Profile() {
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
}
