export default function Button(props) {
	return ( 
		<div className="z-40 flex justify-between items-center h-20 sticky top-20 md:top-0">        
			<button className=
			{`textTransform: ${props.textTransform}
				hover:${props.hover}
				rounded: ${props.rounded}
				bg: ${props.type !== "text" ? props.bg : 'bg-transparent'}
				color: ${props.color}
				fontFamily: ${props.fontFamily}
				fontSize: ${props.fontSize}
				focus: outline-none ${props.className}`}				
				type={props.type}>
				{props.text}
			</button>
		</div>
	)
}
  