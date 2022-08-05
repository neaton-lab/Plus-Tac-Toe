class Region {
    constructor(left, right, top, bottom, getClaimer, setWinner) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.getClaimer = getClaimer;
        this.setWinner = setWinner;
    }
    
    // Checks for if the row has been fully claimed
    checkRow = function(checkTarget) {
        // Check every row
        for (let i = this.top ; i <= this.bottom ; i++) {
            // Go through each row. It the tile isn't claimed, just move on to the next row. If the you're at the end of the row and they're all claimed, then return true
            for (let j = this.left ; j <= this.right ; j++) {
                if (this.getClaimer(j, i) !== checkTarget) {
                    break;
                }
                else if (j === this.right) {
                    console.log("Row Check: true");
                    return true;
                }
            }
        }
        // If no row fully claimed, return false
        console.log("Row Check: false");
        return false;
    }
    // Checks for if the column has been fully claimed
    checkColumn = function(checkTarget) {
        // Check every column
        for (let i = this.left ; i <= this.right ; i++) {
            // Go through each column. It the tile isn't claimed, just move on to the next column. If the you're at the botton of the column and they're all claimed, then return true
            for (let j = this.top ; j <= this.botton ; j++) {
                if (this.getClaimer(i, j) !== checkTarget) {
                    break;
                }
                else if (j === this.bottom) {
                    // console.log("Column Check: true");
                    return true;
                }
            }
        }
        // If no column fully claimed, return false
        // console.log("Column Check: false");
        return false;
    }
    // Checks if the right-down diagonal is fully claimed
    // This is using a disproving algorithm, so that's why return true is outside everything
    checkRightDown = function(checkTarget) {
        // Make sure that the region is square
        if ((this.right - this.left) !== (this.bottom - this.top)){
            console.log("Right Down Check: false");
            return false;
        }

        // Have to normalize for this one. Yeah, a bit less readable, but this is more general
        for (let i = 0 ; i < (this.bottom - this.top) ; i++)
        {
            if (this.getClaimer(i+this.left, i+this.top) !== checkTarget) {
                console.log("Right Down Check: false");
                return false;
            }
        }
        console.log("Right Down Check: true");
        return true;
    }

    // Checks if the right-down diagonal is fully claimed
    // This is using a disproving algorithm, so that's why return true is outside everything
    checkLeftDown = function(checkTarget) {
        // Make sure that the region is square
        if ((this.right - this.left) !== (this.bottom - this.top)){
            // console.log("Left Down Check: false");
            return false;
        }

        // Have to normalize for this one. Yeah, a bit less readable, but this is more general
        for (let i = 0 ; i < (this.bottom - this.top) ; i++)
        {
            console.log("(" + this.right-i + ", " + this.top+i + ")");
            if (this.getClaimer(this.right-i, this.top+i) !== checkTarget) {
                // console.log("Left Down Check: false");
                return false;
            }
        }
        // console.log("Left Down Check: true");
        return true;
    }

    // Combines all of the other checks into one clean function call
    // Will return true if any happen to pass, otherwise return false
    checkClaimed = function(checkTarget) {
        return this.checkRow(checkTarget) || this.checkColumn(checkTarget) || this.checkLeftDown(checkTarget) || this.checkRightDown(checkTarget);
    }

    // Used to check if every tile in a region has been claimed, needed for checking for cat
    checkFull = function() {
        // console.log("Top: " + this.top);
        // console.log("Botton: " + this.bottom);
        for (let i = this.top ; i <= this.bottom ; i++) {
            for (let j = this.left ; j <= this.right ; j++) {
                // console.log("(" + i + ", " + j + "): " + this.getClaimer(i,j));
                if (this.getClaimer(j, i) == "") {
                    console.log("(" + j + ", " + i + ") is empty");
                    // console.log("Full Check: false");
                    return false;
                }
            }
        }
        // console.log("Full Check: true");
        return true;
    }
}

export default Region;