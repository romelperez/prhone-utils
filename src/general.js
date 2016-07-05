module.exports = {

  /**
   * Returns a function that will be called once in an interval of time right
   * away when it is called.
   *
   * @memberof PrhoneUtils
   *
   * @param  {Function} func - The function to throttle.
   * @param  {Number} interval - Time in milliseconds.
   * @param  {Function} gate - The function to validate the throttle. If it return
   * true, we prevent the throttle.
   *
   * @return {Function}
   */
  throttle: function (func = function () {}, interval = 1000, gate = function () {}) {

    let available = true;
    let queue = false;

    return function () {

      const args = arguments;

      const call = () => {

        available = false;
        func.apply(this, args);

        setTimeout(() => {
          if (queue) {
            queue = false;
            call();
          } else {
            available = true;
          }
        }, interval);
      };

      if (gate() || available) {
        call();
      } else {
        queue = true;
      }
    };
  },

};
