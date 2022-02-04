(function() {
	window.ChartUpdater = class ChartUpdater {
		constructor(application, chart){
			this._x = Date.now();
			this._x0 = this._x;
			this._isEnabled = false;
			this._updateBound = () => {
				this.update();
			};
			this._chart = chart;
			this._speed = 32;
			this._capacity = 512;
			this._offsetX = 10;
			this._offsetY = 0;
			this._modifier = function(y) {return y;}
			this._animation = false;
			this._interval = 32;

			const button = new wcardinal.ui.DButton({
				parent: application.stage,
				x: 390, y: 520,
				text: {
					value: "Stop"
				},
				on: {
					active: () => {
						this.toggle();
						button.text = this.isStarted() ? "Stop" : "Start";
					}
				}
			});

			new wcardinal.ui.DButton({
				parent: application.stage,
				x: 500, y: 520,
				text: {
					value: "Fit"
				},
				on: {
					active: () => {
						chart.plotArea.view.fit();
					}
				}
			});
		}

		start() {
			this._isEnabled = true;
			this.update();
			return this;
		}

		stop() {
			this._isEnabled = false;
			return this;
		}

		toggle() {
			if( this._isEnabled ) {
				this._isEnabled = false;
			} else {
				this._isEnabled = true;
				this.update();
			}
			return this;
		}

		isStarted() {
			return this._isEnabled;
		}

		speed(speed) {
			this._speed = speed;
			return this;
		}

		capacity(capacity) {
			this._capacity = capacity;
			return this;
		}

		offset(x, y) {
			this._offsetX = x;
			this._offsetY = y;
			return this;
		}

		modifier(modifier) {
			this._modifier = modifier;
			return this;
		}

		animation(enabled) {
			this._animation = enabled;
			return this;
		}

		interval(interval) {
			this._interval = interval;
			return this;
		}

		update() {
			this._x += this._speed;
			const dx = (this._x - this._x0) * 0.025;

			const plotArea = this._chart.plotArea;
			const size = plotArea.series.size();
			for( let i = 0; i < size; ++i ) {
				const series = plotArea.series.get( i );
				const points = series.points;
				if (points != null) {
					const dy = this._modifier(
						Math.sin( dx * 0.025 * (1 + i) + 0.5 * Math.PI * i )
					);
					points.push( dx + i * this._offsetX, dy + i * this._offsetY );
					if( this._capacity < series.points.length ) {
						points.shift();
						points.shift();
					}
					series.toDirty();
				}
			}
			if (this._animation) {
				plotArea.fit();
			} else {
				plotArea.coordinate.fit();
				plotArea.axis.update();
				plotArea.series.update();
			}

			if( this._isEnabled ) {
				setTimeout( this._updateBound, this._interval );
			}

			return this;
		}
	}
}());
