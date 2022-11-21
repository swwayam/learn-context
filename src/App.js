import React from "react";
import Provider from "./Provider";
import Context from "./Context";


const Agents  = () => {
    return <AgentOne />
}

const AgentOne  = () => {
    return <AgentTwo />
}

const AgentTwo  = () => {
    return <AgentBond />
}

const AgentBond  = () => {
    return (
        <Context.Consumer>
            {
                (context) => (
                <div>
                    <h3>
                        Agent Information
                    </h3>
                    <p>
                        Mission Name: {context.data.mname}
                        Agent Name: {context.data.accept}
                        
                    </p>
                    <button onClick={context.isMissionAccepted}>Chose to accep</button>
                </div>
                )
            }
        </Context.Consumer>
    )
}

const App = () => {
    return(
        <div>
            <h1>Context Api</h1>
            <Provider>
                <Agents />
            </Provider>
        </div>
    )
}

export default App