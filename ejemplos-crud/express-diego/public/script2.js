export default class Point {
    constructor ( x = 0, y = 0 ) {
      this.x = x;
      this.y = y;
    }
  
    toString () {
      return '(' + this.x + ', ' + this.y + ')';
    }
}
