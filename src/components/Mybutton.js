import React from 'react';
import Button from '@material-ui/core/Button';

export default class Mybutton extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
    };

    handleClick() {
        const c = this.state.count + 1;
        this.setState({
            count: c,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <b>{this.state.count}</b>
                <Button color="primary" onClick={this.handleClick}>
                ADD!
                </Button>
            </div>
        );
    };
}
