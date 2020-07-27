import React from 'react';

const GuideView = (props) => {
    return (
        <div class="main container">
            <GuideSideBar />
            <GuideContent />
        </div>
    );
}


const GuideSideBar = (props) => {
    return (
        <div class="col-md-3 col-md-offset-1 result-sidebar">
            <div class="sidebar-module sidebar-module-inset">
            </div>
            <div class="sidebar-module guide-sidebar">
                <li>
                    <a href="#intro">简介</a>
                </li>
                <li>
                    <a href="#how-to-use">使用方法</a>
                </li>
                <li>
                    <a href="#statement">声明</a>
                </li>
            </div>
        </div>
    );
}

const GuideContent = () => {
    return (
        <div class="col-md-8 col-md-offset-1 guide-content">
            <h2>使用指南</h2>
            <hr />
            <h4 id="intro">简介</h4>
            <p>
                本人磕CP重度患者，沉迷看文，且入坑速度贼快。
          <br />
          所以经常开了新坑，却迷失在圈内各种宝藏写手的文章之中
        </p>
            <hr />
            <h4 id="how-to-use">使用方法</h4>
            <p>
                本人磕CP重度患者，沉迷看文，且入坑速度贼快。
           <br />
          所以经常开了新坑，却迷失在圈内各种宝藏写手的文章之中
        </p>
            <hr />
            <h4 id="statement">声明</h4>
            <p>
                本人磕CP重度患者，沉迷看文，且入坑速度贼快。
           <br />
          所以经常开了新坑，却迷失在圈内各种宝藏写手的文章之中
        </p>
        </div>
    );
}

export default GuideView;