import React from 'react';
import tableData from '../constantData';
import Table from './tableComponent';


class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedTabeData: tableData,
            sort1Clicked: false,
            sort2Clicked: false,
            sort3Clicked: false,
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        let sortedArray;
        
        let sortedTabeData=this.state.sortedTabeData;
        
            sortedArray = sortedTabeData.sort(function (a, b) {
                if ((a.assetClass === "Equities" && b.assetClass === "Macro")
                    || b.assetClass === "Credit"
                ) { return -1 }
            })
        
        this.setState({ sortedTabeData: sortedArray, sort1Clicked: true })
    }
    handleClick2() {
        let arr1 = JSON.parse(JSON.stringify(this.state.sortedTabeData));
        let sort2;
        
            sort2 = arr1.sort(function (a, b) {

                return (b.price - a.price)

            })
        
        this.setState({ sortedTabeData: sort2, sort2Clicked: true })
    }
    handleClick3() {
        
        let arr3 = JSON.parse(JSON.stringify(this.state.sortedTabeData));
        let sort2;
            sort2 = arr3.sort(function (a, b) {
                var nameA = a.ticker.toUpperCase();
                var nameB = b.ticker.toUpperCase();

                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            }
            )
        this.setState({ sortedTabeData: sort2, sort3Clicked: true })
    }

    render() {
        return (
            <>
            <div className="header_buttons">
                <button className="sort-btn" onClick={this.handleClick} id="1">
                    Sorting on AssetClass
                </button>
                <button className="sort-btn" onClick={this.handleClick2} id="2">
                    Sorting on Price
                </button>
                <button className="sort-btn" onClick={this.handleClick3} id="3">
                    Sorting on Ticker
                </button>
                </div>
                <div>
                <Table
                    rowdata={this.state.sortedTabeData}
                />
                </div>
            </>
        );
    }
}

export default Toggle;
