import React from 'react';
import { Route } from 'react-router-dom';

import ResultsView from './containers/ResultsView';
import GuideView from './containers/GuideView';
import CommentsView from './containers/CommentsView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ResultsView} exact />
        <Route exact path='/results/:tagName' component={ResultsView} />
        <Route path='/guide' component={GuideView} />
        <Route path='/comments' component={CommentsView} />
    </div>
);

export default BaseRouter;
