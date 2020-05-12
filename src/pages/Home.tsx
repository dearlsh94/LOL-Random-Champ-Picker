import React from 'react';

import {_getChampions} from '../util/lolUtil';
import PickChamp from '../container/PickChamp';

function Home() {
    return(
        <div>
            <div>
                Main Home
            </div>
            <div>
                Pick Champ
                <PickChamp/>
            </div>
        </div>
    )
}

export default Home;