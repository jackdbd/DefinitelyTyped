// Type definitions for @vx/scale 0.0
// Project: https://github.com/hshoff/vx
// Definitions by: Giacomo Debidda <https://github.com/jackdbd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {
    ScaleBand as D3ScaleBand,
    ScaleLinear as D3ScaleLinear,
    ScaleLogarithmic as D3ScaleLogarithmic,
    ScaleOrdinal as D3ScaleOrdinal,
    ScalePoint as D3ScalePoint,
    ScalePower as D3ScalePower,
    ScaleQuantile as D3ScaleQuantile,
    ScaleQuantize as D3ScaleQuantize,
    ScaleThreshold as D3ScaleThreshold,
    ScaleTime as D3ScaleTime,
} from "d3-scale";
import { ReactElement } from "react";

// --- TYPE ALIASES ------------------------------------------------------------

// type Range = (range: ReadonlyArray<any>) => this;

export type NumberLike = number | { valueOf(): number };

export type Accessor<T, R> = (datum: T) => R;

export type Domain = number | string | Date;

export type Output = any;

export type ScaleBandDomain = number | NumberLike | string;

export type ScaleLinearRange = number | string;
export type ScaleLinearOutput = number | string;

export type ScaleQuantizeRange = string;

export type ScaleThresholdDomain = number | string | Date;
export type ScaleThresholdRange = string;

export type ScaleTimeRange = Date | number | NumberLike;
export type ScaleTimeOutput = number;

export type ScaleFunction =
    | ScaleBand<ScaleBandDomain>
    | ScaleLinear<ScaleLinearRange, ScaleLinearOutput>
    | ScaleOrdinal<any, any>
    | ScaleQuantize<ScaleQuantizeRange>
    | ScaleThreshold
    | ScaleTime<ScaleTimeRange, ScaleTimeOutput>;

// export type AccessorFunction = (d: object) => Pick<object, K>

// --- INTERFACES --------------------------------------------------------------

export interface ScalePointOptions {
    align?: number;
    domain: boolean;
    nice?: boolean;
    padding?: boolean;
    range?: boolean;
    rangeRound?: NumberLike[];
}

export interface ScaleBandOptions {
    align?: number;
    domain: number[] | NumberLike[] | string[];
    padding?: number;
    paddingInner?: number;
    paddingOuter?: number;
    range?: number[];
    rangeRound?: NumberLike[];
    tickFormat?: any;
}

export interface ScaleLinearOptions {
    clamp?: boolean;
    domain: number[] | NumberLike[];
    nice?: boolean;
    range?: number[] | string[];
    rangeRound?: NumberLike[];
}

export interface ScaleLogOptions {
    base?: number;
    clamp?: boolean;
    domain: number[];
    nice?: boolean;
    range?: number[];
    rangeRound?: NumberLike[];
}

export interface ScaleOrdinalOptions {
    domain: number[] | NumberLike[] | string[];
    range?: string[] | ReactElement[];
    unknown?: boolean;
}

/* tslint:disable-next-line no-empty-interface */
export interface ScaleQuantileOptions {
    domain: number[];
    range?: number[];
}

export interface ScaleQuantizeOptions {
    domain: number[] | string[] | undefined[];
    range?: string[];
    nice?: boolean;
    tickFormat?: boolean;
    ticks?: boolean;
}

export interface ScalePowerOptions {
    clamp?: boolean;
    domain: number[];
    exponent?: number;
    nice?: boolean;
    range?: number[];
    rangeRound?: NumberLike[];
}

export interface ScaleThresholdOptions {
    domain: number[];
    range?: Date[] | number[] | string[];
}

export interface ScaleTimeOptions {
    clamp?: boolean;
    domain: Date[] | number[] | NumberLike[];
    nice?: boolean;
    range?: [Date, Date] | [number, number] | [NumberLike, NumberLike];
    rangeRound?: NumberLike[];
}

export interface ScaleUtcOptions {
    clamp?: boolean;
    nice?: boolean;
    rangeRound?: NumberLike[];
}

export interface ScaleBand<Domain> extends D3ScaleBand<Domain> {
    type: 'band';
}

export interface ScaleLinear<Range, Output> extends D3ScaleLinear<Range, Output> {
    type: 'linear';
}

export interface ScaleLog extends D3ScaleLogarithmic<Range, Output> {
    type: 'log';
}

export interface ScaleOrdinal<Domain, Range> extends D3ScaleOrdinal<Domain, Range> {
    type: 'ordinal';
}

export interface ScalePoint extends D3ScaleLogarithmic<Range, Output> {
    type: 'point';
}

export interface ScalePower extends D3ScalePower<Range, Output> {
    type: 'power';
}

export interface ScaleQuantile extends D3ScaleQuantile<Range> {
    type: 'quantile';
}

export interface ScaleQuantize<Range> extends D3ScaleQuantize<Range> {
    type: 'quantize';
}

export interface ScaleThreshold extends D3ScaleThreshold<ScaleThresholdDomain, ScaleThresholdRange> {
    type: 'threshold';
}

export interface ScaleTime<Range, Output> extends D3ScaleTime<Range, Output> {
    type: 'time';
}

export interface ScaleUtc extends D3ScaleTime<Range, Output> {
    type: 'utc';
}

// --- FUNCTIONS ---------------------------------------------------------------

export function scaleBand(options: ScaleBandOptions): ScaleBand<typeof options.domain[0]>;

export function scaleLinear(options: ScaleLinearOptions): ScaleLinear<ScaleLinearRange, ScaleLinearOutput>;

export function scaleLog(options: ScaleLogOptions): ScaleLog;

export function scaleOrdinal(options: ScaleOrdinalOptions): ScaleOrdinal<typeof options.domain[0], string>;

export function scalePoint(options: ScalePointOptions): ScalePoint;

export function scalePower(options: ScalePowerOptions): ScalePower;

export function scaleQuantile(options: ScaleQuantileOptions): ScaleQuantile;

export function scaleQuantize(options: ScaleQuantizeOptions): ScaleQuantize<ScaleQuantizeRange>;

export function updateScale(): ScaleFunction;

export function scaleThreshold(options: ScaleThresholdOptions): ScaleThreshold;

export function scaleTime(options: ScaleTimeOptions): ScaleTime<ScaleTimeRange, ScaleTimeOutput>;

export function scaleUtc(options: ScaleUtcOptions): ScaleUtc;
