import Link from 'next/link'
import Header from './components/Header'
import Main1 from './components/Main1'
import Main1Dop from './components/Main1Dop'
import Main2AboutUs from './components/Main2AboutUs'
import Main3OurService from './components/Main3OurService'
import Main4WhyChooseUs from './components/Main4WhyChooseUs'

import classes from './PageHome.module.css'


export default function Home() {
    return (
        <div className={classes.pageHomePosition}>
            <Main1/>
            <Main1Dop/>
            <Main2AboutUs/>
            <Main3OurService/>
            <Main4WhyChooseUs/>


            {/*<h1 style={{marginTop: "2000px"}}>penis</h1>*/}
        </div>
    )
}