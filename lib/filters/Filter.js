'use strict';

class Filter {
  /**
   * @param {AudioNode} destination - The audio node to use as the destination for the input AudioNode
   * @param {AudioNode} [source] - Optional output node, defaults to destination node. This is useful
   *        when creating filters which contains multiple AudioNode elements chained together.
   */
  constructor(destination, source) {
    this.init(destination, source);
  }
  /** Reinitialize */
  init(destination, source) {
    this.destination = destination;
    this.source = source || destination;
  }
  /**
   * Connect to the destination.
   * @param {AudioNode} destination - The destination node to connect the output to
   */
  connect(destination) {
    this.source?.connect(destination);
  }
  /** Completely disconnect filter from destination and source nodes. */
  disconnect() {
    this.source?.disconnect();
  }
  /** Destroy the filter and don't use after this. */
  destroy() {
    this.disconnect();
    this.destination = null;
    this.source = null;
  }
}

exports.Filter = Filter;
//# sourceMappingURL=Filter.js.map