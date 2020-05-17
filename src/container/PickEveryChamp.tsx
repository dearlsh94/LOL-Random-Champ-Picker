import React, { Component } from 'react';

import IChampion from '../models/IChampion';
import ISpell from '../models/ISpell';
import IPickChamp from '../models/IPickChamp';

import {_getAllLines, _getFiveRandomChampionKey, _getChampionByKeys,  _getRandomLine, _getRandomSpell, _getRandomRune, _getRandomBuild} from '../util/lolUtil';

interface IProps{

}

interface IState{
    Lines: Array<String>,
    pickChampionList: Array<IPickChamp>,
    pickedSpellList: Array<String>,
    pickedRuneList: Array<String>,
    pickedBuildList: Array<String>,
    lastPickValue: any,
}

class PickAllChamp extends Component <IProps, IState>{

    constructor(props: IProps) {
        super(props);

        this.state = {
            Lines: _getAllLines(),
            pickChampionList: new Array<IPickChamp>(),
            pickedSpellList: new Array<String>(),
            pickedRuneList: new Array<String>(),
            pickedBuildList: new Array<String>(),
            lastPickValue: null
        }
    }

    pickSpells = () => {
        for(let line of this.state.Lines) {
            _getRandomSpell()
                .then((res: ISpell) => {
                    this.state.pickedSpellList.push(res.name);
                    this.setState({
                        pickedSpellList: this.state.pickedSpellList,
                    });
                })
        }
    }

    pickRunes = () => {
        for(let line of this.state.Lines) {
            _getRandomRune()
                .then((res: String) => {
                    this.state.pickedRuneList.push(res);
                    this.setState({
                        pickedRuneList: this.state.pickedRuneList,
                    });
                })
        }
    }

    pickBuilds = () => {
        for(let line of this.state.Lines) {
            _getRandomBuild()
                .then((res: String) => {
                    this.state.pickedBuildList.push(res);
                    this.setState({
                        pickedBuildList: this.state.pickedBuildList,
                    });
                })
        }
    }

    getChampionInfo = (keys: Array<number>) => {
        console.log('run getInfos');

        _getChampionByKeys(keys)
            .then((res: any) => {
                for(let champ of res){
                    this.state.pickChampionList.push(champ);
                    
                };

                this.setState({
                    pickChampionList: this.state.pickChampionList
                });
            })

        console.log('end getInfos');
    }

    pickChamp = () => {
        console.log('run pickChamp');

        this.setState({
            pickChampionList: new Array<IPickChamp>(),
            pickedSpellList: new Array<String>(),
            pickedRuneList: new Array<String>(),
            pickedBuildList: new Array<String>()
        })

        _getFiveRandomChampionKey()
            .then((res: Array<number>) => {
                this.getChampionInfo(res);
            })
            .then(() => {
                this.pickSpells();
            })
            .then(() => {
                this.pickRunes();
            })
            .then(() => {
                this.pickBuilds();
            })
            
        console.log('end pickChamp');
    }

    render(){
        const { Lines, pickChampionList, pickedSpellList, pickedRuneList, pickedBuildList } = this.state;
        return(
            <div>
                <div>Whats your team Champions</div>
                <button onClick={this.pickChamp}>Pick</button>
                    {(pickChampionList.length > 0) &&
                     (pickedSpellList.length > 0) &&
                     (pickedRuneList.length > 0) &&
                     (pickedBuildList.length > 0) &&
                        Lines.map((line: String, index: number) => {
                        return (
                            <div key={index}>
                                {line} is
                                <li>{line} champion is <b>{pickChampionList[index].name}</b></li>
                                <li>{line} Spell is {pickedSpellList[index]}</li>
                                <li>{line} Rune is {pickedRuneList[index]}</li>
                                <li>{line} Build is {pickedBuildList[index]}</li>
                            </div>
                        );
                    })}
            </div>
        );
    }
}

export default PickAllChamp;