import {useState,useEffect} from "react"

export default function RangePrice({onChangeRangeMin, onChangeRangeMax}) {
  const [valueMin, onChangeMin]=useState(10);

  const [valueMax, onChangeMax]=useState(501);


  useEffect(()=>{
    const eleMin = document.querySelector<HTMLElement>('.buble-min')
    if (eleMin) {
      eleMin.style.left = `${Number(valueMin /10) < 7 ? Number(valueMin /10) - 10 : Number(valueMin /10) - 20}%`
    }
    
    const eleMax = document.querySelector<HTMLElement>('.buble-max')
    if (eleMax) {      
      eleMax.style.left = `${Number(valueMax /100) < 7 ? Number(valueMax /100) + 40 : Number(valueMax /100 + 60)}%`
    }
  })

  const handleOnChangeMax = (max) => {
    onChangeMax(max)
    // this next line will update the state in the parent component
    onChangeRangeMax(max)
  }

  const handleOnChangeMin = (min) => {
    onChangeMin(min)
    // this next line will update the state in the parent component
    onChangeRangeMin(min)
  }

  return (
    <div className="flex items-center w-10/12 mx-auto">
      <div className="slider-parent">
        <div className="buble-min mr-4 rounded-2xl border px-4">
          ${valueMin}
        </div>
        <div className="buble-max ml-4 rounded-2xl border px-4 ">
          ${valueMax}
        </div>
        <input className="w-1/2 mt-12" type="range" min="10" max="500" value={valueMin}
          onChange={({ target: { value: radiusMin } }) => {
          handleOnChangeMin(Number(radiusMin))}}
        />      
        <input className="w-1/2 mt-12" type="range" min="501" max="1000" value={valueMax}
          onChange={({ target: { value: radiusMax } }) => {
          handleOnChangeMax(Number(radiusMax))}}
        />
        <div className="flex justify-between mt-4">
          <span className="mr-4">
            $10
          </span>
          <span className="ml-4">
            $1000
          </span>
        </div>
      </div>
    </div>
  )
}
