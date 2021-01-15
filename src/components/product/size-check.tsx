import { useState, useCallback } from 'react'

export default function SizeCheck(props) {
  const [isActiveSizeS, setActiveSizeS] = useState(false)
  const [isActiveSizeM, setActiveSizeM] = useState(false)
  const [isActiveSizeL, setActiveSizeL] = useState(false)
  const [isActiveSizeXL, setActiveSizeXL] = useState(false)

  const toggleClassSizeS = () => {
    setActiveSizeS(!isActiveSizeS)
    setActiveSizeM(false)
    setActiveSizeL(false)
    setActiveSizeXL(false)
  }
  const toggleClassSizeM = () => {
    setActiveSizeM(!isActiveSizeM)
    setActiveSizeS(false)
    setActiveSizeL(false)
    setActiveSizeXL(false)
  }
  const toggleClassSizeL = () => {
    setActiveSizeL(!isActiveSizeL)
    setActiveSizeS(false)
    setActiveSizeM(false)
    setActiveSizeXL(false)
  }
  const toggleClassSizeXL = () => {
    setActiveSizeXL(!isActiveSizeXL)
    setActiveSizeS(false)
    setActiveSizeM(false)
    setActiveSizeL(false)
  }
  
  return ( 
    <div className="block">
      <span className="text-gray-700">Size:</span>
      <div className="mt-4 flex w-24 justify-between">
        <label className="inline-flex items-center">
          <span className={`${isActiveSizeS ? 'text-blueless': null} cursor-pointer text-xs active-text`} onClick={toggleClassSizeS} >S</span>
        </label>
        <label className="inline-flex items-center">
          <span className={`${isActiveSizeM ? 'text-blueless': null} cursor-pointer text-xs`} onClick={toggleClassSizeM} >M</span>
        </label>
        <label className="inline-flex items-center">
          <span className={`${isActiveSizeL ? 'text-blueless': null} cursor-pointer text-xs`} onClick={toggleClassSizeL} >L</span>
        </label>
        <label className="inline-flex items-center">
          <span className={`${isActiveSizeXL ? 'text-blueless': null} cursor-pointer text-xs`} onClick={toggleClassSizeXL} >XL</span>
        </label>
      </div>
    </div>
  )
}