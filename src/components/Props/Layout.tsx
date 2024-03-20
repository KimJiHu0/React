export default function Layout({ children }) {
    return (
        <div style={{ border: '1px solid red', width: 100, height: 120 }}>
            <h4>Layout</h4>
            {children}
        </div>
    );
}
