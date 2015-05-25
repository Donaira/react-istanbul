"use strict";

var React = require('react');
var classnames = require('classnames');

var AdformCheckbox = React.createClass({
    render: function() {
        var checked = this.props.checked ? ' checked' : '';
        var disabled = this.props.disabled ? ' disabled' : '';

        return (
            <div className={classnames(["checkbox-group", this.props.className])}>
                <div name={this.props.name} className={'adform-checkbox ' + checked + disabled}></div>
                <label>{this.props.label}</label>
            </div>
        );
    }
});

module.exports = AdformCheckbox;
