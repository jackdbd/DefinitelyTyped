import m4, {
    adjoint,
    clone,
    copy,
    create,
    determinant,
    fromQuat,
    fromRotation,
    fromRotationTranslation,
    fromScaling,
    fromTranslation,
    fromXRotation,
    fromYRotation,
    fromZRotation,
    frustum,
    identity,
    invert,
    lookAt,
    multiply,
    ortho,
    perspective,
    perspectiveFromFieldOfView,
    rotate,
    rotateX,
    rotateY,
    rotateZ,
    scale,
    str,
    translate,
    transpose
} from "gl-mat4";

type Vec3 = m4.Vec3;
type Mat4 = m4.Mat4;
type Quat4 = m4.Quat4;

const out: Mat4 = create();
const a: Mat4 = create();
const b: Mat4 = create();
const v: Vec3 = [1, 2, 3];
const axis: Vec3 = [1, 1, 1];
const eye: Vec3 = [1, 1, 1];
const center: Vec3 = [1, 1, 1];
const up: Vec3 = [1, 1, 1];
const q: Quat4 = [1, 2, 3, 4];
const rad = 0;
const left = 1;
const right = 1;
const bottom = 1;
const top = 1;
const near = 0.01;
const far = 100;
const aspect = 4 / 3;
const fovy = 0.1;
const fov = {
    downDegrees: 1,
    leftDegrees: 1,
    rightDegrees: 1,
    upDegrees: 1
};

adjoint(out, a); // $ExpectType Mat4
clone(a); // $ExpectType Mat4
copy(out, a); // $ExpectType Mat4
create(); // $ExpectType Mat4
determinant(a); // $ExpectType number
fromQuat(out, q); // $ExpectType Mat4
// fromRotation(out, rad, axis); // $ExpectType Mat4 | Null
fromRotationTranslation(out, q, v); // $ExpectType Mat4
fromScaling(out, v); // $ExpectType Mat4
fromTranslation(out, v); // $ExpectType Mat4
fromXRotation(out, rad); // $ExpectType Mat4
fromYRotation(out, rad); // $ExpectType Mat4
fromZRotation(out, rad); // $ExpectType Mat4
frustum(out, left, right, bottom, top, near, far); // $ExpectType Mat4
identity(out); // $ExpectType Mat4
// invert(out, a); // $ExpectType Mat4 | null
lookAt(out, eye, center, up); // $ExpectType Mat4
multiply(out, a, b); // $ExpectType Mat4
ortho(out, left, right, bottom, top, near, far); // $ExpectType Mat4
perspective(out, fovy, aspect, near, far); // $ExpectType Mat4
perspectiveFromFieldOfView(out, fov, near, far); // $ExpectType Mat4
scale(out, a, v); // $ExpectType Mat4
rotate(out, a, rad, axis); // $ExpectType Mat4
rotateX(out, a, rad); // $ExpectType Mat4
rotateY(out, a, rad); // $ExpectType Mat4
rotateZ(out, a, rad); // $ExpectType Mat4
str(a); // $ExpectType string
translate(out, a, v); // $ExpectType Mat4
transpose(out, a); // $ExpectType Mat4
