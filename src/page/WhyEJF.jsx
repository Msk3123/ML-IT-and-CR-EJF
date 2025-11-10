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
              Я хочу долучитися до команди ІЯК, тому що це івент з унікальною атмосферою, яку неможливо порівняти з проєктами, де я вже брав участь. Для мене це абсолютно новий формат, і мені цікаво спробувати себе в ньому. Я прагну стати частиною події, яка об’єднує студентів та компанії. А ще я люблю синій колір
          </p>
            </div>
        </div>
        <div>
          <h2>Чому саме я?</h2>
          <p>
              Я заряджений бейбік, який хоче і далі бути в кортімі й працювати. Я вже маю досвід, не боюсь відповідальності й завжди доводжу справи до кінця. Для мене важливо не просто кайфувати з атмосфери, а реально вкладати і показувати сексуальний результат. Я той, хто завжди підтримає, підкине ідей і не зникне в критичний момент(тільки якщо мене не збє машина)
          </p>
        </div>
        <div>
          <h2>Оціни свій вільний час по шкалі від 1 до 10.</h2>
          <p>Від 7 до 9 іноді їздитиму додому, ну і на міжнар планую поїхати. Додому поїду на Новий рік і ще після екзаменів приблизно на 5–7 днів, на міжнар — коли візьмуть. Також я гнучкий і адаптивний, зможу легко все поєднувати — і не просто абияк, а якісно та ефективно. А завдяки тому, що я не вигораю, не потрібно перейматись, що щось буде не виконано або що я кудись пропаду під час роботи.
          </p>
        </div>
        <div>
          <h2>Твої плани на наступні 6 місяців (чи будеш у Львові, BEST, курси, робота, навчання і т.д.).</h2>
          <p>
              80% усього часу я буду у Львові, залишатимусь активним у BEST. Курсів немає. Щодо роботи - так, 
              я її шукаю, але навіть якщо знайду, вона ніяк не вплине на мою ефективність чи якість роботи. 
              А якщо не знайду - теж свій вайб. На навчання мені байдуже: я на третьому курсі, і щоб закрити університет, 
              не потрібно докладати багато зусиль, тому ні. Планую поїхати лише на якісь BESTівські події за кордон - і все.


          </p>
        </div>
        <div>
          <h2>Розкажи про свій попередній досвід що стосується посади, на яку подаєшся.</h2>
          <div className="category-switch">
            <button
              className={` ${selectedRole === 'CR' ? 'active' : ''}`}
              onClick={() => setSelectedRole('CR')}
            >
              CR
            </button>
            <button
              className={` ${selectedRole === 'IT' ? 'active' : ''}`}
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
              <div className="category-switch">
                  <button
                      className={` ${selectedRole2 === 'CR' ? 'active' : ''}`}
                      onClick={() => setSelectedRole2('CR')}
                  >
                      CR
                  </button>
                  <button
                      className={` ${selectedRole2 === 'IT' ? 'active' : ''}`}
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