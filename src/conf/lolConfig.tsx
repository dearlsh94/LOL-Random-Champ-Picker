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

// http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg
export const GET_LOL_CHAMPION_IMAGE: string = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/'; // + {ChampionId}_0.jpg

// http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/champion/Aatrox.png
export const GET_LOL_CHAMPION_SQUARE_IMAGE: string = 'https://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/champion/'; // + {ChampionId}.png';

export const GET_LOL_LINES = new Array<String>(
    "TOP", 
    "JUNGLE", 
    "MID", 
    "BOT", 
    "SUPPORTER"
);

export const GET_LOL_RUNES = new Array<String>(
    "치명적속도",
    "집중공격",
    "기민한발놀림",
    "정복자",
    "칼날비",
    "감전",
    "포식자",
    "어둠의수확",
    "콩콩이 소환",
    "신비로운 유성",
    "난입",
    "착취의 손아귀",
    "여진",
    "수호자",
    "빙결 강화",
    "봉인 풀린 주문서",
    "프로토타입 : 만능의 돌"
);

export const GET_LOL_BUILD = new Array<String>(
    "극ap",
    "극ad",
    "극방관",
    "극탱",
    "서폿",
    "하이브리드",
    "극마관",
    "올공속",
    "치명100프로",
    "올체력",
    "올마나",
    "극방어력",
    "극마방",
    "극흡혈",
    "5엑티브아이템"
);

export const GET_LOL_SPELLS: string = 'https://ddragon.leagueoflegends.com/cdn/10.10.3208608/data/' + lang + '/summoner.json';

// http://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/spell/SummonerFlash.png
export const GET_LOL_SPELL_IMAGE: string = 'https://ddragon.leagueoflegends.com/cdn/10.10.3208608/img/spell/'; // + {SpellId}.png';