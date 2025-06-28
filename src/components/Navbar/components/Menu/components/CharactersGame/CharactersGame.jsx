import { useTranslation } from "react-i18next";
import gameIcon from "@/assets/icons/game.png";
import { useState } from "react";

const CharactersGame = ({ unlockedCharacters, characters }) => {
    const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className="game-container" onClick={() => setModalOpen(!modalOpen)}>
                <button className="nes-btn is-error icon-button">
                    <img src={gameIcon} width="20px" alt="game start icon" />
                </button>
                <span>
                    {t("navbar.playGame")}
                </span>
            </div>

            {modalOpen && (
                <section className="modal-characters">
                    <dialog className="nes-container is-rounded modal-characters-container" open>
                        <form method="dialog">
                            <div className="modal-characters-title">
                                {unlockedCharacters.length === 12 ? (
                                    <p>{t("navbar.youWin")}</p>
                                ) : (
                                    <p>{t("navbar.findCharacters")}</p>
                                )}
                            </div>

                            <hr />

                            <div className="menu-characters">
                                {characters.map((char, index) => (
                                    <div key={index} style={{
                                        filter: unlockedCharacters.some((unlockedChar) => unlockedChar.hidingIn === char.hidingIn)
                                            ? 'contrast(100%)'
                                            : 'contrast(0%) brightness(0%)',
                                        textAlign: "center"
                                    }}>
                                        <img
                                            className="character-image"
                                            src={char.img}
                                            alt={`${char.name} character image`}
                                            style={{ width: "50px", height: "50px", objectFit: "cover" }}
                                        />
                                    </div>
                                ))}
                            </div>

                            <menu>
                                <button type="button" className="nes-btn is-error" onClick={() => setModalOpen(false)}>
                                    {t("navbar.closeModal")}
                                </button>
                            </menu>
                        </form>
                    </dialog>
                </section>
            )}
        </>
    );
};

export default CharactersGame;