// File: src/page/WhyEJF.jsx
import { experienceContent, experienceContent2 } from '../data/experienceData';
import { useState } from 'react';
import '../style/WhyEJF.css';

function WhyEJF() {
  const [selectedRole, setSelectedRole] = useState('CR');
  const [selectedRole2, setSelectedRole2] = useState('CR');

  return (
    <div className="page-container">
      <section className="profile-section">
        <div>
            <h1>Відповіді на питання:</h1>
            <div className="question-toggle">
          <h2>Чому саме ІЯК:</h2>
          <p>
              Хочу податись в ІЯК, бо це івент з унікальним вайбом, який не можна порівнювати з проєктами, на яких я вже був, для мене це інший формат і мені цікаво спробувати себе в чомусь новому і я хочу бути частиною івенту, який об’єднує студентів і компанії, а ще я люблю синій!
          </p>
            </div>
        </div>
        <div>
          <h2>Чому саме я?</h2>
          <p>
              Я заряджений бейбік, який і далі хоче бути в кортімі і працювати, я хочу знову показати іншим, що я не просто людина-розйоб, а й людина-робота. А також я смішний)</p>
        </div>
        <div>
          <h2>Оціни свій вільний час по шкалі від 1 до 10.</h2>
          <p>Від 7 до 9, іноді буду їздити додому, ну і на міжнар планую поїхати</p>
        </div>
        <div>
          <h2>Твої плани на наступні 6 місяців (чи будеш у Львові, BEST, курси, робота, навчання і т.д.).</h2>
          <p>
              %80 всього часу я буду в Львові, буду і далі активним в бесті, курсів нема, щодо роботи, то так, я її шукаю, але навіть якщо найду, то вона не буде ніяк впливати на мою ефективність, чи якість роботи, а якщо не найду, ну то тоже по-своєму вайб.
              На навчання мені байдуже, я 3 курс і щоб закрити весь університет мені не потрібно вливати багато сили в це, тому ні.
              Думаю поїхати на якісь бестівські події на міжнар і все!

          </p>
        </div>
        <div>
          <h2>Розкажи про свій попередній досвід що стосується посади, на яку подаєшся.</h2>
          <div className="role-toggle">
            <button
              className={`role-btn ${selectedRole === 'CR' ? 'active' : ''}`}
              onClick={() => setSelectedRole('CR')}
            >
              CR
            </button>
            <button
              className={`role-btn ${selectedRole === 'IT' ? 'active' : ''}`}
              onClick={() => setSelectedRole('IT')}
            >
              IT
            </button>
          </div>
          <div>
            {experienceContent[selectedRole]}
          </div>
        </div>
          <div>
              <h2>Як би ти хотів/ла розвинутися в кортімі чи що хотів/ла б отримати від неї? </h2>
              <div className="role-toggle">
                  <button
                      className={`role-btn ${selectedRole2 === 'CR' ? 'active' : ''}`}
                      onClick={() => setSelectedRole2('CR')}
                  >
                      CR
                  </button>
                  <button
                      className={`role-btn ${selectedRole2 === 'IT' ? 'active' : ''}`}
                      onClick={() => setSelectedRole2('IT')}
                  >
                      IT
                  </button>
              </div>
              <div>
                  {experienceContent2[selectedRole2]}
              </div>
          </div>
      </section>
    </div>
  );
}

export default WhyEJF;