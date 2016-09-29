import React, {Component} from 'react';
import {Table, Column, Cell} from 'fixed-data-table-2'; 
import ExampleCell from './NavToGroupCell.jsx';
import {StyleSheet, css} from 'aphrodite';

class ExampleTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            tableWidth: 500
        }
        this._updateDimensions = this._updateDimensions.bind(this);
        this._activityRoute = this._activityRoute.bind(this);
    }
    componentWillMount() {
        this._updateDimensions();
    }
    componentDidMount() {
        window.addEventListener("resize", this._updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this._updateDimensions);
    }
    _updateDimensions(){
        let wifth = ($(window).width()/1.2);
        let minWifth = ($(window).width());
        if(minWifth >= 1050){
            this.setState({tableWidth: wifth});
        }else{
            this.setState({tableWidth: wifth+282});
        }
    }

    render() {
        return (
            <div>
                <Table
                    className={css(styles.wrapperStyles)}
                    rowHeight={35}
                    headerHeight={30}
                    rowsCount={this.props.data.length}
                    width={this.state.tableWidth}
                    height={975}
                >
                <Column
                    header={<Cell className={css(styles.newTableHeader)}>Access Groups</Cell>}
                    cell={<ExampleCell
                        data={this.props.data}
                        field="groupName"
                        className="userNameCell"
                    />}
                    width={460}
                    flexGrow={1}
                /> 
            </Table>
        </div>
        );
    }
    
}

export default ExampleTable;

const styles = StyleSheet.create({
   wrapperStyles:  {
        marginTop: '1rem',
        marginLeft: '1rem',
        marginRight: "3rem",
        boxShadow: 'none',
        border: "none",
        overflow:"hidden",
        height: "100%"
    },
    newTableHeader:{
        color: "#005FCC",
        fontSize: "18px",
        lineHeight: '1',
        background: "#FFFFFF"
    }
    
})