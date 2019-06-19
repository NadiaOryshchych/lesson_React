import React, {Component} from 'react';

import styled from 'styled-components';

const RandomCharBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;
const RandomCharName = styled.div `
    margin-bottom: 20px;
    text-align: center;
`;
const TermView = styled.span `
    font-weight: bold;
`;

export default class RandomChar extends Component {

    render() {

        return (
            <RandomCharBlock>
                <RandomCharName>Random Character: John</RandomCharName>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <TermView className="term">Gender </TermView>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <TermView className="term">Born </TermView>
                        <span>11.03.1039</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <TermView className="term">Died </TermView>
                        <span>13.09.1089</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <TermView className="term">Culture </TermView>
                        <span>Anarchy</span>
                    </li>
                </ul>
            </RandomCharBlock>
        );
    }
}
