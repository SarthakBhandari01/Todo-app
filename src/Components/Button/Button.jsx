function Button({text,onclick,prop}) {
    return <button onClick={onclick} className={`btn font-semibold ${prop}`} >
        {text}
    </button>
}
export default Button;
