import seriesData from "../api/seriesData.json";
import SeriesCards from "./SeriesCards";

const NetflixSeries = () => {
  return (
    <>
    <h1 className="text-4xl font-bold text-light-600">
      Netflix Series
    </h1>
      <ul className="series-list">
        {seriesData.map((curElem) => <SeriesCards key={curElem.id} data ={curElem} />)}
      </ul>
    </>
  );
};
export default NetflixSeries;