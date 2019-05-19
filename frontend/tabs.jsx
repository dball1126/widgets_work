import React from 'react';


class Headers extends React.Component {
    render(){
        const selected = this.props.selectedTab;
        const headers = this.props.panes.map((pane, index) => {
            const title = pane.title;
            const klass = index === selected ? 'active' : '';
        
        return (
            <li className={klass}
                key={index}
                onClick={() => this.props.chosenTab(index)}>
                {title}{' '}
            </li>
        );
        });
        return (
        <ul className='tab-header'>
            {headers}
        </ul>
        );
    }
}

export default class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            position: 0
        };
        this.selectedTab = this.selectedTab.bind(this);
    }

    selectedTab(num){
        this.setState({position: num});
    }

    render(){
        let pane = this.props.panes[this.state.position];

        return(
        <div>
            <h1>Tabs</h1>
                <div className='tabs'>
                    <Headers
                        selectedTab={this.state.position}
                        chosenTab={this.selectedTab}
                        panes={this.props.panes}>
                    </Headers>
                

                <div className="tab-content">
                    <article>{pane.content}</article>
                </div>
            </div>
        </div>
        );
    }
}