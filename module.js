{

  "type": "module"

}

export let groups = [
  {
    groupId: 677444,
    startDate: '28.04.22',
    students: [
      {
        studentId: 54,
        name: 'Саша',
      },
    ],
  },
];

//console.log(groups[0].groupId);
//console.log(groups[0].students[0].studentId);

export function addGroup(groupId, startDate) {
  let students = [];
  groups.push({ groupId, startDate, students });
}

export function removeGroup(groupId) {
  for (let i = 0; i < groups.length; i++) {
    if (groups[i].groupId == groupId) {
      groups.splice(groups.indexOf(groups[i]), 1);
    }
  }
}

export function addStudent(groupId, studentId, name) {
  let currentTask = 0;
  for (let j = 0; j < groups.length; j++) {
    if (groups[j].groupId == groupId) {
      groups[j].students.push({ studentId, name, currentTask });
    }
  }
}

export function removeStudent(studentId) {
  for (let k = 0; k < groups.length; k++) {
    groups[k].students.splice(groups[k].students.indexOf(studentId), 1);
  }
}

export function acceptTask(groupId, studentId) {
  for (let l = 0; l < groups.length; l++) {
    if (groups[l].groupId == groupId) {
      for (let m = 0; m < groups[l].students.length; m++) {
        if (groups[l].students[m].studentId == studentId) {
          groups[l].students[m].currentTask += 1;
        }
      }
    }
  }
}
export function showStatus(groupId) {
  for (let n = 0; n < groups.length; n++) {
    if (groups[n].groupId == groupId) {
      for (let p = 0; p < groups[n].students.length; p++) {
        if (groups[n].students[p].currentTask >= 8) {
          console.log(
            `${groups[n].students[p].name} - поздравляю, курс пройден`
          );
        } else {
          console.log(
            `${groups[n].students[p].name} - сделал заданий ${groups[n].students[p].currentTask}`
          );
        }
      }
    }
  }
}
