import React from "react"
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { useState, useCallback } from 'react'
import { withRouter } from "next/router"

import RatingStar from './product/rating-star'

const Tabs = (props) => {
  const [isTabReviews, setActiveTabReviews] = useState(true)
  const [isTabSpecification, setActiveTabSpecification] = useState(false)
  const [isTabDescription, setActiveTabDescription] = useState(false)

  const toggleActiveTabReviews = () => {
    setActiveTabReviews(!isTabReviews)
    setActiveTabSpecification(false)
    setActiveTabDescription(false)
  }
  const toggleActiveTabSpecification = () => {
    setActiveTabSpecification(!isTabSpecification)
    setActiveTabReviews(false)
    setActiveTabDescription(false)
  }

  const toggleActiveTabDescription = () => {
    setActiveTabDescription(!isTabDescription)
    setActiveTabSpecification(false)
    setActiveTabReviews(false)    
  }

  const { reviews } = props
  const numReviews = reviews.length
  const [ loadNumMore, setLoadNumMore] = useState(3);

  const loadMoreNumber = useCallback(() => {
    setLoadNumMore(prevRange => prevRange + 3);
	},[])
  
  console.log('props product', reviews)
  return (
    <div className="w-full mb-4">
      <div className="border-b flex pl-6">
        <div onClick={toggleActiveTabReviews} className={`${isTabReviews ? 'border-b border-blueless': null} cursor-pointer py-6 mx-6`}>
          <span className={`${isTabReviews ? 'text-blueless': null} font-montserrat uppercase text-xs active-tab font-semibold`}>Review</span>
        </div>
        <div onClick={toggleActiveTabSpecification} className={`${isTabSpecification ? 'border-b border-blueless': null} cursor-pointer py-6 mx-6`}>          
          <span className={`${isTabSpecification ? 'text-blueless': null} font-montserrat uppercase text-xs active-tab font-semibold`}>Specification</span>
        </div>
        <div onClick={toggleActiveTabDescription} className={`${isTabDescription ? 'border-b border-blueless': null} cursor-pointer py-6 mx-6`}>          
          <span className={`${isTabDescription ? 'text-blueless': null} font-montserrat uppercase text-xs active-tab font-semibold`}>Description</span>
        </div>
      </div>
      <div>
        {isTabReviews &&
          <div className="pl-10 m-auto pt-p4">
            <div className="flex items-center mb-4">
              <h4 className="font-playfair text-base text-black-900">All Reviews</h4>
              <span className="font-playfair text-base ml-1 text-blueless">{`(${numReviews < 10 ? `0${numReviews}` : `${numReviews}`})`}</span>
            </div>
            <ul className="flex flex-col mb-8">
              {reviews.slice(0, loadNumMore).map((review, i) => (
                <li className="border-b py-6 flex" key={i}>
                  <div className="rounded-full overflow-hidden bg-gray-200 w-8 h-8">
                    <Image
                      alt={review.fields[0].image.alt}
                      src={review.fields[0].image.url}
                      width={50}
                      height={50}
                      objectFit="contain"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="flex pl-p4 items-center w-full">
                      <span className="font-montserrat text-blackless font-semibold text-xs">{review.fields[0].author}</span>                  
                      <div className="flex items-center justify-between divide-x ml-4">                     
                        <RatingStar numOfStars={review.primary.rating} width='w-3' height='h-2'/>
                        <span className="font-montserrat text-xss text-gray-600 font-semibold pl-2 ml-2">Write your review</span>
                      </div>
                    </div>
                    <div className="flex flex-col pl-p4 my-4 w-full">
                      {review.primary.contents.map((comment, i) => (
                        <p className="font-montserrat text-gray-400 font-semibold text-xss" key={i}>{comment.text}</p>
                      ))}
                    </div>                    
                  </div>
                </li>
              ))}
            </ul>
            {numReviews > 2 &&
              <div className="flex m-auto  w-28 mb-8">
                <FontAwesomeIcon icon={faSyncAlt} size="sm" color='gray' className="w-4 h-4"/>	
                <button className="focus:outline-nReviews w-full uppercase text-xs font-montserrat font-semibold" onClick={loadMoreNumber}>Load More</button>
              </div>
            }
          </div>
        }
        {isTabSpecification &&
          <div>
            This is tab Specification content
          </div>
        }
        {isTabDescription &&
          <div>
            This is tab Description content
          </div>
        }
      </div>
    </div>
  )
}

export default withRouter(Tabs)