const lang: string = 'ko_KR';

/*
* type
* format
* version
* data[]
*   - {champions}
*       - id, name, tags
*/
export const GET_LOL_CHAMPIONS_URL: string = 'http://ddragon.leagueoflegends.com/cdn/10.9.1/data/' + lang + '/champion.json';