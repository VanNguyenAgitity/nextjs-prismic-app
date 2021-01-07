import Link from "next/link"
import Slider from "react-slick"

import IconVallitex from '../assets/icons/svg/logos/villatex.svg'
import IconStudio from '../assets/icons/svg/logos/studio.svg'
import IconFranred from '../assets/icons/svg/logos/franred.svg'
import IconCropit from '../assets/icons/svg/logos/cropit.svg'

const settings = {
	dots: true,
		infinite: true,
		speed: 500,
		slidesToShow:4,
		slidesToScroll: 1
	}

export const LogoTypeList = [
	{
		name: "studio",
		logo: IconStudio
	},
	{
		name: "villatex",
		logo: IconVallitex
	},
	{
		name: "franred",
		logo: IconFranred
	},
	{
		name: "cropit",
		logo: IconCropit
	},
	{
		name: "studio",
		logo: IconStudio
	},
	{
		name: "villatex",
		logo: IconVallitex
	},
	{
		name: "franred",
		logo: IconFranred
	},
	{
		name: "cropit",
		logo: IconCropit
	}
]

const Logos = () => (
	<div className="w-11/12 m-auto py-2 logos">		     
		<Slider {... settings} data={LogoTypeList}>
			{ LogoTypeList.map(item => (
				<Link href="#" key="item.name">
					<a className="flex justify-center">
						<item.logo/>
					</a>
				</Link>
			))}
		</Slider>
	</div>
)
export default Logos