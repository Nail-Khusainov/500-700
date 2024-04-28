import './MainPage.scss';

import FaqSection from '../../components/FaqSection/FaqSection';
import News from '../../components/News/News';
import Slider from '../../components/Slider/Slider';
import SubscribeSection from '../../components/SubscribeSection/SubscribeSection';
import { slides } from "../../components/Slider/Data"


function MainPage() {
    return (
        <div className="main-page">
            <Slider images={slides} />
            <News />
            <FaqSection />
            <SubscribeSection />
        </div>
    );
}

export default MainPage;