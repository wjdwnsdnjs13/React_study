import React, {Component} from "react";

export default class BoxClass extends Component{
    constructor(props){ //생성자
        super(props);
        this.state={
            city:"진주",
            cnt:0
        }
    }
    ff=()=>{
        this.setState({cnt:this.state.cnt+1});
    }
    render(){
        return (
            <div>
                <h1>여긴 BoxClass</h1>
                <h1>Class Component. {this.props.name} in {this.state.city}</h1>
                <hr/>
                <button onClick={this.ff}>클릭!</button>
                <hr/>
                <p>클릭 횟수 : {this.state.cnt}</p>
            </div>
        )
    }
}