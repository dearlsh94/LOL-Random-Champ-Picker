import React from 'react';

import IChampion from '../../models/IChampion';

interface IProps{
    champion: IChampion,
}
function champion(props: IProps) {
    return(
        <div> 
            <div>id : {props.champion.id}</div>
            <div>Name : {props.champion.name}</div>
            <div>
                {
                props.champion.tags.map((data: String, index: number) => {
                    <li key={index}>
                        <div>{data}</div>
                    </li>
                })
                }
            </div>
        </div>
    );
}

export default champion;