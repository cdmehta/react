import React from "react";

function Card(props)
{
  return (
    <>
      <div className='cards'>
        <div className='card'>
          <img src=""className='card__img' alt=""></img>
            <div className='card__info'>
                <span className='card__category'></span>
                  <h3 className='card__title'>{props.name}</h3>
                      <a href='index.js' target='_blank'>
                        <button>Watch Now</button>
                      </a>
            </div>
            </div>
      </div>
    </>
  )
}
export default Card;