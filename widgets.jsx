import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';
import Autocomplete from './frontend/autocomplete';

const names = ["danny","james","harry","vinny" ,"david","monkey","buddy","dickins","connor","brian","macker"];
                

const panes = [{title: "First", content: "first tab"},
               {title: "Second", content: "second tab"},
                {title: "third", content: "third tab"}];

function Root(){
    return (
    <div className="main-area">
        <Clock />
        <Weather />
        <div className='interactive'>
            <Tabs panes={panes} />
            <Autocomplete names={names}/>
        </div>
    </div>
    );
}

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    ReactDOM.render(<Root/>, main);
});