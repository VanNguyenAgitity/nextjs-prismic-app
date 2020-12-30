import Link from "next/link"

// export default function Nav(props) {
//   return (
//     <div className="flex justify-center">
//       {props.navList.map(nav => (
//         <Link href={nav.path}>//           
//             {/* <div className="Icon">{props.icon}</div> */}
//             <a className="text-white uppercase font-montserrat p-2 m-2 text-xs">{nav.label}</a>//           
//         </Link>
//       ))}
//     </div>
//   )
// }

// import Link from 'next/link'

const Nav = (props) => (
  <div className="flex justify-center">
      { props.navList.map(nav => (
        <Link href={nav.path}>
          {/* <div>{nav.icon}</div> */}
          <a className="text-white uppercase font-montserrat p-2 m-2 text-xs">{nav.label}</a>
        </Link>
      ))}
  </div>
)

export default Nav