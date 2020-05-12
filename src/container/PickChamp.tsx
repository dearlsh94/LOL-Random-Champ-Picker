import React, { useState, useEffect } from 'react';

import IChampion from '../models/IChampion';

import {_getChampions} from '../util/lolUtil';

export default function PickChamp() {

    const [champList, setChampList] = useState(new Array<IChampion>());

    useEffect(() => {
        _getChampions();
    });

    return (
        <div>
            <div>Champ List</div>
        </div>
    );
}