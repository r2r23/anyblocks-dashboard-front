<template>
    <div class="tracking">
        <div class="controls all-cols">
            <select v-model="periodChosen">
                <option v-for="(period, key) in periods" :key="key" :value="key">{{ period }}</option>
            </select>
        </div>
        <div class="pad all-cols">
            <h2>All requests</h2>
            <div class="chart">
                <highcharts :options="areaChartOptions" ref="area"></highcharts>
            </div>
        </div>
        <div class="pad">
            <h2>Composition</h2>
            <highcharts :options="pieChartOptions" ref="area"></highcharts>
        </div>
        <div class="pad">
            <h2>Pie chart 2</h2>
            <highcharts :options="pieChartOptions" ref="area"></highcharts>
        </div>
        <div class="pad">
            <h2>Some other chart</h2>
            <highcharts :options="pieChartOptions" ref="area"></highcharts>
        </div>
        <div class="pad all-cols">
            <h2>Table data</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "TrackingView",
    mounted() {
        setTimeout( () => {
            this.areaChartOptions.xAxis.categories.push('apr-10')
            this.areaChartOptions.series[0].data.push(100)
            this.areaChartOptions.series[1].data.push(200)
            this.areaChartOptions.series.push({
                name: 'asd',
                data: [1000,1000,1000,1000,1000,1000,500,0]
            })
            this.$refs['area'].chart.reflow()

            this.pieChartOptions.series[0].data = [12,13,111]
        }, 1500)
    },
    data() {
        return {
            periodChosen: 'month',
            periods: {
                day: 'Today',
                week: 'This week',
                month: 'This month'
            },
            areaChartOptions: {
                chart: {
                    type: 'area',
                    height: 300
                },
                title: null,
                xAxis: {
                    categories: ['apr-01', 'apr-02', 'apr-03', 'apr-04', 'apr-05', 'apr-06', 'apr-07', 'apr-08', 'apr-09'],
                    tickmarkPlacement: 'on',
                    title: {
                        enabled: false
                    }
                },
                yAxis: {
                    title: null
                },
                plotOptions: {
                    area: {
                        stacking: 'normal',
                        lineColor: '#666666',
                        lineWidth: 1,
                        marker: {
                            lineWidth: 1,
                            lineColor: '#666666'
                        }
                    }
                },
                series: [
                    {
                        name: 'Usual requests',
                        data: [502, 635, 809, 947, 1402, 1634, 1889, 2845, 3945]
                    },
                    {
                        name: 'Super cool requests',
                        data: [106, 107, 111, 133, 221, 767, 1123, 1568, 2000]
                    }
                ],
                credits: {
                    enabled: false
                },
            },
            pieChartOptions: {
                chart: {
                    type: 'pie',
                    height: 250,
                    backgroundColor: '#ffffff'
                },
                title: false,
                legend: false,
                credits: false,
                plotOptions: {
                    pie: {
                        dataLabels: false
                    }
                },
                series: [{
                    name: '',
                    data: [12,13,14]
                }]
            },
        }
    }
}
</script>

<style scoped>

.tracking {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--gutter);
}

.all-cols {
    grid-column: 1/-1;
}

.controls {
    text-align: right;
}

.controls select {
    height: 40px;
    padding: 0 10px;
    background: white;
    border: 1px solid rgba(10, 54, 119, 0.2);
}

.chart {
    width: 95%; /* workaround, because highchart stretches width of grid cell  */
}

</style>