import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import './PopupForm.scss';

const PopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    tel: '',
    agree: false,
  });

  const [errors, setErrors] = useState({
    username: '',
    tel: '',
    agree: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: fieldValue }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    for (const field in formData) {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  const validateField = (name, value) => {
    if (name === 'username') {
      if (value.trim() === '') {
        return 'Пожалуйста, заполните поле';
      }
    } else if (name === 'tel') {
      // проверяем наличия хотя бы 11 цифр в поле телефона
      const digitCount = (value.match(/\d/g) || []).length;
      if (digitCount < 11) {
        return 'Введите корректный номер';
      }
    } else if (name === 'agree' && !value) {
      return 'Требуется согласие';
    }

    return '';
  };

  return (
    <section id="PopupForm" className="PopupForm">
      <form className="popup__form" onSubmit={handleSubmit} noValidate>
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        <h2 className="popup__title">CВЯЗАТЬСЯ С НАМИ</h2>
        <div className="popup__inputs">
          <label htmlFor="username">
            <input
              className={`popup__input ${errors.username && 'popup__inputWrong'}`}
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Имя"
              required
            />
            <div className="popup__error-container">
              {errors.username && <span className="popup__error">{errors.username}</span>}
            </div>
          </label>

          <label htmlFor="tel">
            <InputMask
              mask="+7 (999) 999-99-99"
              className={`popup__input ${errors.tel && 'popup__inputWrong'}`}
              type="tel"
              name="tel"
              id="tel"
              value={formData.tel}
              onChange={handleChange}
              placeholder="Телефон"
              required
            />
            <div className="popup__error-container">
              {errors.tel && <span className="popup__error">{errors.tel}</span>}
            </div>
          </label>

        </div>
        <div className="popup__checkbox-container">
          <label className="popup__custom-checkbox">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
          </label>
          <p className="popup__checkbox-caption">Я СОГЛАСЕН (-А) НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ</p>
        </div>
        <div className="popup__error-container">
          {errors.agree && <span className="popup__error">{errors.agree}</span>}
        </div>
        <button className="popup__button-submit" type="submit">
          Отправить
        </button>
      </form>
    </section>
  );
};

export default PopupForm;
