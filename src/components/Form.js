import React from 'react';  
import styles from './Formulario.module.css';
import PropTypes from 'prop-types';
import useSelect from '../hooks/useSelect';

const Form = ({setCategory}) => {

    const options = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ]

    //custom hook
    const [ newsCategory, NewsSelect ] = useSelect('general', options);

    // submit form, passing category to app.js
    const newsSearch = e => {
        e.preventDefault();

        setCategory(newsCategory);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={newsSearch}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

                    <div className="input-field col s12">
                        <NewsSelect />
                    </div>

                    <div className="input-field col s12">
                        <input 
                            type="submit" 
                            className={`${styles['btn-block']}  btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Form.propTypes = {
    setCategory: PropTypes.func.isRequired
}
 
export default Form;