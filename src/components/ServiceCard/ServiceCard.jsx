import './ServiceCard.css';

export default function ServiceCard({ icon, title, description }) {
    return (
        <div className="service-card">
            <div className="service-card__illustration">
                <div className="service-card__icon-wrapper">
                    <i className={`${icon} service-card__icon`}></i>
                </div>
            </div>
            <h4 className="service-card__title">{title}</h4>
            <p className="service-card__desc">{description}</p>
            <div className="service-card__arrow">
                <i className="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    );
}
