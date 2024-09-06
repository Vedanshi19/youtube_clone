export const API_KEY = 'AIzaSyDlnCsecFe-xesB7-j4kw2aRpEH9hm5dck';

export const value_converter = (value) => {
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return  Math.floor(value/1000)+"K";
    }
    else {
        return value
    }
}