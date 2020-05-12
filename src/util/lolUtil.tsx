import axios from 'axios';

import { GET_LOL_CHAMPIONS_URL } from '../conf/lolApiConf';
import IChampion from '../models/IChampion';

export function _getChampions() {
    return new Promise((resolve, reject) => {
        axios.get(GET_LOL_CHAMPIONS_URL)
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