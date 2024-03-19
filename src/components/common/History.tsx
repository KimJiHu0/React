export default function History({ history, historyBack }) {
    return (
        <ul>
            {history.map((element, index) => (
                <li key={index}>
                    {index + 1}번째 히스토리
                    <button onClick={historyBack(index)}>이동</button>
                </li>
            ))}
        </ul>
    );
}
