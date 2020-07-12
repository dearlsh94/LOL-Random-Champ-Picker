import React, {Component} from 'react';
import axios from 'axios';

interface IProps {

}

interface IState {
}

class Test extends Component <IProps, IState>{

    constructor(props: IProps) {
        super(props);
    }

    onTest = () => {
        axios.get("./data.json")
            .then((res) => {
                console.log(res);
            });
    }

    render(){

        return(
            <div>
                <div>
                    <li onClick={this.onTest}>Test</li>
                </div>
            </div>
        );
    }
}

export default Test;