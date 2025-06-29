import { useTranslation } from 'react-i18next';
import flagIcon from "@/assets/icons/flag.png";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const toggle = () => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
    const isSpanish = i18n.language === 'es';

    return (
        <div className="language-container">
            <button className="nes-btn is-warning icon-button" onClick={toggle}>
                <img src={flagIcon} width="20px" alt="language icon" />
            </button>
            <div className="radio-container">
                <label>
                    <input type="radio" className="nes-radio" name='language' checked={isSpanish} onChange={toggle} />
                    <span>ES</span>
                </label>
                <label>
                    <input type="radio" className="nes-radio" name='language' checked={!isSpanish} onChange={toggle} />
                    <span>EN</span>
                </label>
            </div>
        </div>
    );
};

export default LanguageSwitcher;