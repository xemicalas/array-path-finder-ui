import React from 'react';

import { ArrayPathFinderForm } from '../ArrayPathFinder/ArrayPathFinderForm';
import { ArrayPathFinderResults } from '../ArrayPathFinder/ArrayPathFinderResults';

const HomePage = () => (
    <main>
        <div className="jumbotron jumbotron-fluid text-dark bg-light animated fadeIn">
            <h1 className="display-6 text-center">Array path finder</h1>
            <hr className="my-4" />
            <ArrayPathFinderForm />
            <ArrayPathFinderResults />
        </div>
    </main>
);

export { HomePage };