({
	doughnutData : function(component, event,listOfRows) {
        var statusMap = new Map();
        for(var i=0;i<listOfRows.length;i++){
       		var eachArr = listOfRows[i];
            if(statusMap.has(eachArr[2])){
            	statusMap.set(eachArr[2],(statusMap.get(eachArr[2]))+1);   
            }
        	else{
            	statusMap.set(eachArr[2],1);
        	}
        }
        var keys = Array.from( statusMap.keys());
        component.set("v.listOfStatus",keys);
        component.set("v.statusCount",Array.from( statusMap.values()));
	},
    showdoughnut : function(component, event,listOfRows) {
        debugger;
        var data = {
            labels: component.get("v.listOfStatus"), 
            datasets: [
                {
                    data: [0, 0, 0],
                    backgroundColor: [
                        "rgba(255,203,75,.8)",
                        "rgba(143,134,132,.8)",
                        "rgba(153,119,61,.8)",
                        "rgba(113,21,9, 1)",
                        "rgba(63,60,59, 1)",
                        "rgba(39,19,103, 1)",
                        "rgba(9,113,84, 1)",
                        "rgba(2, 34, 25, 1)"
                        
                    ]               
                }
            ]
        };
        
        var ctx = component.find("chart").getElement();
        component.chart = new Chart(ctx,{
            type: 'doughnut',
            data: data,
			options: {
                responsive: true,
                maintainAspectRatio: false,
                onClick: function(event) {
                    var elements = component.chart.getElementAtEvent(event);
                    /*if (elements.length === 1) {
						var chartEvent = $A.get("e.c:ChartEvent");
                        chartEvent.setParams({
                            data: {
                                year: component.get("v.year"),
                                country: component.get("v.country"),
                                medalType: component.chart.data.labels[elements[0]._index]
                            }
                        });
        				chartEvent.fire();
                    }*/
                    var medals = component.get("v.statusCount");
                        component.chart.data.datasets[0].data = medals;
                        component.chart.update();
                        return;
                }
            }

        });
	}
})