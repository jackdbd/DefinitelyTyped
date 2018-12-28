// Type definitions for gl-mat4 1.2
// Project: https://github.com/stackgl/gl-mat4
// Definitions by: Giacomo Debidda <https://github.com/jackdbd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare namespace m4 {
    type Vec3 = [number, number, number];
    type Vec4 = [number, number, number, number];
    type Mat4 =
        | [
              number,
              number,
              number,
              number,
              number,
              number,
              number,
              number,
              number,
              number,
              number,
              number,
              number,
              number,
              number,
              number
          ]
        | [Vec4, Vec4, Vec4, Vec4];
    type Quat4 = Vec4;
    interface Fov {
        downDegrees: number;
        leftDegrees: number;
        rightDegrees: number;
        upDegrees: number;
    }
}

export function adjoint(out: m4.Mat4, a: Readonly<m4.Mat4>): m4.Mat4;
export function clone(a: Readonly<m4.Mat4>): m4.Mat4;
export function copy(out: m4.Mat4, a: Readonly<m4.Mat4>): m4.Mat4;
export function create(): m4.Mat4;
export function determinant(a: Readonly<m4.Mat4>): number;
export function fromQuat(out: m4.Mat4, q: m4.Quat4): m4.Mat4;
export function fromRotation(
    out: m4.Mat4,
    rad: number,
    axis: Readonly<m4.Vec3>
): m4.Mat4 | null;
export function fromRotationTranslation(
    out: m4.Mat4,
    q: m4.Quat4,
    v: Readonly<m4.Vec3>
): m4.Mat4;
export function fromScaling(out: m4.Mat4, v: Readonly<m4.Vec3>): m4.Mat4;
export function fromTranslation(out: m4.Mat4, v: Readonly<m4.Vec3>): m4.Mat4;
export function fromXRotation(out: m4.Mat4, rad: number): m4.Mat4;
export function fromYRotation(out: m4.Mat4, rad: number): m4.Mat4;
export function fromZRotation(out: m4.Mat4, rad: number): m4.Mat4;
export function frustum(
    out: m4.Mat4,
    left: number,
    right: number,
    bottom: number,
    top: number,
    near: number,
    far: number
): m4.Mat4;
export function identity(out: m4.Mat4): m4.Mat4;
export function invert(out: m4.Mat4, a: Readonly<m4.Mat4>): m4.Mat4 | null;
export function lookAt(
    out: m4.Mat4,
    eye: Readonly<m4.Vec3>,
    center: Readonly<m4.Vec3>,
    up: Readonly<m4.Vec3>
): m4.Mat4;
export function multiply(out: m4.Mat4, a: m4.Mat4, b: m4.Mat4): m4.Mat4;
export function ortho(
    out: m4.Mat4,
    left: number,
    right: number,
    bottom: number,
    top: number,
    near: number,
    far: number
): m4.Mat4;
export function perspective(
    out: m4.Mat4,
    fovy: number,
    aspect: number,
    near: number,
    far: number
): m4.Mat4;
export function perspectiveFromFieldOfView(
    out: m4.Mat4,
    fov: m4.Fov,
    near: number,
    far: number
): m4.Mat4;
export function rotate(
    out: m4.Mat4,
    a: Readonly<m4.Mat4>,
    rad: number,
    axis: Readonly<m4.Vec3>
): m4.Mat4;
export function rotateX(
    out: m4.Mat4,
    a: Readonly<m4.Mat4>,
    rad: number
): m4.Mat4;
export function rotateY(
    out: m4.Mat4,
    a: Readonly<m4.Mat4>,
    rad: number
): m4.Mat4;
export function rotateZ(
    out: m4.Mat4,
    a: Readonly<m4.Mat4>,
    rad: number
): m4.Mat4;
export function scale(
    out: m4.Mat4,
    a: Readonly<m4.Mat4>,
    v: Readonly<m4.Vec3>
): m4.Mat4;
export function str(a: m4.Mat4): string;
export function translate(
    out: m4.Mat4,
    a: Readonly<m4.Mat4>,
    v: Readonly<m4.Vec3>
): m4.Mat4;
export function transpose(out: m4.Mat4, a: Readonly<m4.Mat4>): m4.Mat4;

export default m4;
