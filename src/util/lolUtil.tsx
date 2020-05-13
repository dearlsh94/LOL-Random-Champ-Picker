import axios from 'axios';

import { GET_LOL_CHAMPIONS, GET_LOL_LINES } from '../conf/lolConfig';
import IChampion from '../models/IChampion';

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
    return new Promise((resolve, reject) => {
        const min: number = 0;
        const max: number = GET_LOL_LINES.length;
        const rand: number = min + Math.random() * (max - min);
        
        const pickNum: number = parseInt(rand.toString(), 10);

        const pickLine: String = GET_LOL_LINES[pickNum];

        resolve(pickLine);
    });
}