

export default function Skateboard({name, size, style, design, price}) {

    return (
        <div className="skateboard">
            <h2>{name}</h2>
            <p>{size}</p>
            <p>{style}</p>
            <p>{design}</p>
            <p>{price}</p>
        </div>
    )
}