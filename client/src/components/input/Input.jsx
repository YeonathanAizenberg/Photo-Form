import './Input.css';

function Input({label, name, type, value, onChange}) {
    return (
        <div>
            <label className="input-wrapper">
                {type === "submit" ? label : label + ":"}
                <input
                    name={name}
                    type={type}
                    value={value}
                    onChange={(e)=> onChange(e.target.value)}
                    />
            </label>
        </div>
    );
}

export default Input;