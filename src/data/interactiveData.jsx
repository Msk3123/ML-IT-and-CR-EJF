// my-app/src/data/interactiveData.jsx
import React from 'react';
import SkillCarousel from '../component/SkillCarousel';
import { buttonChoise } from './buttonInteractiveTask';

export const interactiveData = {
    CR: (selectedTemplate, setSelectedTemplate) => {
        const buttons = [
            { key: 'Shablone1', label: 'Для компанії яка цікавилась' },
            { key: 'Shablone2', label: 'Для інших' }
        ];

        const content = buttonChoise[selectedTemplate] || (
            <p style={{ color: 'red' }}>Template not found.</p>
        );

        return (
            <div className="cr-section">
                <h1 className="cr-title">
                    Опиши хід роботи в наступній ситуації і сформуй повідомлення для компанії: панельна дискусія доступна
                    лише у найдорожчому пакеті пропозиції (і компанія, попередньо, не планує брати його), але компанія
                    виявила інтерес лише до цього формату участі.
                </h1>

                <section>
                    <h3>Повідомляю інших</h3>
                    <p>
                        Після отримання фідбеку від компанії про інтерес лише до панельної дискусії, я б одразу повідомив <b>MO</b>, <b>VP4CR</b> та другого <b>CR</b>, щоб разом обговорити можливість зміни структури пропозицій.
                    </p>
                </section>

                <section>
                    <h3>Що можна зробити на мою думку</h3>
                    <p>
                        Я б запропонував винести панельну дискусію в окрему категорію додаткових опцій з фіксованою ціною. Це дає змогу задовольнити компанію, не змінюючи базові пакети, і водночас створює новий продукт, який може зацікавити інших.
                    </p>
                </section>

                <section>
                    <h3>Узгодження і оновлення матеріалів</h3>
                    <p>
                        Після затвердження змін оновимо сайт і підготуємо повідомлення/лист для всіх компаній (нових і тих, хто вже придбав пакети), щоб уникнути непорозумінь щодо оновлення пропозицій.
                    </p>
                </section>

                <section>
                    <h3>Комунікація з клієнтами</h3>
                    <p>Головна мета - показати, що ми почули їхній запит і професійно його опрацювали.</p>
                </section>

                <hr />

                <div className="category-switch">
                    {buttons.map(({ key, label }) => (
                        <button
                            key={key}
                            type="button"
                            className={`template-button ${selectedTemplate === key ? 'active' : ''}`}
                            onClick={() => setSelectedTemplate(key)}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="template-content">
                    {content}
                </div>
            </div>
        );
    },

    IT: (
        <div className="it-section">
            <h1 className="it-title">
                Опиши свій досвід роботи з програмуванням та детальніше розкрий свої хард скіли. Спробуй покрити їх, створивши мотивашку:
            </h1>
            <p>
                Я маю досвід програмування на Python (телеграм-боти: логіка, обробка запитів, інтеграція з базою даних). Працював з CSS та JavaScript, створюючи інтерактивні інтерфейси на React. Знаю .NET та ASP.NET Core: робота з контролерами, моделями, API. Також Node.js для серверної частини та REST запитів.
            </p>
            <SkillCarousel />
        </div>
    )
};
