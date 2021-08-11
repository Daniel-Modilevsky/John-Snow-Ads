const coordinates = {
    x: 0,
    y: 0
};

const type ="IMAGE" | "VIDEO";


const creative = {
    name: "test",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4aeN6pViHrPQ-ufs6srPBpKnqskHl6Me8lnpfW3ksc43jG-e9iXW0hxZbvdAtBEGqn8k&usqp=CAU"
}


  // MAP STATIC SIZE
  const MAP_WIDTH = 1280;
  const MAP_HEIGHT = 1887;

  /**
   * generate random coordinate in MAX WIDTH and HEIGHT
   * @returns {Object} coordinate
   */
  const generateRandomCoordinate = () => {
    return {
      x: Math.round(Math.random() * MAP_WIDTH),
      y: Math.round(Math.random() * MAP_HEIGHT),
    };
  }


class Ad {
    constructor(title, type, time, coordinates ) {
      this.title = title;
      this.type = type;
      this.coordinates = coordinates;
    }


    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }


    
  }