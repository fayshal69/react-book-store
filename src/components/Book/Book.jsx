import './Book.css'

const Book = ({book, handleAddToCart}) => { 
    const {name, image, originalPrice, discountPrice, rating} = book;

    

    return (
        <div className="book">
            <div>
                <img src={image} alt="" />
            </div>
            <h3>Name : {name}</h3>
            <p><del>{originalPrice}</del>tk - {discountPrice}tk</p>
            <p>Rating : {rating}</p>
            <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
        </div>
    );
};

export default Book;