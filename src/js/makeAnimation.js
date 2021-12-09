export function makeAnimation(id, params, durationTime, remove, addClass, removeClass) {
    document.getElementById(id).animate([params], { duration: durationTime });
    if (remove) {
        setTimeout(() => {
            document.getElementById(id).classList.add('remove');
        }, durationTime - 50);
    }
    if (addClass) {
        setTimeout(() => {
            document.getElementById(id).classList.add(addClass);
        }, durationTime - 50);
    }
    if (removeClass) {
        setTimeout(() => {
            document.getElementById(id).classList.add(removeClass);
        }, durationTime - 50);
    }
}