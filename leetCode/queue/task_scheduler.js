// https://leetcode.com/problems/task-scheduler/


const getTaskFrequency = (tasks) => {
    return tasks.reduce((map, obj) => {
        map[obj] = map[obj] + 1 || 1 ;
        return map;
    },{})
}


var leastInterval = function(tasks, n) {
    const task_map = getTaskFrequency(tasks);
    const array=Object.values(task_map);
    const maximumRows = Math.max(...array);
    const lastRowLength = array.filter(x => x === maximumRows).length;
    return Math.max(tasks.length, (maximumRows - 1) * (n + 1) + lastRowLength);
};
