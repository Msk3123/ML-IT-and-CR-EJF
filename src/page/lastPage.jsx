import React from "react";
import videoIT from '../assets/video/IT_video.mp4';
import videoCR from '../assets/video/CR_video.mp4';

function LastPage({ selectedCategory }) { // 👈 Додай фігурні дужки!
    const video = selectedCategory === 'CR' ? videoCR : videoIT;

    return (
        <div className="page-container">
            <section className="interactive-page">
                <h2>Відео для тебе 🎬</h2>
                <video
                    src={video}
                    controls        // 🎛️ Кнопки керування
                    loop            // 🔁 Безкінечність
                    playsInline     // 📱 Для мобільних
                    className="video-container"
                >
                    Твій браузер не підтримує відео 😢
                </video>
                <h1>Якщо ти жива після всього крінжа, то я тебе вітаю ти чемпіон!!</h1>
                <h1>Надіюсь ти розглянеш мою подачу, я над нею дуже старався!!!</h1>

            </section>
        </div>
    );
}

export default LastPage;
