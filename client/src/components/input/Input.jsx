import './Input.css';

function Input({register, label, name, type, value, onChange, accept, disabled}) {

    return (
        <div>
            <label className="input-wrapper">
                {type === "submit" ? label : label + ":"}
                <input
                    disabled={disabled}
                    ref={register}
                    name={name}
                    type={type}
                    accept={accept}
                    value={accept ? value?.name : value}
                    onChange={accept ? (e) => onChange(e.target.files[0]) : (e)=> onChange(e.target.value)}
                    />
            </label>
        </div>
    );
}

export default Input;