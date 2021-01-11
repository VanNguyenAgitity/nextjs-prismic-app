import Link from "next/link"
import { withRouter } from "next/router";

import COLORS from '../themes/colors'

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
  <div className="flex">
      { props.navList.map(nav => (
        <Link href={nav.path} key={nav.label}>
          {/* <div>{nav.icon}</div> */}
          <a className={`text-white uppercase font-montserrat font-semibold p-2 m-2 text-xs
          ${props.router.pathname === nav.path ? "active" : ""}`}>{nav.label}</a>
        </Link>
      ))}
      <style jsx>{`        
          .active {
            position: relative;
          } 
          .active:before, .active:after {
            content: "";
            position: absolute;
            right: -10px;
            bottom: 14px;
            border-top: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid white;
            border-left: 5px solid transparent;
          }          
          .active:after {
            border-top: 5px solid ${COLORS.blueLight};
            bottom: 16px;
          } 
        }
      `}</style>
  </div>
)

export default withRouter(Nav)