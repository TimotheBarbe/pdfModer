import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import {Provider} from "react-redux";
import {store} from "./state/store";
import {pdfjs} from 'react-pdf';

// for https://github.com/wojtekmaj/react-pdf#support-for-text-layer
import '../node_modules/react-pdf/src/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
