import React from "react";

export class Content extends React.Component {
    render() {
        return (
            <div>
                <div className="App">
                    <h1>Hello World</h1>
                    <h2>It is {new Date().toLocaleTimeString()}.</h2>
                </div>
            </div>
        );
    }
}