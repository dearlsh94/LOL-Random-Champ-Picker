import React, { Component } from 'react';

import IChampion from '../models/IChampion';

import {_getRandomChampion, _getRandomLine} from '../util/lolUtil';

interface IProps{

}

interface IState{
    pickedChampion: IChampion | null,
    pickedLine: String | null,
    championList: Array<IChampion> | null
}

class PickChamp extends Component <IProps, IState>{

    constructor(props: IProps) {
        super(props);

        this.state = {
            pickedChampion: null,
            pickedLine: null,
            championList: null
        }
    }

    pickLine = () => {
        console.log('run pickLine');
        _getRandomLine()
            .then((res: any) => {
                this.setState({
                    pickedLine: res
                })
            })

        console.log('end pickLine');
    }

    pickChamp = () => {
        console.log('run pickChamp');

        _getRandomChampion()
            .then((res: any) => {
                this.setState({
                    pickedChampion: res
                })
            })
            .then(() => {
                this.pickLine();
            })
            .catch((err: any) => {
                console.log(err);
            });

        console.log('end pickChamp');
    }

    render(){
        const { pickedChampion, pickedLine } = this.state;
        return(
            <div>
                <div>What's your Champ?</div>
                <button onClick={this.pickChamp}>Pick</button>
                {(pickedChampion && pickedLine) &&
                    <div>
                        <li>your champion is {pickedChampion.name}</li>
                        <li>your Line is {pickedLine}</li>
                    </div>}
            </div>
        );
    }
}

export default PickChamp;

/*
export default function PickChamp() {

    const [isReady, setIsReady] = useState(false);
    const [championList, setChampionList] = useState(Array<IChampion>());

    useEffect(() => {
        _getChampions()
            .then((res: any) => {
                setChampionList(res);
            })
            .then(() => {
                setIsReady(true);
            })
            .catch((err: any) => {
                console.log(err);
            })
    });

    function pickChamp() {
        console.log('run pickChamp');

        const min: number = 0;
        const max: number = championList.length;
        const rand: number = min + Math.random() * (max - min);

        const pickNum: number = parseInt(rand.toString(), 10);

        console.log(pickNum);

        const pickChampion = championList.filter((champion: IChampion) => 
            champion.key === pickNum
        );

        console.log(pickChampion);
        console.log('end pickChamp');
        
        setPickedChampion(pickChampion);
    }

    return (
        <div>
            <div>What's your Champ?</div>
            {isReady && 
                <button onClick={pickChamp}>Pick</button>}
            {isPicked &&
                <div>
                    your champion is {}    
                </div>}
        </div>
    );
}
*/