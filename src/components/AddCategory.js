import React from "react";
import {useState} from "react/cjs/react.development";
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const ObtenerValor = (e) => {
        setInputValue(e.target.value);
    };

    const EnviarValor = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 0) {
            setCategories((cats) => [inputValue, ...cats]);
            setInputValue("");
        }
    };

    return (
        <form onSubmit={EnviarValor}>
            <div className='container'>
                <div className="row">
                    <input className='form-control' type="text" value={inputValue} onChange={ObtenerValor} placeholder="Buscar"/>
                </div>
            </div>
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}