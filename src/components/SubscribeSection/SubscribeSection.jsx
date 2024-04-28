import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import './SubscribeSection.scss';

const SubscribeSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    date: '',
    tel: '',
    time: '',
    agree: false,
  });

  const [errors, setErrors] = useState({
    email: '',
    date: '',
    tel: '',
    time: '',
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
    if (name === 'email') {
      if (value.trim() === '') {
        return 'Пожалуйста, заполните поле';
      }
      if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(value)) {
        return 'Введите корректный email';
      }
    } else if (name === 'date') {
      if (value.trim() === '') {
        return 'Пожалуйста, введите дату';
      }
      const parts = value.split('.');
      if (parts.length !== 3 ||
        parseInt(parts[0]) < 1 || parseInt(parts[0]) > 31 ||
        parseInt(parts[1]) < 1 || parseInt(parts[1]) > 12 ||
        parseInt(parts[2]) < 1900 || parseInt(parts[2]) > 2020) {
        return 'Введите корректную дату в формате "дд.мм.гггг"';
      }
    } else if (name === 'tel') {
      // проверяем наличия хотя бы 11 цифр в поле телефона
      const digitCount = (value.match(/\d/g) || []).length;
      if (digitCount < 11) {
        return 'Введите корректный номер';
      }
    } else if (name === 'time') {
      if (value.trim() === '') {
        return 'Пожалуйста, введите время';
      }
      const parts = value.split(':');
      if (parts.length !== 2 ||
        parseInt(parts[0]) < 0 || parseInt(parts[0]) > 23 ||
        parseInt(parts[1]) < 0 || parseInt(parts[1]) > 59) {
        return 'Введите корректное время в формате "чч:мм"';
      }
    } else if (name === 'agree' && !value) {
      return 'Необходимо согласие';
    }
    return '';
  };


  return (
    <section id="SubscribeSection" className="SubscribeSection">
      <div className="subscribe__info">
        <h2 className="subscribe__title">ПОДПИШИСЬ НА&nbsp;РАССЫЛКУ</h2>
        <p className="subscribe__text">
          Отправляем анонсы новых статей, выпусков и трансляций
        </p>
      </div>

      <form className="subscribe__form" onSubmit={handleSubmit} noValidate>
        <div className="subscribe__form-inputs">
          <label htmlFor="email">
            <input
              className={`subscribe__form-input ${errors.email && 'subscribe__form-inputWrong'}`}
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Электронная почта"
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>

          <label htmlFor="date">
            <input
              className={`subscribe__form-input ${errors.date && 'subscribe__form-inputWrong'}`}
              type="text"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="Дата (например, 01.01.1990)"
              required
            />
            {errors.date && <span className="error">{errors.date}</span>}
          </label>

          <label htmlFor="tel">
            <InputMask
              mask="+7 (999) 999-99-99"
              className={`subscribe__form-input ${errors.tel && 'subscribe__form-inputWrong'}`}
              type="tel"
              name="tel"
              id="tel"
              value={formData.tel}
              onChange={handleChange}
              placeholder="Телефон"
              required
            />
            {errors.tel && <span className="error">{errors.tel}</span>}
          </label>

          <label htmlFor="time">
            <input
              className={`subscribe__form-input ${errors.time && 'subscribe__form-inputWrong'}`}
              type="text"
              name="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
              placeholder="Время (например, 10:00)"
              required
            />
            {errors.time && <span className="error">{errors.time}</span>}
          </label>
        </div>

        <div className="checkbox__container">
          <label className="custom-checkbox">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
          </label>
          <p className="checkbox__caption">Я СОГЛАСЕН (-А) НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ</p>
          {errors.agree && <span className="error">{errors.agree}</span>}
        </div>

        <button className="subscribe__submit-btn " type="submit">
          Подписаться
        </button>
      </form>
    </section>
  );
};

export default SubscribeSection;
