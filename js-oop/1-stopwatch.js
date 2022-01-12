function Stopwatch() {
    let duration = 0;
    let isRunning = false;
    let startTime, endTime;

    // Read-only property
    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    });

    this.start = function() {
        if(isRunning)
            throw new Error("Stopwatch has already started.");

        isRunning = true;
        startTime = new Date();
    };

    this.stop = function() {
        if(!isRunning)
            throw new Error("Stopwatch is not started.");

        isRunning = false;
        endTime = new Date;

        // Return the milliseconds between the two date objects
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function() {
        duration = 0;
        isRunning = false;
        startTime = null;
        endTime = null;
    }
}