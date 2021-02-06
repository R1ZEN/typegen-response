// @request http://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0
// @lock

interface IAstroResponse {
    product: string;
    init: string;
    dataseries: IDataseriesItem[];
}
interface IDataseriesItem {
    timepoint: number;
    cloudcover: number;
    seeing: number;
    transparency: number;
    lifted_index: number;
    rh2m: number;
    wind10m: IWind10m;
    temp2m: number;
    prec_type: string;
}
interface IWind10m {
    direction: string;
    speed: number;
}
