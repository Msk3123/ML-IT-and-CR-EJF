// Новий компонент ProfileSection з оновленими назвами змінних і класів
import '../style/ProfileSection.css';
import profilePhoto from '../assets/Моє фото.jpg';
import profilePhotoCR from '../assets/МоєФотоCR.jpg';

function ProfileSection({selectedCategory, profileMotivation}) {
    const myPhoto = selectedCategory === 'CR' ? profilePhotoCR : profilePhoto;
    
    
    return (
        <div className="page-container">
            <section className="interactive-page">
                <div className="profile-layout">
                    <img src={myPhoto} alt="Палій Максим" className="profile-photo" />
                    <div className="profile-text">
                        <h1>Хто я?</h1>
                        <p>Я, Максим Палій, учасник того ж набору, що і ти, подаюся в команду ІЯК, і в цьому листі поясню свою мотивацію.
                            Моя мотивація долучитися до ІЯК полягає в тому, що тут я зможу розвинути навички, які вже маю, та отримати нові. Я прагну познайомитися з новими людьми та відчути унікальну атмосферу ІЯК. У моїх планах бути активним у BEST і надалі.
                        </p>
                        <p>
                            Моя мотивація йти в ІЯК: Тому що в ньому я розвону скіли які уже маю, получу нові, познайомлюсь з новими людьми, Маю неймовірне бажання зловити вайб саме ІЯКу, в моїх планах бути активним і надалі в бесті
                        </p>
                        <p>{profileMotivation}</p>
                         </div>
                </div>
            </section>
        </div>
    );
}

export default ProfileSection;

