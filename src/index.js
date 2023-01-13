import React from 'react';
import ReactDom from 'react-dom';

import App from './App';
import { Context } from './Context';


ReactDom.render( <Context><App /></Context> ,document.getElementById('root'));