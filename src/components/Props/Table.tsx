export default function Table({ name = '이름없음', age = 0 }) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>나이</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{age}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
