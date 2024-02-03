/** @author: Tanguy Clavareau */
import {Vector} from '../Math/Vector.ts'
import {Renderer} from '../Drawing/Renderer.ts';

/**
 * A class to describe a grid of cells in a two-dimensional space. A grid is composed of
 * rows and columns of cells, each of which has a position given by a vector.
 * 
 * @class Grid
 * @constructor
 * @param rows number of rows in the grid.
 * @param cols number of columns in the grid.
 * @param border width of the border around the grid.
 * @param cell size of each cell in the grid. */

export class Grid {
    rows: number;
    cols: number;
    border: number;
    cell: number;
    grid: Vector[];

    constructor(rows: number, cols: number, border: number, cell: number) {
        this.rows = rows;
        this.cols = cols;
        this.border = border;
        this.cell = cell;
        this.grid = [];
    }
    
    /**
     * Creates a grid of vector where each cell's x coordinate is determined by its row index
     * and each cell's y coordinate is determined by its column index.
     * @method verticalGrid */

    verticalGrid() {
        for (let i = 0; i < this.rows; i++){
            for (let j = 0; j < this.cols; j++){
                let x = i * this.cell + this.border;
                let y = j * this.cell + this.border;
                this.grid.push(new Vector(x, y));
            }
        }
    }
    
    /**
     * Creates a horizontal grid of cells, where each cell's x coordinate is determined by its column index
     * and each cell's y coordinate is determined by its row index.
     * @method horizontalGrid */

    horizontalGrid() {
        for (let i = 0; i < this.cols; i++){
            for (let j = 0; j < this.rows; j++){
                let x = j * this.cell + this.border;
                let y = i * this.cell + this.border;
                this.grid.push(new Vector(x, y));
            }
        }
    }
    
    /**
     * Displays the grid of cells on the screen using a renderer object.
     * @method displayGrid
     * @param renderer the renderer object to use for drawing the grid. */

    displayGrid(renderer: Renderer) {
        for (let i = 0; i < this.grid.length; i++){
            renderer.rect(this.grid[i], this.cell, this.cell);
        }
    }
}