// Create a fake global `window` and `document` object:
require('./testdom')('<html><body></body></html>');

var assert = require('assert');

// Replace BigComplicatedComponent.js with a stub component.
global.reactModulesToStub = [

];

describe('AdformCheckbox', function() {
    var labelText = 'Skippable';

    before('render and locate element', function() {
        var React = require('react/addons');
        var TestCheckbox = require('../Checkbox');
        var TestUtils = React.addons.TestUtils;

        var renderedComponent = TestUtils.renderIntoDocument(
            <TestCheckbox name='Skippable' checked={false} label={labelText} />
        );

        var labelComponent = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'label');
        this.labelElement = labelComponent.getDOMNode();
    });

    it('label should match with passed props', function() {
        assert.equal(this.labelElement.textContent, labelText);
    });

});