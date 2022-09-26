import { iconURLFromCode } from "../services/weatherServices";

const Forecast = ({ weather, units, setUnits }) => {

    const handleUnitChange = (e) => {
        const selectedUnit = e.target.name
        if (units !== selectedUnit) setUnits(selectedUnit)
    }
    return (
        <div className="w-full space-y-12">
            <div className="flex justify-end w-full flex-grow space-x-2">
                <button onClick={handleUnitChange} name="metric" className="active bg-dark-gray text-white rounded-full px-2 py-1 text-lg font-medium transition hover:scale-110 ease-linear">°C</button>
                <button onClick={handleUnitChange} name="imperial" className="active bg-dark-gray text-white rounded-full px-2 py-1 text-lg font-medium transition hover:scale-110 ease-linear">°F</button>
            </div>
            <div className="flex justify-evenly flex-wrap gap-2">
                {weather.daily.map(day => {
                    return <DailyForecast daily={day} />
                })}
            </div>
        </div >
    );
}

export default Forecast;

const DailyForecast = ({ daily }) => {
    return (
        <div className="bg-light-blue p-4 space-y-2 rounded-md">
            <p className="text-white text-center text-sm">{daily.title}</p>
            <div className="">
                <img src={iconURLFromCode(daily.icon)} alt="shower" className="w-full" />
            </div>
            <div className="flex justify-between text-sm">
                <p className="text-white">{daily.temp_min.toFixed()}°</p>
                <p className="text-light-gray">{daily.temp_max.toFixed()}°</p>
            </div>
        </div>
    );
}

