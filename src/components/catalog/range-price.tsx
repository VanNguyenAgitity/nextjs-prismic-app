import {useState,useEffect} from "react"

export default function RangePrice() {
  const [valueMin,onChangeMin]=useState(1);

  const [valueMax,onChangeMax]=useState(501);


  useEffect(()=>{
    const eleMin = document.querySelector<HTMLElement>('.buble-min')
    if (eleMin) {
      eleMin.style.left = `${Number(valueMin /4) > 100 ? Number(valueMin /4) - 80 : Number(valueMin /4) - 20}px`
    }
    
    const eleMax = document.querySelector<HTMLElement>('.buble-max')
    console.log('Number(valueMax /4)', Number(valueMax /4))
    if (eleMax) {      
      eleMax.style.left = `${Number(valueMax /4) > 200 ? Number(valueMax /4) - 60 : Number(valueMax /4)}px`
    }
  })

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
          onChangeMin(Number(radiusMin))}}
        />      
        <input className="w-1/2 mt-12" type="range" min="501" max="1000" value={valueMax}
          onChange={({ target: { value: radiusMax } }) => {
          onChangeMax(Number(radiusMax))}}
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
