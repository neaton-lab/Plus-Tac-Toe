class Region {
    constructor(left, top, right, bottom, getClaimer, setWinner) {
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
                if (this.tiles[i][j] !== checkTarget) {
                    break;
                }
                else if (j === this.right) {
                    return true;
                }
            }
        }
        // If no row fully claimed, return false
        return false;
    }
    // Checks for if the column has been fully claimed
    checkColumn = function(checkTarget) {
        // Check every column
        for (let i = this.left ; i <= this.right ; i++) {
            // Go through each column. It the tile isn't claimed, just move on to the next column. If the you're at the botton of the column and they're all claimed, then return true
            for (let j = this.top ; j <= this.botton ; j++) {
                if (this.tiles[j][i] !== checkTarget) {
                    break;
                }
                else if (j === this.bottom) {
                    return true;
                }
            }
        }
        // If no column fully claimed, return false
        return false;
    }
    // Checks if the right-down diagonal is fully claimed
    // This is using a disproving algorithm, so that's why return true is outside everything
    checkRightDown = function(checkTarget) {
        // Make sure that the region is square
        if ((this.right - this.left) !== (this.bottom - this.top)){
            return false;
        }

        // Have to normalize for this one. Yeah, a bit less readable, but this is more general
        for (let i = 0 ; i < (this.bottom - this.top) ; i++)
        {
            if (this.getClaimer(i+this.left, i+this.top) !== checkTarget) {
                return false;
            }
        }
        return true;
    }

    // Checks if the right-down diagonal is fully claimed
    // This is using a disproving algorithm, so that's why return true is outside everything
    checkLeftDown = function(checkTarget) {
        // Make sure that the region is square
        if ((this.right - this.left) !== (this.bottom - this.top)){
            return false;
        }

        // Have to normalize for this one. Yeah, a bit less readable, but this is more general
        for (let i = 0 ; i < (this.bottom - this.top) ; i++)
        {
            if (this.getClaimer(this.right-i, i+this.top) !== checkTarget) {
                return false;
            }
        }
        return true;
    }

    // Combines all of the other checks into one clean function call
    // Will return true if any happen to pass, otherwise return false
    checkClaimed = function() {
        return this.checkRow('x') || this.checkColumn('x') || this.checkLeftDown('x') || this.checkRightDown('x');
    }
}

export default Region;