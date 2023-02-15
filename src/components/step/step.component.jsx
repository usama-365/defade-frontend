import './step.styles.scss';

export const Step = function ({number, title, description}) {
    return (
        <div className="step">
            <sub className="step__number">{number}</sub>
            <h2 className="step__title">{title}</h2>
            <p className="step__description">{description}</p>
        </div>
    );
}