import './style/Button.css'

export default function Button({ children, onClick }) {
    return (
        <button className='set-simulation-progress' type="button" onClick={onClick}>
            {children}
        </button>
    )
} 