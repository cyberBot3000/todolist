import deepEqual from "./deepEqual";

const deepIncludes = (arr, value) => {
    for (let i in arr) {
        if (deepEqual(value, arr[i])) {
            return true;
        }
    }
    return false;
}

export default deepIncludes;