<template>
	<div ref="chartdiv" class="donutChart" />
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

am4core.useTheme(am4themes_animated)
let chart = null
export default {
	name: 'DonutChart',
	props: {
		chartData: {
			type: Array,
			required: true,
		},
	},
	watch: {
		chartData() {
			if (this.chart) this.chart.invalidateRawData()
		},
	},
	computed: {
		winRate() {
			return (
				(this.chartData[0].count /
					(this.chartData[0].count + this.chartData[1].count)) *
				100
			)
		},
	},
	mounted() {
		chart = am4core.create(this.$refs.chartdiv, am4charts.PieChart)

		chart.padding = 80

		chart.data = this.chartData

		chart.innerRadius = am4core.percent(65)

		var pieSeries = chart.series.push(new am4charts.PieSeries())
		pieSeries.dataFields.value = 'count'
		pieSeries.dataFields.category = 'title'

		// pieSeries.slices.template.tooltipText = '{country}'
		pieSeries.slices.template.propertyFields.fill = 'color'
		pieSeries.slices.template.stroke = am4core.color('#fff')
		pieSeries.slices.template.strokeWidth = 2
		pieSeries.slices.template.strokeOpacity = 1
		pieSeries.ticks.template.disabled = true
		pieSeries.labels.template.disabled = true

		let label = pieSeries.createChild(am4core.Label)
		label.text = this.winRate + '%'
		label.horizontalCenter = 'middle'
		label.verticalCenter = 'middle'
		label.fontSize = 15

		// pieSeries.hiddenState.properties.opacity = 1
		// pieSeries.hiddenState.properties.endAngle = -90
		// pieSeries.hiddenState.properties.startAngle = -90
	},

	beforeDestroy() {
		if (chart) {
			chart.dispose()
		}
	},
}
</script>

<style>
.donutChart {
	width: 160px;
	height: 160px;
}
</style>
