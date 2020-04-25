var Calendar = require('tui.Calendar');
require("dist/tui-calendar.css");
require("node_modules/tui-date-picker/dist/tui-date-picker.css");
require("node_modules/tui-time-picker/dist/tui-time-picker.css");

import Calendar from 'tui-calendar.js'; /* ES6 */
import "dist/tui-calendar.css";

//  default popups
import 'node_modules/tui-date-picker/dist/tui-date-picker.css';
import 'node_modules/tui-time-picker/dist/tui-time-picker.css';

var calendar = new Calendar('#calendar', 
{
    defaultView: 'week',
    scheduleView: true,

    template: {
        milestone: function(schedule) {
          return '<span style="color:red;"><i class="fa fa-flag"></i> ' + schedule.title + '</span>';
        },
        milestoneTitle: function() {
          return 'Milestone';
        },
        task: function(schedule) {
          return '&nbsp;&nbsp;#' + schedule.title;
        },
        taskTitle: function() {
          return '<label><input type="checkbox" />Task</label>';
        },
        allday: function(schedule) {
          return schedule.title + ' <i class="fa fa-refresh"></i>';
        },
        alldayTitle: function() {
          return 'All Day';
        },
        time: function(schedule) {
          return schedule.title + ' <i class="fa fa-refresh"></i>' + schedule.start;
        }
      },
      week: {
        daynames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        startDayOfWeek: 0,
        narrowWeekend: true
      },
      month: {
        daynames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        startDayOfWeek: 0,
        narrowWeekend: true
      },
  
      // list of Calendars that can be used to add new schedule
      calendars: [],
  
      // whether use default creation popup or not
      useCreationPopup: false,
  
      // whether use default detail popup or not
      useDetailPopup: false

});