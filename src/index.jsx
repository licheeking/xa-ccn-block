/**
 * Created by junxie on 18/5/27.
 */
import React from 'react';
import ReactDom from 'react-dom';
import TooltipButton from './component/TooltipButton/TooltipButton';
import './default.less';
import './markdown-style.less';
import './style.less';
ReactDom.render(<TooltipButton />,
    document.getElementById('app')
);
