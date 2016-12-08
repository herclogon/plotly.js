/**
* Copyright 2012-2016, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

var extendFlat = require('../../lib/extend').extendFlat;
var fontAttrs = require('../../plots/font_attributes');
var colorAttrs = require('../../components/color/attributes');

module.exports = {
    showlabels: {
        valType: 'enumerated',
        values: ['start', 'end', 'both', 'none'],
        dflt: 'end',
        role: 'style',
        description: [
            'Determines whether axis labels are drawn on the low side,',
            'the high side, both, or neither side of the axis.'
        ]
    },
    labelpadding: {
        valType: 'integer',
        role: 'style',
        dflt: 10,
        description: 'Extra padding between label and the axis'
    },
    labelprefix: {
        valType: 'string',
        role: 'style',
        description: 'Sets a axis label prefix.'
    },
    labelsuffix: {
        valType: 'string',
        dflt: '',
        role: 'style',
        description: 'Sets a axis label suffix.'
    },
    showstartlabel: {
        valType: 'boolean',
        dflt: true,
    },
    showendlabel: {
        valType: 'boolean',
        dflt: true,
    },
    showlabelprefix: {
        valType: 'enumerated',
        values: ['all', 'first', 'last', 'none'],
        dflt: 'all',
        role: 'style',
        description: [
            'If *all*, all tick labels are displayed with a prefix.',
            'If *first*, only the first tick is displayed with a prefix.',
            'If *last*, only the last tick is displayed with a suffix.',
            'If *none*, tick prefixes are hidden.'
        ].join(' ')
    },
    showlabelsuffix: {
        valType: 'enumerated',
        values: ['all', 'first', 'last', 'none'],
        dflt: 'all',
        role: 'style',
        description: 'Same as `showtickprefix` but for tick suffixes.'
    },
    labelfont: extendFlat({}, fontAttrs, {
        description: 'Sets the label font.'
    }),
    gridoffset: {
        valType: 'integer',
        min: 0,
        dflt: 0,
        role: 'info',
        description: 'The starting index of grid lines along the axis'
    },
    gridstep: {
        valType: 'integer',
        min: 1,
        dflt: 1,
        role: 'info',
        description: 'The stride between grid lines along the axis'
    },
    gridwidth: {
        valType: 'number',
        min: 0,
        dflt: 1,
        role: 'style',
        description: 'Sets the width (in px) of the grid lines.'
    },
    gridcolor: {
        valType: 'color',
        dflt: colorAttrs.defaultLine,
        role: 'style',
        description: 'Sets the color of the grid lines.'
    },
    minorgridoffset: {
        valType: 'integer',
        min: 0,
        dflt: 0,
        role: 'info',
        description: 'The starting index of grid lines along the axis'
    },
    minorgridstep: {
        valType: 'integer',
        min: 1,
        dflt: 1,
        role: 'info',
        description: 'The stride between grid lines along the axis'
    },
    minorgridwidth: {
        valType: 'number',
        min: 0,
        dflt: 1,
        role: 'style',
        description: 'Sets the width (in px) of the grid lines.'
    },
    minorgridcolor: {
        valType: 'color',
        dflt: colorAttrs.lightLine,
        role: 'style',
        description: 'Sets the color of the grid lines.'
    },
};
