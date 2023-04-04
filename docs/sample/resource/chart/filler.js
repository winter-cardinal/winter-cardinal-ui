(function() {
	window.ChartFiller = class ChartFiller {
		constructor(application, chart){
			this._chart = chart;
		}

		fill(size) {
			const plotArea = this._chart.plotArea;
			for( let i = 0, imax = plotArea.series.size(); i < imax; ++i ) {
				const series = plotArea.series.get( i );
				const points = series.points;
				if (points != null) {
					for (let j = 0; j < size; ++j) {
						const dx = 32 * j * 0.025;
						const dy = Math.sin( dx * 0.025 * (1 + i) + 0.5 * Math.PI * i );
						points.push( dx + i * 10, dy);
					}
					series.toDirty();
				}
			}
			plotArea.coordinate.fit();
			plotArea.axis.update();
			plotArea.series.update();
			return this;
		}
	}
}());
