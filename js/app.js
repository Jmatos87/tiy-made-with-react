// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
// import * as u from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
// -- browserify-hmr having install issues right now
// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         app()
//     })
// }
// npm run publish:gh-pages
import DOM from 'react-dom'
import React, {Component} from 'react'

function app() {
    
	var AppView = React.createClass ({

		render:function (){
			return (
    				<div className="pageContainer">
	    				<TopRow/>
	    				<BottomContainer/>
	    				<StaticContainer/>
    				</div>
    		)
		}
	})

	var	TopRow = React.createClass({
			render: function (){
				return(
					<div id="topRow">
					    <img src="http://magentanova.github.io/html-intro-1/images/houston.jpg" alt="" />
					    <img id="smallCircle" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" alt="" />
					</div>
				)
		
			}
	})

	var BottomContainer = React.createClass ({
			render:function(){
				return(

				<div class="container">
    				<div id="left">
				        <div><h1>The Iron Yard | Houston</h1>
				        </div>
			        	<h2 id="textRight">Happenings and updates from the Ironyard in Houston,TX</h2>
			    	</div>
     				<div id="yo"> 
     					<form action="action_page.php">
  							SEARCH<br>
  								<hr></hr>
  						<input type="text"value="Search Keywords"/></br>
       					</form>
       				</div>
   					<div id="right">
       					<h1 id="september">
       						September 22 Starts a New Class of The Iron Yard Houston Students
       					</h1> 
         				<img id="pic" src="http://magentanova.github.io/html-intro-1/images/classroom.jpg"/>
             			<h2 id="unicorn">Unicorn experimental human-centered design entrepreneur latte agile ideate human-centered design fund physical computing bootstrapping sticky note engaging minimum viable product. Moleskine earned media human-centered design experiential entrepreneur grok parallax waterfall is so 2000 and</h2> 
    				</div>
				</div>   
  				)	
			}
	})

	var StaticContainer = React.createClass ({

		render:function (){
			return(
				<div id="static">
    				<div id="topBanner">
    					<h1 id="never">Never miss a post!</h1>
    				</div>
        			<div id="bottomContainer">
            		<div id="smallSquare">
            			<img  src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>
            		</div>
            		<div id="bottomBanner">
            			<h1 id="black" >tiyhouston</h1>
              			<h1 id="gray">The Iron Yard | Houston</h1>

            		</div> 
            		<div id="button">
            			<button>+ Follow</button>
            		</div>
        		</div>
        		</div>
  			)

		}
	})
    DOM.render(<AppView/>,document.querySelector('.container'))
}

app()
