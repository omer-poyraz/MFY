import MFY from '../../components/mfy'
import HomeSlider from './slider';
import HomeReference from './reference';
import HomeSector from './sector';
import HomeRubber from './rubber';
import HomeWhyus from './why-us';
import HomeBlog from './blog';
import HomeFaq from './faq';
import HomeStill from './still';

const HomePage = () => {
    return (
        <MFY classname={"home"}>
            <HomeSlider />

            <HomeReference />

            <HomeSector />

            <HomeRubber />

            <HomeWhyus />

            <HomeBlog />

            <HomeFaq />

            <HomeStill />
        </MFY>
    )
}

export default HomePage
