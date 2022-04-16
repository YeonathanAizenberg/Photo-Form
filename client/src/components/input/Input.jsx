import './Input.css';

function Input({register, label, name, type, value, onChange, accept}) {

    return (
        <div>
            <label className="input-wrapper">
                {type === "submit" ? label : label + ":"}
                <input
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