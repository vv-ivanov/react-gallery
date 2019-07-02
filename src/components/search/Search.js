import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './search.scss'

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectData: '',
        };

        this.form = React.createRef();
    }

    handleChange = (e) => {
        this.setState({selectData: e.target.value});
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.onSubmit(this.state.selectData);
        this.clearForm();
        //console.log(this.input.current)
    }

    clearForm = () => {
        let form = this.form.current;
        let inputs = [...form.querySelectorAll('input')]
        inputs.forEach(input=>input.value = '')
        this.setState({selectData: ''});
    }

    render() {

        return (
            <form className={styles.search} onSubmit={this.handleSubmit} ref={this.form} >
                
                <div className={styles.search__inner_form}>
                    <div className={styles.search__choices_inner}>
                        <input className={styles.search__input} onChange={this.handleChange} type="text" placeholder={this.props.btnType === 'btn_loader' ? 'вставьте адресс сервера' : 'введите адрес картинки...https://clck.ru/GsVwA'} />
                        <button className={styles.search__btn} type="button">
                            <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 471 471">
                                <path d="M458 230c-8 0-14 6-14 14v122c0 34-27 61-60 61H88c-34 0-61-27-61-61V242c0-8-6-14-13-14s-14 6-14 14v124c0 49 39 88 88 88h296c48 0 87-39 87-88V244c0-8-6-14-13-14z"/>
                                <path d="M226 347c3 2 6 4 10 4s6-2 9-4l86-86c5-5 5-14 0-19s-14-5-19 0l-63 63V31c0-8-6-14-13-14s-14 6-14 14v274l-63-63c-5-5-14-5-19 0s-5 14 0 19l86 86z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
export default Search

Search.propTypes = {
    onAdd: PropTypes.func, //колбек при
};