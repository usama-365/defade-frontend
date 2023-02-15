import './profile-card.styles.scss';

export const ProfileCard = function ({name, description, image, regNo}) {
    return (
        <figure className="profile-card">
            <img src={image} alt={`Image of group member ${name}`} className="profile-card__img"/>
            <figcaption className="profile-card__text">
                <p className="profile-card__reg-no">{regNo}</p>
                <h3 className="profile-card__name">{name}</h3>
                <p className="profile-card__description">{description}</p>
            </figcaption>
        </figure>
    );
}