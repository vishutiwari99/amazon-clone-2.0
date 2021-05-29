import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import { useState } from 'react'
import Currency from 'react-currency-formatter'
const MAX_RATING = 5;
const MIN_RATING = 1;
const Product = ({ id, title, price, description, category, image }) => {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    const [hasPrime] = useState(Math.random() < 0.5)
    return (
        <div>
            <div>
                <p>{category}</p>


                <Image src={image} height={200} width={200} objectFit="contain" />
                <h4>{title}</h4>
                <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon className="h-5" />
                    ))}
                </div>
                {hasPrime && <p>Has prime delivery</p>}
            </div>
            <p>{description}</p>
            <div>
                <Currency quantity={price} currency='INR' />
            </div>
        </div>
    )
}

export default Product
