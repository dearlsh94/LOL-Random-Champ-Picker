import React, { Component } from 'react';

import IChampion from '../models/IChampion';

import {_getChampions} from '../util/lolUtil';

interface IProps{

}

interface IState{
    isReady: boolean,
    pickedChampion: IChampion | null,
    championList: Array<IChampion> | null
}

class PickChamp extends Component <IProps, IState>{

    constructor(props: IProps) {
        super(props);

        this.state = {
            isReady: false,
            pickedChampion: null,
            championList: null
        }
    }

    componentDidMount() {
        _getChampions()
            .then((res: any) => {
                this.setState({
                    championList: res
                })
            })
            .then(() => {
                this.setState({
                    isReady: true
                })
            })
            .catch((err: any) => {
                console.log(err);
            })
    }

    pickChamp = () => {
        console.log('run pickChamp');

        if ( this.state.championList !== null ) {
            const min: number = 0;
            const max: number = this.state.championList.length;
            const rand: number = min + Math.random() * (max - min);
    
            const pickNum: number = parseInt(rand.toString(), 10);
    
            console.log(pickNum);
    
            const pickChampion: IChampion = this.state.championList.filter((champion: IChampion) => 
                champion.key === pickNum
            )[0];
    
            console.log(pickChampion);

            this.setState({
                pickedChampion: pickChampion
            })
        }

        console.log('end pickChamp');
    }

    render(){
        const { isReady, pickedChampion } = this.state;
        return(
            <div>
                <div>What's your Champ?</div>
                {isReady && 
                    <button onClick={this.pickChamp}>Pick</button>}
                {pickedChampion &&
                    <div>
                        your champion is {pickedChampion.name}  
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