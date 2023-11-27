import Main from "./MainInfo/Main"
import Services from "./Services/Services"
import Projects from './Projects/Projects'
import Partners from "./Partners/Partners"

import Lines from '../../Imgs/Group.png'
import './Body.scss'
import Prizes from "./Prizes/Prizes"
import WTSAboutUs from "./WTSAboutUs/WTSAboutUs"
import NeedHelp from "./NeedHelp/NeedHelp"

export default function Body() {
    return(
        <div className="Wbody">
            <Main />
            <Services />
            <div className="background-image">
                <img src={Lines} alt="" />
            </div>
            <Projects />
            <Partners />
            <Prizes />
            <WTSAboutUs />
            <NeedHelp />
        </div>
    )
}