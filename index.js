import { groups } from './module.js';

import { addGroup } from './module.js';

import { removeGroup } from './module.js';

import { addStudent } from './module.js';

import { removeStudent } from './module.js';

import { acceptTask } from './module.js';

import { showStatus } from './module.js';



//console.log(groups);
addGroup(122, 43, '27.08.22');
addGroup(123, 48, '22.07.22');
addGroup(124, 44, '29.06.22');
addGroup(125, 41, '15.07.22');
//console.log(groups);
removeGroup(122);
//console.log(groups);
addStudent(123, 34, 'nick');
addStudent(123, 35, 'add');
addStudent(123, 36, 'fdfgfgf');
addStudent(124, 37, 'dsf');
//console.log(groups[1].students);
//console.log(groups[2].students);
removeStudent(35);
removeStudent(37);
//console.log(groups[1].students);
//console.log(groups[2].students);

acceptTask(123, 34);
acceptTask(123, 34);
acceptTask(123, 34);
acceptTask(123, 34);
console.log(groups[1].students);

addStudent(123, 40, 'george');
addStudent(123, 41, 'fred');
addStudent(123, 42, 'mary');
addStudent(123, 43, 'bazil');
acceptTask(123, 34);
acceptTask(123, 34);
acceptTask(123, 34);
acceptTask(123, 40);
acceptTask(123, 40);
acceptTask(123, 40);
acceptTask(123, 34);
acceptTask(123, 34);

acceptTask(123, 41);
acceptTask(123, 41);
acceptTask(123, 41);
acceptTask(123, 41);

acceptTask(123, 43);
acceptTask(123, 43);

acceptTask(123, 42);
acceptTask(123, 42);
acceptTask(123, 42);
acceptTask(123, 42);
acceptTask(123, 42);
acceptTask(123, 42);

console.log(groups[1].students);
showStatus(123);
