import './Aside.css'

const Aside = ({cart}) => {
    const {name, discountPrice} = cart;
    return (
        <div className="aside">
            <h4>{name}</h4>
            <h4>{discountPrice}</h4>
        </div>
    );
};

export default Aside;