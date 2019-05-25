/**
 * Typescript definition tests for vx/vx-scale module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */
import {
    scaleBand,
    scaleLinear,
    ScaleLinear,
    ScaleLinearRange,
    scaleOrdinal,
    ScaleOrdinal,
    scaleThreshold,
    ScaleThreshold,
    scaleTime,
    ScaleTime,
    updateScale
} from "vx__scale";

// $ExpectType ScaleBand<string | { valueOf(): number; }>
scaleBand({
    domain: [0, 1]
});

// $ExpectType ScaleLinear<ScaleLinearRange, number>
scaleLinear({
    domain: [0, 1]
});

// scaleThreshold({}); // $ExpectType ScaleThreshold

// scaleTime({}); // $ExpectType ScaleTime
// scaleTime({}); // $ExpectType ScaleTime

// updateScale(); // $ExpectType ScaleFunction

// $ExpectType ScaleOrdinal<number, string>
scaleOrdinal({
    domain: [0, 10],
    range: ["red", "green", "blue"],
});

// $ExpectType ScaleOrdinal<string, string>
scaleOrdinal({
    domain: ["hulk", "superman", "zorro"],
    range: ["red", "green", "blue"],
});
