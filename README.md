API

Получение данных о станках

Request: 
type: get, url: /machines

Response:

[   {id:1, name: "machine1", location: "1 cex"},
    {id:2, name: "machine2", location: "2 cex"},
    {id:3, name: "machine3", location: "3 cex"},
    {id:4, name: "machine4", location: "4 cex"},
    {id:5, name: "machine5", location: "5 cex"}
    ];

Получение данных о статистики за месяц

Request: 
type: post, url: /chart
body: date: {date: "2019-12-24T14:39:58.010Z"}
      id: 1
      
Response: 
[
    ['Day', 'Details Total: 13650'],
    ['2',  1000],
    ['3',  1100],
    ['4',  1180],
    ['5',  1080],
    ['6',  1250],
    ['7',  1310],
    ['8',  1500],
    ['10',  1430],
    ['11',  1250],
    ['12',  1340],
    ['13',  1210],
];

Получение данных статистики за день

Request: 
type: post, url: /details
body: date: {date: "2019-12-24T14:39:58.010Z"}
      id: 1
      
Responce:
[
    {id:1, time: '9:53', detailNumber: 1},
    {id:1, time: '10:11', detailNumber: 2},
    {id:1, time: '10:48', detailNumber: 3},
    {id:1, time: '11:30', detailNumber: 4},
    {id:1, time: '11:59', detailNumber: 5},
    {id:1, time: '12:22', detailNumber: 6},
    {id:1, time: '13:14', detailNumber: 7},
    {id:1, time: '13:49', detailNumber: 8},
]