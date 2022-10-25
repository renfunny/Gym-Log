let chestAndBackStorage = `chestBack`;
let chestBack = JSON.parse(localStorage.getItem(`chestBack`)) ?? [
  { exercise: ``, weight: ``, sets: ``, reps: `` },
];
let armsStorage = `arms`;
let arms = JSON.parse(localStorage.getItem(`arms`)) ?? [
  { exercise: ``, weight: ``, sets: ``, reps: `` },
];
let legsStorage = `legs`;
let legs = JSON.parse(localStorage.getItem(`legs`)) ?? [
  { exercise: ``, weight: ``, sets: ``, reps: `` },
];

const saveBtn = $(`.saveBtn`);
let repsInputArr = saveBtn.prev();
let setsInputArr = saveBtn.prev().prev();
let weightInputArr = saveBtn.prev().prev().prev();
let exerciseInputArr = saveBtn.prev().prev().prev().prev();
saveBtn.on(`click`, function () {
  let btnId = Number(this.id);
});

const chestBackDay = $(`.chest-back`);
const armsDay = $(`.arms`);
const legDay = $(`.legs`);
let containerEl = $(`.container`);
let dropdownTextEl = $(`.dropdown-toggle`);

function displayBlocks(currentDay) {
  containerEl.empty();
  dropdownTextEl.text(`${daySelected}`);
  for (let i = 0; i < currentDay.length; i++) {
    let blockRoot = $(`.container`);
    let blockEl = $(`<div>`);
    blockEl.addClass(`time-block`);
    let rowEl = $(`<div>`);
    rowEl.addClass(`row`);
    let exerciseEl = $(`<textarea>`);
    exerciseEl.addClass(`col-3 col-md-4 box exercise`);
    exerciseEl.text(`${currentDay[i].exercise}`);
    let weightEl = $(`<textarea>`);
    weightEl.addClass(`col-3 col-md-2 box weight`);
    weightEl.text(`${currentDay[i].weight}`);
    let setsEl = $(`<textarea>`);
    setsEl.addClass(`col-2 col-md-2 box sets`);
    setsEl.text(`${currentDay[i].sets}`);
    let repsEl = $(`<textarea>`);
    repsEl.addClass(`col-2 col-md-2 box reps`);
    repsEl.text(`${currentDay[i].reps}`);
    let saveEl = $(`<button>`);
    saveEl.addClass(`saveBtn box`);
    saveEl.attr(`id`, `${i}`);
    let iconEl = $(`<i>`);
    iconEl.addClass(`bi bi-box-arrow-down col-2 col-md-2`);
    //Append
    blockRoot.append(blockEl);
    blockEl.append(rowEl);
    rowEl.append(exerciseEl);
    rowEl.append(weightEl);
    rowEl.append(setsEl);
    rowEl.append(repsEl);
    rowEl.append(saveEl);
    saveEl.append(iconEl);
  }
}
let daySelected = ``;
chestBackDay.on(`click`, function () {
  daySelected = `Chest/Back`;
  displayBlocks(chestBack);
});
armsDay.on(`click`, function () {
  daySelected = `Arms`;
  displayBlocks(arms);
});
legDay.on(`click`, function () {
  daySelected = `Legs`;
  displayBlocks(legs);
});
function addBlock() {
  let blockRoot = $(`.container`);
  let blockEl = $(`<div>`);
  blockEl.addClass(`time-block`);
  let rowEl = $(`<div>`);
  rowEl.addClass(`row`);
  let exerciseEl = $(`<textarea>`);
  exerciseEl.addClass(`col-3 col-md-4 box exercise`);
  let weightEl = $(`<textarea>`);
  weightEl.addClass(`col-3 col-md-2 box weight`);
  let setsEl = $(`<textarea>`);
  setsEl.addClass(`col-2 col-md-2 box sets`);
  let repsEl = $(`<textarea>`);
  repsEl.addClass(`col-2 col-md-2 box reps`);
  let saveEl = $(`<button>`);
  saveEl.addClass(`saveBtn box`);
  saveEl.attr(`id`, `0`);
  let iconEl = $(`<i>`);
  iconEl.addClass(`bi bi-box-arrow-down col-2 col-md-2`);
  //Append
  blockRoot.append(blockEl);
  blockEl.append(rowEl);
  rowEl.append(exerciseEl);
  rowEl.append(weightEl);
  rowEl.append(setsEl);
  rowEl.append(repsEl);
  rowEl.append(saveEl);
  saveEl.append(iconEl);
}
const addBtn = document.querySelector(`.addBtn`);
addBtn.addEventListener(`click`, addBlock);
console.log(localStorage.getItem(`chestBack`));
console.log(arms);
console.log(legs);
