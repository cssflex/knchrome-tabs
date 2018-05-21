// Declare the chromeTabsApp module and its dependency 'ui.bootstrap'
var app = angular.module('chromeTabsApp', ['ui.bootstrap']);
// Declare the AppCtrl controller
app
  .controller('AppCtrl', ['$scope', function ($scope) {
    // Tab counter
    var counter = 1;
    // Array to store the tabs
    $scope.tabs = [];

    // Add tab to the end of the array
    var addTab = function () {
      $scope.tabs.push({ title: 'Tab ' + counter, content: 'Tab ' + counter });
      counter++;
      $scope.tabs[$scope.tabs.length - 1].active = true;
    };

    // Remove tab by index
    var removeTab = function (event, index) {
      event.preventDefault();
      event.stopPropagation();
      $scope.tabs.splice(index, 1);
    };

    // Initialize the scope functions
    $scope.addTab    = addTab;
    $scope.removeTab = removeTab;

    // For demonstration add 10 tabs
    for (var i = 0; i < 10; i++) {
      addTab();
    }
  }])
  .directive('tabHighlight', [function () {
    return {
      restrict: 'A',
      link: function (scope, element) {
        // Here is the major jQuery usage where we add the event
        // listeners mousemove and mouseout on the tabs to initalize
        // the moving highlight for the inactive tabs
        var x, y, initial_background = '#c3d5e6';

        element
          .removeAttr('style')
          .mousemove(function (e) {
            // Add highlight effect on inactive tabs
            if(!element.hasClass('active'))
            {
              x = e.pageX - this.offsetLeft;
              y = e.pageY - this.offsetTop;

              // Set the background when mouse moves over inactive tabs
              element
                .css({ background: '-moz-radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background })
                .css({ background: '-webkit-radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background })
                .css({ background: 'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background });
            }
          })
          .mouseout(function () {
            // Return the inital background color of the tab
            element.removeAttr('style');
          });
      }
    };
  }]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVjbGFyZSB0aGUgY2hyb21lVGFic0FwcCBtb2R1bGUgYW5kIGl0cyBkZXBlbmRlbmN5ICd1aS5ib290c3RyYXAnXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2Nocm9tZVRhYnNBcHAnLCBbJ3VpLmJvb3RzdHJhcCddKTtcbi8vIERlY2xhcmUgdGhlIEFwcEN0cmwgY29udHJvbGxlclxuYXBwXG4gIC5jb250cm9sbGVyKCdBcHBDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgLy8gVGFiIGNvdW50ZXJcbiAgICB2YXIgY291bnRlciA9IDE7XG4gICAgLy8gQXJyYXkgdG8gc3RvcmUgdGhlIHRhYnNcbiAgICAkc2NvcGUudGFicyA9IFtdO1xuXG4gICAgLy8gQWRkIHRhYiB0byB0aGUgZW5kIG9mIHRoZSBhcnJheVxuICAgIHZhciBhZGRUYWIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkc2NvcGUudGFicy5wdXNoKHsgdGl0bGU6ICdUYWIgJyArIGNvdW50ZXIsIGNvbnRlbnQ6ICdUYWIgJyArIGNvdW50ZXIgfSk7XG4gICAgICBjb3VudGVyKys7XG4gICAgICAkc2NvcGUudGFic1skc2NvcGUudGFicy5sZW5ndGggLSAxXS5hY3RpdmUgPSB0cnVlO1xuICAgIH07XG5cbiAgICAvLyBSZW1vdmUgdGFiIGJ5IGluZGV4XG4gICAgdmFyIHJlbW92ZVRhYiA9IGZ1bmN0aW9uIChldmVudCwgaW5kZXgpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICRzY29wZS50YWJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIHNjb3BlIGZ1bmN0aW9uc1xuICAgICRzY29wZS5hZGRUYWIgICAgPSBhZGRUYWI7XG4gICAgJHNjb3BlLnJlbW92ZVRhYiA9IHJlbW92ZVRhYjtcblxuICAgIC8vIEZvciBkZW1vbnN0cmF0aW9uIGFkZCAxMCB0YWJzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBhZGRUYWIoKTtcbiAgICB9XG4gIH1dKVxuICAuZGlyZWN0aXZlKCd0YWJIaWdobGlnaHQnLCBbZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50KSB7XG4gICAgICAgIC8vIEhlcmUgaXMgdGhlIG1ham9yIGpRdWVyeSB1c2FnZSB3aGVyZSB3ZSBhZGQgdGhlIGV2ZW50XG4gICAgICAgIC8vIGxpc3RlbmVycyBtb3VzZW1vdmUgYW5kIG1vdXNlb3V0IG9uIHRoZSB0YWJzIHRvIGluaXRhbGl6ZVxuICAgICAgICAvLyB0aGUgbW92aW5nIGhpZ2hsaWdodCBmb3IgdGhlIGluYWN0aXZlIHRhYnNcbiAgICAgICAgdmFyIHgsIHksIGluaXRpYWxfYmFja2dyb3VuZCA9ICcjYzNkNWU2JztcblxuICAgICAgICBlbGVtZW50XG4gICAgICAgICAgLnJlbW92ZUF0dHIoJ3N0eWxlJylcbiAgICAgICAgICAubW91c2Vtb3ZlKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBBZGQgaGlnaGxpZ2h0IGVmZmVjdCBvbiBpbmFjdGl2ZSB0YWJzXG4gICAgICAgICAgICBpZighZWxlbWVudC5oYXNDbGFzcygnYWN0aXZlJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHggPSBlLnBhZ2VYIC0gdGhpcy5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgICB5ID0gZS5wYWdlWSAtIHRoaXMub2Zmc2V0VG9wO1xuXG4gICAgICAgICAgICAgIC8vIFNldCB0aGUgYmFja2dyb3VuZCB3aGVuIG1vdXNlIG1vdmVzIG92ZXIgaW5hY3RpdmUgdGFic1xuICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgLmNzcyh7IGJhY2tncm91bmQ6ICctbW96LXJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgJyArIHggKyAncHggJyArIHkgKyAncHgsIHJnYmEoMjU1LDI1NSwyNTUsMC40KSAwcHgsIHJnYmEoMjU1LDI1NSwyNTUsMC4wKSA0NXB4KSwgJyArIGluaXRpYWxfYmFja2dyb3VuZCB9KVxuICAgICAgICAgICAgICAgIC5jc3MoeyBiYWNrZ3JvdW5kOiAnLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0ICcgKyB4ICsgJ3B4ICcgKyB5ICsgJ3B4LCByZ2JhKDI1NSwyNTUsMjU1LDAuNCkgMHB4LCByZ2JhKDI1NSwyNTUsMjU1LDAuMCkgNDVweCksICcgKyBpbml0aWFsX2JhY2tncm91bmQgfSlcbiAgICAgICAgICAgICAgICAuY3NzKHsgYmFja2dyb3VuZDogJ3JhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgJyArIHggKyAncHggJyArIHkgKyAncHgsIHJnYmEoMjU1LDI1NSwyNTUsMC40KSAwcHgsIHJnYmEoMjU1LDI1NSwyNTUsMC4wKSA0NXB4KSwgJyArIGluaXRpYWxfYmFja2dyb3VuZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5tb3VzZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIGluaXRhbCBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XSk7XG4iXX0=
