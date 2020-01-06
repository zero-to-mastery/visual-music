export function getSecondsFromTimeFormated(time){
	if (!time || time.length === 0){
		return 0;
	}
	const timeDimension = time.split(':');
	// 45 - ss
	if(timeDimension.length === 1){
		return parseInt(timeDimension[0],10);
	}
	// 02:45 - mm:ss
	if(timeDimension.length === 2){
		return parseInt(timeDimension[0],10)*60 + parseInt(timeDimension[1],10);
	}

	// case 01:45:00 - hour:mm:ss
	return parseInt(timeDimension[0],10)*60*60 + parseInt(timeDimension[1],10)*60 + parseInt(timeDimension[2],10); 
}

export const getTimeFormated = dur => {
    return (
        Math.floor(dur / 60) + ':' + ('0' + Math.floor(dur % 60)).slice(-2)
    );
};