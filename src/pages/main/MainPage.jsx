// import AllCitiesWeather from './ChoiceWeather';
import ToTheTopButton from '../../components/layout/ToTheTopButton';
// import AllCitiesWeather from './AllCitiesWeather';
import MyLocationWeather from './MyLocationWeather';

import PreviewMbti from './PreviewMbti';

import RecommendationPreview from './RecommendationPreview';
import TodaysComent from './TodaysComent';
import WeatherByTimeZone from './WeatherByTimeZone';
import WeatherDetail from './weatherDetail';
// import WeatherByTimeZone from './WeatherByTimeZone';

function MainWeather() {
  return (
    <div className="min-h-[1700px] font-sans overflow-hidden sm:px-60">
      <div className="w-full">
        <div>
          <div className="w-full min-h-[800px]">
            <TodaysComent />
            <MyLocationWeather />
            <WeatherByTimeZone />
            <ToTheTopButton />
            <WeatherDetail />
          </div>
          <RecommendationPreview />
          <PreviewMbti />
        </div>
      </div>
    </div>
  );
}

export default MainWeather;
