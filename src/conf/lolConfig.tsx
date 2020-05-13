const lang: string = 'ko_KR';

/*
* type
* format
* version
* data[]
*   - {champions}
*       - id, name, tags
*/

// http 사용할 경우 mixed content (혼합 콘텐츠 방지) 에러 발생 > https로 사용.
export const GET_LOL_CHAMPIONS: string = 'https://ddragon.leagueoflegends.com/cdn/10.9.1/data/' + lang + '/champion.json';

export const GET_LOL_LINES = new Array<String>(
    "TOP", "JUNGLE", "MID", "BOT", "SUPPORTER"
);