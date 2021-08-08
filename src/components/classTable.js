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
        let check2 = this.state.sort2Clicked;
        let check3 = this.state.sort3Clicked;
        let sortedTabeData=this.state.sortedTabeData;
        if (check2) {
            sortedArray = sortedTabeData.sort(function (a, b) {

                if ((a.assetClass === "Equities" && b.assetClass === "Macro" && b.price - a.price)
                    || b.assetClass === "Credit"
                ) { return -1 }

            })
        }
        else if (check3) {
            let arr1;
            sortedArray = sortedTabeData.sort(function (a, b) {
                if (a.assetClass === "Equities" && b.assetClass === "Macro"
                    || b.assetClass === "Credit"
                ) {
                    return (-1)
                }
            })
        }
        else if(check2 && check3){
            let checkingArray;
            checkingArray = sortedTabeData.sort(function (a, b) {

                if ((a.assetClass === "Equities" && b.assetClass === "Macro" && b.price - a.price)
                    || b.assetClass === "Credit"
                ) { return -1 }

            })
            sortedArray = checkingArray.sort(function (a, b) {
                var nameA = a.ticker.toUpperCase();
                var nameB = b.ticker.toUpperCase();
                if (a.assetClass === b.assetClass && nameA < nameB) {
                    return (b.price - a.price)
                }
            })
        }
        else {
            sortedArray = sortedTabeData.sort(function (a, b) {
                if ((a.assetClass === "Equities" && b.assetClass === "Macro")
                    || b.assetClass === "Credit"
                ) { return -1 }
            })
        }
        this.setState({ sortedTabeData: sortedArray, sort1Clicked: true })
    }
    handleClick2() {
        let arr1 = JSON.parse(JSON.stringify(this.state.sortedTabeData));
        let check1 = this.state.sort1Clicked;
        let check3 = this.state.sort3Clicked;
        let sort2;
        if (check1) {
            sort2 = arr1.sort(function (a, b) {
                if (a.assetClass === b.assetClass) {
                    return (b.price - a.price)
                }
            })
        }
        else if (check3) {

            sort2 = arr1.sort(function (a, b) {
                var nameA = a.ticker.toUpperCase();
                var nameB = b.ticker.toUpperCase();
                if (nameA < nameB) {
                    return (b.price - a.price)
                }
            })
        }
        else if (check1 && check3) {

            sort2 = arr1.sort(function (a, b) {
                var nameA = a.ticker.toUpperCase();
                var nameB = b.ticker.toUpperCase();
                if (a.assetClass === b.assetClass && nameA < nameB) {
                    return (b.price - a.price)
                }
            })
        }
        else {
            sort2 = arr1.sort(function (a, b) {

                return (b.price - a.price)

            })
        }
        this.setState({ sortedTabeData: sort2, sort2Clicked: true })
    }
    handleClick3() {
        
        let arr3 = JSON.parse(JSON.stringify(this.state.sortedTabeData));
        let check1 = this.state.sort1Clicked;
        let check2 = this.state.sort2Clicked;
        let sort2;
        if (check1) {
            sort2 = arr3.sort(function (a, b) {
                var nameA = a.ticker.toUpperCase();
                var nameB = b.ticker.toUpperCase();
                if (a.assetClass === b.assetClass) {
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                }
            }
            )
        }
        else if (check2) {
            sort2 = arr3.sort(function (a, b) {
                var nameA = a.ticker.toUpperCase();
                var nameB = b.ticker.toUpperCase();
                if (a.price === b.price) {
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                }
            }
            )
        }
        else if (check1 && check2) {
            sort2 = arr3.sort(function (a, b) {
                var nameA = a.ticker.toUpperCase();
                var nameB = b.ticker.toUpperCase();
                if ((a.assetClass === b.assetClass && check1) || (a.price === b.price && check2)) {
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                }
            }
            )
        }
        else {
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
        }
        this.setState({ sortedTabeData: sort2, sort3Clicked: true })
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick} id="1">
                    1
                </button>
                <button onClick={this.handleClick2} id="2">
                    2
                </button>
                <button onClick={this.handleClick3} id="3">
                    3
                </button>
                <Table
                    rowdata={this.state.sortedTabeData}
                />
            </>
        );
    }
}

export default Toggle;
