import React, {Component} from 'react';

import {_getChampions} from '../util/lolUtil';
import PickChamp from '../container/PickChamp';
import PickEveryChamp from '../container/PickEveryChamp';

interface IProps {

}

interface IState {
    menu: "one" | "every"
}

class Home extends Component <IProps, IState>{

    constructor(props: IProps) {
        super(props);

        this.state = {
            menu: "one"
        }
    }

    onChangeOneMenu = () => {
        this.setState({
            menu: "one",
        })
    }

    onChangeEveryMenu = () => {
        this.setState({
            menu: "every",
        })
    }

    render(){

        const { menu } = this.state;

        return(
            <div>
                <div>
                    Main Home
                </div>
                <div>
                    <button onClick={this.onChangeOneMenu}>Pick Champ </button>
                    <button onClick={this.onChangeEveryMenu}>Pick Every Champ </button>
                </div>

                {(() => {
                    switch (menu) {
                        case "one":   
                            return (
                                <div>
                                    Pick Champ
                                    <PickChamp/>
                                </div>
                            );
                        case "every": 
                            return (
                                <div>
                                    Pick Every Champ
                                    <PickEveryChamp/>
                                </div>
                            );
                        default:
                            return (
                                <div>
                                    Pick Champ
                                    <PickChamp/>
                                </div>
                            );
                    }
                })()}
            </div>
        );
    }
}

export default Home;