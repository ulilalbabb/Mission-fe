const Button = (props) => {
    const { variant, children } = props;
    return (
        <button
            className={`${variant} text-white font-bold rounded-3xl`}
        >
            {children}
        </button>
    )
}

export default Button