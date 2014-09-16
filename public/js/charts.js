//Burndown charts
var chart = c3.generate({
    bindto: '#burndown-charts',
    data: {
      columns: [
        ['base', 90, 80, 70, 60, 50, 40, 30, 20, 10, 0],
        ['team1', 90, 82, 66, 55, 43, 44, 37, 19, 11, 7],
        ['team2', 87, 75, 65, 55, 45, 35, 20, 15, 2, 5]
      ]
    },
    color: {
        pattern: ['#979797', '#6BAC1B', '#40BEFA', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
    },
    point: {
        r: 5
    },
    axis: {
        x: { show: false },
        y: { show: false }
    },
    legend: {
        show: false
    }
});

//Sprint status chart
var chart = c3.generate({
    bindto: '#sprint-charts',
    data: {
        columns: [
            ['sprint', 35, 10, 7, 1, 2, 10]
        ],
        types: {
            sprint: 'area-spline'
        }
    },
    color: {
        pattern: ['#6BAC1B', '#40BEFA', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
    },
    point: {
        r: 0
    },
    axis: {
        x: { show: false },
        y: { show: false }
    },
    legend: {
        show: false
    }
});