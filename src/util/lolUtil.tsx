import axios from 'axios';

import { GET_LOL_CHAMPIONS, GET_LOL_LINES, GET_LOL_SPELLS, GET_LOL_RUNES, GET_LOL_BUILD } from '../conf/lolConfig';
import IChampion from '../models/IChampion';
import ISpell from '../models/ISpell';

export function _getChampions() {
    return new Promise((resolve, reject) => {
        axios.get(GET_LOL_CHAMPIONS)
            .then((res) => {
                const lists = Object.entries(res.data.data);
                const champions: Array<IChampion> = [];

                lists.map((champ: any, index: number) => {
                    champions.push({
                        key: index,
                        id: champ[1].id,
                        name: champ[1].name,
                        tags: champ[1].tags
                    })
                })

                resolve(champions);
            })
            .catch((err) => {
                
                reject(err);
            });
    });
}

export function _getRandomChampion() {
    return new Promise<IChampion>((resolve, reject) => {
        axios.get(GET_LOL_CHAMPIONS)
            .then((res) => {
                const lists = Object.entries(res.data.data);
                const champions: Array<IChampion> = [];

                lists.map((champ: any, index: number) => {
                    champions.push({
                        key: index,
                        id: champ[1].id,
                        name: champ[1].name,
                        tags: champ[1].tags
                    })
                })

                const min: number = 0;
                const max: number = champions.length;
                const rand: number = min + Math.random() * (max - min);
        
                const pickNum: number = parseInt(rand.toString(), 10);
        
                const pickChampion: IChampion = champions.filter((champion: IChampion) => 
                    champion.key === pickNum
                )[0];

                resolve(pickChampion);
            })
            .catch((err) => {
                
                reject(err);
            });
    });
}

export function _getRandomLine() {
    return new Promise<String>((resolve, reject) => {
        const min: number = 0;
        const max: number = GET_LOL_LINES.length;
        const rand: number = min + Math.random() * (max - min);
        
        const pickNum: number = parseInt(rand.toString(), 10);

        const pickLine: String = GET_LOL_LINES[pickNum];

        resolve(pickLine);
    });
}

export function _getRandomSpell() {
    return new Promise<ISpell>((resolve, reject) => {
        axios.get(GET_LOL_SPELLS)
            .then((res) => {
                // 정화, 탈진, 유체화, 회복, 강타, 텔포, 점화, 보호막 만 포함
                const lists = Object.entries(res.data.data).filter((spell: any, index: number) => {
                    if( spell[1].id ==="SummonerBoost" ||
                        spell[1].id ==="SummonerExhaust" ||
                        spell[1].id ==="SummonerHaste" ||
                        spell[1].id ==="SummonerHeal" ||
                        spell[1].id ==="SummonerSmite" ||
                        spell[1].id ==="SummonerTeleport" ||
                        spell[1].id ==="SummonerDot" ||
                        spell[1].id ==="SummonerBarrier")
                    {
                        return spell;
                    }
                });
                const spells: Array<ISpell> = [];
                
                lists.map((spell: any, index: number) => {                    
                    spells.push({
                        key: index,
                        id: spell[1].id,
                        name: spell[1].name
                    });
                })

                const min: number = 0;
                const max: number = spells.length;
                const rand: number = min + Math.random() * (max - min);
        
                const pickNum: number = parseInt(rand.toString(), 10);
        
                const pickSpell: ISpell = spells.filter((spell: ISpell) => 
                    spell.key === pickNum
                )[0];

                resolve(pickSpell);
            })
            .catch((err) => {
                
                reject(err);
            });
    });
}

export function _getRandomRune() {
    return new Promise<String>((resolve, reject) => {
        const min: number = 0;
        const max: number = GET_LOL_RUNES.length;
        const rand: number = min + Math.random() * (max - min);
        
        const pickNum: number = parseInt(rand.toString(), 10);

        const pickRune: String = GET_LOL_RUNES[pickNum];

        resolve(pickRune);
    });
}

export function _getRandomBuild() {
    return new Promise<String>((resolve, reject) => {
        const min: number = 0;
        const max: number = GET_LOL_BUILD.length;
        const rand: number = min + Math.random() * (max - min);
        
        const pickNum: number = parseInt(rand.toString(), 10);

        const pickBuild: String = GET_LOL_BUILD[pickNum];

        resolve(pickBuild);
    });
}