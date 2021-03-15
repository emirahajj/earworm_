import React, {Component} from "react";
import anime from "animejs";

//removing the splash screen from the flow of the document to avoid using z-indicies
var myDiv = document.getElementsByClassName('splashy');

function logFinished() {
  anime.set(myDiv, {display: 'none'});
}
export default class Splash extends Component {
  // when you map the elements in the main app, maybe create an ID as you loop
  // then maybe access them somehow here

  animation() {


    //draws logo
     anime({
      targets: ['.st0', '.st1'],
      strokeDashoffset: [
        anime.setDashoffset, 0
      ],
      easing: 'easeInOutSine',
      duration: 1200,
      delay: function (el, i) {
        return 1200 + i * 200;
      },
      direction: 'alternate',
      loop: false
    });
    //fills in earworm logo
    anime({
        targets: ['.st0', '.st1'],
        fill: '#FFFFFF',
        easing: 'easeInOutSine',
        duration: 1200,
        delay: 3600,
        direction: 'alternate',
        loop: false
      });

      //fades out
      const me2 = anime({
        targets: ['.splashy'],
        easing: 'easeInSine',
        opacity: 0,
        duration: 600,
        delay: 4800,
        loop: false
      });

      me2.finished.then(logFinished);
  };

  

  componentDidMount() {
    this.animation();
    console.log(myDiv);
  }

  render() {

    return (
      <div className="splashy w-full z-0 h-full fixed flex justify-center">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width= {window.innerWidth > 1024 ? "600px": "350px"}
          viewBox="0 0 379.1 78.6">

          <g>
            <path
              class="st0"
              d="M34.4,64.6c-1.3,7.8-7.1,12.8-16.2,12.8c-10.7,0-17.8-7.8-17.8-19.1c0-11.1,7.4-19.2,17.6-19.2
		c10.7,0,16.6,7.5,16.6,18.2v3.1H10.2c0.3,5.5,3.4,8.8,8,8.8c3.4,0,6-1.5,6.8-4.6H34.4z M10.5,54.3h14.2c-0.1-3.9-2.4-6.9-6.6-6.9
		C14.2,47.4,11.4,49.8,10.5,54.3z"/>
            <path
              class="st0"
              d="M61.5,76.6v-2c-1.2,1.2-4.9,2.6-8.9,2.6C45.2,77.2,39,73,39,65.3c0-7,6.2-11.7,14.2-11.7
		c3.2,0,6.9,1.1,8.4,2.1V53c0-3.1-1.9-5.7-6-5.7c-2.9,0-4.6,1.3-5.4,3.4h-9.7c1.1-6.6,7.1-11.7,15.4-11.7c9.8,0,15.4,5.3,15.4,14.1
		v23.4H61.5z M61.5,64c-0.9-2-3.7-3.2-6.6-3.2c-3.2,0-6.5,1.4-6.5,4.5c0,3.2,3.3,4.5,6.5,4.5c3,0,5.7-1.2,6.6-3.2V64z"/>
            <path
              class="st0"
              d="M101.8,49.9c-1.4-0.8-3.2-1.2-5.1-1.2c-3.4,0-6.2,1.8-7,5.2v22.7H79.6V39.9h10.2v3.6c1.6-2.6,4.6-4.4,8.2-4.4
		c1.7,0,3.3,0.3,3.9,0.7V49.9z"/>
            <path
              class="st0"
              d="M141.6,63.3l6.6-23.4h9.8l-11.2,36.7h-9.3l-6-22.5l-6,22.5h-9.3L105,39.9h10.2l6.6,23.4l6-23.4h7.8L141.6,63.3
		z"/>
            <path
              class="st0"
              d="M178.7,77.4c-10.7,0-18-7.9-18-19.1c0-11.3,7.3-19.2,18-19.2s18,7.9,18,19.2C196.7,69.5,189.4,77.4,178.7,77.4
		z M178.7,47.7c-5.1,0-7.9,4.4-7.9,10.6c0,6.1,2.8,10.5,7.9,10.5s7.9-4.4,7.9-10.5C186.6,52.1,183.8,47.7,178.7,47.7z"/>
            <path
              class="st0"
              d="M225.4,49.9c-1.4-0.8-3.2-1.2-5.1-1.2c-3.4,0-6.2,1.8-7,5.2v22.7h-10.2V39.9h10.2v3.6c1.6-2.6,4.6-4.4,8.2-4.4
		c1.7,0,3.3,0.3,3.9,0.7V49.9z"/>
            <path
              class="st0"
              d="M272.3,39.1c7.5,0,12.1,5.2,12.1,13.5v23.9h-10.2V54.8c0-3.9-1.7-6.6-5.2-6.6c-2.6,0-5,1.6-5.7,4.8v23.6H253
		V54.8c0-3.9-1.6-6.6-5.2-6.6c-2.6,0-5.1,1.6-5.7,4.8v23.6h-10.2V39.9h10.2v3c1.8-2.3,5.2-3.9,9.3-3.9c4.3,0,7.8,2,9.8,4.7
		C263.6,41.2,267.1,39.1,272.3,39.1z"/>
                    <path
              class="st1"
              d="M337.2,0.4c-20.1,0-36.3,16.3-36.3,36.3v13c0,1.4,1.2,2.6,2.6,2.6c1.4,0,2.6-1.2,2.6-2.6v-13
		c0-17.2,13.9-31.1,31.1-31.1s31.1,13.9,31.1,31.1v13c0,1.4,1.2,2.6,2.6,2.6c1.4,0,2.6-1.2,2.6-2.6v-13
		C373.6,16.6,357.3,0.4,337.2,0.4z"/>
            <path
              class="st1"
              d="M304.8,44.5c-7.9,0-9.1,6.4-9.1,14.3s1.2,14.3,9.1,14.3s3.9-6.4,3.9-14.3S312.7,44.5,304.8,44.5z
		 M370.4,44.5c-7.4,0-3.7,6.4-3.7,14.3S363,73,370.4,73c7.4,0,8.3-6.4,8.3-14.3S377.9,44.5,370.4,44.5z"/>
            <path
              class="st1"
              d="M311.3,39.3c-4.3,0-7.8,3.5-7.8,7.8v23.3c0,4.3,3.5,7.8,7.8,7.8c4.3,0,7.8-3.5,7.8-7.8V47.1
		C319.1,42.8,315.6,39.3,311.3,39.3z M363.2,39.3c-4.3,0-7.8,3.5-7.8,7.8v23.3c0,4.3,3.5,7.8,7.8,7.8c4.3,0,7.8-3.5,7.8-7.8V47.1
		C371,42.8,367.5,39.3,363.2,39.3z"/>
          </g>
        </svg>

      </div>

    );
  }

}