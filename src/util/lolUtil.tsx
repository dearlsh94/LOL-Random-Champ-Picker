import axios from 'axios';

import { GET_LOL_CHAMPIONS_URL } from '../conf/lolApiConf';
import IChampion from '../models/IChampion';

export function _getChampions() {
    axios.get(GET_LOL_CHAMPIONS_URL)
        .then((res) => {
            console.log(res);

            return res;
        })
        .catch((err) => {
            console.log(err);
        });
}