# ToDo
List of [[ToDo]]'s that need to be resolved

## Daily notes
### Open tasks
```dataviewjs 
// Haal de taken op binnen de Project map
let tasks = await dv.pages('"Today"').file.tasks.where(t => !t.completed)
let tasksCount = tasks.length
// Indien geen taken, geef een boodschap weer
if(tasksCount == 0){
	dv.el("span", "There are no task to solve");
} else {
	dv.taskList(tasks)
}
```

## Leaves 🍃
### Open tasks
```dataviewjs 
// Haal de taken op binnen de Project map
let tasks = await dv.pages('"Leaves"').file.tasks.where(t => !t.completed)
let tasksCount = tasks.length
// Indien geen taken, geef een boodschap weer
if(tasksCount == 0){
	dv.el("span", "There are no task to solve");
} else {
	dv.taskList(tasks)
}
```