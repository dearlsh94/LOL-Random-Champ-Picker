import React, { Component } from 'react';

import IChampion from '../models/IChampion';
import ISPell from '../models/ISpell';

import {_getRandomChampion, _getRandomLine, _getRandomSpell, _getRandomRune, _getRandomBuild} from '../util/lolUtil';

interface IProps{

}

interface IState{
    pickedChampion: IChampion | null,
    pickedLine: String | null,
    pickedSpell: String | null,
    pickedRune: String | null,
    pickedBuild: String | null,
    championList: Array<IChampion> | null
}

class PickChamp extends Component <IProps, IState>{

    constructor(props: IProps) {
        super(props);

        this.state = {
            pickedChampion: null,
            pickedLine: null,
            pickedSpell: null,
            pickedRune: null,
            pickedBuild: null,
            championList: null
        }
    }

    pickLine = () => {
        console.log('run pickLine');
        _getRandomLine()
            .then((res: String) => {
                this.setState({
                    pickedLine: res
                })
            })

        console.log('end pickLine');
    }

    pickSpell = () => {
        console.log('run pickSpell');
        _getRandomSpell()
            .then((res: ISPell) => {
                this.setState({
                    pickedSpell: res.name
                })
            })

        console.log('end pickSpell');
    }

    pickRune = () => {
        console.log('run pickRune');
        _getRandomRune()
            .then((res: String) => {
                this.setState({
                    pickedRune: res
                })
            })

        console.log('end pickRune');
    }

    pickBuild = () => {
        console.log('run pickBuild');
        _getRandomBuild()
            .then((res: String) => {
                this.setState({
                    pickedBuild: res
                })
            })

        console.log('end pickBuild');
    }

    pickChamp = () => {
        console.log('run pickChamp');

        _getRandomChampion()
            .then((res: IChampion) => {
                this.setState({
                    pickedChampion: res
                })
            })
            .then(() => {
                this.pickLine();
            })
            .then(() => {
                this.pickSpell();
            })
            .then(() => {
                this.pickRune();
            })
            .then(() => {
                this.pickBuild();
            })
            .catch((err: any) => {
                console.log(err);
            });

        console.log('end pickChamp');
    }

    render(){
        const { pickedChampion, pickedLine, pickedSpell, pickedRune, pickedBuild } = this.state;
        return(
            <div>
                <div>What's your Champ?</div>
                <button onClick={this.pickChamp}>Pick</button>
                {(pickedChampion && pickedLine && pickedSpell && pickedRune) &&
                    <div>
                        <li>your champion is {pickedChampion.name}</li>
                        <li>your Line is {pickedLine}</li>
                        <li>your Spell is {pickedSpell}</li>
                        <li>your Rune is {pickedRune}</li>
                        <li>your Build is {pickedBuild}</li>
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