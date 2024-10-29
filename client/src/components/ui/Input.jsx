
const Input = ({ type, id, name, placeholder, className, register, validate, errors, ...props }) => {
    return (
        <>
            <input
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                className={`px-4 py-2 bg-transparent border border-border rounded-md ${className}`}
                {...register(name, !!validate && { validate })}
                {...props}
            />

            {errors[name] && <p className="text-xs text-red">
                {errors[name]?.message}
            </p>}
        </>
    )
}

export default Input