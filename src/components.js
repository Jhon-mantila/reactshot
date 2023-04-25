/*import React, { useState } from 'react';
//Componentes con estados
const Button = () => {
    const [name, setName] = useState('Hola mundo');
    return(
        <div>
            <h1>{name}</h1>
        </div>
    );
}*/

//Tipos de componentes en React: stateful vs. stateless

//const Button = ({ text }) => <ButtonRed text={text}/>

/*import React from 'react';
const Button = () =>(
    <div>
        <h1>Hola</h1>
    </div>
);*/

//una forma mas de stateful ya no es muy utilizada
/*import React, { Component } from 'react';
class App extends Component {

    constructor(){

    }

    render(){
        return(
            <div>
                <h1>Hello, world</h1>
            </div>
        );
    }
}*/

//componentes de orden superior en versiones anteriores

import React, { Component } from 'react';

function ComponentWrapper(WrapperComponet){

    class Wrapper extends Component{
        render(){
            return <WrapperComponet{...this.props}/>
        }
    }

    return Wrapper;
}