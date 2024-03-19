import '../../assets/css/style.css';

export default function Square({ value, buttonClick }) {
    return (
        <button className="square" onClick={buttonClick}>
            {value ? value : '-'}
        </button>
    );
}
