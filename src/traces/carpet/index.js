/**
* Copyright 2012-2016, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/


'use strict';

var Carpet = {};

Carpet.attributes = require('./attributes');
Carpet.supplyDefaults = require('./defaults');
Carpet.plot = require('./plot');
Carpet.calc = require('./calc');
Carpet.animatable = false;

Carpet.moduleType = 'trace';
Carpet.name = 'carpet';
Carpet.basePlotModule = require('../../plots/cartesian');
Carpet.categories = ['cartesian', 'symbols', 'markerColorscale'];
Carpet.meta = {
    description: [
        'The scatter trace type encompasses line charts, scatter charts, text charts, and bubble charts.',
        'The data visualized as scatter point or lines is set in `x` and `y`.',
        'Text (appearing either on the chart or on hover only) is via `text`.',
        'Bubble charts are achieved by setting `marker.size` and/or `marker.color`',
        'to numerical arrays.'
    ].join(' ')
};

module.exports = Carpet;
