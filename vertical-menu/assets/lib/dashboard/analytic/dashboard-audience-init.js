"use strict";

/*--================================--*/
// Audience Overview DatePicker     
/*--================================--*/

$(function () {
	var isRtl = $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl';

	// Button         
	var start = moment().subtract(29, 'days');
	var end = moment();

	function cb(start, end) {
		$('#audienceOverviewDatePicker').html(start.format('MMM DD, YYYY') + ' - ' + end.format('MMM DD, YYYY'));
	}
	$('#audienceOverviewDatePicker').daterangepicker({
		startDate: start,
		endDate: end,
		ranges: {
			'Today': [moment(), moment()],
			'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
			'Last 7 Days': [moment().subtract(6, 'days'), moment()],
			'Last 30 Days': [moment().subtract(29, 'days'), moment()],
			'This Month': [moment().startOf('month'), moment().endOf('month')],
			'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
		},
		opens: (isRtl ? 'left' : 'right')
	}, cb);
	cb(start, end);

	// Replace icons         
	$('#audienceOverviewDatePicker').each(function () {
		var obj = $(this).data('daterangepicker');
		var _updateCalendars = obj.updateCalendars;
		obj.updateCalendars = function () {
			// Call original function
			_updateCalendars.call(obj)
			// Replace icons
			obj.container.find('.prev > i').each(function () {
				this.className = 'ion ion-ios-arrow-back'
			});
			obj.container.find('.next > i').each(function () {
				this.className = 'ion ion-ios-arrow-forward'
			});
			obj.container.find('.daterangepicker_input > i').each(function () {
				this.className = 'ion ion-md-calendar'
			});
			obj.container.find('.calendar-time > i').each(function () {
				this.className = 'ion ion-md-time'
			});
		};
	});
});


window.onload = function () {

	/*--================================--*/
	// Audience Overview Day Chart      
	/*--================================--*/

	var ctx1 = document.getElementById('audienceOverviewDay').getContext('2d');
	window.audienceOverviewDay = new Chart(ctx1, {

		type: 'line',
		data: {
			labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
			datasets: [{
				label: 'Avg. Session',
				fill: true,
				backgroundColor: 'rgba(92, 118, 251, 0.15)',
				borderColor: '#5c76fb',
				borderWidth: 1,
				data: [520, 450, 680, 530, 750, 560, 780],
			}]
		},
		options: {
			responsive: true,
			tooltips: {
				intersect: true,
				bodyFontSize: 13,
				bodyFontFamily: '"IBM Plex Sans", sans-serif',
			},
			hover: {
				intersect: true
			},
			scales: {
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Visitors',
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					ticks: {
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: true,
						color: '#eee',
					},
				}],
				xAxes: [{
					display: true,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: true,
						color: '#eee',
					},
				}],

			},
			legend: {
				display: false,
			},
		}
	});

	/*--================================--*/
	// Audience Overview Week Chart      
	/*--================================--*/

	var ctx1 = document.getElementById('audienceOverviewWeek').getContext('2d');
	window.audienceOverviewWeek = new Chart(ctx1, {

		type: 'line',
		data: {
			labels: ['1', '2', '3', '4', '5', '6', '7'],
			datasets: [{
				label: 'Avg. Session',
				fill: true,
				backgroundColor: 'rgba(76, 175, 80, 0.15)',
				borderColor: '#4caf50',
				borderWidth: 1,
				data: [1520, 1450, 1680, 1530, 1750, 1560, 1780],
			}]
		},
		options: {
			responsive: true,
			tooltips: {
				intersect: true,
				bodyFontSize: 13,
				bodyFontFamily: '"IBM Plex Sans", sans-serif',
			},
			hover: {
				intersect: true
			},
			scales: {
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Visitors',
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					ticks: {
						beginAtZero: true,
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: true,
						color: '#eee',
					},
				}],
				xAxes: [{
					display: true,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: true,
						color: '#eee',
					},
				}],

			},
			legend: {
				display: false,
			},
		}
	});

	/*--================================--*/
	// Audience Overview Month Chart      
	/*--================================--*/

	var ctx1 = document.getElementById('audienceOverviewMonth').getContext('2d');
	window.audienceOverviewMonth = new Chart(ctx1, {

		type: 'bar',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			datasets: [{
				label: 'Avg. Session',
				fill: true,
				backgroundColor: 'rgba(33, 150, 243, 0.15)',
				borderColor: '#2196f3',
				borderWidth: 0.5,
				data: [2520, 2450, 2680, 2750, 2560, 2780, 2520, 2450, 2680, 2750, 2560, 2780],
			}]
		},
		options: {

			responsive: true,
			tooltips: {
				intersect: true,
				bodyFontSize: 13,
				bodyFontFamily: '"IBM Plex Sans", sans-serif',
			},
			hover: {
				intersect: true
			},
			scales: {
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Visitors',
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					ticks: {
						beginAtZero: true,
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: true,
						color: '#eee',
					},
				}],
				xAxes: [{
					display: true,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: true,
						color: '#eee',
					},
				}],

			},
			legend: {
				display: false,
			},
		}
	});

	/*--================================--*/
	// Audience Overview Year Chart      
	/*--================================--*/

	var ctx1 = document.getElementById('audienceOverviewYear').getContext('2d');
	window.audienceOverviewYear = new Chart(ctx1, {

		type: 'bar',
		data: {
			labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
			datasets: [{
				label: 'Avg. Session',
				fill: true,
				backgroundColor: 'rgba(156, 39, 176, 0.15)',
				borderColor: '#9c27b0',
				borderWidth: 0.5,
				data: [8520, 8450, 8680, 8750, 9560, 9780, 8520, 9450, 10680, 10750, 11560, 12780],
			}]
		},
		options: {

			responsive: true,
			tooltips: {
				intersect: true,
				bodyFontSize: 13,
				bodyFontFamily: '"IBM Plex Sans", sans-serif',
			},
			hover: {
				intersect: true
			},
			scales: {
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Visitors',
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					ticks: {
						beginAtZero: true,
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: true,
						color: '#eee',
					},
				}],
				xAxes: [{
					display: true,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 13,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: true,
						color: '#eee',
					},
				}],

			},
			legend: {
				display: false,
			},
		}
	});

	/*--================================--*/
	// Audience Users Chart      
	/*--================================--*/

	var ctx1 = document.getElementById('audienceUsers').getContext('2d');
	window.audienceUsers = new Chart(ctx1, {

		type: 'line',
		data: {
			labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
			datasets: [{
				label: 'Users',
				fill: true,
				backgroundColor: 'rgba(92, 118, 251, 0.15)',
				borderColor: '#5c76fb',
				borderWidth: 1,
				pointStyle: 'cross',
				data: [520, 450, 680, 530, 750, 560, 780],
			}]
		},
		options: {
			responsive: true,
			tooltips: {
				bodyFontSize: 13,
				bodyFontFamily: '"IBM Plex Sans", sans-serif',
			},

			scales: {
				yAxes: [{
					display: false,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 8,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: false,
						color: '#eee',
					},
				}],
				xAxes: [{
					display: true,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 8,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: false,
						color: '#eee',
					},
				}],

			},
			legend: {
				display: false,
			},
		}
	});

	/*--================================--*/
	// Audience New Users Chart      
	/*--================================--*/

	var ctx1 = document.getElementById('audienceNewUsers').getContext('2d');
	window.audienceNewUsers = new Chart(ctx1, {

		type: 'line',
		data: {
			labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
			datasets: [{
				label: 'New Users',
				fill: true,
				backgroundColor: 'rgba(244, 67, 54, 0.15)',
				borderColor: '#f44336',
				borderWidth: 1,
				pointStyle: 'cross',
				data: [680, 450, 560, 530, 650, 520, 690],
			}]
		},
		options: {
			responsive: true,
			tooltips: {
				bodyFontSize: 13,
				bodyFontFamily: '"IBM Plex Sans", sans-serif',
			},

			scales: {
				yAxes: [{
					display: false,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 8,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: false,
						color: '#eee',
					},
				}],
				xAxes: [{
					display: true,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 8,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: false,
						color: '#eee',
					},
				}],

			},
			legend: {
				display: false,
			},
		}
	});

	/*--================================--*/
	// Audience Sessions Chart      
	/*--================================--*/

	var ctx1 = document.getElementById('audienceSessions').getContext('2d');
	window.audienceSessions = new Chart(ctx1, {

		type: 'line',
		data: {
			labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
			datasets: [{
				label: 'Sessions',
				fill: true,
				backgroundColor: 'rgba(76, 175, 80, 0.15)',
				borderColor: '#4caf50',
				borderWidth: 1,
				pointStyle: 'cross',
				data: [680, 450, 560, 530, 590, 520, 690],
			}]
		},
		options: {
			responsive: true,
			tooltips: {
				bodyFontSize: 13,
				bodyFontFamily: '"IBM Plex Sans", sans-serif',
			},

			scales: {
				yAxes: [{
					display: false,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 8,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: false,
						color: '#eee',
					},
				}],
				xAxes: [{
					display: true,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 8,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: false,
						color: '#eee',
					},
				}],

			},
			legend: {
				display: false,
			},
		}
	});

	/*--================================--*/
	// Audience Pageviews Chart      
	/*--================================--*/

	var ctx1 = document.getElementById('audiencePageviews').getContext('2d');
	window.audiencePageviews = new Chart(ctx1, {

		type: 'line',
		data: {
			labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
			datasets: [{
				label: 'Pageviews',
				fill: true,
				backgroundColor: 'rgba(33, 150, 243, 0.15)',
				borderColor: '#2196f3',
				borderWidth: 1,
				pointStyle: 'cross',
				data: [2680, 2450, 2160, 2530, 2750, 2520, 2690],
			}]
		},
		options: {
			responsive: true,
			tooltips: {
				bodyFontSize: 13,
				bodyFontFamily: '"IBM Plex Sans", sans-serif',
			},

			scales: {
				yAxes: [{
					display: false,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 8,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: false,
						color: '#eee',
					},
				}],
				xAxes: [{
					display: true,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 8,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: false,
						color: '#eee',
					},
				}],

			},
			legend: {
				display: false,
			},
		}
	});

	/*--================================--*/
	// Audience Avg. Session Duration Chart      
	/*--================================--*/

	var ctx1 = document.getElementById('audienceSessionDuration').getContext('2d');
	window.audienceSessionDuration = new Chart(ctx1, {

		type: 'line',
		data: {
			labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
			datasets: [{
				label: 'Avg. Session',
				fill: true,
				backgroundColor: 'rgba(74, 199, 236, 0.15)',
				borderColor: '#4ac7ec',
				borderWidth: 1,
				pointStyle: 'cross',
				data: [268, 275, 245, 252, 253, 216, 269],
			}]
		},
		options: {
			responsive: true,
			tooltips: {
				bodyFontSize: 13,
				bodyFontFamily: '"IBM Plex Sans", sans-serif',
			},

			scales: {
				yAxes: [{
					display: false,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 8,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: false,
						color: '#eee',
					},
				}],
				xAxes: [{
					display: true,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 8,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: false,
						color: '#eee',
					},
				}],

			},
			legend: {
				display: false,
			},
		}
	});

	/*--================================--*/
	// Audience Bounce Rate Chart      
	/*--================================--*/

	var ctx1 = document.getElementById('audienceBounceRate').getContext('2d');
	window.audienceBounceRate = new Chart(ctx1, {

		type: 'line',
		data: {
			labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
			datasets: [{
				label: 'Bounce Rate',
				fill: true,
				backgroundColor: 'rgba(156, 39, 176, 0.15)',
				borderColor: '#9c27b0',
				borderWidth: 1,
				pointStyle: 'cross',
				data: [252, 275, 253, 268, 245, 216, 300],
			}]
		},
		options: {
			responsive: true,
			tooltips: {
				fontColor: '#868DAA',
				fontSize: 13,
				fontStyle: "normal",
				fontFamily: '"IBM Plex Sans", sans-serif',
				callbacks: {
					label: function (tooltipItem, data) {
						var dataset = data.datasets[tooltipItem.datasetIndex];
						var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
							return previousValue + currentValue;
						});
						var currentValue = dataset.data[tooltipItem.index];
						var percentage = Math.floor(((currentValue / total) * 100) + 0.5);

						return percentage + "%";
					}
				}
			},
			scales: {
				yAxes: [{
					display: false,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 8,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: false,
						color: '#eee',
					},
				}],
				xAxes: [{
					display: true,
					ticks: {
						fontColor: '#868DAA',
						fontSize: 8,
						fontStyle: "normal",
						fontFamily: '"IBM Plex Sans", sans-serif',
					},
					gridLines: {
						display: false,
						color: '#eee',
					},
				}],

			},
			legend: {
				display: false,
			},
		}
	});

	/*--================================--*/
	// Sessions Device Doughnut    
	/*--================================--*/

	var value1 = 40;
	var value2 = 85;
	var value3 = 80;
	var value4 = 95;
	var data = {
		labels: [
			"Desktop",
			"Tablet",
			"Mobile",
			"Others"
		],
		datasets: [{
			data: [value1, 100 - value2, 100 - value3, 100 - value4],
			backgroundColor: [
				"#3355FF",
				"#E0E7FD",
				"#4AC7EC",
				"#FF6384"
			]
		}]
	};

	var sessionsDeviceDount = new Chart(document.getElementById('sessionsDeviceDount'), {
		type: 'doughnut',
		data: data,
		options: {
			responsive: true,
			legend: {
				display: true,
				position: 'bottom',
				labels: {
					boxWidth: 13,
					fontColor: '#868DAA',
					fontSize: 13,
					fontStyle: "normal",
					fontFamily: '"IBM Plex Sans", sans-serif',
				},
			},
			cutoutPercentage: 80,
			tooltips: {
				fontColor: '#868DAA',
				fontSize: 13,
				fontStyle: "normal",
				fontFamily: '"IBM Plex Sans", sans-serif',
				callbacks: {
					label: function (tooltipItem, data) {
						var dataset = data.datasets[tooltipItem.datasetIndex];
						var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
							return previousValue + currentValue;
						});
						var currentValue = dataset.data[tooltipItem.index];
						var percentage = Math.floor(((currentValue / total) * 100) + 0.5);

						return percentage + "%";
					}
				}
			}

		}
	});

}