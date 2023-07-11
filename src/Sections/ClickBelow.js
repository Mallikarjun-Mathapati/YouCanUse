import React from "react";
import Asta from "../Images/Click Below/Asta Black clover.png";

const ClickBelow = () => {
  return (
    <>
      <div className="click-below">
        <div className="click-below-main">
          {/* <div className="container"> */}
          <div className="click-below-flex">
            <div className="click-below-flex-1">
              <img src={Asta} alt="Asta bng" />
            </div>
            <div className="click-below-flex-2">
              <p>
                <span className="code-color-par">Would You Like</span>{" "}
                <span className="code-color-par1">
                  <span className="code-color-emt1">To See More =</span>
                </span>{" "}
                <span className="code-color-br">(</span>
                <span className="code-color-emt">About</span>
                <span className="code-color-br">)</span>{" "}
                <span className="code-color-par">=&#62;</span>{" "}
                <span className="code-color-br">&#123;</span>
                <br />
                <span className="code-color-par"> My</span>{" "}
                <span className="code-color-emt">Projects Just Click =</span>{" "}
                <span className="code-color-gree">"Mallikarjun.dev"</span>
                <span className="code-color-emt">;</span>
                <br />
                <span className="code-color-state">setBelowLink</span>
                <span className="code-color-par">(</span>
                <span className="code-color-emt">Project Just Click</span>
                <span className="code-color-par">)</span>
                <span className="code-color-emt">;</span>
                <br />
                <br />
                <span className="code-color-re">return</span>{" "}
                <span className="code-color-par">(</span> <br />
                <span className="code-color-red">&#60;p&#62;</span>
                <span className="code-color-emt1">&#123;</span>
                <span className="code-color-emt">BelowLink</span>
                <span className="code-color-emt1">&#125;</span>
                <span className="code-color-red">&#60;/p&#62;</span> <br />
                <span className="code-color-par">)</span>
                <span className="code-color-emt">;</span>
                <span className="code-color-emt1">&#125;</span>
              </p>
              <h3 className="out-put-link">//Output</h3>
              <a href="https://mallikarjun-mathapati.github.io/Mallikarjun.dev.desigr/">
                https://mallikarjun-mathapati.github.io/Mallikarjun.dev.desigr/
              </a>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default ClickBelow;
