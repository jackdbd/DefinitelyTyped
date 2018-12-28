import angleNormals, { hypot, mulAdd, weight } from "angle-normals";

type Vec3 = [number, number, number];

const x = 1;
const y = 2;
const z = 3;
const dest = 0;
const s = 0;
const r = 0;
const a = 0;

const cells = [[1, 1, 1] as Vec3, [2, 2, 2] as Vec3, [3, 3, 3] as Vec3];
const positions: Vec3[] = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];

angleNormals(cells, positions); // $ExpectType [number, number, number][]
hypot(x, y, z); // $ExpectType number
mulAdd(dest, s, x, y, z); // $ExpectType void
weight(s, r, a); // $ExpectType number
