/*eslint-disable*/
import React from "react";
import { deviceDetect } from "react-device-detect";
import { BrowserView, MobileView } from 'react-device-detect';

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/IT.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <BrowserView>
                    <h3>I would love to change the world but they won't <br/>
                         give me &lt; /	&gt; the  
                         source code &lt;  /	&gt;
                    </h3>
              </BrowserView>
              <MobileView>
              <h3>I would love to change the world but they won't <br/>
                         give me <br/> &lt; /	&gt; the  
                         source code &lt;  /	&gt;
                    </h3>
              </MobileView>
          </div>
          
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
