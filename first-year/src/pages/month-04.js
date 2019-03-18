import React, {Component} from "react";
import Intro from "../components/intro";
import "./month-04-style.css";
import "../Pictures/photo1.JPG";

class Month04 extends Component {
    state = {
      show: false,
      firstText: true
    }
   
    render() {
    if(this.state.firstText === true){
       setTimeout(() => {
        this.setState({
            firstText: false,
            show: true
        })
       }, 5500)
        return (
            <div className="calender">
            <Intro></Intro>
            </div>
          );  
    }
    if(this.state.show === true) {
        return(
            <div>
                {/* <h1>The Big Day</h1> */}
                <div className="big-text april-2-2018">April 2nd 2018</div>
               <img src={require('../Pictures/4:2:18-1.jpg')} alt="" className="picture-1 shadow p-3 mb-5 bg-white rounded" />
               <img src={require('../Pictures/04:02:18-2.jpeg')} alt="" className="picture-2 shadow p-3 mb-5 bg-white rounded" />
               <img src={require('../Pictures/arrow.png')} alt="" className="arrow2" />
               <div>
                 <img src={require('../Pictures/sunflowers.png')} alt="" className="sunflower" />
                 <img src={require('../Pictures/sunflowers.png')} alt="" className="sunflower2" />
               </div>
                <h1>This Was Fun</h1>
               <img src={require('../Pictures/04:07:18-1.jpg')} alt="" className="picture-4 " />
               <img src={require('../Pictures/04:07:18-2.jpg')} alt="" className="picture-5 " />
               <div className='middle-text'>
               <h1>How did we go on this trip???</h1>
                <h3>When I was skinny</h3>
                </div>
                <img src={require('../Pictures/arrow.png')} alt="" className="arrow3" />
               <img src={require('../Pictures/04:13:18-1.jpeg')} alt="" className="picture-6 " />
               <img src={require('../Pictures/04:13:18-2.jpg')} alt="" className="picture-7 " />
               <img src={require('../Pictures/04:13:18-3.jpeg')} alt="" className="picture-8 " />
            

              <div className='contanier'>
                <div className='row'>
                  <div className='transparent-pic col-12'>
                  <h1>I like this Picture</h1>
                  <img className='' src={require('../Pictures/forjabsforfiller.png')} alt="" className="picture-8 " />
                  </div>
                  <div className='col-12'>
                  <h1>The best years of my life...</h1>
                  <p>I just want to say that this was a great year the best one I couldnt be happier.
                    I wanted to make all this for you so you can look back at all the time we had in our first year.
                  </p>
                  </div>
                </div>
              </div>
      
            </div>
        )
    }
    
    }
  }

export default Month04;